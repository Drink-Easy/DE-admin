import styled from "styled-components";
import { BtnWrapper } from "../../styles/GlobalStyle";

interface SearchBoxProps {
  titles: string[];
}

export default function SearchBox({ titles }: SearchBoxProps) {
  return (
    <Container>
      <SearchContainer>
        {titles.map((title, index) => (
          <SearchWrapper key={index}>
            <Text>{title}</Text>
            <SearchInput type="text" />
          </SearchWrapper>
        ))}
      </SearchContainer>
      <BtnWrapper>
        <BtnText>검색</BtnText>
      </BtnWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 6.8rem;
  padding: 2.4rem 3.2rem;
  gap: 1.8rem;

  background: ${({ theme }) => theme.colors.gray_200};
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 2.7rem;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
`;

const SearchInput = styled.input`
  flex: 1;
  width: 13.7rem;
  height: 3rem;
  border: 1px solid #000;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.Body_3};

  &:focus {
    outline: none;
  }
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body_3};
  color: ${({ theme }) => theme.colors.black};
`;

const BtnText = styled.p`
  width: fit-content;
  padding: 0.5rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.Body_3};
  color: ${({ theme }) => theme.colors.black};
`;
