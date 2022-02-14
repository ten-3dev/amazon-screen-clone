import React, { useState } from "react";
import * as Styles from "./style";

const SignInPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Styles.StyledPopupWrapper onMouseEnter={() => setIsOpen(true)}>
      <Styles.StyledPopup
        open={isOpen}
        trigger={() => (
          <Styles.SignInBox>
            <Styles.SignInTitle>Hello, Sign in</Styles.SignInTitle>
            <Styles.SignInTextView>
              <Styles.SignInViewText>Account & Lists</Styles.SignInViewText>
              <Styles.SignInViewSymbol>&#9660;</Styles.SignInViewSymbol>
            </Styles.SignInTextView>
          </Styles.SignInBox>
        )}
        position="bottom right"
        closeOnDocumentClick
      >
        <Styles.SignBox onMouseLeave={() => setIsOpen(false)}>
          <Styles.SignBtn>Sign in</Styles.SignBtn>
          <Styles.CustomerBox>
            <Styles.CustomerTitle>New customer? </Styles.CustomerTitle>
            <Styles.CustomerCreate href="www.naver.com">
              Start here.
            </Styles.CustomerCreate>
          </Styles.CustomerBox>
          <Styles.SubInfoBox>
            <Styles.SubInfoLeft>
              <Styles.SubInfoTitle>Your Lists</Styles.SubInfoTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Create a List
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Find a List Or Registry
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                AmazonSmile Charity Lists
              </Styles.SubInfoSubTitle>
            </Styles.SubInfoLeft>
            <Styles.SubInfoRight>
              <Styles.SubInfoTitle>Your Account</Styles.SubInfoTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Account
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Orders
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Recommendations
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Browsing History
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Watchlist
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Video Purchases & Rentals
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Kindle Unlimited
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Content & Devices
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Subscribe & Save Items
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Memberships & Subscriptions
              </Styles.SubInfoSubTitle>
              <Styles.SubInfoSubTitle href="www.naver.com">
                Music Library
              </Styles.SubInfoSubTitle>
            </Styles.SubInfoRight>
          </Styles.SubInfoBox>
        </Styles.SignBox>
      </Styles.StyledPopup>
    </Styles.StyledPopupWrapper>
  );
};

export default SignInPopup;
