import styled from "styled-components";

const HomePageBackground = styled.div`

`

const HomePageMain = styled.div`
  width: 100%;
  height: 1130px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 3;
`;


const BannerBackground = styled.div`
  width: 100%;
  height: 600px;
  text-align: center;
  white-space: nowrap;
  // overflow: hidden;
`;

const BannerFlame = styled.div`
  width: 1500px;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  @media screen and (max-width: 1500px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    width: 1000px;
  }
`;

const BannerImg = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  display: inline-block;
  background-image: 
  linear-gradient(transparent, transparent, white),
  url(
    ${props => {
      if(props.img){
        return props.img;
      }
      return "https://m.media-amazon.com/images/I/61rSRZL9kaL._SX3000_.jpg";
    }}
  );
  // background: linear-gradient(transparent, transparent, black);

  
  background-size: cover;
  background-position: center center;
`;

const BtnBox = styled.div`
    width: 1500px;
    height: 230px;
    position: absolute;
    cursor: pointer;
    z-index: 1;
    @media screen and (max-width: 1500px) {
      width: 100%;
    }
    @media screen and (max-width: 1000px) {
      width: 1000px;
    }
`;

const RightMoveBtn = styled.div`
    width: 80px;
    height: 230px;
    display: flex;
    float: right;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const LeftMoveBtn = styled.div`
    width: 80px;
    height: 230px;
    display: flex;
    float: left;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ArrowImg = styled.img`
    width: 20px;
    height: 36px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${props => {
      if(props.way){
        return "transform:rotate(180deg)";
      }
      return;
    }}
`;

export {HomePageMain, BannerBackground, BannerFlame, BannerImg, BtnBox, RightMoveBtn, LeftMoveBtn, ArrowImg, HomePageBackground};
