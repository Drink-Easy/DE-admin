import { ReportRow } from "../types/CommonTypes";

// column 이름과 row 필드를 매칭하는 함수
export function renderReportCell(
  row: ReportRow,
  column: string
): React.ReactNode {
  switch (column) {
    case "접수 번호":
      return row.id;
    case "신고 날짜":
      return row.reportDate;
    case "신고자 ID":
      return row.reporterId;
    case "신고대상 ID":
      return row.reportedId;
    case "신고내용":
      return row.content;
    case "처리상태":
      return row.status;
    case "처리완료일":
      return row.completedDate;
    case "처리결과":
      return row.result;
    default:
      return "-";
  }
}
