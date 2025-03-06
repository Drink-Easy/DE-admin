import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Logo>Drinki G</Logo>
      <TextBox>
        <Text>
          드링키지 | 서울시 서대문구 가재울미래로2, 114동 2102호
          <br />
          대표 : 위승주 | TEL : 010-6443-0851 | Email : drinkeasy@gmail.com
          <br />
          사업자 번호 : 342-15-02376
        </Text>
        <Text>ⓒDrinkig. 2025 All rights reserved.</Text>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 3.3rem 72.1rem 2.4rem 7.6rem;
`;

const Logo = styled.p`
  ${({ theme }) => theme.fonts.Title_1};
  color: ${({ theme }) => theme.colors.purple_100};
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body_1};
  color: ${({ theme }) => theme.colors.gray_300};
`;
