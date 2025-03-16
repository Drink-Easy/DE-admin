import styled from "styled-components";
import { Wine } from "../../interface/interface";

interface WineDetailProps {
  data: Wine[];
}
export default function WineDetailContent({ data }: WineDetailProps) {
  return (
    <>
      <Container></Container>
    </>
  );
}
const Container = styled.div``;
