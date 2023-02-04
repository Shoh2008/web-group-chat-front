import styled from "styled-components";
import { theme } from "../../theme";

export const UserBox = styled.div`
  height: 100vh;
  width: 300px;
  background: ${theme.dark};
  transition: 0.5s;
  overflow: auto;
  .active {
    background: ${theme.button} !important;
    color: ${theme.btnText} !important;
    p {
      color: ${theme.btnText} !important;
    }
  }
  .line {
    background: ${theme.black};
    margin: 5px;
    padding: 15px 0;
    border-radius: 10px;
    input,
    button {
      width: 90%;
      margin: 5px 15px;
    }
  }
  .mark {
    background: ${theme.button} !important;
    color: ${theme.btnText} !important;
    p {
      color: ${theme.btnText} !important;
    }
  }
  .user {
    height: 80px;
    display: flex;
    margin: 5px;
    align-items: center;
    border-radius: 10px;
    cursor: crosshair;
    color: ${theme.textColor};
    transition: 0.3s;
    position: relative;
    background: ${theme.black};
    button {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      padding: 0;
      cursor: pointer;
    }
    span {
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
      margin: 10px;
      overflow: hidden;
    }
    .title {
      padding: 15px 0;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    b {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p {
      font-size: 15px;
      color: ${theme.textColor};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    b::first-letter,
    p::first-letter {
      text-transform: uppercase;
    }
  }
  &::-webkit-scrollbar {
    height: 0;
    width: 10px;
    background: ${theme.scrollTrack};
    border: ${theme.hrdark};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${theme.scrollThumb};
  }
  @media screen and (max-width: 650px) {
    position: absolute;
    left: 80px;
    width: calc(100% - 80px);
    z-index: 5;
  }
`;
