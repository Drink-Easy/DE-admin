import styled from "styled-components";
import { BtnWrapper } from "../../styles/GlobalStyle";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
  text: string;
  path: string;
}

interface SideBarProps {
  menuItems: MenuItem[];
}

export default function SideBar({ menuItems }: SideBarProps) {
  const location = useLocation(); // 현재 경로 가져오기
  const navigate = useNavigate();
  const pathname = location.pathname; // 현재 경로 문자열

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      <TextContainer>
        <Title>타이틀</Title>
        <Line />
      </TextContainer>
      <TextContainer>
        {menuItems.map((item: MenuItem, index: number) => {
          const isActive = pathname === item.path;

          return (
            <BtnWrapper key={index} onClick={() => handleNavigation(item.path)}>
              {isActive ? (
                <ActivateText>{item.text}</ActivateText>
              ) : (
                <DeactivateText>{item.text}</DeactivateText>
              )}
            </BtnWrapper>
          );
        })}
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Title_3};
  color: ${({ theme }) => theme.colors.black};
`;

const Line = styled.div`
  width: 12.0017rem;
  height: 1px;
  background: ${({ theme }) => theme.colors.black};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.1rem;
`;

const DeactivateText = styled.p`
  ${({ theme }) => theme.fonts.Body_3};
  color: ${({ theme }) => theme.colors.black};
`;

const ActivateText = styled.p`
  ${({ theme }) => theme.fonts.Body_2};
  color: ${({ theme }) => theme.colors.black};
`;
