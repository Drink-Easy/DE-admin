import { WineRow } from "../types/CommonTypes";

// column 이름과 row 필드를 매칭하는 함수
export function renderWineCell(row: WineRow, column: string): React.ReactNode {
  switch (column) {
    case "와인 번호":
      return row.wineId;
    case "와인명":
      return row.name;
    case "종류":
      return row.sort;
    case "지역":
      return row.region;
    case "생산지(국가)":
      return row.country;
    case "품종":
      return row.variety;
    case "등록일":
      return row.createdAt;
    default:
      return "-"; // 매칭되는게 없으면 -
  }
}
