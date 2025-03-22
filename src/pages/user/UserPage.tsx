import styled from "styled-components";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";
import { User } from "../../interface/interface";
import { useNavigate } from "react-router-dom";
import { userColumns } from "../../constants/constants";
import AdminHeader from "../../components/AdminHeader";

export default function UserPage() {
  const navigate = useNavigate();

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

  const handleRowClick = (id: string) => {
    navigate(`/user/${id}`);
  };

  return (
    <>
      <Container>
        <AdminHeader />
        <DetailHeader />
        <ContentContainer>
          <SideBar
            title="회원정보 관리"
            menuItems={[{ text: "회원 조회", path: "/user" }]}
          />
          <InnerContainer>
            <SearchBox titles={["회원명 :", "회원 ID :"]} />
            <Table
              columns={userColumns}
              data={data}
              onRowClick={handleRowClick}
            />
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
