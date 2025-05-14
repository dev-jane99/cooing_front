import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import S from './style';

function AnnouncementEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [images, setImages] = useState([]);

  const [availableTimes, setAvailableTimes] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');
  const [price, setPrice] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [announcementRes, imageRes] = await Promise.all([
          axios.get(`/api/admin/announcements/${id}`),
          axios.get(`/api/admin/announcements/${id}/images`)
        ]);

        const data = announcementRes.data;
        setTitle(data.title || '');
        setDetail(data.detail || '');
        setStartDate(data.startDate || '');
        setEndDate(data.endDate || '');
        setIsActive(data.isActive ?? true);
        setAvailableTimes(data.availableTimes || '');
        setMaxCapacity(data.maxCapacity || '');
        setPrice(data.price || '');
        setImages(imageRes.data);
      } catch (err) {
        console.error('데이터 불러오기 실패:', err);
        alert('공지 정보를 가져오지 못했습니다.');
        navigate('/admin');
      }
    };

    fetchData();
  }, [id, navigate]);

  const handleImageDelete = async (imageId) => {
    if (!window.confirm('이미지를 삭제할까요?')) return;
    try {
      await axios.delete(`/api/admin/announcements/images/${imageId}`);
      setImages(prev => prev.filter(img => img.id !== imageId));
    } catch (err) {
      console.error(err);
      alert('이미지 삭제 실패');
    }
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    for (let file of files) {
      formData.append('images', file);
    }

    try {
      await axios.post(`/api/admin/announcements/${id}/images`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      const res = await axios.get(`/api/admin/announcements/${id}/images`);
      setImages(res.data);
    } catch (err) {
      console.error('이미지 업로드 실패:', err.response || err);
      alert('이미지 업로드 실패');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      alert('수업 시작일과 종료일을 모두 입력해주세요.');
      return;
    }

    try {
      await axios.put(`/api/admin/announcements/${id}`, {
        title,
        detail,
        startDate,
        endDate,
        isActive,
        availableTimes,
        maxCapacity: Number(maxCapacity),
        price: Number(price)
      });

      alert('공지 수정 완료!');
      navigate('/admin');
    } catch (err) {
      console.error(err);
      alert('수정 중 오류가 발생했어요!');
    }
  };

  const handleCancel = () => {
    navigate('/admin');
  };

  return (
    <S.FormWrapper>
      <S.FormTitle>공지 수정</S.FormTitle>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <S.FormGroup>
          <label>제목</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </S.FormGroup>

        <S.FormGroup>
          <label>내용</label>
          <textarea value={detail} onChange={e => setDetail(e.target.value)} required />
        </S.FormGroup>

        <S.FormGroup>
          <label>수업 시작일</label>
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
        </S.FormGroup>

        <S.FormGroup>
          <label>수업 종료일</label>
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required />
        </S.FormGroup>

        <S.CheckboxGroup>
          <input type="checkbox" checked={isActive} onChange={e => setIsActive(e.target.checked)} />
          <label>진행중인 클래스</label>
        </S.CheckboxGroup>

        <S.FormGroup>
          <label>예약 가능 시간 (쉼표로 구분)</label>
          <input
            value={availableTimes}
            onChange={e => setAvailableTimes(e.target.value)}
            placeholder="예: 10:00,13:00,15:00"
          />
        </S.FormGroup>

        <S.FormGroup>
          <label>수업 정원</label>
          <input
            type="number"
            value={maxCapacity}
            onChange={e => setMaxCapacity(e.target.value)}
            placeholder="예: 10"
          />
        </S.FormGroup>

        <S.FormGroup>
          <label>수업 가격 (원)</label>
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="예: 30000"
          />
        </S.FormGroup>

        <S.FormGroup>
          <label>등록된 이미지</label>
          <S.ImagePreviewWrapper>
            {images.map((img, index) => (
              <S.PreviewItem key={img.id}>
                <img src={img.imageUrl} alt={`이미지 ${index + 1}`} />
                <button type="button" onClick={() => handleImageDelete(img.id)}>×</button>
              </S.PreviewItem>
            ))}
          </S.ImagePreviewWrapper>
        </S.FormGroup>


        <S.FormGroup>
          <label>새 이미지 추가</label>
          <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
        </S.FormGroup>

        <S.ButtonGroup>
          <S.SubmitButton type="submit">수정 완료</S.SubmitButton>
          <S.CancelButton type="button" onClick={handleCancel}>취소</S.CancelButton>
        </S.ButtonGroup>
      </form>
    </S.FormWrapper>
  );
}

export default AnnouncementEdit;
