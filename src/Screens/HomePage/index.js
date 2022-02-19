import React, { useRef } from "react";
import * as Styles from "./style";
import Header from "../../Components/Header";
import Category from "../../Components/Category";
import BottomSignIn from "../../Components/BottomSignIn";
import Footer from "../../Components/Footer";
import HomePageItem from "./HomePageItem";
import { BannerList } from "../../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const slickRef = useRef();
  const arrowRef = {
    next: useRef(),
    prev: useRef()
  };

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
            <HomePageItem />
            <HomePageItem />
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <HomePageItem />
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <HomePageItem />
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <Styles.MainItemBox scrollBox>
              <Styles.MainItemScrollBox></Styles.MainItemScrollBox>
            </Styles.MainItemBox>
            <HomePageItem />
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
