import React, { useRef } from "react";
import * as Styles from "./style";
import Header from "../../Components/Header";
import Category from "../../Components/Category";
import BottomSignIn from "../../Components/BottomSignIn";
import Footer from "../../Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const slickRef = useRef();
  const arrowRef = {
    next: useRef(),
    prev: useRef()
  };

  //배너 이미지 배열
  const BannerList = [
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61nfpX0p23L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61rSRZL9kaL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg"
  ];

  //이벤트 분리 (가독성)
  const ArrowOnClick = (clickEvent, type) => {
    return {
      onClick: () => {
        clickEvent();
        slickRef.current.slickPause();
        if (type === "next") arrowRef.next.current.focus();
        else arrowRef.prev.current.focus();
      },
      direc: type
    };
  };

  //화살표 함수
  const CustomArrow = props => {
    const { onClick, className, type } = props;
    return (
      <Styles.BannerArrowBox {...ArrowOnClick(onClick, type)}>
        <Styles.BannerArrow
          className={className}
          ref={type === "next" ? arrowRef.next : arrowRef.prev}
        />
      </Styles.BannerArrowBox>
    );
  };

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomArrow type="next" />,
    prevArrow: <CustomArrow type="prev" />
  };

  return (
    <>
      <Header />
      <Category />
      <Styles.HomePageWrapper>
        <Styles.BannerBox>
          <Styles.SliderCustom {...settings} ref={slickRef}>
            {BannerList.map((url, idx) => {
              return <Styles.BannerItem img={url} key={idx} />;
            })}
          </Styles.SliderCustom>
        </Styles.BannerBox>
        <Styles.MainBox>
          <Styles.MainSec>
            <Styles.MainItemBox>
              <Styles.MainItem>
                <Styles.MainItemTitle>Gaming accessories</Styles.MainItemTitle>
                <Styles.MainItemImgBox></Styles.MainItemImgBox>
                <Styles.MainItemBottomBtn>See more</Styles.MainItemBottomBtn>
              </Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
            </Styles.MainItemBox>
            <Styles.MainItemBox>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
            </Styles.MainItemBox>
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <Styles.MainItemBox>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
            </Styles.MainItemBox>
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <Styles.MainItemBox>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
            </Styles.MainItemBox>
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <Styles.MainItemBox>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
              <Styles.MainItem></Styles.MainItem>
            </Styles.MainItemBox>
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
          </Styles.MainSec>
        </Styles.MainBox>
      </Styles.HomePageWrapper>
      <BottomSignIn />
      <Footer />
    </>
  );
};

export default HomePage;
