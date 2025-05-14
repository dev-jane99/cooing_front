import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import S from './style';

function ApplicationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [announcement, setAnnouncement] = useState(null);


  useEffect(() => {
    axios.get(`/api/applications/${id}`)
      .then(async res => {
        const appData = res.data;
        setApplication(appData);
  
        // 공지 정보 불러오기
        if (appData.announcementId) {
          const announcementRes = await axios.get(`/api/admin/announcements/${appData.announcementId}`);
          setAnnouncement(announcementRes.data);
        }
      })
      .catch(err => {
        console.error(err);
        alert('신청서를 불러오는 중 오류가 발생했어요.');
      });
  }, [id]);
  

  if (!application) return <p style={{ color: '#fff' }}>로딩 중...</p>;

  return (
    <S.FormWrapper>
      {announcement && (
        <S.AnnouncementInfoBox>
          <h3>{announcement.title}</h3>
          <div className="detail">{announcement.detail}</div>
        </S.AnnouncementInfoBox>
      )}
      <S.FormTitle>신청서 상세 내용</S.FormTitle>

      <S.FormGroup>
        <label>신청자 이름</label>
        <p>{application.applicantName || '-'}</p>
      </S.FormGroup>

      <S.FormGroup>
        <label>연락처</label>
        <p>{application.mobile || '-'}</p>
      </S.FormGroup>

      <S.FormGroup>
        <label>신청일</label>
        <p>{application.applicationDate ? dayjs(application.applicationDate).format('YYYY.MM.DD HH:mm') : '-'}</p>
      </S.FormGroup>
      
      <S.FormGroup>
        <label>예약 날짜</label>
        <p>{application.preferredDate || '-'}</p>
      </S.FormGroup>

      <S.FormGroup>
        <label>예약 시간</label>
        <p>{application.preferredTime || '-'}</p>
      </S.FormGroup>

      <S.FormGroup>
        <label>신청 인원</label>
        <p>{application.totalApplicants || '-'}</p>
      </S.FormGroup>

      <S.FormGroup>
        <label>요청사항</label>
        <p>{application.note || '-'}</p>
      </S.FormGroup>

      <S.FormGroup>
        <label>결제 수단</label>
        <p>{application.paymentMethod || '-'}</p>
      </S.FormGroup>

      <S.FormGroup>
        <label>결제 여부</label>
        <p>{application.isPaid ? '결제 완료' : '미결제'}</p>
      </S.FormGroup>

      <S.FormGroup>
        <label>결제 번호</label>
        <p>{application.paymentTransactionId || '-'}</p>
      </S.FormGroup>

      <S.FormGroup>
        <label>신청 상태</label>
        <p>{application.status || '-'}</p>
      </S.FormGroup>

      <S.ButtonGroup>
        <S.CancelButton onClick={() => navigate(-1)}>뒤로가기</S.CancelButton>
      </S.ButtonGroup>
    </S.FormWrapper>
  );
}

export default ApplicationDetail