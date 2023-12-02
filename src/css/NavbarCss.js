// import styled component from styled-components
import { styled } from "styled-components";

export const NavbarConent = styled.div`
  z-index: 1000;
  display: flex;
  position: fixed;
  padding-top: 20px;
  justify-content: space-between;
  width: 100%;
  background-color: ghostwhite;
  box-shadow: 0px 0px 10px 0px #009688;
  align-items: center;
  p {
    font-family: cursive;
    padding-left: 20px;
  }
  div {
    width: 20%;
    display: flex;
    /* align-items: center; */
    padding: 0px 20px 0px 0px;
    justify-content: space-between;
  }
`;
