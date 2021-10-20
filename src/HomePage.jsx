import React from 'react';

import "swiper/css/bundle";


import styled from '@emotion/styled';

import CatgorySwiper from './CategorySwiper'
import BannerSwiper from './BannerSwiper'

const CategorySwiperContainer = styled.div({
  height: 100,
  paddingTop: 7,
  paddingBottom: 7,
  borderBottom: '1px solid #eaedef',
});
const MainContainer = styled.div({
    paddingTop: 24,
  paddingBottom: 24,
  paddingRight: 40,
  paddingLeft: 40,
  margin: 0,
  borderBottom: '1px solid #eaedef',
});
const BannerSwiperContainer = styled.div({
  height: 100,
  paddingTop: 7,
  paddingBottom: 7,
  borderBottom: '1px solid #eaedef',
});

export default function HomePage() {
  return (
    <div>
      <CategorySwiperContainer>
        <CatgorySwiper/>
      </CategorySwiperContainer>
      <MainContainer>
      <BannerSwiperContainer className="Banner">
        <BannerSwiper/>
      </BannerSwiperContainer>
      </MainContainer>
      
    </div>
  );
}

