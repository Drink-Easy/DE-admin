import { UserRow } from "../types/CommonTypes";

// column 이름과 row 필드를 매칭하는 함수
export function renderUserCell(row: UserRow, column: string): React.ReactNode {
  switch (column) {
    case "회원 번호":
      return row.userNum;
    case "회원명":
      return row.name;
    case "회원 ID":
      return row.userId;
    case "전화번호":
      return row.phone;
    case "회원 상태":
      return row.status;
    case "가입일":
      return row.createdAt;
    case "정지 마감일":
      return row.banEndDate;
    default:
      return "-"; // 매칭되는게 없으면 -
  }
}
