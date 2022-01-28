import React from "react";
import Header from "../../Components/Header";
import Category from "../../Components/Category";
import BottomSignIn from "../../Components/BottomSignIn";
import Footer from "../../Components/Footer";
import * as Styles from "./style";
// import { BannerArrow } from "../../Assets";

const HomePage = () => {
  return (
    <>
      <Header />
      <Category />
      <Styles.HomePageBackground>
        <Styles.BannerBackground></Styles.BannerBackground>
      </Styles.HomePageBackground>
      <BottomSignIn />
      <Footer />
    </>
  );
};

export default HomePage;
