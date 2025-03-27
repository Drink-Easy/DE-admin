import styled from "styled-components";
import Header from "../../components/common/Header/MainHeader";
import { BtnWrapper } from "../../styles/GlobalStyle";

export default function LoginPage() {
  return (
    <Container>
      <Header />
      <LoginBox>
        <TitleText>Login</TitleText>
        <SubTitleText>only for admin</SubTitleText>
        <InnerContainer>
          <InputBox>
            <Input type="text" placeholder="User ID" />
            <Input type="text" placeholder="Password" />
          </InputBox>
          <StyledBtnWrapper type="button">
            <TitleText>Login</TitleText>
          </StyledBtnWrapper>
        </InnerContainer>
        <Text>관리자만 로그인 할 수 있으며</Text>
        <Text>서비스 이용을 원하시면 어플을 이용해주세요.</Text>
      </LoginBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10.4rem;
`;

const TitleText = styled.p`
  ${({ theme }) => theme.fonts.Title_2};
  color: ${({ theme }) => theme.colors.white};
`;

const SubTitleText = styled.p`
  ${({ theme }) => theme.fonts.Title_3};
  color: ${({ theme }) => theme.colors.white};
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  margin-top: 0.7rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
  margin-bottom: 1.8rem;
`;

const Input = styled.input`
  flex: 1;
  width: 32.7rem;
  border: 1px solid #fff;
  padding: 0.7rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Title_3};
  color: ${({ theme }) => theme.colors.gray_400};

  &:focus {
    outline: none;
  }
`;

const StyledBtnWrapper = styled(BtnWrapper)`
  width: 11.4rem;
  height: 11.8rem;

  border: 1px solid #fff;
  background-color: transparent;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body_3};
  color: ${({ theme }) => theme.colors.white};
`;
