import React from "react";
import * as Styles from "./style";
import { MainItem } from "../../../Data";

const HomePageItem = () => {
  return (
    <Styles.MainItemBox>
      {MainItem.map((el, idx) => {
        if (el.type === 1) {
          console.log("type is 1");
        }
        return (
          <Styles.MainItem key={idx}>
            <Styles.MainItemTitle>{el.title}</Styles.MainItemTitle>
            <Styles.MainItemImgBox src={el.img}></Styles.MainItemImgBox>
            <Styles.MainItemBottomBtn>See more</Styles.MainItemBottomBtn>
          </Styles.MainItem>
        );
      })}
    </Styles.MainItemBox>
  );
};

export default HomePageItem;
