import React from "react";
import * as Styles from "./style";
import { Country } from "../../../Assets/index";

const ConuntryPopupView = props => {
  return (
    <Styles.LanguagePopupBox>
      <Styles.LanguagePopupView>
        <Styles.LanguagePopupTitle>Change language</Styles.LanguagePopupTitle>
        <Styles.LanguagePopupLearnMore href="www.naver.com">
          Learn More
        </Styles.LanguagePopupLearnMore>
      </Styles.LanguagePopupView>
      <Styles.LanguagePopupRadioBox checked>
        <Styles.LanguagePopupRadio>
          <Styles.LanguagePopupRadioSelected />
        </Styles.LanguagePopupRadio>
        <Styles.LanguagePopupSelectedText checked>
          English - EN
        </Styles.LanguagePopupSelectedText>
      </Styles.LanguagePopupRadioBox>
      <Styles.LanguagePopupRadioListBox>
        <Styles.LanguagePopupRadioBox>
          <Styles.LanguagePopupRadio>
            <Styles.LanguagePopupRadioSelected />
          </Styles.LanguagePopupRadio>
          <Styles.LanguagePopupSelectedText>
            English - EN (1)
          </Styles.LanguagePopupSelectedText>
        </Styles.LanguagePopupRadioBox>
        <Styles.LanguagePopupRadioBox>
          <Styles.LanguagePopupRadio>
            <Styles.LanguagePopupRadioSelected />
          </Styles.LanguagePopupRadio>
          <Styles.LanguagePopupSelectedText>
            English - EN (1)
          </Styles.LanguagePopupSelectedText>
        </Styles.LanguagePopupRadioBox>
        <Styles.LanguagePopupRadioBox>
          <Styles.LanguagePopupRadio>
            <Styles.LanguagePopupRadioSelected />
          </Styles.LanguagePopupRadio>
          <Styles.LanguagePopupSelectedText>
            English - EN (1)
          </Styles.LanguagePopupSelectedText>
        </Styles.LanguagePopupRadioBox>
        <Styles.LanguagePopupRadioBox>
          <Styles.LanguagePopupRadio>
            <Styles.LanguagePopupRadioSelected />
          </Styles.LanguagePopupRadio>
          <Styles.LanguagePopupSelectedText>
            English - EN (1)
          </Styles.LanguagePopupSelectedText>
        </Styles.LanguagePopupRadioBox>
        <Styles.LanguagePopupRadioBox>
          <Styles.LanguagePopupRadio>
            <Styles.LanguagePopupRadioSelected />
          </Styles.LanguagePopupRadio>
          <Styles.LanguagePopupSelectedText>
            English - EN (1)
          </Styles.LanguagePopupSelectedText>
        </Styles.LanguagePopupRadioBox>
      </Styles.LanguagePopupRadioListBox>
      <Styles.View show={props.show}>
        <Styles.ChangeMoneyBox>
          <Styles.LanguagePopupView>
            <Styles.LanguagePopupTitle>
              Change currency
            </Styles.LanguagePopupTitle>
            <Styles.LanguagePopupLearnMore href="www.naver.com">
              Learn More
            </Styles.LanguagePopupLearnMore>
          </Styles.LanguagePopupView>
          <Styles.LanguagePopupView position="between">
            <Styles.LanguagePopupTitle>
              $ - USD - U.S. Dollar
            </Styles.LanguagePopupTitle>
            <Styles.LanguagePopupLearnMore href="www.naver.com">
              Change
            </Styles.LanguagePopupLearnMore>
          </Styles.LanguagePopupView>
        </Styles.ChangeMoneyBox>
        <Styles.PopupAlearBox>
          <Styles.PopupAlearImg src={Country} />
          <Styles.PopupAlearText>
            You are shopping on Amazon.com.
          </Styles.PopupAlearText>
        </Styles.PopupAlearBox>
        <Styles.ChangeCountryBox>
          <Styles.ChangeCountryText href="naver.com">
            Change country/region.
          </Styles.ChangeCountryText>
        </Styles.ChangeCountryBox>
      </Styles.View>
    </Styles.LanguagePopupBox>
  );
};

const CountryPopup = () => {
  return (
    <Styles.StyledPopup
      trigger={open => {
        return (
          <Styles.LanguageBox>
            <Styles.LanguageImg src={Country} />
            <Styles.LanguageText>&#9660;</Styles.LanguageText>
          </Styles.LanguageBox>
        );
      }}
      position="bottom left"
      closeOnDocumentClick
      on="hover"
    >
      <ConuntryPopupView />
    </Styles.StyledPopup>
  );
};

export { CountryPopup, ConuntryPopupView };
