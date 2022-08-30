import { useEffect, useState } from "react";
import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  background-color: none;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

// Slides
export const Slide = styled.div`
  width: 95%;
  height: 90%;
  background-image: url("./cartidge-balance-slider.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: translate(${({ pos }) => `${pos * 100}%`}, 0);
  transition: all 0.5s ease;
`;

export const Slide2 = styled(Slide)`
  background-image: url("./cartidge-active-slider.webp");
  transform: translate(${({ pos }) => `${(pos + 1) * 100}%`}, -100%);
`;

export const Slide3 = styled(Slide)`
  background-image: url("./cartidge-light-slider.webp");
  transform: translate(${({ pos }) => `${(pos + 2) * 100}%`}, -200%);
`;

export const Slide4 = styled(Slide)`
  transform: translate(${({ pos }) => `${(pos + 3) * 100}%`}, -300%);
`;

// Arrow button
export const RightArrow = styled.div`
  position: absolute;
  z-index: 5;
  top: 50%;
  right: 1.5%;
  transform: translateY(-50%);
  font-size: 5rem;
  font-weight: 100;
  color: white;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

// Slide content
export const SlideTextContainer = styled.div`
  max-width: 40rem;
  padding: 2rem 0 0 4rem;
  overflow: visible;
`;

export const SlideHeading = styled.h2`
  color: white;
  font-size: 5rem;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const SlideBtn = styled.button`
  background: transparent;
  border: none;
  color: white;
  border: 1px solid white;
  border-radius: 100px;
  padding: 1.5rem 3rem;
  margin-top: 3rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const SlideDescription = styled.div`
  position: absolute;
  top: 102%;
  left: 15%;
  font-size: 1.5rem;
  color: grey;
  width: 50%;
`;

// Dots styles
export const DotsContainer = styled.div`
  position: absolute;
  left: 2%;
  bottom: 6%;
  background-color: none;
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Dot = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  transition: all 0.2 ease;
`;

export const Dot1 = styled(Dot)`
  ${({ pos }) => (pos === 0 ? "background-color: black;" : "")}
`;

export const Dot2 = styled(Dot)`
  ${({ pos }) => (pos === -1 ? "background-color: black;" : "")}
`;

export const Dot3 = styled(Dot)`
  ${({ pos }) => (pos === -2 ? "background-color: black;" : "")}
`;

const Slider = () => {
  const [Position, setPosition] = useState(0);

  const clickHandler = () => {
    Position <= -2 ? setPosition(0) : setPosition(Position - 1);
  };

  // change slide every x seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      Position <= -2 ? setPosition(0) : setPosition(Position - 1);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [Position]);

  const handleDot1Click = () => {
    setPosition(0);
  };
  const handleDot2Click = () => {
    setPosition(-1);
  };
  const handleDot3Click = () => {
    setPosition(-2);
  };

  return (
    <SliderContainer>
      <Slide pos={Position}>
        <SlideTextContainer>
          <SlideHeading>Balanced Everyday Hydration.</SlideHeading>
          <SlideBtn>Learn more</SlideBtn>
        </SlideTextContainer>
        <SlideDescription>
          The Mitte Home Balance cartridge creates a natural and balanced
          drinking water, derived from a unique blend of calcite and magnesite
          rocks. As its well-rounded taste makes it ideal for hydration all day,
          every day, it is our default cartridge in every starter kit.
        </SlideDescription>
      </Slide>

      <Slide2 pos={Position}>
        <SlideTextContainer>
          <SlideHeading>Active Replenishment.</SlideHeading>
          <SlideBtn>Learn more</SlideBtn>
        </SlideTextContainer>
        <SlideDescription>
          The Mitte Home Balance cartridge creates a natural and balanced
          drinking water, derived from a unique blend of calcite and magnesite
          rocks. As its well-rounded taste makes it ideal for hydration all day,
          every day, it is our default cartridge in every starter kit.
        </SlideDescription>
      </Slide2>

      <Slide3 pos={Position}>
        <SlideTextContainer>
          <SlideHeading>
            Fresh as water.
            <br /> Light as air.
          </SlideHeading>
          <SlideBtn>Learn more</SlideBtn>
        </SlideTextContainer>
        <SlideDescription>
          The Mitte Home Active cartridge helps you optimize your hydration in
          the moments when you most need to quench your thirst. Its boldly fresh
          taste is characteristic of its potassium and sodium content.
        </SlideDescription>
      </Slide3>

      <Slide4 pos={Position}>
        <SlideTextContainer>
          <SlideHeading>Balanced Everyday Hydration</SlideHeading>
          <SlideBtn>Learn more</SlideBtn>
        </SlideTextContainer>
        <SlideDescription>
          The Mitte Home Light cartridge creates a soft and smooth water thanks
          to its hardness-reducing properties. It protects against limescale and
          harsh mineral residues, perfect for making coffee and tea or as your
          soft everyday drinking water.
        </SlideDescription>
      </Slide4>

      <RightArrow onClick={clickHandler}>→</RightArrow>

      <DotsContainer>
        <Dot1 pos={Position} onClick={handleDot1Click} />
        <Dot2 pos={Position} onClick={handleDot2Click} />
        <Dot3 pos={Position} onClick={handleDot3Click} />
      </DotsContainer>
    </SliderContainer>
  );
};
export default Slider;
