import styled from "styled-components";
import { Number } from "./MachineStyles";

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
`;

const NumberOne = styled(Number)`
  top: 60%;
  left: 63%;

  &::after {
    content: "${(props) => props.text}";
  }
`;
const NumberTwo = styled(Number)`
  top: 15%;
  left: 60%;

  &::after {
    content: "${(props) => props.text}";
  }
`;
const NumberThree = styled(Number)`
  top: 15%;
  left: 40%;

  &::after {
    content: "${(props) => props.text}";
  }
`;
const NumberFour = styled(Number)`
  top: 3%;
  left: 25%;

  &::after {
    content: "${(props) => props.text}";
  }
`;
const NumberFive = styled(Number)`
  top: 60%;
  left: 25%;

  &::after {
    content: "${(props) => props.text}";
  }
`;

const MachineShowcaseImgClosed = () => {
  return (
    <>
      <Img src="./12_side_view_open_while_cartridge_insert0000.webp" alt="" />
      <NumberOne text="Insert the Mitte Home Balance Cartridge.">1</NumberOne>
      <NumberTwo text="Fill the tank with water from the tap.">2</NumberTwo>
      <NumberThree text="Choose your carbonation preference - still, lightly sparkling or intensely effervescent.">
        3
      </NumberThree>
      <NumberFour text="Press the dispense button to make your fresh water.">
        4
      </NumberFour>
      <NumberFive text="Once filled, remove the bottle and enjoy.">
        5
      </NumberFive>
    </>
  );
};
export default MachineShowcaseImgClosed;
