import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const colors = {
  purple_100: "#7E13B1",

  gray_100: "rgba(0, 0, 0, 0.3)",
  gray_200: "#D9D9D9",
  gray_300: "#686565",

  white: "#fff",
  black: "#000",
};

const fonts = {
  Title_1: css`
    font-family: "Avenir Next";
    font-size: 3.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 4.375rem */
    letter-spacing: -0.07813rem;
  `,

  Title_2: css`
    font-family: "Avenir Next";
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 2.625rem */
    letter-spacing: -0.04688rem;
  `,

  Body_1: css`
    font-family: "Avenir Next";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.75rem */
    letter-spacing: -0.03125rem;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
