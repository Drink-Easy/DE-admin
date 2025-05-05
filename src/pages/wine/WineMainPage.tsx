import { useState } from "react";
import styled from "styled-components";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";
import { useNavigate } from "react-router-dom";
import { wineColumns } from "../../constants/constants";
import { useGetWineSearch } from "../../hooks/useGetWineSearch";
import { formatDate } from "../../utils/formatDate";
import Pagination from "../../components/common/Pagination";
import { renderWineCell } from "../../utils/renderWineCell";

export default function WineMainPage() {
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
`;
