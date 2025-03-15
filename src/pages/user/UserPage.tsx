import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";

export default function UserPage() {
  return (
    <>
      <Container>
        <Header />
        <DetailHeader />
        <ContentContainer>
          <SideBar
            title="회원정보 관리"
            menuItems={[{ text: "회원 조회", path: "/user" }]}
          />
        </ContentContainer>
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

const ContentContainer = styled.div`
  padding: 3.5rem 5rem 0rem 7.6rem;
`;
