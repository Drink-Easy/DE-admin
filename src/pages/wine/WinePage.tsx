import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";

export default function WinePage() {
  const columns = [
    "와인 번호",
    "와인명",
    "종류",
    "지역",
    "생산지(국가)",
    "등록일",
    "?",
    "?",
  ];
  const data = [
    [
      "102391",
      "루이 로드레 크리스탈 2014",
      "스파클링,샴페인",
      "상파뉴",
      "프랑스",
      "2024-09-03",
      "?",
      "?",
    ],
    [
      "102391",
      "루이 로드레 크리스탈 2014",
      "스파클링,샴페인",
      "상파뉴",
      "프랑스",
      "2024-09-03",
      "?",
      "?",
    ],
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
            <SearchBox titles={["와인명 :", "종류 :", "품종 :", "생산지 :"]} />
            <Table columns={columns} data={data} />
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
