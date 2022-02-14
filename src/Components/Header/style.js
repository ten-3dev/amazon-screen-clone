import styled from "styled-components";

export const HeaderView = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 1000px) {
    width: 1000px;
  }
`;

export const HeaderItemLogo = styled.img`
  height: 30px;
  padding: 8px;
  border-radius: 2px;
  &:hover {
    outline: 1px solid white;
  }
  cursor: pointer;
`;

export const DeliverSec = styled.div`
  display: flex;
  height: 30px;
  flex-direction: row;
  align-items: flex-end;
  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    outline: 1px solid white;
  }
`;
export const DeliverImg = styled.img`
  width: 18px;
  height: 23px;
  margin-right: 5px;
`;

export const DeliverTextSec = styled.div``;

export const DeliverText = styled.div`
  margin-top: 2px;
  color: ${props => {
    if (props.weight === "bold") {
      return "white";
    }
    return "#B4B4B4";
  }};
  font-weight: ${props => {
    if (props.weight === "bold") {
      return "bold";
    }
    return "normal";
  }};
  font-size: ${props => {
    if (props.weight === "bold") {
      return "14px";
    }
    return "12.5px";
  }};
`;

export const SearchSec = styled.div`
  width: 62%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  ${props => {
    if (props.foc) {
      return "outline: 3px solid orange";
    }
  }}
`;

export const SearchAllSec = styled.select`
  width: 60px;
  height: 100%;
  background-color: #f3f3f3;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  text-indent: 13px;
  cursor: pointer;
  &:hover {
    background-color: #cecece;
  }
  &:focus {
    outline-color: orange;
    outline-style: solid;
    outline-width: 3px;
    margin-right: 3px;
  }
`;

export const SearchAllImg = styled.img`
  width: 12px;
  height: 12px;
  position: absolute;
  margin-left: 40px;
  &:hover + select {
    background-color: #cecece;
  }
`;

export const SearchAllOption = styled.option`
  background-color: white;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  display: inline;
  border-left: 1px solid #d3d3d3;
  border-top: 0;
  border-bottom: 0;
  border-right: 0;
  border-radius: 0;
  font-size: 20px;
  padding-left: 5px;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 0;
  &:focus {
    outline-style: none;
  }
`;

export const SearchBtn = styled.button`
  width: 45px;
  height: 100%;
  background-color: #febd69;
  border: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  cursor: pointer;
  &:hover {
    background-color: #ffa633;
  }
`;

export const SearchBtnImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cotain;
`;

export const ReturnsBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    outline: 1px solid white;
  }
`;

export const ReturnsText = styled.span`
  color: white;
  font-size: ${props => {
    if (props.bold) {
      return "14px";
    }
    return "12px";
  }};
  font-weight: ${props => {
    if (props.bold) {
      return "bold";
    }
  }};
`;

export const ShopBagBox = styled.div`
  height: 30px;
  display: flex;
  align-items: flex-end;
  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    outline: 1px solid white;
  }
`;

export const ShopBagTitle = styled.span`
  color: white;
  font-weight: 600;
  margin-left: 4px;
  font-size: 14px;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const ShopBagImgBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ShopBagImg = styled.img`
  height: 100%;
`;

export const ShopBagCount = styled.span`
  display: flex;
  flex-direction: column;
  color: orange;
  font-weight: 600;
  position: absolute;
  margin-left: 6px;
  margin-top: -5px;
`;
