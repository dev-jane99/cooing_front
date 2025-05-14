import { styled } from "styled-components"


const S = {};

S.Layout = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "League Spartan", sans-serif;
    position: relative; 
    scroll-behavior: smooth;
    padding-top: 60px;
`;

S.Header = styled.div`
   display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background-color: white;
  z-index: 999;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;

S.LeftSection = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
`;

S.CenterSection = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

S.RightSection = styled.div`
  min-width: 68px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    margin-left: 8px;
  }
`;

S.MenuBar = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: 24px;
`;

S.Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

S.RightContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 68px;
  height: 24px;

  &img {
    width: 24px;
  }
  
  &a {
    display: flex;
    align-items: center;
  }
`

S.FullScreenMenu = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 24px;
  overflow-y: auto;
`;


S.MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  a {
    text-decoration: none;
    font-size: clamp(32px, 15vw, 140px);
    color: #333;
    font-weight: 600;

    &:hover {
      color: #999;
    }
  }
`;

S.CloseButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  margin-top: 50px;

  &:hover {
    color: #999;
  }
`;


// footer
S.Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    font-size: 10px;
    font-weight: thin;
    color: gray;
`;

export default S;