import styled from "styled-components";

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

export const MainItemImgBox = styled.img`
  width: 100%;
  flex: 1;
  padding-bottom: 15px;
  box-sizing: border-box;
  object-fit: cover;
  cursor: pointer;
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
