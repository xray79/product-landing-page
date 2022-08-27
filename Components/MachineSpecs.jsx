import styled from "styled-components";
import {
  Background,
  Container,
  FlexDesc,
  FlexDescHeading,
  FlexDescText,
  FlexTitle,
  FlexImg,
  Number,
} from "./MachineStyles";

const SpecsBackground = styled(Background)`
  background-color: white;
  height: auto;
`;

const Img = styled.img`
  width: 40rem;
`;

const SpecsFlexDesc = styled(FlexDesc)`
  position: relative;
`;

const Plus1 = styled(Number)`
  top: 25%;
`;
const Plus2 = styled(Number)``;

const Plus3 = styled(Number)`
  top: 75%;
`;

const MachineSpecs = () => {
  return (
    <>
      <SpecsBackground>
        <Container>
          <FlexTitle>
            <p>Design</p>
          </FlexTitle>
          <SpecsFlexDesc>
            <FlexDescHeading>
              Designed by nature.
              <br /> Made by Mitte.
            </FlexDescHeading>
            <Img src="./design-image.webp" alt="" />
            <Plus1>+</Plus1>
            <Plus2>+</Plus2>
            <Plus3>+</Plus3>
          </SpecsFlexDesc>
          <FlexImg>
            <FlexDescHeading>
              Designed by nature.
              <br /> Made by Mitte.
            </FlexDescHeading>
            <FlexDescText>
              Create perfectly balanced water at the touch of a button. Inspired
              by the natural water cycle, our mineral cartridges purify and
              mineralize water much like rainwater seeping through layers of
              calcite and magnesite rock. Choose to enjoy still or carbonated to
              your taste.
            </FlexDescText>
          </FlexImg>
        </Container>
      </SpecsBackground>
    </>
  );
};
export default MachineSpecs;
