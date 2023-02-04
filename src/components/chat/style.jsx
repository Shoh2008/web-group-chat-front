import styled from "styled-components";
import { theme } from "../../theme";

export const Block = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: ${theme.black};
  transition: 0.5s;
  .menu {
    display: flex;
    transition: 0.5s;
    z-index: 5;
    background: ${theme.black};
  }
  .menuBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    border-radius: 50px;
    margin: 5px;
    z-index: 10;
    padding: 0 10px;
    border: ${theme.border};
    background: ${theme.button};
    font-size: 25px;
  }
  @media screen and (max-width: 650px) {
    .menu {
      position: absolute;
      margin-left: -380px;
      width: 100%;
    }
  }
`;

export const Userbar = styled.div`
  height: 100vh;
  width: 80px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background: ${theme.black};
  color: ${theme.textColor};
  position: relative;
  padding: 10px;
  button {
    padding: 5px 3px;
    display: flex;
  }
  .profile {
    min-height: 60px;
    min-width: 60px;
    display: flex;
    font-size: 25px;
    justify-content: center;
    align-items: center;
    border: ${theme.border};
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    cursor: crosshair;
  }
  .name {
    color: ${theme.textColor};
    font-size: 40px;
    transform: rotate(-90deg) translate(200px, -70px);
  }
`;
