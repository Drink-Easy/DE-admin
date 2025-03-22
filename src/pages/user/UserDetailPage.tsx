import styled from "styled-components";
import Header from "../../components/common/Header";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";
import Table from "../../components/common/Table";
import { User } from "../../interface/interface";
import { userColumns } from "../../constants/constants";
import UserDetailContent from "./UserDetailContent";

export default function UserDetailPage() {
  //추후 api로 개별 유저 조회 예정이라 정적 데이터
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
  ];
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
          <InnerContainer>
            <Table columns={userColumns} data={data} />
            <StyledWrapper>
              <UserDetailContent />
            </StyledWrapper>
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
  width: 100%;
`;
const StyledWrapper = styled.div`
  margin-top: 3.65rem;
  margin-left: 6.2rem;
`;
