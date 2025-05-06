import { useState } from "react";
import styled from "styled-components";
import DetailHeader from "../../components/common/Header/DetailHeader";
import SideBar from "../../components/common/SideBar";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";
import AdminHeader from "../../components/common/Header/AdminHeader";
import { reportColumns } from "../../constants/constants";
import { ReportRow } from "../../types/CommonTypes";
import { renderReportCell } from "../../utils/renderReportCell";
import { formatDate } from "../../utils/formatDate";

export default function ReportPage() {
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
      <AdminHeader />
      <DetailHeader />
      <ContentContainer>
        <SideBar
          title="신고 접수 관리"
          menuItems={[
            { text: "접수된 댓글 신고", path: "/report" },
            { text: "접수된 노쇼 신고", path: "/report/noshow" },
            { text: "처리완료 건", path: "/report/completed" },
          ]}
        />
        <InnerContainer>
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
