import React from "react";

import { Country } from "../../Assets";

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
  SignInBox,
  SignInTitle,
  SignInTextView,
  SignInViewText,
  SignInViewSymbol,
  SignBox,
  SignBtn,
  CustomerBox,
  CustomerCreate,
  CustomerTitle,
  SubInfoBox,
  SubInfoLeft,
  SubInfoRight,
  SubInfoTitle,
  SubInfoSubTitle
} from "./style";

const CountryPopup = () => {
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
      onOpen={() => console.log("asdf")}
      onClose={() => console.log("asdf1")}
    >
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
      </LanguagePopupBox>
    </StyledPopup>
  );
};

const SignInPopup = () => {
  return (
    <StyledPopup
      trigger={open => (
        <SignInBox>
          <SignInTitle>Hello, Sign in</SignInTitle>
          <SignInTextView>
            <SignInViewText>Account & Lists</SignInViewText>
            <SignInViewSymbol>&#9660;</SignInViewSymbol>
          </SignInTextView>
        </SignInBox>
      )}
      position="bottom right"
      closeOnDocumentClick
      on="hover"
      onOpen={() => console.log("asdf")}
      onClose={() => console.log("asdf1")}
    >
      <SignBox>
        <SignBtn>Sign in</SignBtn>
        <CustomerBox>
          <CustomerTitle>New customer? </CustomerTitle>
          <CustomerCreate href="www.naver.com">Start here.</CustomerCreate>
        </CustomerBox>
        <SubInfoBox>
          <SubInfoLeft>
            <SubInfoTitle>Your Lists</SubInfoTitle>
            <SubInfoSubTitle href="www.naver.com">
              Create a List
            </SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">
              Find a List Or Registry
            </SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">
              AmazonSmile Charity Lists
            </SubInfoSubTitle>
          </SubInfoLeft>
          <SubInfoRight>
            <SubInfoTitle>Your Account</SubInfoTitle>
            <SubInfoSubTitle href="www.naver.com">Account</SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">Orders</SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">
              Recommendations
            </SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">
              Browsing History
            </SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">Watchlist</SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">
              Video Purchases & Rentals
            </SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">
              Kindle Unlimited
            </SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">
              Content & Devices
            </SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">
              Subscribe & Save Items
            </SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">
              Memberships & Subscriptions
            </SubInfoSubTitle>
            <SubInfoSubTitle href="www.naver.com">
              Music Library
            </SubInfoSubTitle>
          </SubInfoRight>
        </SubInfoBox>
      </SignBox>
    </StyledPopup>
  );
};

export { CountryPopup, SignInPopup };
