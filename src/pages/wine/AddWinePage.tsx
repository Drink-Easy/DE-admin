import styled from "styled-components";
import Header from "../../components/common/Header";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";
import WineDetailContent from "./WineDetailContent";
import { Wine } from "../../interface/interface";

export default function WineAddPage() {
  const defaultData: Wine = {
    id: "",
    name: "",
    type: "",
    region: "",
    country: "",
    date: "",
    action1: "",
    action2: "",
  };
  return (
    <>
      <Container>
        <Header />
        <DetailHeader />
        <ContentContainer>
          <SideBar
            title="와인정보 관리"
            menuItems={[
              { text: "등록된 와인 리스트", path: "/wine" },
              { text: "와인 추가", path: "/wine/add" },
            ]}
          />
          <StyledWrapper>
            <WineDetailContent data={[defaultData]} />
          </StyledWrapper>
        </ContentContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 102.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentContainer = styled.div`
  padding: 3.5rem 5rem 0rem 7.6rem;
  display: flex;
  align-items: flex-start;
`;
const StyledWrapper = styled.div`
  margin-left: 5.7rem;
`;
