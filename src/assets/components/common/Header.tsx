import styled, { ThemeProvider } from "styled-components";
import theme, { flexCenter } from "../../style/theme";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Content>
          <Logo onClick={() => navigate("/")}>Drinki G</Logo>
          <Functions>
            <Button onClick={() => navigate("/")}>Home</Button>
            <Button>Projects</Button>
            <Button>Help Center</Button>
            <Button onClick={() => navigate("/login")}>Login</Button>
          </Functions>
        </Content>
      </Container>
    </ThemeProvider>
  );
}
const Container = styled.div`
  width: 100%;
  height: 138px;
`;
const Content = styled.div`
  height: 70px;
  padding: 44px 76px 0px 76px;
  ${flexCenter}
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.color.purple};
  font-size: 50px;
  font-weight: 600;
  cursor: pointer;
`;
const Functions = styled.div`
  display: flex;
  gap: 62px;
  justify-content: flex-end;
`;
const Button = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 400;
  cursor: pointer;
`;
export default Header;
