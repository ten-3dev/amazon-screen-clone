import React, { useRef, useState } from "react";

import { Location, Logo, Glass, Arrow, ShopBag } from "../../Assets/index";
import { CountryPopup } from "../../Components/Popup/ConuntryPopup/index";
import SignInPopup from "../../Components/Popup/SignInPopup/index";

import {
  HeaderView,
  HeaderItemLogo,
  DeliverSec,
  DeliverImg,
  DeliverTextSec,
  DeliverText,
  SearchSec,
  SearchAllSec,
  SearchInput,
  SearchBtn,
  SearchBtnImg,
  SearchAllOption,
  SearchAllImg,
  ReturnsBox,
  ReturnsText,
  ShopBagBox,
  ShopBagImgBox,
  ShopBagImg,
  ShopBagCount,
  ShopBagTitle
} from "./style";

const Header = () => {
  const [check, setCheck] = useState(false);

  const focus = useRef(null);

  const handleClick = () => {
    focus.current.focus();
  };

  return (
    <HeaderView>
      <HeaderItemLogo src={Logo} />
      <DeliverSec>
        <DeliverImg src={Location} alt="Location Img" />
        <DeliverTextSec>
          <DeliverText>Deliver to</DeliverText>
          <DeliverText weight="bold">Republic of Korea</DeliverText>
        </DeliverTextSec>
      </DeliverSec>
      <SearchSec foc={check}>
        <SearchAllImg src={Arrow} onClick={handleClick} />
        <SearchAllSec ref={focus}>
          <SearchAllOption defaultChecked hidden>
            All
          </SearchAllOption>
          <SearchAllOption>All Items</SearchAllOption>
          <SearchAllOption>artsasdfasdf</SearchAllOption>
          <SearchAllOption>bodyasdfasdf</SearchAllOption>
          <SearchAllOption>eroorasdfasdf</SearchAllOption>
          <SearchAllOption>fuck youasdfasdf</SearchAllOption>
          <SearchAllOption>my selfasdfasdfsadf</SearchAllOption>
        </SearchAllSec>
        <SearchInput
          onFocus={() => {
            setCheck(!check);
          }}
          onBlur={() => {
            setCheck(!check);
          }}
        />
        <SearchBtn>
          <SearchBtnImg src={Glass} />
        </SearchBtn>
      </SearchSec>
      <CountryPopup />
      <SignInPopup />
      <ReturnsBox>
        <ReturnsText>Returns</ReturnsText>
        <ReturnsText bold="T">& Order</ReturnsText>
      </ReturnsBox>
      <ShopBagBox>
        <ShopBagImgBox>
          <ShopBagCount>0</ShopBagCount>
          <ShopBagImg src={ShopBag} />
        </ShopBagImgBox>
        <ShopBagTitle>Cart</ShopBagTitle>
      </ShopBagBox>
    </HeaderView>
  );
};

export default Header;
