// AdminLayout.jsx
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import S from './style';
import Footer from '../layout/Footer';

const AdminLayout = () => {
  const { pathname } = useLocation();

  return (
    <S.Container>
      <S.Navbar>
        <S.HeaderTitle>COOING ADMIN</S.HeaderTitle>
        <S.NavMenu>
          <S.NavItem $active={(pathname === '/admin') || (pathname.includes('announcements') && !pathname.includes('new'))}>
            <Link to="/admin">공지 목록</Link>
          </S.NavItem>

          <S.NavItem $active={pathname.includes('new')}>
            <Link to="/admin/announcements/new">공지 등록</Link>
          </S.NavItem>
          <S.NavItem $active={pathname.includes('applications')}>
            <Link to="/admin/applications">신청서 보기</Link>
          </S.NavItem>
        </S.NavMenu>
      </S.Navbar>
      <S.Content>
        <Outlet />
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default AdminLayout;
