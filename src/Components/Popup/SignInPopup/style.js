import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopupWrapper = styled.div``;

export const StyledPopup = styled(Popup)`
  &-overlay {
    z-index: 1 !important;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &-content {
    margin-top: -5px;
  }
`;

export const SignInBox = styled.div`
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

export const SignInTitle = styled.span`
  color: white;
  font-size: 12px;
`;

export const SignInTextView = styled.div`
  display: flex;
`;

export const SignInViewText = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 550;
`;

export const SignInViewSymbol = styled.span`
  color: gray;
  font-size: 4px;
  margin-left: 3px;
  display: flex;
  align-items: flex-end;
`;

export const SignBox = styled.div`
  width: 500px;
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

export const SignBtn = styled.button`
  width: 190px;
  height: 50px;
  outline: 0;
  border-radius: 3px;
  font-size: 14px;
  background: linear-gradient(to bottom, #f8e4b1, #f0c14c);
  cursor: pointer;
  border: 1px solid #846a29;
`;

export const CustomerBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

export const CustomerTitle = styled.div`
  font-size: 12px;
`;

export const CustomerCreate = styled.a`
  font-size: 12px;
  margin-left: 5px;
  color: darkblue;
  text-decoration: none;
  &:hover {
    color: rgb(255, 69, 0);
    text-decoration: underline;
  }
`;

export const SubInfoBox = styled.div`
  margin-top: 8px;
  width: 95%;
  height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

export const SubInfoLeft = styled.div`
  flex: 1;
  height: 100%;
`;

export const SubInfoRight = styled.div`
  flex: 1;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 15px;
`;

export const SubInfoTitle = styled.div`
  font-weight: bold;
  margin-bottom: 15px;
`;

export const SubInfoSubTitle = styled.a`
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
