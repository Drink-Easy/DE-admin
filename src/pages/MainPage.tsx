import styled from "styled-components";
import Header from "../assets/components/common/Header";

function MainPage() {
  return (
    <Container>
      <Header />
      <Line />
      {/* 이미지 예정 */}
      {/* footer 예정 */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
const Line = styled.div`
  background-color: white;
  width: 1440px;
  height: 1px;
`;

export default MainPage;
