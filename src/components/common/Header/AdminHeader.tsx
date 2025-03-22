import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import { BtnWrapper } from "../../../styles/GlobalStyle";

export default function AdminHeader() {
  const navigate = useNavigate();
  return (
    <HeaderLayout
      logoText="관리자 페이지"
      onLogoClick={() => navigate("/class")}
    >
      <TextBtn onClick={() => navigate("/")}>Log out</TextBtn>
    </HeaderLayout>
  );
}

const TextBtn = styled(BtnWrapper)`
  ${({ theme }) => theme.fonts.Title_2};
  color: ${({ theme }) => theme.colors.white};
`;
