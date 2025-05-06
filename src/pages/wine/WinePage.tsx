import styled from "styled-components";
import DetailHeader from "../../components/common/Header/DetailHeader";
import SideBar from "../../components/common/SideBar";
import AdminHeader from "../../components/common/Header/AdminHeader";
import { Outlet } from "react-router-dom";

export default function WinePage() {
  return (
    <Container>
      <AdminHeader />
      <DetailHeader />
      <ContentContainer>
        <SideBar
          title="와인정보 관리"
          menuItems={[
            { text: "등록된 와인 리스트", path: "/wine" },
            { text: "와인 추가", path: "/wine/add" },
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
