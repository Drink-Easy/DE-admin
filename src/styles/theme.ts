import { css } from "styled-components";

const colors = {
  purple_100: "#7E13B1",

  gray_100: "rgba(0, 0, 0, 0.3)",
  gray_200: "#D9D9D9",
  gray_300: "#686565",
  gray_400: "rgba(255, 255, 255, 0.50)",

  white: "#fff",
  black: "#000",
};

const fonts = {
  // 로고
  Title_1: css`
    font-size: 5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 4.375rem */
    letter-spacing: -0.125rem;
  `,

  // 홈 헤더
  Title_2: css`
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 2.625rem */
    letter-spacing: -0.075rem;
  `,

  // 로그인 서브타이틀
  Title_3: css`
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    letter-spacing: -0.0625rem;
  `,

  // 상세페이지 헤더
  Title_4: css`
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 28px */
    letter-spacing: -0.05rem;
  `,

  // 푸터
  Body_1: css`
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.75rem */
    letter-spacing: -0.05rem;
  `,

  // 사이드바 활성화 텍스트
  Body_2: css`
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 21px */
    letter-spacing: -0.0375rem;
  `,

  // 목록 텍스트, 사이드바 비활성화 텍스트
  Body_3: css`
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 21px */
    letter-spacing: -0.0375rem;
  `,

  // 페이지 숫자
  Body_4: css`
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 1.05rem */
    letter-spacing: -0.01875rem;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
