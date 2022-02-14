import React, { useState } from "react";
import * as Styles from "./style";

import { ConuntryPopupView } from "../Popup/ConuntryPopup";
import { Logo, World, Dollar, Country } from "../../Assets";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <Styles.BackToTopBox onClick={ToTop}>Back to top</Styles.BackToTopBox>
      <Styles.ShortcutBox>
        <Styles.ShortcutSec>
          <Styles.ShortcutSecTitle>Get to Know Us</Styles.ShortcutSecTitle>
          <Styles.ShortcutSecText>Careers</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Blog</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>About Amazon</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Investor Relations</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Amazon Devices</Styles.ShortcutSecText>
        </Styles.ShortcutSec>
        <Styles.ShortcutSec>
          <Styles.ShortcutSecTitle>Make Money with Us</Styles.ShortcutSecTitle>
          <Styles.ShortcutSecText>
            Sell products on Amazon
          </Styles.ShortcutSecText>
          <Styles.ShortcutSecText>
            Sell on Amazon Business
          </Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Sell apps on Amazon</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Become an Affiliate</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>
            Advertise Your Products
          </Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Self-Publish with Us</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Host an Amazon Hub</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>
            {"›"} See More Make Money with Us
          </Styles.ShortcutSecText>
        </Styles.ShortcutSec>
        <Styles.ShortcutSec>
          <Styles.ShortcutSecTitle>
            Amazon Payment Products
          </Styles.ShortcutSecTitle>
          <Styles.ShortcutSecText>Amazon Business Card</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Shop with Points</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Reload Your Balance</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>
            Amazon Currency Converter
          </Styles.ShortcutSecText>
        </Styles.ShortcutSec>
        <Styles.ShortcutSec>
          <Styles.ShortcutSecTitle> Let Us Help You</Styles.ShortcutSecTitle>
          <Styles.ShortcutSecText>Amazon and COVID-19</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Your Account</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Your Orders</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>
            Shipping Rates & Policies
          </Styles.ShortcutSecText>
          <Styles.ShortcutSecText>
            Returns & Replacements
          </Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Amazon Assistant</Styles.ShortcutSecText>
          <Styles.ShortcutSecText>Help</Styles.ShortcutSecText>
        </Styles.ShortcutSec>
      </Styles.ShortcutBox>
      <Styles.SummaryBox>
        <Styles.SummaryBoxImg src={Logo} />
        <Styles.SummaryBtnSec>
          <div onMouseEnter={() => setIsOpen(true)}>
            <Styles.StyledPopup
              open={isOpen}
              trigger={() => (
                <Styles.SummaryBoxLensBtn>
                  <Styles.SummaryBoxbtnImg src={World} />
                  English
                  <Styles.SummaryBoxLensBtnSymbolView>
                    <Styles.SummaryBoxLensBtnSymbol>
                      {" "}
                      &#9652;{" "}
                    </Styles.SummaryBoxLensBtnSymbol>
                    <Styles.SummaryBoxLensBtnSymbol>
                      {" "}
                      &#9662;{" "}
                    </Styles.SummaryBoxLensBtnSymbol>
                  </Styles.SummaryBoxLensBtnSymbolView>
                </Styles.SummaryBoxLensBtn>
              )}
              position="top left"
              closeOnDocumentClick
            >
              <ConuntryPopupView show={true} setIsOpen={setIsOpen} />
            </Styles.StyledPopup>
          </div>
          <Styles.SummaryBoxbtn>
            <Styles.SummaryBoxbtnImgMon src={Dollar} />
            USD - U.S. Doller
          </Styles.SummaryBoxbtn>
          <Styles.SummaryBoxbtn>
            <Styles.SummaryBoxbtnImgCou src={Country} />
            Republic of Korea
          </Styles.SummaryBoxbtn>
        </Styles.SummaryBtnSec>
      </Styles.SummaryBox>
    </>
  );
};

export default Footer;
