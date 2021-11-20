import React from "react";

import {
  StyledPopup,
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

export default SignInPopup;
