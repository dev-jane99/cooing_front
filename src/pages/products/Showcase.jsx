import React, { useState } from 'react'; // useState import 추가
import S from './style';
import Footer from '../layout/Footer';
const PUBLIC_URL = process.env.PUBLIC_URL;

// 가상의 제품 데이터
const showcaseItems = [
  { id: 1, category: "화과자", title: "해바라기 화과자", description: "은은한 달콤함, 쿠잉의 시그니처 화과자", img: `${PUBLIC_URL}/assets/products/sunflower.png`, detail: "해바라기 화과자는 팥앙금으로 빚어낸 후, 호박씨로 포인트를 주어 해바라기 모양을 섬세하게 표현한 시그니처 제품입니다. 선물용으로 인기가 높습니다." },
  { id: 2, category: "우키시마", title: "우키시마 3종", description: "부드러운 카스테라, 우키시마 3종 세트", img: `${PUBLIC_URL}/assets/products/ukishima1.png`, detail: "우키시마는 팥앙금과 달걀을 주 재료로 쪄낸 카스테라 형태로, 쑥, 말차, 백앙금 세 가지 맛을 한 번에 즐길 수 있습니다. 차와 함께 드시면 좋습니다." },
  { id: 3, category: "셋빼", title: "감 셋빼", description: "가을을 담은 촉촉한 셋빼", img: `${PUBLIC_URL}/assets/products/persimmon1.png`, detail: "셋빼는 찹쌀가루를 사용하여 어린이도, 어르신도 즐길 수 있는 부드럽고 쫄깃한 떡같은 식감을 가지고 있습니다. 부드러운 앙금이 한가득 들은 셋빼와 쌉쌀한 차 한잔, 어떠세요?" },
  { id: 4, category: "양갱", title: "양갱 세트 A", description: "9구의 인기 양갱 세트", img: `${PUBLIC_URL}/assets/products/yanggang1.png`, detail: "입안에서 살살 녹는 핸드메이드 양갱의 고급스러움을 느낄 수 있습니다. 밤조림, 벚꽃절임, 말린 무화과를 사용하여 호불호 없이 남녀노소에게 인기많은 9구로 구성된 A세트를 선물하세요." },
  { id: 5, category: "화과자", title: "설날 한라봉 화과자", description: "한입에 은은하게 퍼지는 한라봉의 향, 한라봉 화과자", img: `${PUBLIC_URL}/assets/products/hanlabong.png`, detail: "제주산 한라봉을 사용해 풍부하고 오래가는 상큼함을 담아내었습니다. 눈으로 한번, 코로 한번, 입으로 한번 즐겨보세요." },
  { id: 6, category: "도라야키", title: "말차 팥 도라야키", description: "푹 고아낸 팥소를 가득담은 말차 도라야키", img: `${PUBLIC_URL}/assets/products/dora1.png`, detail: "20시간 고아낸 핸드메이드 팥소를 듬뿍넣고, 일본산 고급 말차를 곱게 걸러내어 진한 말차향을 가득 담은 크림으로 부드러움을 더해낸 도라야키. 쌉싸름한 말차와 달달하고 부드러운 팥의 환상적인 콜라보레이션." },
  { id: 7, category: "모찌", title: "사쿠라 모찌", description: "벗꽃절임을 추가한 단짠단짠 모찌", img: `${PUBLIC_URL}/assets/products/mochi1.png`, detail: "일본에서 직수입한 벗꽃절임을 올려낸 밥알이 살아있는 사쿠라 모찌. 묘하게 중독되는 쫄깃함과 단짠단짠한 조화." },
];

const categories = ["전체보기", "화과자", "우키시마", "셋빼", "양갱", "도라야키", "모찌"];

const Showcase = () => {
  // 현재 선택된 카테고리 상태 관리
  const [activeCategory, setActiveCategory] = useState("전체보기"); 
  
// 💡 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 제품의 상세 정보

  // 💡 모달 열기 핸들러
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // 💡 모달 닫기 핸들러
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  
  const filteredItems = activeCategory === "전체보기" 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === activeCategory);
  return (
    <S.ShowcaseContainer>
      <S.TitleSection>
        <S.TitleText>OUR WAGASHI COLLECTION</S.TitleText>
        <S.SubtitleText>
          정성껏 빚은 쿠잉의 화과자 컬렉션을 종류별로 만나보세요
        </S.SubtitleText>
      </S.TitleSection>

      <S.ContentWrapper>
        <S.FilterSidebar>
          <S.FilterTitle>MENU</S.FilterTitle>
          {categories.map(category => (
            <S.FilterButton 
              key={category} 
              $isActive={activeCategory === category} 
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </S.FilterButton>
          ))}
        </S.FilterSidebar>

        <S.GridContainer>
          {filteredItems.map((item) => (
            <S.GridItem 
              key={item.id}
              onClick={() => openModal(item)} 
            >
              <S.ItemImage src={item.img} alt={item.title} />
              <S.ItemCategory>{item.category}</S.ItemCategory>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemDescription>{item.description}</S.ItemDescription>
            </S.GridItem>
          ))}
          {filteredItems.length === 0 && (
            <S.NoItemMessage>해당 카테고리의 제품이 없습니다.</S.NoItemMessage>
          )}
        </S.GridContainer>
      </S.ContentWrapper>

      <Footer />
      {/* 💡 모달 컴포넌트 추가 */}
      {isModalOpen && selectedItem && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}> 
            {/* 오버레이 클릭 시에만 닫히도록 버블링 방지 */}
            <S.ModalCloseButton onClick={closeModal}>&times;</S.ModalCloseButton>
            <S.ModalBody>
              <S.ModalImage src={selectedItem.img} alt={selectedItem.title} />
              <S.ModalInfo>
                <S.ModalCategory>{selectedItem.category}</S.ModalCategory>
                <S.ModalTitle>{selectedItem.title}</S.ModalTitle>
                <S.ModalDescription>{selectedItem.description}</S.ModalDescription>
                <S.ModalDetailText>{selectedItem.detail}</S.ModalDetailText>
              </S.ModalInfo>
            </S.ModalBody>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.ShowcaseContainer>
  );
};

export default Showcase