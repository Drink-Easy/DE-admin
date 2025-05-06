import styled from "styled-components";
import Table from "../../components/common/Table";
import UserDetailContent from "../../components/UserDetailContent";
import { useNavigate } from "react-router-dom";
import { userColumns } from "../../constants/constants";
import { renderUserCell } from "../../utils/renderUserCell";
import { formatDate } from "../../utils/formatDate";
import { UserRow } from "../../types/CommonTypes";

export default function UserDetailPage() {
  const navigate = useNavigate();

  //추후 api로 개별 유저 조회 예정이라 정적 데이터
  const data: UserRow[] = [
    {
      id: "kimcs99",
      userNum: "C011124",
      name: "김철수",
      userId: "kimcs99",
      phone: "010-2222-3333",
      status: "정상",
      createdAt: "2025-05-05T15:51:39.535Z",
      banEndDate: "2025-05-05T15:51:39.535Z",
    },
  ];

  const handleRowClick = (id: string) => {
    navigate(`/user/${id}`);
  };

  return (
    <Container>
      <Table
        columns={userColumns}
        data={data.map((user) => ({
          id: user.userId,
          userNum: user.userNum,
          name: user.name,
          userId: user.userId,
          phone: user.phone,
          status: user.status,
          createdAt: formatDate(user.createdAt),
          banEndDate: formatDate(user.banEndDate),
        }))}
        onRowClick={handleRowClick}
        renderCell={renderUserCell}
      />
      <StyledWrapper>
        <UserDetailContent />
      </StyledWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledWrapper = styled.div`
  margin-top: 3.65rem;
  margin-left: 6.2rem;
`;
