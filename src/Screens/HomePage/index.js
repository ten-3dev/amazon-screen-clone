import React from "react";
import * as Styles from "./style";
import Header from "../../Components/Header";
import Category from "../../Components/Category";
import BottomSignIn from "../../Components/BottomSignIn";
import Footer from "../../Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = props => {
  const { className, onClick } = props;
  return (
    <Styles.BannerArrowBox onClick={onClick} direc="next">
      <Styles.BannerArrow className={className} />
    </Styles.BannerArrowBox>
  );
};

const PrevArrow = props => {
  const { className, onClick } = props;
  return (
    <Styles.BannerArrowBox onClick={onClick} direc="prev">
      <Styles.BannerArrow className={className} />
    </Styles.BannerArrowBox>
  );
};

const HomePage = () => {
  const BannerList = [
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61nfpX0p23L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61rSRZL9kaL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg"
  ];

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <>
      <Header />
      <Category />
      <Styles.HomePageBackground>
        <Styles.BannerBackground>
          <Styles.SliderCustom {...settings}>
            {BannerList.map((url, idx) => {
              return <Styles.BannerItem img={url} key={idx} />;
            })}
          </Styles.SliderCustom>
        </Styles.BannerBackground>
      </Styles.HomePageBackground>
      <BottomSignIn />
      <Footer />
    </>
  );
};

export default HomePage;
