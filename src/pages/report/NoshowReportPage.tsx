import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";

export default function NoshowReportPage() {
  const columns = [
    "접수 번호",
    "신고 날짜",
    "신고자 ID",
    "신고대상 ID",
    "신고내용",
    "처리상태",
    "처리 완료일",
    "처리결과",
  ];
  const data = [
    [
      "001",
      "2024-11-13",
      "wsj11029",
      "oyatplum",
      "비속어 신고",
      "처리 전",
      "-",
      "-",
    ],
    [
      "001",
      "2024-11-13",
      "wsj11029",
      "oyatplum",
      "비속어 신고",
      "처리 전",
      "-",
      "-",
    ],
  ];

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
          <InnerContainer>
            <SearchBox titles={["신고자 :", "신고 대상 :"]} />
            <Table columns={columns} data={data} />
          </InnerContainer>
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
  display: flex;
  align-items: flex-start;
  gap: 4.9rem;
  padding: 3.5rem 5rem 0rem 7.6rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
`;
