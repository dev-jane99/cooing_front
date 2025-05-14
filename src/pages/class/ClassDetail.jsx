import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import S from './style';
import dayjs from 'dayjs';
import Footer from '../layout/Footer';

function ClassDetail() {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    axios.get(`/api/admin/announcements/${id}`)
      .then(res => setAnnouncement(res.data))
      .catch(err => console.error('공지 불러오기 실패:', err));
  }, [id]);

  if (!announcement) {
    return (
      <S.LoadingWrapper>
      <S.Spinner />
      <div>불러오는 중...</div>
    </S.LoadingWrapper>
    );
  }
  return (
    <S.DetailWrapper>
      <S.DetailTitle>{announcement.title}</S.DetailTitle>
      <S.DetailDate>{dayjs(announcement.startDate).format('YYYY.MM.DD')} ~ {dayjs(announcement.endDate).format('YYYY.MM.DD')}</S.DetailDate>

      {announcement.images && announcement.images.length > 0 && (
        <S.ImageGallery>
          {announcement.images.map((img, idx) => (
            <img key={idx} src={`${process.env.PUBLIC_URL || ''}${img.imageUrl}`} alt={`공지 이미지 ${idx + 1}`} />
          ))}
        </S.ImageGallery>
      )}



      <S.DetailContent>{announcement.detail}</S.DetailContent>

      <Link to={`/application?announcementId=${id}`} style={{ textDecoration: 'none' }}>
        <S.ApplyButton>수업 신청하기</S.ApplyButton>
      </Link>
      <Footer />
    </S.DetailWrapper>
  );
}

export default ClassDetail;
