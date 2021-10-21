import Header from "../../Components/Header";
import Category from "../../Components/Category";
import BottomSignIn from "../../Components/BottomSignIn";
import Footer from "../../Components/Footer";

import {
  MainBackgroundBox,
  MainBannerBox,
  SlideRightBtn,
  SlideLeftBtn,
  SlideBtnImg,
  Item,
  BtnBox
} from "./style.js";

import { BannerArrow } from "../../Assets/index.js"; //eslint-disable-line no-unused-vars

const HomePage = () => {
  return (
    <>
      <Header />
      <Category />
      <MainBackgroundBox>
        <BtnBox>
          <SlideLeftBtn onClick={() => console.log("asdf")}>
            {/* eslint-disable-line no-unused-vars */}
            <SlideBtnImg src={BannerArrow} />
          </SlideLeftBtn>
          <SlideRightBtn>
            {/* eslint-disable-line no-unused-vars */}
            <SlideBtnImg src={BannerArrow} />
          </SlideRightBtn>
        </BtnBox>
        <MainBannerBox move={true}>
          <Item src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
          <Item src="https://m.media-amazon.com/images/I/61rSRZL9kaL._SX3000_.jpg" />
          <Item src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
          <Item src="https://m.media-amazon.com/images/I/61rSRZL9kaL._SX3000_.jpg" />
        </MainBannerBox>
      </MainBackgroundBox>
      <BottomSignIn />
      <Footer />
    </>
  );
};

export default HomePage;
