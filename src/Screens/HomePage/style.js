import styled from "styled-components";
import Slider from "react-slick";
import { BannerLeftArrow, BannerRightArrow } from "../../Assets";

export const HomePageWrapper = styled.div`
  position: relative;
  background-color: #eaeded;
  @media screen and (max-width: 1000px) {
    width: 1000px;
  }
`;

export const BannerBox = styled.div`
  width: 1500px;
  text-align: center;
  white-space: nowrap;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -750px;

  @media screen and (max-width: 1515px) {
    width: 100%;
    left: 0;
    margin-left: 0;
  }
`;

export const SliderCustom = styled(Slider)`
  .slick-next,
  .slick-prev {
    width: 34px;
    height: 52px;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;
    right: 0;
    left: 0;
  }

  .slick-next {
    background-image: url(${BannerRightArrow});
  }

  .slick-prev {
    background-image: url(${BannerLeftArrow});
  }

  .slick-next::before,
  .slick-prev::before {
    display: none;
  }
`;

export const BannerItem = styled.div`
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(transparent, transparent, #eaeded),
    ${props => {
      if (props.img) return `url(${props.img})`;
    }};
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const BannerArrowBox = styled.div`
  width: 80px;
  height: 250px;
  position: absolute;
  top: 0;
  display: flex;
  cursor: pointer;
  z-index: 1;

  :focus-within {
    box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 4px #008296;
    border-radius: 4px;
  }

  ${props => {
    if (props.direc === "next") return "right: 0;";
    else if (props.direc === "prev") return "left: 0;";
  }}
`;

export const BannerArrow = styled.input``;

export const MainBox = styled.div`
  width: 1500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  top: 250px;
  padding-bottom: 250px;
  margin-bottom: 30px;

  @media screen and (max-width: 1515px) {
    width: 100%;
  }
`;

export const MainSec = styled.div`
  width: 100%;
`;

export const MainItemBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  padding: ${props => {
    if (props.scrollBox) return "0px 20px";
  }};

  @media screen and (max-width: 1515px) {
    margin: 0px 10px 20px;

    margin: ${props => {
      if (props.scrollBox) return "20px 0px";
    }};
  }
`;

export const MainItem = styled.div`
  width: 350px;
  height: 420px;
  background-color: white;
  padding: 20px 20px 15px;
  margin: 0px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1515px) {
    width: 100%;
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;

export const MainItemTitle = styled.div`
  width: 100%;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MainItemBottomBtn = styled.span`
  font-size: 13px;
  color: #007185;
  padding: 8px 0px;
  cursor: pointer;

  :hover {
    color: #c7511f;
    text-decoration: underline;
  }
`;

export const MainItemImgBox = styled.img`
  width: 100%;
  flex: 1;
  padding-bottom: 15px;
  box-sizing: border-box;
  object-fit: cover;
`;

export const MainItemScrollBox = styled.div`
  width: 100%;
  height: 281px;
  background-color: white;
  padding: 10px 20px;
  box-sizing: border-box;
`;
