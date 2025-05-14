import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import S from './style';

function AnnouncementForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [availableTimes, setAvailableTimes] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);

  // ✅ 여기에 있어야 합니다!
  const removeImage = (indexToRemove) => {
    setImages(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleImageChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setImages(prev => {
      const allFiles = [...prev, ...newFiles];
      const uniqueFiles = allFiles.filter(
        (file, index, self) =>
          index === self.findIndex(f => f.name === file.name && f.size === file.size)
      );
      return uniqueFiles;
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      alert("수업 시작일과 종료일을 모두 입력해주세요.");
      return;
    }

    try {
      const jsonData = {
        title,
        detail,
        startDate,
        endDate,
        isActive,
        availableTimes,
        maxCapacity,
        price
      };

      const formData = new FormData();
      formData.append("data", new Blob([JSON.stringify(jsonData)], { type: "application/json" }));
      images.forEach(img => formData.append("images", img));

      await axios.post('/api/admin/announcements', formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("공지 등록 완료!");
      navigate('/admin');
    } catch (err) {
      console.error("등록 실패", err);
      alert("등록 중 오류가 발생했어요!");
    }
  };

  return (
    <S.FormWrapper>
      <S.FormTitle>공지 등록</S.FormTitle>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <S.FormGroup>
          <label>제목</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required placeholder="공지 제목을 입력하세요" />
        </S.FormGroup>

        <S.FormGroup>
          <label>내용</label>
          <textarea value={detail} onChange={e => setDetail(e.target.value)} required placeholder="공지 내용을 입력하세요" />
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
          <label>진행 중인 클래스</label>
        </S.CheckboxGroup>

        <S.FormGroup>
          <label>예약 가능 시간 (쉼표로 구분)</label>
          <input value={availableTimes} onChange={e => setAvailableTimes(e.target.value)} placeholder="예: 10:00,13:00,15:00" />
        </S.FormGroup>

        <S.FormGroup>
          <label>수업 정원</label>
          <input type="number" value={maxCapacity} onChange={e => setMaxCapacity(e.target.value)} placeholder="예: 2" />
        </S.FormGroup>

        <S.FormGroup>
          <label>수업 가격 (원)</label>
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="예: 30000" />
        </S.FormGroup>

        <S.FormGroup>
  <label>이미지 첨부 (여러 장 가능)</label>
  <S.FileInput type="file" multiple accept="image/*" onChange={handleImageChange} />

  {images.length > 0 && (
    <S.ImagePreviewWrapper>
      {images.map((img, index) => (
        <S.PreviewItem key={index}>
          <img src={URL.createObjectURL(img)} alt={`preview-${index}`} />
          <button type="button" onClick={() => removeImage(index)}>x</button>
        </S.PreviewItem>
      ))}
    </S.ImagePreviewWrapper>
  )}
</S.FormGroup>


        <S.SubmitButton type="submit">등록하기</S.SubmitButton>
      </form>
    </S.FormWrapper>
  );
}

export default AnnouncementForm
