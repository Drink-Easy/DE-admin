import styled from "styled-components";
import Header from "../../components/common/Header/MainHeader";
import Footer from "../../components/common/Footer";

export default function MainPage() {
  return (
    <>
      <Container>
        <Header />
        <Line />
        {/* 이미지 예정 */}
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 102.4rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 1px;
`;
