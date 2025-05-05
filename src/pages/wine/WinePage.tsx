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
import { formatDate } from "../../utils/formatDate";
import Pagination from "../../components/common/Pagination";
import { renderWineCell } from "../../utils/renderWineCell";

export default function WinePage() {
  const navigate = useNavigate();

  const fieldNames = ["searchName", "wineSort", "wineVariety", "wineCountry"];
  const [searchTrigger, setSearchTrigger] = useState(0);
  const [page, setPage] = useState(0);

  // state를 필드 이름 기반으로 관리
  const [searchParams, setSearchParams] = useState({
    searchName: "",
    wineSort: "",
    wineVariety: "",
    wineCountry: "",
  });

  const { data: WineData } = useGetWineSearch({
    ...searchParams,
    page: page,
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

  if (!WineData) {
    return <></>;
  }

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
            data={(WineData?.result.content ?? []).map((wine) => ({
              id: wine.wineId.toString(),
              wineId: wine.wineId.toString(),
              name: wine.name,
              sort: wine.sort,
              region: wine.region,
              country: wine.country,
              variety: wine.variety,
              createdAt: formatDate(wine.createdAt),
            }))}
            onRowClick={handleRowClick}
            renderCell={renderWineCell}
          />
          <Pagination
            currentPage={page + 1} // 서버는 0부터니까 사용자에게는 1부터 보여주기
            totalPages={WineData?.result.totalPages || 1}
            onPageChange={(newPage) => {
              setPage(newPage - 1); // 사용자는 1페이지부터 누르지만 서버는 0부터니까 -1
              setSearchTrigger((prev) => prev + 1); // API 다시 요청
            }}
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
