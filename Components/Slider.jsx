import { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  background-color: none;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 95%;
  height: 90%;
  background-image: url("./cartidge-balance-slider.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: translate(${({ pos }) => `${pos * 100}%`}, 0);
  transition: all 0.5s ease;
`;

const Slide2 = styled(Slide)`
  background-image: url("./cartidge-active-slider.webp");

  transform: translate(${({ pos }) => `${(pos + 1) * 100}%`}, -100%);
`;

const Slide3 = styled(Slide)`
  background-image: url("./cartidge-light-slider.webp");
  transform: translate(${({ pos }) => `${(pos + 2) * 100}%`}, -200%);
`;

const Slide4 = styled(Slide)`
  transform: translate(${({ pos }) => `${(pos + 3) * 100}%`}, -300%);
`;

const RightArrow = styled.div`
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

const SlideTextContainer = styled.div`
  width: 20%;
  padding: 2rem 0 0 4rem;
`;

const SlideHeading = styled.h2`
  color: white;
  font-size: 5rem;
  font-weight: 400;
`;

const SlideBtn = styled.button`
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

const SlideDescription = styled.div`
  position: absolute;
  bottom: -7%;
  left: 15%;
  font-size: 1.5rem;
  color: grey;
  width: 50%;
`;

// Dots styles
const DotsContainer = styled.div`
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

const Dot = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  transition: all 0.2 ease;
`;

const Dot1 = styled(Dot)`
  ${({ pos }) => (pos === 0 ? "background-color: black;" : "")}
`;

const Dot2 = styled(Dot)`
  ${({ pos }) => (pos === -1 ? "background-color: black;" : "")}
`;

const Dot3 = styled(Dot)`
  ${({ pos }) => (pos === -2 ? "background-color: black;" : "")}
`;

const Slider = () => {
  const [Position, setPosition] = useState(0);

  const clickHandler = () => {
    Position <= -2 ? setPosition(0) : setPosition(Position - 1);
  };

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
          <SlideHeading>Balanced Everyday Hydration.</SlideHeading>{" "}
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
          <SlideHeading>Active Replenishment.</SlideHeading>{" "}
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
          <SlideHeading>Fresh as water. Light as air.</SlideHeading>{" "}
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
          <SlideHeading>Balanced Everyday Hydration</SlideHeading>{" "}
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
