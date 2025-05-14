import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import S from './style';
import { useNavigate } from 'react-router-dom';

function AnnouncementList() {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/announcements')
      .then(res => setAnnouncements(res.data))
      .catch(err => console.error(err));
  }, []);

  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSingleDelete = async (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    await axios.delete(`/api/admin/announcements/${id}`);
    setAnnouncements(prev => prev.filter(a => a.id !== id));
  };

const handleBulkDelete = async () => {
  if (selectedIds.length === 0) return alert('삭제할 공지를 선택하세요.');
  
  await axios.delete('/api/admin/announcements/bulk-delete', {
    data: selectedIds // 여기 중요!
  });

  setAnnouncements(prev => prev.filter(a => !selectedIds.includes(a.id)));
  setSelectedIds([]);
};

  const allSelected = announcements.length > 0 && selectedIds.length === announcements.length;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(announcements.map(a => a.id));
    }
  };


  const navigate = useNavigate();

  const handleSingleEdit = (id) => {
    navigate(`/admin/announcements/edit/${id}`);
  };

  return (
    <S.ListWrapper>
      <S.Title>공지 목록</S.Title>
      <S.ButtonBar>
        <S.HoverAction $visible={selectedIds.length > 0}>
          <button onClick={toggleSelectAll}>{allSelected ? '전체 해제' : '전체 선택'}</button>
          <button onClick={handleBulkDelete}>선택 삭제</button>
        </S.HoverAction>
      </S.ButtonBar>

      <S.TableWrapper>
        <S.Table>
          <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleSelectAll}
              />
            </th>
            <th>제목</th>
            <th>수업 기간</th>
            <th>진행 상태</th>
            <th>관리</th> 
          </tr>
          </thead>
          <tbody>
            {announcements.map(a => (
              <tr key={a.id}>
                <td><input type="checkbox" checked={selectedIds.includes(a.id)} onChange={() => toggleSelect(a.id)} /></td>
                <td>{a.title}</td>
                <td>{dayjs(a.startDate).format('YYYY.MM.DD')} - {dayjs(a.endDate).format('YYYY.MM.DD')}</td>
                <td>{a.isActive ? '진행중' : '종료됨'}</td>
                <td>
                  <S.DeleteButton onClick={() => handleSingleDelete(a.id)}>삭제</S.DeleteButton>
                  <S.EditButton onClick={() => handleSingleEdit(a.id)}>수정</S.EditButton>
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>
    </S.ListWrapper>
  );
}

export default AnnouncementList;
