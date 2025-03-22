import styled from "styled-components";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";
import AdminHeader from "../../components/AdminHeader";

export default function ClassMemberPage() {
  return (
    <>
      <Container>
        <AdminHeader />
        <DetailHeader />
        <ContentContainer>
          <SideBar
            title="클래스 관리"
            menuItems={[
              { text: "글 작성", path: "/class" },
              { text: "클래스 작성 멤버", path: "/class/member" },
            ]}
          />
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
  padding: 3.5rem 5rem 0rem 7.6rem;
`;
