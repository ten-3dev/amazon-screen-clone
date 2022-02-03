import styled from "styled-components";
import Slider from "react-slick";
import { BannerLeftArrow, BannerRightArrow } from "../../Assets";

export const HomePageBackground = styled.div``;

export const BannerBackground = styled.div`
  width: 1500px;
  margin: 0px auto;
  text-align: center;
  white-space: nowrap;
`;

export const SliderCustom = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .slick-next,
  .slick-prev {
    width: 34px;
    height: 52px;
    position: static;
    background-size: contain;
    top: 0;
    z-index: 1;
    background-repeat: no-repeat;
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
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  ${props => {
    if (props.direc === "next") return "right: 0;";
    else if (props.direc === "prev") return "left: 0;";
  }}
`;

export const BannerArrow = styled.div``;
