import styled from "styled-components";

interface TableProps<T> {
  columns: string[];
  data: T[];
  onRowClick?: (id: string) => void;
}

export default function Table<T extends { id: string }>({
  columns,
  data,
  onRowClick,
}: TableProps<T>) {
  return (
    <Container>
      <TableRow>
        {columns.map((column, index) => (
          <TableTitle key={index}>{column}</TableTitle>
        ))}
      </TableRow>
      <TitleLine />
      <TableBody>
        {data.map((row, rowIndex) => (
          <DataWrapper key={rowIndex}>
            <TableRow onClick={() => onRowClick && onRowClick(row.id)}>
              {Object.values(row).map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
            <Line />
          </DataWrapper>
        ))}
      </TableBody>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  ${({ theme }) => theme.fonts.Body_3};
  color: ${({ theme }) => theme.colors.black};
`;

const TitleLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.black};
`;

const TableTitle = styled.div`
  padding: 0rem 1.65rem 1.65rem 1.65rem;
  flex: 1; /* 셀 너비 균등 분배 */
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  ${({ theme }) => theme.fonts.Body_3};
  color: ${({ theme }) => theme.colors.black};
`;

const TableCell = styled.div`
  padding: 1.65rem;
  flex: 1; /* 셀 너비 균등 분배 */
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  ${({ theme }) => theme.fonts.Body_3};
  color: ${({ theme }) => theme.colors.black};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.5;
  background: ${({ theme }) => theme.colors.black};
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
