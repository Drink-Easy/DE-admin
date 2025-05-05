import styled from "styled-components";
import { WineDataTypes } from "./../types/CommonTypes";
import { useState } from "react";

export default function WineDetailContent() {
  //추후 api로 개별 와인 조회 예정이라 정적 데이터 -> id 조회 api 예상/예정
  const wine: WineDataTypes = {
    id: "102391",
    name: "루이 로드레 크리스탈 2014",
    engName: "Carte Blanche, UV Vinyard Chardonnay",
    variety: "샤르도네 100%",
    sort: "스파클링",
    price: "450000",
    region: "상파뉴",
    country: "프랑스",
    date: "2024-09-03",
    vivinoRating: "4.4",
    action1: "-",
    action2: "-",
  };

  // const defaultData: Wine = { wineAdd에서 적용해보는 더미 데이터
  //     id: "",
  //     name: "",
  //     engName: "",
  //     variety: "",
  //     sort: "",
  //     price: "",
  //     region: "",
  //     country: "",
  //     date: "",
  //     vivinoRating: "",
  //     action1: "?",
  //     action2: "?",
  //   };

  const typeOptions = [
    "레드",
    "화이트",
    "스파클링",
    "로제",
    "주정 강화",
    "기타",
  ];

  const [selectedSort, setSelectedSort] = useState<string>(wine.sort);

  // 입력 필드 상태 및 편집 여부 상태 추가
  const [wineData, setWineData] = useState({
    id: wine.id,
    name: wine.name,
    engName: wine.engName,
    variety: wine.variety,
    price: wine.price,
    region: wine.region,
    country: wine.country,
    vivinoRating: wine.vivinoRating,
  });
  const [isEdited, setIsEdited] = useState({
    id: false,
    name: false,
    engName: false,
    variety: false,
    price: false,
    region: false,
    country: false,
    vivinoRating: false,
  });

  // input 클릭 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWineData((prev) => ({ ...prev, [name]: value }));
    setIsEdited((prev) => ({ ...prev, [name]: true }));
  };

  // 종류 버튼 클릭 핸들러
  const handleTypeSelect = (type: string) => {
    setSelectedSort(type);
  };

  return (
    <Container>
      <Contents>
        <SideContent>
          <div>와인 번호</div>
          <div>와인명</div>
          <div>와인명 (영문)</div>
          <div>품종</div>
          <div>종류</div>
          <div>가격</div>
          <div>지역</div>
          <div>생산지(국가)</div>
          <div>비비노 평점</div>
          <div>이미지</div>
        </SideContent>
        <WineContent>
          <InputBox
            name="id"
            value={wineData.id}
            onChange={handleChange}
            isEdited={isEdited.id}
            size="small"
            placeholder="000000"
          />
          <InputBox
            name="name"
            value={wineData.name}
            onChange={handleChange}
            isEdited={isEdited.name}
            size="large"
            placeholder="이름 입력"
          />
          <InputBox
            name="engName"
            value={wineData.engName}
            onChange={handleChange}
            isEdited={isEdited.engName}
            size="large"
            placeholder="이름 입력"
          />
          <InputBox
            name="variety"
            value={wineData.variety}
            onChange={handleChange}
            isEdited={isEdited.variety}
            size="large"
            placeholder="품종 입력"
          />
          <TypeSelector>
            {typeOptions.map((type) => (
              <TypeButton
                key={type}
                selected={selectedSort === type}
                onClick={() => handleTypeSelect(type)}
              >
                {type}
              </TypeButton>
            ))}
          </TypeSelector>
          <InputBox
            name="price"
            value={wineData.price}
            onChange={handleChange}
            isEdited={isEdited.price}
            size="large"
            placeholder="금액 입력"
          />
          <InputBox
            name="region"
            value={wineData.region}
            onChange={handleChange}
            isEdited={isEdited.region}
            size="large"
            placeholder="지역 입력"
          />
          <InputBox
            name="country"
            value={wineData.country}
            onChange={handleChange}
            isEdited={isEdited.country}
            size="large"
            placeholder="생산지 입력"
          />
          <InputBox
            name="country"
            value={wineData.vivinoRating}
            onChange={handleChange}
            isEdited={isEdited.vivinoRating}
            size="large"
            placeholder="평점 입력"
          />
          <ImgContents>
            <Img />
            <ModifyBtn>수정</ModifyBtn>
          </ImgContents>
        </WineContent>
      </Contents>
      <BtnContainer>
        <RegisterBtn>등록</RegisterBtn>
        <CancelBtn>취소</CancelBtn>
      </BtnContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  align-items: flex-start;
`;

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 8.8rem;
  text-align: center;
  gap: 2.9rem;
  ${({ theme }) => theme.fonts.Body_3};

  div {
    height: 2.66rem;
  }
`;

const WineContent = styled.div`
  margin-left: 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.9rem;
`;

const InputBox = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "isEdited",
})<{
  size: "small" | "large";
  isEdited: boolean;
}>`
  height: 2.3rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 0.8rem;
  cursor: pointer;

  width: ${({ size }) => (size === "small" ? "10rem" : "34.7rem")};
  border: 1px solid
    ${({ isEdited }) => (isEdited ? "black" : "rgba(0, 0, 0, 0.3)")};
  ${({ theme }) => theme.fonts.Body_3};
  color: ${({ isEdited }) => (isEdited ? "black" : "rgba(0, 0, 0, 0.3)")};

  &:focus {
    border: 1px solid black;
    color: black;
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const TypeSelector = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const TypeButton = styled.button<{
  selected: boolean;
}>`
  border-radius: 5px;
  cursor: pointer;

  width: 10rem;
  ${({ theme }) => theme.fonts.Body_3};
  border: 1px solid
    ${({ selected }) => (selected ? "black" : "rgba(0, 0, 0, 0.3)")};
  color: ${({ selected }) => (selected ? "black" : "rgba(0, 0, 0, 0.3)")};
`;

const ImgContents = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.div`
  width: 10rem;
  height: 10rem;
  background: #d9d9d9;
`;

const ModifyBtn = styled.button`
  width: 7rem;
  height: 3rem;
  border-radius: 5px;
  border: 1px solid #000;
  margin-left: 1.3rem;
  ${({ theme }) => theme.fonts.Body_3};
`;

const BtnContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-left: 39.7rem;
  ${({ theme }) => theme.fonts.Body_3};
`;

const RegisterBtn = styled.div`
  width: 13.7rem;
  height: 3rem;
  border: 1px solid #000;
  background: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CancelBtn = styled.div`
  width: 7rem;
  height: 3rem;
  border: 1px solid #000;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.6rem;
`;
