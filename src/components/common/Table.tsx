import styled from "styled-components";

interface TableProps {
  columns: string[];
  data: string[][];
}

export default function Table(props: TableProps) {
  const { columns, data } = props;

  return (
    <Container>
      <TableRow>
        {columns.map((column, index) => (
          <TableCell key={index}>{column}</TableCell>
        ))}
      </TableRow>
      <TitleLine />
      <TableBody>
        {data.map((row, rowIndex) => (
          <DataWrapper key={rowIndex}>
            <TableRow>
              {row.map((cell, cellIndex) => (
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

const TableCell = styled.div`
  padding: 1.65rem;
  flex: 1; /* 셀 너비 균등 분배 */
  text-align: center;
  justify-content: center;
  white-space: nowrap;
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
