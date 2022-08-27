import styled from "styled-components";
import MachineShowcaseImgClosed from "./MachineShowcaseImgClosed";
import MachineShowcaseImgOpen from "./MachineShowcaseImgOpen";
import { MachineContext } from "../store/MachineShowcaseContext";
import { useContext } from "react";
import {
  Background,
  Container,
  FlexDesc,
  FlexDescHeading,
  FlexDescText,
  FlexTitle,
  FlexImg,
} from "./MachineStyles";

const Enter = styled.div`
  background-color: none;
  border-radius: 50%;
  height: 40rem;
  width: 40rem;
  position: absolute;
  bottom: 10%;
  right: 20%;
`;

const MachineShowcase = () => {
  const { IsMouseOver, handleMouseEnter, handleMouseExit } =
    useContext(MachineContext);

  return (
    <>
      <Background>
        <Container>
          <FlexTitle>
            <p>Details</p>
          </FlexTitle>
          <FlexDesc>
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
          </FlexDesc>
          <FlexImg onMouseLeave={handleMouseExit}>
            {IsMouseOver ? (
              <MachineShowcaseImgOpen />
            ) : (
              <MachineShowcaseImgClosed />
            )}
            <Enter onMouseEnter={handleMouseEnter} />
          </FlexImg>
        </Container>
      </Background>
    </>
  );
};
export default MachineShowcase;
