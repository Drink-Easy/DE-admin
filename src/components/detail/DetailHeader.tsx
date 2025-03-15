import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BtnWrapper } from "../../styles/GlobalStyle";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <BtnWrapper type="button" onClick={() => navigate("/class")}>
        <Text>클래스 관리</Text>
      </BtnWrapper>
      <BtnWrapper type="button" onClick={() => navigate("/wine")}>
        <Text>와인정보 관리</Text>
      </BtnWrapper>
      <BtnWrapper type="button" onClick={() => navigate("/user")}>
        <Text>회원정보 관리</Text>
      </BtnWrapper>
      <BtnWrapper type="button" onClick={() => navigate("/report")}>
        <Text>신고 접수 관리</Text>
      </BtnWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2.1rem 7.6rem;
  gap: 7.3rem;
  background-color: ${({ theme }) => theme.colors.gray_200};
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Title_3};

  color: ${({ theme }) => theme.colors.black};
`;
