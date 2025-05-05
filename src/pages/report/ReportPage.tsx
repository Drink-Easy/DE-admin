import styled from "styled-components";
import DetailHeader from "../../components/common/Header/DetailHeader";
import SideBar from "../../components/common/SideBar";
import AdminHeader from "../../components/common/Header/AdminHeader";
import { Outlet } from "react-router-dom";

export default function ReportPage() {
  return (
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
        <Outlet />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4.9rem;
  padding: 3.5rem 5rem 0rem 7.6rem;
`;
