import styled from "styled-components";

const MainBackgroundBox = styled.div`
  width: 100%;
  background-color: #eaeded;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const MainBannerBox = styled.div`
  width: 1500px;
  height: 600px;
  white-space: nowrap;
  // overflow-x: scroll;
  // overflow: hidden;
  // transform: translateX(0%);
  // margin-left: -3000px;
`;

const SlideRightBtn = styled.div`
  width: 80px;
  height: 250px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SlideLeftBtn = styled.div`
  width: 80px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: rotate(90deg);
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
`;

const SlideBtnImg = styled.img`
  width: 20px;
`;

const Item = styled.img`
  width: 1500px;
  height: 600px;
  display: inline-block;
`;

const BtnBox = styled.div`
  position: absolute;
  width: 1500px;
  display: flex;
  justify-content: space-between;
  // background-color: red;
`;

export {
  MainBackgroundBox,
  MainBannerBox,
  SlideRightBtn,
  SlideLeftBtn,
  SlideBtnImg,
  Item,
  BtnBox
};
