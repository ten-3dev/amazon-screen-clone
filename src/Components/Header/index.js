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
      <SearchSec>
        <SearchAllSec>
          <SearchAllImg src={Arrow} />
          <SearchAllOption selected>All</SearchAllOption>
          <SearchAllOption>artsasdfasdf</SearchAllOption>
          <SearchAllOption>bodyasdfasdf</SearchAllOption>
          <SearchAllOption>eroorasdfasdf</SearchAllOption>
          <SearchAllOption>fuck youasdfasdf</SearchAllOption>
          <SearchAllOption>my selfasdfasdfsadf</SearchAllOption>
        </SearchAllSec>
        <SearchInput></SearchInput>
        <SearchBtn>
          <SearchBtnImg src={Glass} />
        </SearchBtn>
      </SearchSec>
    </HeaderView>
  );
};

export default Header;
