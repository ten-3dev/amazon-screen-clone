import styled from "styled-components";

const BannerBackground = styled.div`
  width: 100%;
  height: 600px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
`;

const BannerFlame = styled.div`
  width: 1500px;
  height: 100%;
  display: inline-block;
  overflow: hidden;
`;

const BannerImg = styled.img`
  width: 1500px;
  height: 100%;
  transition: 0.3s;
  // transform: translateX(-100%);
  clip: rect(0px, 200px, 150px, 0px);
`;

export { BannerBackground, BannerFlame, BannerImg };
