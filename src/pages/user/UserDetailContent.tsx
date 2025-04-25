import { UserDetailDataTypes } from "../../types/CommonTypes";
import { useState } from "react";
import styled from "styled-components";

export default function UserDetailContent() {
  const user: UserDetailDataTypes = {
    id: "C011123",
    status: "정상",
    activityDate: "0000",
    gatheringDate: "0000",
  };

  const typeOptions = ["정상", "휴면", "활동 정지", "모임 정지"];

  const [selectedSort, setSelectedSort] = useState<string>(user.status);

  // 종류 버튼 클릭 핸들러
  const handleTypeSelect = (type: string) => {
    setSelectedSort(type);
  };

  return (
    <Container>
      <Contents>
        <SideContent>
          <div>회원 상태</div>
          <div>활동 정지 설정</div>
          <div>모임 정지 설정</div>
        </SideContent>
        <UserContent>
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
          <DateContainer>
            <InputBox
              name="activityDate"
              value={user.activityDate}
              placeholder="0000"
            />
            <div>년</div>
            <InputBox
              name="activityDate"
              value={user.activityDate}
              placeholder="0000"
            />
            <div>월</div>
            <InputBox
              name="activityDate"
              value={user.activityDate}
              placeholder="0000"
            />
            <div>일 까지</div>
          </DateContainer>
          <DateContainer>
            <InputBox
              name="gatheringDate"
              value={user.gatheringDate}
              placeholder="0000"
            />
            <div>년</div>
            <InputBox
              name="gatheringDate"
              value={user.gatheringDate}
              placeholder="0000"
            />
            <div>월</div>
            <InputBox
              name="gatheringDate"
              value={user.gatheringDate}
              placeholder="0000"
            />
            <div>일 까지</div>
          </DateContainer>
        </UserContent>
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

const UserContent = styled.div`
  margin-left: 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.9rem;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  div {
    ${({ theme }) => theme.fonts.Body_3};
  }
`;

const InputBox = styled.input`
  width: 10rem;
  height: 2.3rem;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;

  border: 1px solid rgba(0, 0, 0, 0.3);
  ${({ theme }) => theme.fonts.Body_3};
  color: rgba(0, 0, 0, 0.3);

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
  gap: 3.6rem;
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
