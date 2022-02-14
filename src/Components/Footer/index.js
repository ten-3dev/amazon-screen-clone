import React from "react";

import { ConuntryPopupView } from "../Popup/ConuntryPopup";

import {
  BackToTopBox,
  ShortcutBox,
  ShortcutSec,
  ShortcutSecTitle,
  ShortcutSecText,
  SummaryBox,
  SummaryBtnSec,
  SummaryBoxImg,
  SummaryBoxbtnImgMon,
  SummaryBoxbtnImgCou,
  SummaryBoxLensBtn,
  SummaryBoxLensBtnSymbolView,
  SummaryBoxLensBtnSymbol,
  SummaryBoxbtn,
  SummaryBoxbtnImg,
  StyledPopup
} from "./style";

import { Logo, World, Dollar, Country } from "../../Assets";

const Footer = props => {
  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <BackToTopBox onClick={ToTop}>Back to top</BackToTopBox>
      <ShortcutBox>
        <ShortcutSec>
          <ShortcutSecTitle>Get to Know Us</ShortcutSecTitle>
          <ShortcutSecText>Careers</ShortcutSecText>
          <ShortcutSecText>Blog</ShortcutSecText>
          <ShortcutSecText>About Amazon</ShortcutSecText>
          <ShortcutSecText>Investor Relations</ShortcutSecText>
          <ShortcutSecText>Amazon Devices</ShortcutSecText>
        </ShortcutSec>
        <ShortcutSec>
          <ShortcutSecTitle>Make Money with Us</ShortcutSecTitle>
          <ShortcutSecText>Sell products on Amazon</ShortcutSecText>
          <ShortcutSecText>Sell on Amazon Business</ShortcutSecText>
          <ShortcutSecText>Sell apps on Amazon</ShortcutSecText>
          <ShortcutSecText>Become an Affiliate</ShortcutSecText>
          <ShortcutSecText>Advertise Your Products</ShortcutSecText>
          <ShortcutSecText>Self-Publish with Us</ShortcutSecText>
          <ShortcutSecText>Host an Amazon Hub</ShortcutSecText>
          <ShortcutSecText>› See More Make Money with Us</ShortcutSecText>
        </ShortcutSec>
        <ShortcutSec>
          <ShortcutSecTitle>Amazon Payment Products</ShortcutSecTitle>
          <ShortcutSecText>Amazon Business Card</ShortcutSecText>
          <ShortcutSecText>Shop with Points</ShortcutSecText>
          <ShortcutSecText>Reload Your Balance</ShortcutSecText>
          <ShortcutSecText>Amazon Currency Converter</ShortcutSecText>
        </ShortcutSec>
        <ShortcutSec>
          <ShortcutSecTitle> Let Us Help You</ShortcutSecTitle>
          <ShortcutSecText>Amazon and COVID-19</ShortcutSecText>
          <ShortcutSecText>Your Account</ShortcutSecText>
          <ShortcutSecText>Your Orders</ShortcutSecText>
          <ShortcutSecText>Shipping Rates & Policies</ShortcutSecText>
          <ShortcutSecText>Returns & Replacements</ShortcutSecText>
          <ShortcutSecText>Amazon Assistant</ShortcutSecText>
          <ShortcutSecText>Help</ShortcutSecText>
        </ShortcutSec>
      </ShortcutBox>
      <SummaryBox>
        <SummaryBoxImg src={Logo} />
        <SummaryBtnSec>
          <StyledPopup
            trigger={open => (
              <SummaryBoxLensBtn>
                <SummaryBoxbtnImg src={World} />
                English
                <SummaryBoxLensBtnSymbolView>
                  <SummaryBoxLensBtnSymbol> &#9652; </SummaryBoxLensBtnSymbol>
                  <SummaryBoxLensBtnSymbol> &#9662; </SummaryBoxLensBtnSymbol>
                </SummaryBoxLensBtnSymbolView>
              </SummaryBoxLensBtn>
            )}
            position="top left"
            closeOnDocumentClick
            on="hover"
          >
            <ConuntryPopupView show={true} />
          </StyledPopup>
          <SummaryBoxbtn>
            <SummaryBoxbtnImgMon src={Dollar} />
            USD - U.S. Doller
          </SummaryBoxbtn>
          <SummaryBoxbtn>
            <SummaryBoxbtnImgCou src={Country} />
            Republic of Korea
          </SummaryBoxbtn>
        </SummaryBtnSec>
      </SummaryBox>
    </>
  );
};

export default Footer;
