import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import DetailHeader from "../../components/common/DetailHeader";
import SideBar from "../../components/common/SideBar";
import SearchBox from "../../components/common/SearchBox";
import Table from "../../components/common/Table";

export default function UserPage() {
  const columns = [
    "회원 번호",
    "회원명",
    "회원 ID",
    "전화번호",
    "회원 상태",
    "가입일",
    "정지 마감일",
    "?",
  ];
  const data = [
    [
      "C011123",
      "위승주",
      "wsj11029",
      "010-3655-5641",
      "정상",
      "2024-09-03",
      "-",
      "-",
    ],
    [
      "C011123",
      "위승주",
      "wsj11029",
      "010-3655-5641",
      "정상",
      "2024-09-03",
      "-",
      "-",
    ],
  ];

  return (
    <>
      <Container>
        <Header />
        <DetailHeader />
        <ContentContainer>
          <SideBar
            title="회원정보 관리"
            menuItems={[{ text: "회원 조회", path: "/user" }]}
          />
          <InnerContainer>
            <SearchBox titles={["회원명 :", "회원 ID :"]} />
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
