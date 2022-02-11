import styled from "styled-components";

const BottomSignInBox = styled.div`
  width: 100%;
  height: 130px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 1000px) {
    width: 1000px;
  }
`;

const BottomSignInSec = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  outline: 1px solid rgba(100, 100, 100, 0.3);
`;

const BottomSignInSecText = styled.span`
  color: black;
  font-size: 13px;
`;

const BottomSignInSecBtn = styled.button`
  width: 240px;
  height: 30px;
  outline: 0;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(to bottom, #f8e4b1, #f0c14c);
  border: 1px solid #846a29;
  margin-top: 5px;
  cursor: pointer;
`;

const BottomSignInSecNewSec = styled.div`
  height: 20px;
`;

const BottomSignInSecNewSecText = styled.span`
  font-size: 12px;
  color: black;
`;

const BottomSignInSecNewSecBtn = styled.span`
  font-size: 12px;
  margin-left: 5px;
  color: #37a6dc;
  cursor: pointer;
`;

export {
  BottomSignInBox,
  BottomSignInSec,
  BottomSignInSecText,
  BottomSignInSecBtn,
  BottomSignInSecNewSec,
  BottomSignInSecNewSecText,
  BottomSignInSecNewSecBtn
};
