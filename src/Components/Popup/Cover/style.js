import styled from "styled-components";

export const CoverWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  z-index: 1;
  display: ${props => !props.open && "none"};
`;
