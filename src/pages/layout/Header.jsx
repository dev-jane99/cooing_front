import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
        <S.Header>
            <S.LeftSection>
                <S.MenuBar src="/assets/menu.svg" alt="menu icon" onClick={toggleMenu} />
            </S.LeftSection>

            <S.CenterSection>
                <Link to="/about"><S.Logo src="/assets/logo.svg" alt="Cooing" /></Link>
            </S.CenterSection>

            <S.RightSection>
                <Link to="/login">
                <img src="/assets/user.svg" alt="user icon" />
                </Link>
                {/* <Link to="/cart">
                <img src="/assets/cart.svg" alt="cart icon" />
                </Link> */}
            </S.RightSection>
        </S.Header>


      {isMenuOpen && (
        <S.FullScreenMenu>
            <S.MenuList>
                <Link to="/showcase" onClick={toggleMenu}>PRODUCTS</Link>
                <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
                <Link to="/classInfo" onClick={toggleMenu}>CLASS</Link>
            </S.MenuList>
        <S.CloseButton onClick={toggleMenu}>✕</S.CloseButton>
  </S.FullScreenMenu>
)}
    </>
  );
};

export default Header;
