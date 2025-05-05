import styled from "styled-components";
import Table from "../../components/common/Table";
import { wineColumns } from "../../constants/constants";
import WineDetailContent from "../../components/WineDetailContent";
import { renderWineCell } from "../../utils/renderWineCell";
import { WineRow } from "../../types/CommonTypes";

export default function WineDetailPage() {
  const titleData: WineRow[] = [
    //추후 api로 개별 와인 조회 예정이라 정적 데이터 -> id 조회 api 예상/예정
    {
      id: "102391",
      wineId: "102391",
      name: "루이 로드레 크리스탈 2014",
      sort: "스파클링",
      region: "상파뉴",
      country: "프랑스",
      variety:
        "산지오베제 30%, 알리아니코 30%, 카베르네 소비뇽 30%, 네로 다볼라 10%",
      createdAt: "2025-02-07T15:00:0",
    },
  ];

  return (
    <InnerContainer>
      <Table
        columns={wineColumns}
        data={titleData}
        renderCell={renderWineCell}
      />
      <StyledWrapper>
        <WineDetailContent />
      </StyledWrapper>
    </InnerContainer>
  );
}

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledWrapper = styled.div`
  margin-top: 3.65rem;
  margin-left: 6.2rem;
`;
