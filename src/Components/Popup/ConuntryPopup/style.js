import styled from "styled-components";
import Popup from "reactjs-popup";

export const LanguageBox = styled.div`
  height: 30px;
  display: flex;
  align-items: flex-end;
  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
  :hover {
    outline: 1px solid white;
  }
`;

export const LanguageImg = styled.img`
  height: 50%;
`;

export const LanguageText = styled.span`
  color: gray;
  font-size: 7px;
  margin-left: 5px;
`;

export const StyledPopupView = styled.div``;

export const StyledPopup = styled(Popup)`
  &-overlay {
    z-index: 1 !important;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &-content {
    margin-top: -5px;
  }
`;

export const LanguagePopupWrapper = styled.div`
  border-width: 0px 20px 20px;
  border-style: solid;
  border-color: transparent;
  margin-left: -20px;
`;

export const LanguagePopupBox = styled.div`
  background-color: white;
  padding: 10px;
  width: 220px;
  border-radius: 5px;
`;

export const LanguagePopupView = styled.div`
  display: ${props => props.position && "flex"};
  justify-content: ${props => props.position && "space-between"};
`;

export const LanguagePopupTitle = styled.span`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
`;

export const LanguagePopupLearnMore = styled.a`
  font-size: 11px;
  margin-left: 10px;
  color: #309bd8;
  text-decoration: none;
  outline: 0;
  :hover {
    color: rgb(255, 69, 0);
    text-decoration: underline;
  }
`;

export const LanguagePopupRadioSelected = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 6px;
  background-color: rgba(255, 69, 0, 0.8);
  display: none;
`;

export const LanguagePopupRadioBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${LanguagePopupRadioSelected} {
    display: ${props => {
      if (props.checked) return "block";
    }};
  }

  :hover {
    div div {
      display: block;
      background-color: ${props =>
        props.checked ? "rgba(255, 69, 0, 0.8)" : "rgba(255, 69, 0, 0.5)"};
    }
    span {
      color: ${props => !props.checked && "rgba(255, 69, 0, 0.8)"};
      text-decoration: ${props => !props.checked && "underline"};
    }
  }
`;

export const LanguagePopupRadioListBox = styled.div`
  width: 100%;
  padding-top: 10px;
  box-sizing: border-box;
`;

export const LanguagePopupSelectedText = styled.span`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-left: 5px;
  cursor: pointer;
  border-bottom: ${props => {
    if (props.checked) return "1px solid rgba(0,0,0,0.1)";
  }};

  padding-bottom: ${props => {
    if (props.checked) return "5px";
  }};
`;

export const LanguagePopupRadio = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 13px;
  border: 1px solid rgba(77, 77, 77, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguagePopupAnotherText = styled.span`
  margin-left: 3px;
`;

export const LanguagePopupAnotherBtn = styled.input`
  height: 100%;
`;

export const ChangeMoneyBox = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  line-height: 20px;
`;

export const PopupAlearBox = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  padding-top: 10px;
  display: flex;
  align-items: center;
`;
export const PopupAlearImg = styled.img`
  width: 20px;
  border: 0.5px solid gray;
  background-color: green;
`;

export const PopupAlearText = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

export const ChangeCountryBox = styled.div`
  width: 100%;
  height: 20px;
  text-align: center;
`;

export const ChangeCountryText = styled.a`
  font-size: 12.5px;
  margin-left: 10px;
  color: darkblue;
  text-decoration: none;
  outline: 0;
  :hover {
    color: rgb(255, 69, 0);
    text-decoration: underline;
  }
`;

export const View = styled.div`
  ${props => {
    if (!props.show) {
      return "display: block";
    }
    return "display: none";
  }}
`;
