import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import S from './style'; 
import { Link } from 'react-router-dom';

function ApplicationList() {
  const [applications, setApplications] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const completePayment = async (applicationId, transactionId, paymentMethod) => {
    try {
      const response = await axios.post('/api/payments/complete', {
        applicationId,
        transactionId,
        paymentMethod
      });
  
      // 결제 완료 메시지
      alert(response.data);
  
      // 신청서 상태 갱신 (리스트에서 상태 업데이트)
      setApplications(prevApplications => {
        return prevApplications.map(a => 
          a.id === applicationId ? { ...a, isPaid: true, status: '결제 완료' } : a
        );
      });
    } catch (error) {
      console.error('결제 처리 중 오류 발생:', error);
      alert('결제 처리에 실패했습니다.');
    }
  };

  const filteredApplications = applications.filter(a =>
    a.applicantName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    axios.get('/api/applications')
      .then(res => setApplications(res.data))
      .catch(err => console.error(err));
  }, []);  

  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSingleDelete = async (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    await axios.delete(`/api/applications/${id}`);
    setApplications(prev => prev.filter(a => a.id !== id));
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return alert('삭제할 신청서를 선택하세요.');
  
    try {
      await axios.delete('/api/applications/bulk-delete', {
        data: selectedIds  // ❗ axios.delete 두 번째 인자는 config 객체이므로 이렇게 data: 로 감싸줘야 함
      });
  
      setApplications(prev => prev.filter(a => !selectedIds.includes(a.id)));
      setSelectedIds([]);
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제 중 오류가 발생했어요.');
    }
  };

  const allSelected = applications.length > 0 && selectedIds.length === applications.length;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(applications.map(a => a.id));
    }
  };  

  return (
    <S.ListWrapper>
      <S.Top>
      <S.Title>신청서</S.Title>
      <S.SearchBox
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="신청자 이름 검색"
      />
      </S.Top>
      <S.ButtonBar>
        <S.HoverAction $visible={selectedIds.length > 0}>
          <button onClick={toggleSelectAll}>{allSelected ? '전체 해제' : '전체 선택'}</button>
          <button onClick={handleBulkDelete}>선택 삭제</button>
        </S.HoverAction>
      </S.ButtonBar>

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
          <th>공지 제목</th>
          <th>신청자</th>
          <th>전화번호</th>
          <th>날짜</th>
          <th>시간</th>
          <th>인원</th>
          <th>결제</th>
          <th>상태</th>
          <th>신청일</th>
          <th>관리</th> 
        </tr>
        </thead>
        <tbody>
          {filteredApplications.map(a => (
            <tr key={a.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(a.id)}
                  onChange={() => toggleSelect(a.id)}
                />
              </td>
              <td>{a.announcementTitle}</td>
              <td>
                <Link to={`/admin/applications/${a.id}`} style={{ color: '#fff', textDecoration: 'underline' }}>
                  {a.applicantName || '-'}
                </Link>
              </td>
              <td>{a.mobile}</td>
              <td>{a.preferredDate || '-'}</td>
              <td>{a.preferredTime || '-'}</td>
              <td>{a.totalApplicants || '-'}명</td>
              <td>{a.isPaid ? '결제 완료' : '미결제'}</td>
              <td>{a.status || '-'}</td>
              <td>{a.applicationDate ? dayjs(a.applicationDate).format('YYYY.MM.DD') : '-'}</td>
              <td>
                <S.DeleteButton onClick={() => handleSingleDelete(a.id)}>삭제</S.DeleteButton>
                {/* 결제 완료 처리 버튼 */}
                {!a.isPaid && (
                  <button onClick={() => completePayment(a.id, 'transaction-id', '카카오페이')}>
                    결제 완료
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.ListWrapper>
  );
}

export default ApplicationList;
