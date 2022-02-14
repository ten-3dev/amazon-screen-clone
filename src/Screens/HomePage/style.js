import styled from "styled-components";
import Slider from "react-slick";
import { BannerLeftArrow, BannerRightArrow } from "../../Assets";

export const HomePageWrapper = styled.div`
  position: relative;
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

  @media screen and (max-width: 1500px) {
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
  background-image: linear-gradient(transparent, transparent, white),
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
  margin-bottom: 250px;
`;

export const MainSec = styled.div`
  width: 100%;
  height: 1500px;
  background-color: red;
  opacity: 0.3;
`;
