import { useState } from "react";
import styled from "styled-components";
import DetailHeader from "../../components/common/Header/DetailHeader";
import SideBar from "../../components/common/SideBar";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";
import { useNavigate } from "react-router-dom";
import { wineColumns } from "../../constants/constants";
import AdminHeader from "../../components/common/Header/AdminHeader";
import { useGetWineSearch } from "../../hooks/useGetWineSearch";

export default function WinePage() {
  const navigate = useNavigate();

  const fieldNames = ["searchName", "wineSort", "wineVariety", "wineCountry"];

  // ✨ state를 필드 이름 기반으로 관리
  const [searchParams, setSearchParams] = useState({
    searchName: "",
    wineSort: "",
    wineVariety: "",
    wineCountry: "",
  });

  const [searchTrigger, setSearchTrigger] = useState(0);

  const { data } = useGetWineSearch({
    ...searchParams,
    page: 0,
    size: 7,
    sort: "name,ASC",
    trigger: searchTrigger,
  });

  const handleInputChange = (index: number, value: string) => {
    const field = fieldNames[index];
    setSearchParams((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearchClick = () => {
    setSearchTrigger((prev) => prev + 1);
  };

  const handleRowClick = (id: string) => {
    navigate(`/wine/${id}`);
  };

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
        <InnerContainer>
          <SearchBox
            titles={["와인명 :", "종류 :", "품종 :", "생산지 :"]}
            inputValues={fieldNames.map(
              (name) => searchParams[name as keyof typeof searchParams]
            )}
            onInputChange={handleInputChange}
            onSearchClick={handleSearchClick}
          />
          <Table
            columns={wineColumns}
            data={(data?.result.content ?? []).map(({ wineId, ...wine }) => ({
              id: wineId.toString(), // wineId만 따로 꺼내고
              ...wine, // 나머지만 넘긴다 (wineId는 제외)
            }))}
            onRowClick={handleRowClick}
          />
        </InnerContainer>
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

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
`;
