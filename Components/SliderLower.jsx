import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  SliderContainer,
  SlideTextContainer,
  SlideHeading,
  SlideBtn,
  SlideDescription,
  Slide,
  Slide2,
  Slide3,
  Slide4,
  RightArrow,
  DotsContainer,
  Dot1,
  Dot2,
  Dot3,
} from "./Slider";

// Styles
const SlideLower = styled(Slide)`
  background-image: url("./eighth-block-machine-category-bg.webp");
`;
const SlideLower2 = styled(Slide2)`
  background-image: url("./drop.webp");
`;
const SlideLower3 = styled(Slide3)`
  background-image: url("./eighth-block-machine-category-bg.webp");
`;
// Slide text styles
const SlideLowerTextContainer = styled(SlideTextContainer)`
  max-width: 60rem;
  position: absolute;
  top: 5%;
  right: 5%;
`;
const SlideLowerName = styled.p`
  position: absolute;
  top: 35%;
  left: 40%;
  font-size: 1.6rem;
  color: white;
  
`;
// Dots container styles
const SlideLowerDotsContainer = styled(DotsContainer)`
  bottom: 15%;
  width: 4rem;
`;

// Component
const SliderLower = () => {
  const [Position, setPosition] = useState(0);

  const clickHandler = () => {
    Position <= -1 ? setPosition(0) : setPosition(Position - 1);
  };

  // Change pic every x seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      Position <= -1 ? setPosition(0) : setPosition(Position - 1);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [Position]);

  // Click handlers for dot indicatiors
  const handleDot1Click = () => {
    setPosition(0);
  };
  const handleDot2Click = () => {
    setPosition(-1);
  };

  return (
    <>
      <SliderContainer>
        <SlideLower pos={Position}>
          <SlideLowerTextContainer>
            <SlideHeading>
              I like that I am being sustainable by using the Mitte Home.
            </SlideHeading>
          </SlideLowerTextContainer>
          <SlideLowerName>Leonie</SlideLowerName>
        </SlideLower>

        <SlideLower2 pos={Position}>
          <SlideLowerTextContainer>
            <SlideHeading>
              The Mitte home exceeded my expectations.
            </SlideHeading>
          </SlideLowerTextContainer>
          <SlideLowerName>Vivek</SlideLowerName>
        </SlideLower2>

        <SlideLower3 pos={Position}>
          <SlideLowerTextContainer>
            <SlideHeading>
              I like that I am being sustainable by using the Mitte Home.
            </SlideHeading>
          </SlideLowerTextContainer>
        </SlideLower3>

        <RightArrow onClick={clickHandler}>→</RightArrow>

        <SlideLowerDotsContainer>
          <Dot1 pos={Position} onClick={handleDot1Click} />
          <Dot2 pos={Position} onClick={handleDot2Click} />
        </SlideLowerDotsContainer>
      </SliderContainer>
    </>
  );
};
export default SliderLower;
