import { useState } from "react";
import styled from "styled-components";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";
import { useNavigate } from "react-router-dom";
import { userColumns } from "../../constants/constants";
import { renderUserCell } from "../../utils/renderUserCell";
import { formatDate } from "../../utils/formatDate";
import { UserRow } from "../../types/CommonTypes";

export default function UserMainPage() {
  const navigate = useNavigate();

  const fieldNames = ["name", "userId"];
  const [searchParams, setSearchParams] = useState({
    name: "",
    userId: "",
  });
  // const [searchTrigger, setSearchTrigger] = useState(0);

  const data: UserRow[] = [
    {
      id: "wsj11029",
      userNum: "C011123",
      name: "위승주",
      userId: "wsj11029",
      phone: "010-3655-5641",
      status: "정상",
      createdAt: "2025-05-05T15:51:39.535Z",
      banEndDate: "2025-05-05T15:51:39.535Z",
    },
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

  const handleInputChange = (index: number, value: string) => {
    const key = fieldNames[index];
    setSearchParams((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearchClick = () => {
    // setSearchTrigger((prev) => prev + 1);
    // 나중에 API 연동 시 여기에 트리거 넣는 걸루..
  };

  const handleRowClick = (id: string) => {
    navigate(`/user/${id}`);
  };

  return (
    <Container>
      <SearchBox
        titles={["회원명 :", "회원 ID :"]}
        inputValues={fieldNames.map(
          (name) => searchParams[name as keyof typeof searchParams]
        )}
        onInputChange={handleInputChange}
        onSearchClick={handleSearchClick}
      />
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
`;
