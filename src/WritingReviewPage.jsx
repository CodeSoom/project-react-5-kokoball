import React from 'react';

import 'swiper/css/bundle';

import styled from '@emotion/styled';

import CatgorySwiper from './CategorySwiper';
import BannerSwiper from './BannerSwiper';

import imgUrl from './assets/images/ex.jpg';

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
const ContentWrapperUl = styled.ul({
  visibility: 'visible',
  display: 'flex',
  alignItems: 'stretch',
  listStyle: 'none',
  padding: 0,
});
const ContentCard = styled.li({
  position: 'relative',
  minWidth: '21%',
  maxWidth: '21%',
  padding: '0 1rem',
});
const ImgContainer = styled.div({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  paddingTop: 'calc(100% * 0.54)',
  borderRadius: '.8rem',
});
const ThumbanilImg = styled.img({
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'inlineblock',
  width: '106%',
  maxWidth: 'none',
  transform: 'translate(-50%, -50%)',
  verticalAlign: 'top',
  height: '100%',
});
const CardLabels = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '1.6rem 0 .8rem',
  height: '2.5rem',
  overflow: 'hidden',
  padding: 0,
});
const CardLabel = styled.li({
  width: 40,
  height: 13,
  listStyle: 'none',
  padding: '.4rem .8rem',
  marginRight: '.8rem',
  borderRadius: '.4rem',
  color: '#6e6e73',
  background: '#f2f2f2',
  fontSize: '0.9%',
});
const CardTitle = styled.strong({
  display: 'block',
  textOverflow: 'ellipsis',
  wordWrap: 'normal',
  maxheight: '4.8rem',
  fontWeight: 'bolder',
});
const CardContent = styled.strong({
  display: 'block',
  textOverflow: 'ellipsis',
  wordWrap: 'normal',
  maxheight: '3.6rem',
  marginTop: '.8rem',
  fontSize: '0.7rem',
  color: '#9b9ba0',
});

export default function HomePage() {
  return (
    <div>
      <CategorySwiperContainer id="Categort-Swiper">
        <CatgorySwiper />
      </CategorySwiperContainer>
      <MainContainer>
        <BannerSwiperContainer id="Main-Banner-Swiper">
          <BannerSwiper />
        </BannerSwiperContainer>
        <section id="container-point">
          <h3>Hot</h3>
        </section>
        <section id="container-content">
          <h2>야근 탈출! 칼퇴를 위한 인강 추천</h2>
          <div className="content_wrapper">
            <ContentWrapperUl>
              <ContentCard className="content-wrapper-lower">
                <a href="">
                  <ImgContainer>
                    <ThumbanilImg src={imgUrl} alt="" />
                  </ImgContainer>
                  <CardLabels>
                    <CardLabel>실무엑셀</CardLabel>
                    <CardLabel>실무엑셀</CardLabel>
                    <CardLabel>실무엑셀</CardLabel>
                  </CardLabels>
                  <div>
                    <CardTitle>나의 칼퇴치트키 엑셀유치원</CardTitle>
                    <CardContent>단축키부터 실무필수 함수 및 응용법으로 여러분의 칼퇴 치트키가 되어줄 강의!</CardContent>
                  </div>
                </a>
              </ContentCard>
              <ContentCard className="content-wrapper-lower">
                <a href="">
                  <ImgContainer>
                    <ThumbanilImg src={imgUrl} alt="" />
                  </ImgContainer>
                  <CardLabels>
                    <CardLabel>실무엑셀</CardLabel>
                    <CardLabel>실무엑셀</CardLabel>
                    <CardLabel>실무엑셀</CardLabel>
                  </CardLabels>
                  <div>
                    <CardTitle>나의 칼퇴치트키 엑셀유치원</CardTitle>
                    <CardContent>단축키부터 실무필수 함수 및 응용법으로 여러분의 칼퇴 치트키가 되어줄 강의!</CardContent>
                  </div>
                </a>
              </ContentCard>
              <ContentCard className="content-wrapper-lower">
                <a href="">
                  <ImgContainer>
                    <ThumbanilImg src={imgUrl} alt="" />
                  </ImgContainer>
                  <CardLabels>
                    <CardLabel>실무엑셀</CardLabel>
                    <CardLabel>실무엑셀</CardLabel>
                    <CardLabel>실무엑셀</CardLabel>
                  </CardLabels>
                  <div>
                    <CardTitle>나의 칼퇴치트키 엑셀유치원</CardTitle>
                    <CardContent>단축키부터 실무필수 함수 및 응용법으로 여러분의 칼퇴 치트키가 되어줄 강의!</CardContent>
                  </div>
                </a>
              </ContentCard>
              <ContentCard className="content-wrapper-lower">
                <a href="">
                  <ImgContainer>
                    <ThumbanilImg src={imgUrl} alt="" />
                  </ImgContainer>
                  <CardLabels>
                    <CardLabel>실무엑셀</CardLabel>
                    <CardLabel>실무엑셀</CardLabel>
                    <CardLabel>실무엑셀</CardLabel>
                  </CardLabels>
                  <div>
                    <CardTitle>나의 칼퇴치트키 엑셀유치원</CardTitle>
                    <CardContent>단축키부터 실무필수 함수 및 응용법으로 여러분의 칼퇴 치트키가 되어줄 강의!</CardContent>
                  </div>
                </a>
              </ContentCard>
            </ContentWrapperUl>
          </div>
        </section>
      </MainContainer>

    </div>
  );
}
