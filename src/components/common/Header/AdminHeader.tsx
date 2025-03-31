import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import { BtnWrapper } from "../../../styles/GlobalStyle";
import { usePostLogout } from "../../../hooks/usePostLogout";

export default function AdminHeader() {
  const navigate = useNavigate();
  const { mutate: postLogoutMutate } = usePostLogout();

  function handleLogout() {
    postLogoutMutate(undefined, {
      onSuccess: () => navigate("/"),
    });
  }

  return (
    <HeaderLayout
      logoText="관리자 페이지"
      onLogoClick={() => navigate("/class")}
    >
      <TextBtn type="button" onClick={handleLogout}>
        Log out
      </TextBtn>
    </HeaderLayout>
  );
}

const TextBtn = styled(BtnWrapper)`
  ${({ theme }) => theme.fonts.Title_2};
  color: ${({ theme }) => theme.colors.white};
`;
