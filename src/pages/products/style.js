import { styled } from 'styled-components';
const S = {};


S.ShowcaseContainer = styled.div`
  min-height: 100vh;
  padding: 0 20px;
  min-width: 600px;
  margin: 0 auto;

  padding: 0 40px; 

  @media (max-width: 600px) {
    padding: 0 15px;
  }
`;


// 2. 타이틀 섹션
S.TitleSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

S.TitleText = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  letter-spacing: -1px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

S.SubtitleText = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-top: 10px;
`;

// 3. 필터 및 제품을 담는 전체 Wrapper
S.ContentWrapper = styled.div`
  display: flex;
  gap: 40px; 
  padding-bottom: 100px;

  @media (max-width: 900px) {
    flex-direction: column; 
    gap: 20px;
  }
`;

// A. 카테고리 필터 사이드바
S.FilterSidebar = styled.div`
  flex: 0 0 180px; 
  padding-right: 20px;

  @media (max-width: 900px) {
    flex: none;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding: 0;
    margin-bottom: 10px;
  }
`;

S.FilterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 900px) {
    display: none;
  }
`;

S.FilterButton = styled.button`
  display: block; 
  width: 100%; 
  padding: 10px 15px;
  margin-bottom: 8px;
  
  /* 버튼 스타일 */
  /* 💡 수정된 부분: 전통적인 톤으로 변경 */
  background-color: ${props => props.$isActive ? '#2c2c2c' : '#fff'}; /* 활성화 시: 짙은 팥색(Azuki) */
  color: ${props => props.$isActive ? '#fff' : '#666'}; /* 활성화 시: 흰색 텍스트 */
  border: 1px solid ${props => props.$isActive ? '#2c2c2c' : '#ddd'}; /* 활성화 시: 짙은 팥색 테두리, 비활성화 시: 연한 회색 */
  
  border-radius: 4px;
  text-align: left;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    /* 💡 수정된 부분: 호버 시 연한 색상과 팥색 텍스트 */
    background-color: ${props => props.$isActive ? '#f5f5f5' : '#2c2c2c'};
    color: ${props => props.$isActive ? '#2c2c2c' : '#f5f5f5'}; /* 호버 시 팥색 텍스트 */
  }

  /* 모바일/태블릿 스타일 (유지) */
  @media (max-width: 900px) {
    display: inline-block;
    width: auto;
    margin-right: 10px;
    margin-bottom: 0;
    text-align: center;
    flex-shrink: 0;
  }
`;

// B. 제품 진열 그리드 (기존 GridContainer 확장)
// S.GridContainer = styled.div`
//   flex: 1; /* 남은 공간 모두 사용 */
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
//   gap: 30px;
// `;
S.GridContainer = styled.div`
  flex: 1; 
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
  gap: 30px;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }


  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
  }
  
  /* 모바일 환경 */
  @media (max-width: 600px) {
    grid-template-columns: 1fr; 
  }
`;

S.GridItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  max-width: 400px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

// S.ItemImage = styled.img`
//   width: 100%;
//   height: 200px; 
//   object-fit: cover;
// `;
S.ItemImage = styled.img`
  width: 100%;
  height: 220px; /* 💡 기존 200px에서 220px 정도로 살짝 늘려 안정감 부여 */
  object-fit: cover;
`;

S.ItemCategory = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: #A35C3E; /* 브랜드 색상 사용 */
  margin: 15px 15px 5px 15px;
  text-transform: uppercase;
`;

S.ItemTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin: 0 15px 5px 15px;
`;

S.ItemDescription = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin: 0 15px 20px 15px;
  line-height: 1.4;
`;

S.NoItemMessage = styled.p`
  grid-column: 1 / -1; 
  text-align: center;
  padding: 50px 0;
  color: #999;
  font-size: 1.1rem;
`;


// 모달 오버레이 (배경 어둡게 처리)
S.ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center; /* 💡 수정/확인: 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  z-index: 1000;
`;

// 모달 콘텐츠 (팝업 본체)
S.ModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 90%;
  max-width: 800px; 
  padding: 30px;
  position: relative; // 닫기 버튼 위치 기준
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 95%;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

// 닫기 버튼
S.ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  transition: color 0.2s;

  &:hover {
    color: #A35C3E;
  }
`;

// 모달 본문 (이미지와 정보 분리)
S.ModalBody = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column; /* 모바일에서 세로로 정렬 */
  }
`;

// 모달 내 이미지
S.ModalImage = styled.img`
  width: 40%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0; /* 크기가 줄어들지 않도록 고정 */

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

// 모달 내 정보 텍스트 영역
S.ModalInfo = styled.div`
  width: 60%;
  padding-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

S.ModalCategory = styled.p`
  ${S.ItemCategory} /* 기존 카테고리 스타일 재사용 */
  margin: 0 0 5px 0; 
`;

S.ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 10px 0;
`;

S.ModalDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

S.ModalDetailText = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
`;

export default S;