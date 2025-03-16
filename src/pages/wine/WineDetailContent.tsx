import styled from "styled-components";
import { Wine } from "../../interface/interface";
import { useState } from "react";

interface WineDetailProps {
  data: Wine[];
}
export default function WineDetailContent({ data }: WineDetailProps) {
  const wine = data[0];

  const typeOptions = [
    "레드",
    "화이트",
    "스파클링, 샴페인",
    "로제",
    "주정 강화",
    "기타",
  ];

  const [selectedType, setSelectedType] = useState<string>(wine.type);

  // 입력 필드 상태 및 편집 여부 상태 추가
  const [wineData, setWineData] = useState({
    id: wine.id,
    name: wine.name,
    region: wine.region,
    country: wine.country,
  });
  const [isEdited, setIsEdited] = useState({
    id: false,
    name: false,
    region: false,
    country: false,
  });

  // input 클릭 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWineData((prev) => ({ ...prev, [name]: value }));
    setIsEdited((prev) => ({ ...prev, [name]: true }));
  };

  // 종류 버튼 클릭 핸들러
  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  return (
    <>
      <Container>
        <Contents>
          <SideContent>
            <div>와인 번호</div>
            <div>와인명</div>
            <div>종류</div>
            <div>지역</div>
            <div>생산지(국가)</div>
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
            <TypeSelector>
              {typeOptions.map((type) => (
                <TypeButton
                  key={type}
                  selected={selectedType === type}
                  size={type === "스파클링, 샴페인" ? "medium" : "small"}
                  onClick={() => handleTypeSelect(type)}
                >
                  {type}
                </TypeButton>
              ))}
            </TypeSelector>
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
            <ImgContents>
              <Img />
              <ModifyBtn>수정</ModifyBtn>
            </ImgContents>
          </WineContent>
        </Contents>
        <BtnContainer>
          <RegisterBtn>등록</RegisterBtn>
          <CancleBtn>취소</CancleBtn>
        </BtnContainer>
      </Container>
    </>
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
  gap: 3.1rem;
  ${({ theme }) => theme.fonts.WineSide};

  div {
    padding: 0.1rem 0;
  }
`;
const WineContent = styled.div`
  margin-left: 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.9rem;
`;
const InputBox = styled.input<{
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
  ${({ theme }) => theme.fonts.WineDetailContents};
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
  size: "small" | "medium";
}>`
  border-radius: 5px;
  cursor: pointer;

  width: ${({ size }) => (size === "small" ? "10rem" : "13.2rem")};
  ${({ theme }) => theme.fonts.WineDetailContents};
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
  ${({ theme }) => theme.fonts.WineDetailBtn};
`;
const BtnContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-left: 39.7rem;
  ${({ theme }) => theme.fonts.WineDetailBtn};
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
const CancleBtn = styled.div`
  width: 7rem;
  height: 3rem;
  border: 1px solid #000;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.6rem;
`;
