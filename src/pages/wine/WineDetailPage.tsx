import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";
import Table from "../../components/common/Table";
import { wineColumns } from "../../constants/constants";
import { Wine } from "../../interface/interface";
import WineDetailContent from "./WineDetailContent";

export default function WineDetailPage() {
  const data: Wine[] = [
    //추후 api로 개별 와인 조회 예정이라 정적 데이터
    {
      id: "102391",
      name: "루이 로드레 크리스탈 2014",
      type: "스파클링,샴페인",
      region: "상파뉴",
      country: "프랑스",
      date: "2024-09-03",
      action1: "?",
      action2: "?",
    },
  ];
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
          <InnerContainer>
            <Table columns={wineColumns} data={data} />
            <WineDetailContent data={data} />
          </InnerContainer>
        </ContentContainer>
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 102.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4.9rem;
  padding: 3.5rem 5rem 0rem 7.6rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
`;
