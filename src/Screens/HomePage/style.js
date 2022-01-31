import styled from "styled-components";
import Slider from "react-slick";

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
  .slick-next {
    width: 34px;
    height: 52px;
    /* width: 80px;
    height: 280px; */
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://m.media-amazon.com/images/S/sash/ydDD9hnRfziI$y7.png");
    transform: translate(0, -50%) rotate(180deg);
    top: 125px;
    z-index: 1;
    right: 20px;
  }
  .slick-prev {
    width: 34px;
    height: 52px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://m.media-amazon.com/images/S/sash/ydDD9hnRfziI$y7.png");
    top: 125px;
    z-index: 1;
    left: 20px;
  }
  .slick-next::before {
    display: none;
  }
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

export const BannerArrow = styled.div`
  display: "block";
`;
