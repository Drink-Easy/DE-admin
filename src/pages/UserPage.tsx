import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import DetailHeader from "../components/detail/DetailHeader";

export default function UserPage() {
  return (
    <>
      <Container>
        <Header />
        <DetailHeader />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 102.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
