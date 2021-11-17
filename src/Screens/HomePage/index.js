import React from "react";

import Header from "../../Components/Header";
import Category from "../../Components/Category";
import BottomSignIn from "../../Components/BottomSignIn";
import Footer from "../../Components/Footer";

import { BannerBackground, BannerFlame, BannerImg } from "./style";

const HomePage = () => {
  return (
    <>
      <Header />
      <Category />
      <BannerBackground>
        <BannerFlame>
          <BannerImg src="https://m.media-amazon.com/images/I/61nfpX0p23L._SX3000_.jpg" />
          <BannerImg src="https://m.media-amazon.com/images/I/61rSRZL9kaL._SX3000_.jpg" />
        </BannerFlame>
      </BannerBackground>
      <BottomSignIn />
      <Footer />
    </>
  );
};

export default HomePage;
