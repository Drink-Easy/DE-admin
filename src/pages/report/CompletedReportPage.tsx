import styled from "styled-components";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";
import { User } from "../../interface/interface";
import AdminHeader from "../../components/common/Header/AdminHeader";

export default function CompletedReportPage() {
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
  const data: User[] = [
    {
      id: "C011123",
      name: "위승주",
      userId: "wsj11029",
      phone: "010-3655-5641",
      status: "정상",
      joinDate: "2024-09-03",
      banEndDate: "-",
      action: "-",
    },
    {
      id: "C011124",
      name: "김철수",
      userId: "kimcs99",
      phone: "010-2222-3333",
      status: "정상",
      joinDate: "2024-07-01",
      banEndDate: "-",
      action: "-",
    },
  ];

  return (
    <>
      <Container>
        <AdminHeader />
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
