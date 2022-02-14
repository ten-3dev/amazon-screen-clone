import React from "react";

import {
  CategoryBox,
  CategorySec,
  CategoryAd,
  CategoryAllSec,
  CategoryAllText,
  CategoryAllImg,
  CategoryItems
} from "./style";

import { Menu } from "../../Assets";

const Category = () => {
  return (
    <CategoryBox>
      <CategorySec>
        <CategoryAllSec>
          <CategoryAllImg src={Menu} />
          <CategoryAllText>All</CategoryAllText>
        </CategoryAllSec>
        <CategoryItems>Today's Deals</CategoryItems>
        <CategoryItems>Customer Service</CategoryItems>
        <CategoryItems>Registry</CategoryItems>
        <CategoryItems>Gift Cards</CategoryItems>
        <CategoryItems>Sell</CategoryItems>
      </CategorySec>
      <CategoryAd>Amazon's response to COVID-19</CategoryAd>
    </CategoryBox>
  );
};

export default Category;
