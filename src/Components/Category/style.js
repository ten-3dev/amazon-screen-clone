import styled from "styled-components";

const CategoryBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: #232f3e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    width: 1000px;
  }
`;

const CategorySec = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  justify-content: space-between;
`;

const CategoryAllSec = styled.div`
  height: 27px;
  display: flex;
  align-items: center;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 2px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    outline: 1px solid white;
  }
`;

const CategoryAllText = styled.span`
  margin-left: 3px;
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

const CategoryAllImg = styled.img`
  width: 20px;
`;

const CategoryItems = styled.div`
  height: 27px;
  display: flex;
  align-items: center;
  font-size: 13.5px;
  color: white;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 2px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    outline: 1px solid white;
  }
`;

const CategoryAd = styled.div`
  height: 27px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin-right: 20px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding-right: 5px;
  padding-left: 5px;
  cursor: pointer;
  &:hover {
    outline: 1px solid white;
  }
`;

export {
  CategoryBox,
  CategorySec,
  CategoryAd,
  CategoryAllSec,
  CategoryAllText,
  CategoryAllImg,
  CategoryItems
};
