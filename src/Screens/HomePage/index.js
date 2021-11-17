import React, {useState} from "react";

import Header from "../../Components/Header";
import Category from "../../Components/Category";
import BottomSignIn from "../../Components/BottomSignIn";
import Footer from "../../Components/Footer";

import { BannerBackground, BannerFlame, BannerImg, BtnBox, RightMoveBtn, LeftMoveBtn, ArrowImg } from "./style";
import { BannerArrow } from "../../Assets";


let ImgArr = [
  "https://m.media-amazon.com/images/I/61nfpX0p23L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61rSRZL9kaL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg"
]

const HomePage = (props) => {
  const [moveNum, setMoveNum] = useState(0);
  const [count, setCount] = useState(1);

  let styles = {
    transform:`translateX(${moveNum}%)`
  };

  let BannerList = ImgArr.map((url, key) => (
    <BannerImg img={url} key={key} style={styles} />
  ))

  const MoveBannerFunc = way => {
    if(way === "right"){
      if(ImgArr.length > count){
        setCount(count + 1);
        setMoveNum(moveNum + -100);
      }
    }
    else if(way === "left"){
      if(1 < count){
        setCount(count - 1);
        setMoveNum(moveNum + 100);
      }
    }
  }

  return (
    <>
      <Header />
      <Category />
      <BannerBackground>
        <BannerFlame>
          <BtnBox>
            <RightMoveBtn onClick={() => MoveBannerFunc("right")}>
              <ArrowImg src={BannerArrow}/>
            </RightMoveBtn>
            <LeftMoveBtn onClick={() => MoveBannerFunc("left")}>
              <ArrowImg src={BannerArrow} way={true}/>
            </LeftMoveBtn>
          </BtnBox>
          {BannerList}
        </BannerFlame>
      </BannerBackground>
      <BottomSignIn />
      <Footer />
    </>
  );
};

export default HomePage;
