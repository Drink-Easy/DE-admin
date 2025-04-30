export function formatDate(dateString: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);

  // 날짜를 YYYY-MM-DD 형태로 변환
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // month는 0~11
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
