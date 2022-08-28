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
const SpecsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

// Flex 3 subcontainers styles
// Flex title, Flex Desc, Flex img
// Container 1 (left side)
const SpecsFlexTitle = styled(FlexTitle)``;

// Container 2 (middle)
const SpecsFlexDesc = styled(FlexDesc)`
  position: relative;
  flex: 4;
  padding: 0 5rem 0 10rem;
`;

// Container 3 (right side)
const SpecsFlexImg = styled(FlexImg)`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  justify-self: flex-start;
`;

// Container text styles
// Flex container 1 (left side) text
const SpecsFlexTitleText = styled.p`
  color: black;
  align-self: flex-start;
  padding-bottom: 25rem;
`;

// Flex container 2 (middle) text
const SpecsFlexDescHeading = styled(FlexDescHeading)`
  width: 100%;
  padding-top: 8rem;
  text-align: left;
`;

const SpecsFlexDescText = styled.p`
  color: grey;
  max-width: 45rem;
  padding-top: 2rem;
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
`;

const Plus3 = styled(Plus)`
  top: 80%;
  left: 35%;
`;

// Flex container 3 (right side) text
// Table styles
const Table = styled.table`
  padding-bottom: 15rem;
`;

const Row = styled.tr``;

const TableBody = styled.tbody``;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid grey;
  font-weight: 600;
`;

const MachineSpecs = () => {
  return (
    <>
      <SpecsBackground>
        <Container>
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
        </Container>
      </SpecsBackground>
    </>
  );
};
export default MachineSpecs;
