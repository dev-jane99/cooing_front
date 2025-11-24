import React, { useState, useEffect } from 'react'
import S from './style'
import axios from 'axios';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import Footer from '../layout/Footer';

function ClassInfo() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/announcements')
      .then(res => setAnnouncements(res.data))
      .catch(err => console.error('API 호출 실패:', err));
  }, []);

  return (
    <S.ClassPage>
      <S.SectionTitle>클래스 안내</S.SectionTitle>
      <S.Announcement>
        <ul>
          {announcements.map((a) => {
            // const thumbnail = a.images && a.images.length > 0 ? a.images[0].imageUrl : null;
            return (
              <li key={a.id}>
                <Link to={`/class/${a.id}`}>
                <S.AnnouncementInfo>
                  {/* {thumbnail ? (
                    <img src={thumbnail} alt="썸네일" />
                  ) : (
                    <S.PlaceholderThumb />
                  )} */}
                  <div className="text">
                    <strong>{a.title}</strong>
                    <small>
                      {dayjs(a.startDate).format('YYYY.MM.DD')} - {dayjs(a.endDate).format('YYYY.MM.DD')}
                    </small>
                    <S.StatusBadge $isActive={a.isActive}>
                      {a.isActive ? '진행중' : '마감'}
                    </S.StatusBadge>
                  </div>
                </S.AnnouncementInfo>
                </Link>
              </li>
            );
          })}
        </ul>
      </S.Announcement>
      <Footer />
    </S.ClassPage>
  );
}

export default ClassInfo;
