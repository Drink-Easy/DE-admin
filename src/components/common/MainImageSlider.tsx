import styled from "styled-components";
import { useEffect, useState } from "react";

export default function MainImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const imageCount =
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    });
  });
  return <div></div>;
}
