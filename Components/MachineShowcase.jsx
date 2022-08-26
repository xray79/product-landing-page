import styled from "styled-components";
import MachineShowcaseImgClosed from "./MachineShowcaseImgClosed";
import MachineShowcaseImgOpen from "./MachineShowcaseImgOpen";
import { MachineContext } from "../store/MachineShowcaseContext";
import { useContext } from "react";
import { FlexImg } from "./MachineStyles";

const Background = styled.div`
  height: 85vh;
  width: 100%;
  background-color: #e5e4e2;
  flex: 4;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const FlexTitle = styled.div`
  text-align: left;
  font-size: 1.5rem;
  flex: 1;
  margin-left: 2rem;
  color: #c2b1b1;
`;

const FlexDesc = styled.div`
  text-align: left;
  font-size: 1.5rem;
  flex: 4;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-top: 8rem;
`;

const FlexDescHeading = styled.h2`
  font-weight: 400;
  width: 50%;
  font-size: 4.8rem;
  line-height: 5rem;
  margin-bottom: 3rem;
  align-self: flex-start;
`;

const FlexDescText = styled.p`
  width: 43%;
  color: #c2b1b1;
`;

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

  const openMachine = () => {
    if (IsMouseOver) {
      return <MachineShowcaseImgOpen />;
    }
    return <MachineShowcaseImgClosed />;
  };

  return (
    <>
      <Background>
        <Container>
          <FlexTitle text="hello">
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
            {openMachine()}
            <Enter onMouseEnter={handleMouseEnter} />
          </FlexImg>
        </Container>
      </Background>
    </>
  );
};
export default MachineShowcase;
