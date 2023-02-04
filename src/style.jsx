import styled from "styled-components";
import { theme } from "./theme";

export const Block = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  scroll-behavior: smooth;
  color: ${theme.textColor};
  background: ${theme.black};
  overflow: hidden;
  &::-webkit-scrollbar {
    height: 0;
    width: 10px;
    background: ${theme.scrollTrack};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${theme.scrollThumb};
  }
`;

export const Button = styled.button`
  outline: none;
  border: ${theme.border};
  background: ${theme.button};
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  color: ${theme.btnText};
  font-weight: bold;
`;

export const Input = styled.input`
  outline: none;
  border: ${theme.border};
  background: ${theme.input};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  color: ${theme.textColor};
  margin: 10px;
  font-weight: bold;
`;