import styled from "styled-components";
import { theme } from "../../theme";

export const Block = styled.div`
  width: 100%;
  height: 100vh;
  background: ${theme.black};
  color: ${theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background: ${theme.dark};
  width: 300px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h2 {
    margin: 10px;
    color: ${theme.textColor};
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  @media screen and (max-width: 650px) {
    width: 90%;
    padding: 30px 20px;
  }
`;
