import React, { useRef, useState } from "react";

import { Location, Logo, Glass, Arrow } from "../../Assets/index";

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
  SearchAllImg
} from "./style";

const Header = props => {
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
          <SearchAllOption selected hidden>
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
            console.log("asdf");
            setCheck(!check);
          }}
          onBlur={() => {
            console.log("1");
            setCheck(!check);
          }}
        />
        <SearchBtn>
          <SearchBtnImg src={Glass} />
        </SearchBtn>
      </SearchSec>
    </HeaderView>
  );
};

export default Header;
