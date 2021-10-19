import React from "react";

import {
  BottomSignInBox,
  BottomSignInSec,
  BottomSignInSecText,
  BottomSignInSecBtn,
  BottomSignInSecNewSec,
  BottomSignInSecNewSecText,
  BottomSignInSecNewSecBtn
} from "./style";

const BottomSignIn = props => {
  return (
    <BottomSignInBox>
      <BottomSignInSec>
        <BottomSignInSecText>
          See personalized recommendations
        </BottomSignInSecText>
        <BottomSignInSecBtn>Sign in</BottomSignInSecBtn>
        <BottomSignInSecNewSec>
          <BottomSignInSecNewSecText>New customer?</BottomSignInSecNewSecText>
          <BottomSignInSecNewSecBtn>Start here.</BottomSignInSecNewSecBtn>
        </BottomSignInSecNewSec>
      </BottomSignInSec>
    </BottomSignInBox>
  );
};

export default BottomSignIn;
