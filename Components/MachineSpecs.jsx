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

// Background styles
const SpecsBackground = styled(Background)`
  background-color: white;
  padding-bottom: 15rem;
  height: auto;
`;

// Inner Container
const SpecsContainer = styled(Container)``;

// Container 1 (left side) main container styles
const SpecsFlexTitle = styled(FlexTitle)``;

// Container text styles
// Flex container 1 (left side) text
const SpecsFlexTitleText = styled.p`
  color: black;
  align-self: flex-start;
  padding-bottom: 25rem;
`;

// Container 2 (middle) main container styles
const SpecsFlexDesc = styled(FlexDesc)`
  position: relative;
  flex: 4;
  padding: 0 0rem 0 10rem;
  @media (max-width: 990px) {
    padding: 0 0rem 0 0rem;
  }
`;

// Flex container 2 (middle) text
const SpecsFlexDescHeading = styled(FlexDescHeading)`
  width: 100%;
  padding-top: 8rem;
  text-align: left;
  @media (max-width: 990px) {
    text-align: left;
    margin-left: 2rem;
  }
`;

const SpecsFlexDescText = styled.p`
  color: grey;
  width: min(45rem, 90%);
  padding-top: 2rem;
  @media (max-width: 990px) {
    text-align: left;
    margin-left: 2rem;
    align-self: flex-start;
    margin-bottom: 5rem;
    width: 90%;
  }
`;

// Product image styles
const Img = styled.img`
  width: 80%;
`;

// Tooltip styles and positioning
const Plus = styled(Number)`
  &::after {
    content: "${({ text }) => text}";
  }
`;

const Plus1 = styled(Plus)`
  top: 55%;
  left: 25%;
`;
const Plus2 = styled(Plus)`
  top: 60%;
  left: 60%;

  @media (max-width: 400px) {
    left: 0%;
  }
`;

const Plus3 = styled(Plus)`
  top: 80%;
  left: 35%;
`;

// Container 3 (right side)
const SpecsFlexImg = styled(FlexImg)`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  justify-self: flex-start;
`;

// Flex container 3 (right side) text
// Table styles
const Table = styled.table`
  padding-bottom: 15rem;
  border-collapse: collapse;
  margin-bottom: 20rem;
`;

const Row = styled.tr``;

const TableBody = styled.tbody``;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #96929255;
  font-weight: 400;
`;

const MachineSpecs = () => {
  return (
    <>
      <SpecsBackground>
        <SpecsContainer>
          <SpecsFlexTitle>
            <SpecsFlexTitleText>Design</SpecsFlexTitleText>
          </SpecsFlexTitle>
          <SpecsFlexDesc>
            <SpecsFlexDescHeading>Designed for life.</SpecsFlexDescHeading>
            <SpecsFlexDescText>
              We design and manufacture our products to the highest standards
              right here in Germany. Every detail - from sourcing of materials
              to the user experience - is carefully considered and obsessively
              tested before it is released.{" "}
            </SpecsFlexDescText>
            <Img src="./design-image.webp" alt="" />
            <Plus1
              text={`Device: Thermal resistant and impact strength shell for maximum durability.`}
            >
              +
            </Plus1>
            <Plus2 text="Water Tank: Tank with strong handle and lid designed for easy and convenient filling.">
              +
            </Plus2>
            <Plus3 text="Dispense Button: Touch button with LED water drop design and start/stop feature.">
              +
            </Plus3>
          </SpecsFlexDesc>
          <SpecsFlexImg>
            <SpecsFlexDescHeading>
              Technical
              <br /> Specifications
            </SpecsFlexDescHeading>
            <SpecsFlexDescText>
              <Table>
                <TableBody>
                  <Row>
                    <TableCell>Dimensions:</TableCell>
                    <TableCell>430 mm x 267 mm x 277 mm (HxDxW)</TableCell>
                  </Row>
                  <Row>
                    <TableCell>Weight:</TableCell>
                    <TableCell>5.5 kg (without consumables)</TableCell>
                  </Row>
                  <Row>
                    <TableCell>Power:</TableCell>
                    <TableCell>60 W</TableCell>
                  </Row>
                  <Row>
                    <TableCell>App enabled:</TableCell>
                    <TableCell>iOS & Android</TableCell>
                  </Row>
                  <Row>
                    <TableCell>WiFi enabled:</TableCell>
                    <TableCell>2.4/5 GHz</TableCell>
                  </Row>
                  <Row>
                    <TableCell>Warranty:</TableCell>
                    <TableCell>2-year limited warranty</TableCell>
                  </Row>
                  <Row>
                    <TableCell>Manufactured:</TableCell>
                    <TableCell>Made in Germany</TableCell>
                  </Row>
                </TableBody>
              </Table>
            </SpecsFlexDescText>
          </SpecsFlexImg>
        </SpecsContainer>
      </SpecsBackground>
    </>
  );
};
export default MachineSpecs;
