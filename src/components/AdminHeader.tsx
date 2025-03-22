import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <Logo onClick={() => navigate("/class")}>관리자 페이지</Logo>
        <Functions>
          <Button onClick={() => navigate("/")}>Log out</Button>
        </Functions>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 13.8rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  padding: 4.4rem 7.6rem 0rem 7.6rem;
`;

const Logo = styled.p`
  ${({ theme }) => theme.fonts.Title_1};
  color: ${({ theme }) => theme.colors.purple_100};
  cursor: pointer;
`;

const Functions = styled.div`
  display: flex;
  gap: 6.2rem;
  justify-content: flex-end;
`;

const Button = styled.div`
  ${({ theme }) => theme.fonts.Title_2};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
