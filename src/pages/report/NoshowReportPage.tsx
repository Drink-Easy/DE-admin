import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";

export default function NoshowReportPage() {
  return (
    <>
      <Container>
        <Header />
        <DetailHeader />
        <ContentContainer>
          <SideBar
            title="신고 접수 관리"
            menuItems={[
              { text: "접수된 댓글 신고", path: "/report" },
              { text: "접수된 노쇼 신고", path: "/report/noshow" },
              { text: "처리완료 건", path: "/report/completed" },
            ]}
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
