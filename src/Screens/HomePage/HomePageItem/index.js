import React from "react";
import * as Styles from "./style";
import { ItemList } from "../../../Data";

const HomePageItem = () => {
  return (
    <Styles.MainItemBox>
      {ItemList.map((el, idx) => {
        return (
          <Styles.MainItem key={idx}>
            <Styles.MainItemTitle>Gaming accessories</Styles.MainItemTitle>
            <Styles.MainItemImgBox src={el}></Styles.MainItemImgBox>
            <Styles.MainItemBottomBtn>See more</Styles.MainItemBottomBtn>
          </Styles.MainItem>
        );
      })}
    </Styles.MainItemBox>
  );
};

export default HomePageItem;
