import React, { useState } from "react";

import Header from "../../Components/Header";
import Category from "../../Components/Category";
import BottomSignIn from "../../Components/BottomSignIn";
import Footer from "../../Components/Footer";

import {
  HomePageBackground,
  HomePageMain,
  BannerBackground,
  BannerFlame,
  BannerImg,
  BtnBox,
  RightMoveBtn,
  LeftMoveBtn,
  ArrowImg
} from "./style";
import { BannerArrow } from "../../Assets";

let ImgArr = [
  "https://m.media-amazon.com/images/I/61nfpX0p23L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61rSRZL9kaL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg"
];

const HomePage = props => {

  const [moveNum, setMoveNum] = useState(0);
  const [count, setCount] = useState({
    right: 0,
    left: 0
  });

  let styles = {
    transform: `translateX(${moveNum}%)`
  };

  let BannerList = ImgArr.map((url, key) => (
    <BannerImg img={url} key={key} style={styles} />
  ));

  //뒤로 무한루프는 아직... 이따가 할꺼고 일단은 안되게 막아만 놓았음
  const MoveBannerFunc = way => {
    if (way === "right") {
      setCount({ ...count, right: count.right + 1 });
      ImgArr.push(ImgArr[count.right]);
      setMoveNum(moveNum + -100);
    } else if (way === "left") {
      if(count.left === count.right){
        return;
      }
      setCount({ ...count, left: count.left + 1});
      setMoveNum(moveNum + 100);
    }
  };

  return (
    <HomePageBackground>
      <Header />
      <Category />
      <HomePageMain/>
      <BannerBackground>
        <BannerFlame>
          <BtnBox>
            <RightMoveBtn onClick={() => MoveBannerFunc("right")}>
              <ArrowImg src={BannerArrow} />
            </RightMoveBtn>
            <LeftMoveBtn onClick={() => MoveBannerFunc("left")}>
              <ArrowImg src={BannerArrow} way={true} />
            </LeftMoveBtn>
          </BtnBox>
          {BannerList}
        </BannerFlame>
      </BannerBackground>
      <BottomSignIn />
      <Footer />
    </HomePageBackground>
  );
};

export default HomePage;
