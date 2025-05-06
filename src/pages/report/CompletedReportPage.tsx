import { useState } from "react";
import styled from "styled-components";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";
import { reportColumns } from "../../constants/constants";
import { ReportRow } from "../../types/CommonTypes";
import { renderReportCell } from "../../utils/renderReportCell";
import { formatDate } from "../../utils/formatDate";

export default function CompletedReportPage() {
  const fieldNames = ["reporter", "reported"];
  const [searchParams, setSearchParams] = useState({
    reporter: "",
    reported: "",
  });
  // const [searchTrigger, setSearchTrigger] = useState(0);

  const data: ReportRow[] = [
    {
      id: "011",
      reportDate: "2024-11-13",
      reporterId: "wsj11029",
      reportedId: "oyatplum",
      content: "노쇼 신고",
      status: "처리 전",
      completedDate: "-",
      result: "-",
    },
    {
      id: "042",
      reportDate: "2024-11-24",
      reporterId: "wsj11029",
      reportedId: "kimjuns00",
      content: "노쇼 신고",
      status: "처리 전",
      completedDate: "-",
      result: "-",
    },
  ];

  const handleInputChange = (index: number, value: string) => {
    const key = fieldNames[index];
    setSearchParams((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearchClick = () => {
    // 나중에 API 트리거 연동
  };

  return (
    <Container>
      <SearchBox
        titles={["신고자 :", "신고 대상 :"]}
        inputValues={fieldNames.map(
          (name) => searchParams[name as keyof typeof searchParams]
        )}
        onInputChange={handleInputChange}
        onSearchClick={handleSearchClick}
      />
      <Table
        columns={reportColumns}
        data={data.map((row) => ({
          ...row,
          createdAt: formatDate(row.completedDate),
        }))}
        renderCell={renderReportCell}
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
