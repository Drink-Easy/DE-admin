import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnWrapper = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

export const GlobalStyle = createGlobalStyle`
${reset}

#root{
  height: 100dvh;
}

html,body {
  width: 100%;
  height: 100dvh;
  margin: 0 auto;
  font-size: 62.5%;
  -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
  scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
  scroll-behavior: smooth;
  font-family: Avenir;
}

#root::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤바 숨김 */
}

button {
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
}
`;

export default GlobalStyle;
