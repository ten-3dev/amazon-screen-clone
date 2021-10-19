import styled from "styled-components";
import Popup from "reactjs-popup";

const StyledPopup = styled(Popup)`
  &-overlay {
    margin-top: 60px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const SignInBox = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    outline: 1px solid white;
  }
`;

const SignInTitle = styled.span`
  color: white;
  font-size: 12px;
`;

const SignInTextView = styled.div`
  display: flex;
`;

const SignInViewText = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 550;
`;

const SignInViewSymbol = styled.span`
  color: gray;
  font-size: 4px;
  margin-left: 3px;
  display: flex;
  align-items: flex-end;
`;

const SignBox = styled.div`
  width: 500px;
  height: 360px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: white;
`;

const SignBtn = styled.button`
  width: 190px;
  height: 50px;
  outline: 0;
  border-radius: 5px;
  font-size: 14px;
  background-color: yellow;
  border: 1px solid darkyellow;
  cursor: pointer;
`;

const CustomerBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

const CustomerTitle = styled.div`
  font-size: 12px;
`;

const CustomerCreate = styled.a`
  font-size: 12px;
  margin-left: 5px;
  color: darkblue;
  text-decoration: none;
  &:hover {
    color: rgb(255, 69, 0);
    text-decoration: underline;
  }
`;

const SubInfoBox = styled.div`
  margin-top: 8px;
  width: 95%;
  height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

const SubInfoLeft = styled.div`
  flex: 1;
  height: 100%;
`;

const SubInfoRight = styled.div`
  flex: 1;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 15px;
`;

const SubInfoTitle = styled.div`
  font-weight: bold;
  margin-bottom: 15px;
`;

const SubInfoSubTitle = styled.a`
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  &:hover {
    color: rgb(255, 69, 0);
    text-decoration: underline;
  }
`;

export {
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
};
