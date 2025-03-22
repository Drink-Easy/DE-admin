import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import { BtnWrapper } from "../../../styles/GlobalStyle";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderLayout logoText="Drinki G" onLogoClick={() => navigate("/")}>
      <TextBtn onClick={() => navigate("/")}>Home</TextBtn>
      <TextBtn>Projects</TextBtn>
      <TextBtn>Help Center</TextBtn>
      <TextBtn onClick={() => navigate("/login")}>Login</TextBtn>
    </HeaderLayout>
  );
}

const TextBtn = styled(BtnWrapper)`
  ${({ theme }) => theme.fonts.Title_2};
  color: ${({ theme }) => theme.colors.white};
`;
