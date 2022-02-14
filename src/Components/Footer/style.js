import styled from "styled-components";
import Popup from "reactjs-popup";

export const BackToTopBox = styled.div`
  width: 100%;
  height: 45px;
  background-color: #37475a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: #4a607a;
  }
  @media screen and (max-width: 1000px) {
    width: 1000px;
  }
`;

export const ShortcutBox = styled.div`
  background-color: #232f3e;
  width: 100%;
  height: 400px;
  justify-content: center;
  display: flex;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    width: 1000px;
  }
`;
export const ShortcutSec = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const ShortcutSecTitle = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const ShortcutSecText = styled.span`
  font-size: 13px;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SummaryBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #232f3e;
  border-top: 1px solid rgba(100, 100, 100, 0.5);
  white-space: nowrap;
  @media screen and (max-width: 1000px) {
    width: 1000px;
  }
`;

export const SummaryBoxImg = styled.img`
  width: 75px;
  cursor: pointer;
  margin-right: 70px;
`;

export const SummaryBtnSec = styled.div`
  display: flex;
  justify-content: center;
`;

export const SummaryBoxLensBtn = styled.div`
  cursor: pointer;
  margin-right: 10px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  display: flex;
  border-radius: 3px;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  padding-right: 10px;
  padding-left: 5px;
`;

export const SummaryBoxLensBtnSymbolView = styled.div`
  margin-left: 20px;
`;

export const SummaryBoxLensBtnSymbol = styled.div`
  font-size: 1px;
  line-height: 8px;
`;

export const SummaryBoxbtn = styled.div`
  cursor: pointer;
  height: 30px;
  display: flex;
  border-radius: 3px;
  align-items: center;
  margin-right: 10px;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding-right: 15px;
  font-size: 13px;
`;

export const SummaryBoxbtnImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const SummaryBoxbtnImgMon = styled.img`
  width: 8px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const SummaryBoxbtnImgCou = styled.img`
  width: 18px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const StyledPopupWrapper = styled.div``;

export const StyledPopup = styled(Popup)``;
