import styled from "styled-components";
import Header from "../../components/common/Header";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";
import { Wine } from "../../interface/interface";
import { useNavigate } from "react-router-dom";
import { wineColumns } from "../../constants/constants";

export default function WinePage() {
  const navigate = useNavigate();

  const data: Wine[] = [
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
    {
      id: "102392",
      name: "샤또 마고 2015",
      type: "레드 와인",
      region: "보르도",
      country: "프랑스",
      date: "2024-09-03",
      action1: "?",
      action2: "?",
    },
  ];

  const handleRowClick = (id: string) => {
    navigate(`/wine/${id}`);
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
          <InnerContainer>
            <SearchBox titles={["와인명 :", "종류 :", "품종 :", "생산지 :"]} />
            <Table
              columns={wineColumns}
              data={data}
              onRowClick={handleRowClick}
            />
          </InnerContainer>
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
