import React, { useRef, useState } from "react";
import * as Styles from "./style";

import { Location, Logo, Glass, Arrow, ShopBag } from "../../Assets/index";
import { CountryPopup } from "../../Components/Popup/ConuntryPopup/index";
import SignInPopup from "../../Components/Popup/SignInPopup/index";

const Header = () => {
  const [check, setCheck] = useState(false);

  const focus = useRef(null);

  const handleClick = () => {
    focus.current.focus();
  };

  return (
    <Styles.HeaderView>
      <Styles.HeaderItemLogo src={Logo} />
      <Styles.DeliverSec>
        <Styles.DeliverImg src={Location} alt="Location Img" />
        <Styles.DeliverTextSec>
          <Styles.DeliverText>Deliver to</Styles.DeliverText>
          <Styles.DeliverText weight="bold">
            Republic of Korea
          </Styles.DeliverText>
        </Styles.DeliverTextSec>
      </Styles.DeliverSec>
      <Styles.SearchSec foc={check}>
        <Styles.SearchAllImg src={Arrow} onClick={handleClick} />
        <Styles.SearchAllSec ref={focus}>
          <Styles.SearchAllOption defaultChecked hidden>
            All
          </Styles.SearchAllOption>
          <Styles.SearchAllOption>All Items</Styles.SearchAllOption>
          <Styles.SearchAllOption>artsasdfasdf</Styles.SearchAllOption>
          <Styles.SearchAllOption>bodyasdfasdf</Styles.SearchAllOption>
          <Styles.SearchAllOption>eroorasdfasdf</Styles.SearchAllOption>
          <Styles.SearchAllOption>fuck youasdfasdf</Styles.SearchAllOption>
          <Styles.SearchAllOption>my selfasdfasdfsadf</Styles.SearchAllOption>
        </Styles.SearchAllSec>
        <Styles.SearchInput
          onFocus={() => {
            setCheck(!check);
          }}
          onBlur={() => {
            setCheck(!check);
          }}
        />
        <Styles.SearchBtn>
          <Styles.SearchBtnImg src={Glass} />
        </Styles.SearchBtn>
      </Styles.SearchSec>
      <CountryPopup />
      <SignInPopup />
      <Styles.ReturnsBox>
        <Styles.ReturnsText>Returns</Styles.ReturnsText>
        <Styles.ReturnsText bold="T">& Order</Styles.ReturnsText>
      </Styles.ReturnsBox>
      <Styles.ShopBagBox>
        <Styles.ShopBagImgBox>
          <Styles.ShopBagCount>0</Styles.ShopBagCount>
          <Styles.ShopBagImg src={ShopBag} />
        </Styles.ShopBagImgBox>
        <Styles.ShopBagTitle>Cart</Styles.ShopBagTitle>
      </Styles.ShopBagBox>
    </Styles.HeaderView>
  );
};

export default Header;
