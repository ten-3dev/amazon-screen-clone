import styled from "styled-components";
import Popup from "reactjs-popup";

const LanguageBox = styled.div`
  height: 30px;
  display: flex;
  align-items: flex-end;
  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    outline: 1px solid white;
  }
`;

const LanguageImg = styled.img`
  height: 65%;
`;

const LanguageText = styled.span`
  color: gray;
  font-size: 7px;
  margin-left: 5px;
`;

const StyledPopup = styled(Popup)`
  &-overlay {
    margin-top: 60px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const LanguagePopupBox = styled.div`
  background-color: white;
  padding: 10px;
  width: 220px;
  border-radius: 5px;
`;

const LanguagePopupView = styled.div`
  ${props => {
    if (props.position) {
      return "display: flex; justify-content: space-between;";
    }
  }}
`;

const LanguagePopupTitle = styled.span`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
`;

const LanguagePopupLearnMore = styled.a`
  font-size: 11px;
  margin-left: 10px;
  color: #309bd8;
  text-decoration: none;
  outline: 0;
  &:hover {
    color: rgb(255, 69, 0);
    text-decoration: underline;
  }
`;

const LanguagePopupSelectedBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;

const LanguagePopupSelectedText = styled.span`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 13px;
  margin-left: 3px;
`;

const LanguagePopupSelectedBtn = styled.input`
  height: 100%;
`;

const LanguagePopupAnotherView = styled.div`
  margin-top: 5px;
  height: 30px;
  font-size: 13px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    input[type="radio"] + div {
      background-color: rgba(255, 69, 0, 0.8);
      + span {
        color: rgba(255, 69, 0, 0.8);
        text-decoration: underline;
      }
    }
  }
`;

const SelectView = styled.div`
  width: 8.5px;
  height: 8.5px;
  border-radius: 8px;
  position: absolute;
  margin-left: 7.2px;
  margin-top: 3.5px;
`;

const LanguagePopupAnotherText = styled.span`
  margin-left: 3px;
`;

const LanguagePopupAnotherBtn = styled.input`
  height: 100%;
`;

const ChangeMoneyBox = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  line-height: 20px;
`;

const PopupAlearBox = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  padding-top: 10px;
  display: flex;
  align-items: center;
`;
const PopupAlearImg = styled.img`
  width: 20px;
  border: 0.5px solid gray;
  background-color: green;
`;

const PopupAlearText = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const ChangeCountryBox = styled.div`
  widht: 100%;
  height: 20px;
  text-align: center;
`;

const ChangeCountryText = styled.a`
  font-size: 12.5px;
  margin-left: 10px;
  color: darkblue;
  text-decoration: none;
  outline: 0;
  &:hover {
    color: rgb(255, 69, 0);
    text-decoration: underline;
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
  height: 400px;
  background-color: gray;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
`;

const SignBtn = styled.button`
  width: 190px;
  height: 40px;
  outline: 0;
  border-radius: 5px;
  font-size: 14px;
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
`;

export {
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
  SubInfoRight
};
