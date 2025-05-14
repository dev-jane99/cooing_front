import React from 'react'
import S from './style'
import Footer from '../layout/Footer'

const About = () => {
  return (
    <div>
      <S.Intro>
        <p>쿠잉은 자연의 산물들을 화과자로 재해석하고, 그 아름다움을 더 많은 이들과 나누기 위해 클래스를 시작했습니다.</p>
        <p>작품을 만들던 감각을 살려, 오감을 통해 화과자의 세계를 온전히 즐길 수 있도록 하는 것, 그것이 쿠잉의 최종 목표입니다.</p>
        <p>선물을 준비하는 마음이, 받는 이의 마음에도 온전히 전해지도록. 쿠잉은 고객의 설레임까지 함께 담아 전합니다.</p>
        <p>Cooing began with a simple class—reimagining the gifts of nature as wagashi, and sharing their beauty with others.</p>
        <p>Drawing from our artistic sensibilities, we invite you to experience the world of wagashi through all five senses.</p>
        <p>We believe the heartfelt intention behind a gift should be felt just as deeply by the one who receives it.</p>
        <p>At Cooing, we deliver not only the wagashi, but the joy and anticipation that come with it.</p>
      </S.Intro>

      <S.MainImage>
        <S.Image src="/assets/about/st-mochi.png" alt="main image" />
      </S.MainImage>
      <Footer />
    </div>
  )
}

export default About