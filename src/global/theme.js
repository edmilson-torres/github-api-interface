import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  body: "#f6f8fa",
  text: "#121620",
  headerBackground: "#24292f",
  headerText: "#fff",
  headerButtonBackground: "#f6f8fa",
  headerButtonText: "#24292f",
  a: "#0969DA",
  noSearchImageBackground: "#f6f8fa",
};

export const darkTheme = {
  body: "#22272e",
  text: "#adbac7",
  headerBackground: "#2d333b",
  headerText: "#cdd9e5",
  headerButtonBackground: "#24292f",
  headerButtonText: "#97a3b0",
  a: "#539BF5",
  noSearchImageBackground: "#2d333b",
};

export const ToggleTheme = styled.button`
  position: absolute;
  top: 85px;
  right: 16px;
  text-align: center;
  font-size: 1.5rem;
`;
