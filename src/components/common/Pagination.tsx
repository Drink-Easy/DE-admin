import styled from "styled-components";
import { BtnWrapper } from "../../styles/GlobalStyle";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = [];
  const maxPage = Math.min(totalPages, 5);

  for (let i = 1; i <= maxPage; i++) {
    pages.push(i);
  }

  return (
    <Container>
      {pages.map((page) => (
        <BtnWrapper key={page} onClick={() => onPageChange(page)}>
          <Number $isActive={page === currentPage}>{page}</Number>
        </BtnWrapper>
      ))}
      {currentPage < totalPages && (
        <BtnWrapper onClick={() => onPageChange(currentPage + 1)}>
          <Number>{">"}</Number>
        </BtnWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0%;
  padding-bottom: 5.25rem;
  width: 8.9375rem;
`;

const Number = styled.p<{ $isActive?: boolean }>`
  ${({ theme }) => theme.fonts.Body_4};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.purple : theme.colors.black};

  ${({ $isActive }) =>
    $isActive &&
    `
    text-decoration-line: underline;
  `}
`;
