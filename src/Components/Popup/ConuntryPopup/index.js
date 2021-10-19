import React from "react";

import { Country } from "../../../Assets/index";

import {
  LanguageBox,
  LanguageImg,
  LanguageText,
  StyledPopup,
  LanguagePopupBox,
  LanguagePopupView,
  LanguagePopupTitle,
  LanguagePopupLearnMore,
  LanguagePopupSelectedBox,
  LanguagePopupSelectedText,
  LanguagePopupSelectedBtn,
  LanguagePopupAnotherView,
  SelectView,
  LanguagePopupAnotherText,
  LanguagePopupAnotherBtn,
  ChangeMoneyBox,
  PopupAlearBox,
  PopupAlearImg,
  PopupAlearText,
  ChangeCountryBox,
  ChangeCountryText,
  View
} from "./style";

const ConuntryPopupView = props => {
  return (
    <LanguagePopupBox>
      <LanguagePopupView>
        <LanguagePopupTitle>Change language</LanguagePopupTitle>
        <LanguagePopupLearnMore href="www.naver.com">
          Learn More
        </LanguagePopupLearnMore>
      </LanguagePopupView>
      <LanguagePopupSelectedBox>
        <LanguagePopupSelectedBtn type="radio" defaultChecked />
        <LanguagePopupSelectedText>English - EN</LanguagePopupSelectedText>
      </LanguagePopupSelectedBox>
      <LanguagePopupAnotherView>
        <LanguagePopupAnotherBtn type="radio" />
        <SelectView />
        <LanguagePopupAnotherText>English - EN (1)</LanguagePopupAnotherText>
      </LanguagePopupAnotherView>
      <LanguagePopupAnotherView>
        <LanguagePopupAnotherBtn type="radio" />
        <SelectView />
        <LanguagePopupAnotherText>English - EN (2)</LanguagePopupAnotherText>
      </LanguagePopupAnotherView>
      <LanguagePopupAnotherView>
        <LanguagePopupAnotherBtn type="radio" />
        <SelectView />
        <LanguagePopupAnotherText>English - EN (3)</LanguagePopupAnotherText>
      </LanguagePopupAnotherView>
      <LanguagePopupAnotherView>
        <LanguagePopupAnotherBtn type="radio" />
        <SelectView />
        <LanguagePopupAnotherText>English - EN (4)</LanguagePopupAnotherText>
      </LanguagePopupAnotherView>
      <View show={props.show}>
        <ChangeMoneyBox>
          <LanguagePopupView>
            <LanguagePopupTitle>Change currency</LanguagePopupTitle>
            <LanguagePopupLearnMore href="www.naver.com">
              Learn More
            </LanguagePopupLearnMore>
          </LanguagePopupView>
          <LanguagePopupView position="between">
            <LanguagePopupTitle>$ - USD - U.S. Dollar</LanguagePopupTitle>
            <LanguagePopupLearnMore href="www.naver.com">
              Change
            </LanguagePopupLearnMore>
          </LanguagePopupView>
        </ChangeMoneyBox>
        <PopupAlearBox>
          <PopupAlearImg src={Country} />
          <PopupAlearText>You are shopping on Amazon.com.</PopupAlearText>
        </PopupAlearBox>
        <ChangeCountryBox>
          <ChangeCountryText href="naver.com">
            Change country/region.
          </ChangeCountryText>
        </ChangeCountryBox>
      </View>
    </LanguagePopupBox>
  );
};

const CountryPopup = props => {
  return (
    <StyledPopup
      trigger={open => (
        <LanguageBox>
          <LanguageImg src={Country} />
          <LanguageText>&#9660;</LanguageText>
        </LanguageBox>
      )}
      position="bottom left"
      closeOnDocumentClick
      on="hover"
    >
      <ConuntryPopupView />
    </StyledPopup>
  );
};

export { CountryPopup, ConuntryPopupView };
