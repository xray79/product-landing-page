import styled from "styled-components";
import { FiTruck } from "react-icons/fi";
import { BsBoxSeam, BsShieldCheck } from "react-icons/bs";

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  margin-left: 5rem;
  margin-bottom: 3rem;
`;

const Container = styled.div`
  overflow: auto;
`;

const Table = styled.table`
  margin: 5rem auto;
  border-collapse: collapse;
  font-size: 2rem;
  overflow: auto;
`;

// Table Cell base class
const TableCell = styled.td`
  padding: 2rem;
  font-weight: 400;
  text-align: center;
  font-size: 1.6rem;
  color: grey;
  border: 1px solid grey;
  border-left: none;
  border-bottom: none;

  &:last-child {
    border-right: none;
  }
`;

//  Table cell headings top
const Thead = styled.thead``;

const Th = styled.th`
  padding: 2rem;
  font-weight: 400;
  text-align: center;
  font-size: 2rem;
  border-bottom: 2px solid black;
  border-right: 1px solid grey;

  &:first-child,
  &:last-child {
    border-right: none;
  }
`;

// Main Column styles
const mainColumnColor = "#088F8F";
const MainColumnHead = styled(Th)`
  border-left: none;
  border-right: none;
  background-color: ${mainColumnColor};
  border-radius: 1rem 1rem 0 0;
`;
const MainColumnBody = styled(TableCell)`
  background-color: ${mainColumnColor};
  color: black;
  border-left: none;
  border-right: none;
`;
const MainColumnFooter = styled(TableCell)`
  background-color: ${mainColumnColor};
  color: black;
  border-radius: 0 0 1rem 1rem;
  border: none;
  border-top: 1px solid grey;
`;

// Table cell left side headings
const CellHeadingLeft = styled(TableCell)`
  padding-right: 8rem;
  text-align: left;
  font-size: 2rem;
  color: black;
  border-right: none;
`;

// Table icon styles
const Icon = styled.div`
  font-weight: 100;
  font-size: 3rem;
`;

// Info Section
// Info container
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin: 0 auto;
  text-align: center;
  font-size: 2rem;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
// Info item container
const InfoItemContainer = styled.div`
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
//Icons
const iconsColor = "#d3cccc";
const InfoIcon = styled.p`
  font-size: 3rem;
  color: ${iconsColor};
`;
// Icons text
const IconsLowerText = styled.p`
  color: ${iconsColor};
`;

const TableSection = () => {
  return (
    <>
      <Heading>
        The one & only 3-in-1 watermaker.
        <br /> Made in Germany.
      </Heading>

      <Container>
        <Table>
          <Thead>
            <tr>
              <Th>&nbsp;</Th>
              <MainColumnHead>
                MITTE
                <br /> HOME
              </MainColumnHead>
              <Th>
                SODA
                <br /> MAKERS
              </Th>
              <Th>
                PITCHER
                <br /> FILTERS
              </Th>
              <Th>
                BOTTLED
                <br /> WATER
              </Th>
              <Th>
                TAP
                <br /> WATER
              </Th>
            </tr>
          </Thead>
          <tbody>
            <tr>
              <CellHeadingLeft>Filtration</CellHeadingLeft>
              <MainColumnBody>
                <Icon>✓</Icon>
                Double Filtered
              </MainColumnBody>
              <TableCell>
                <Icon>X</Icon>
                No Extra Filtration
              </TableCell>
              <TableCell>
                <Icon>✓</Icon>
                Ion Exchange
              </TableCell>
              <TableCell>
                <Icon>X</Icon>
                No Extra Filtration
              </TableCell>
              <TableCell>
                <Icon>X</Icon>
                No Extra Filtration
              </TableCell>
            </tr>
            <tr>
              <CellHeadingLeft>Mineralization</CellHeadingLeft>
              <MainColumnBody>
                <Icon>✓</Icon>
                Calcite & Magnesite
              </MainColumnBody>
              <TableCell>
                <Icon>X</Icon>No Mineralization
              </TableCell>
              <TableCell>
                <Icon>X</Icon> No Mineralization
              </TableCell>
              <TableCell>
                <Icon>✓</Icon>
                Mineralized
              </TableCell>
              <TableCell>
                <Icon>X</Icon>No Mineralization
              </TableCell>
            </tr>
            <tr>
              <CellHeadingLeft>Carbonation</CellHeadingLeft>
              <MainColumnBody>
                <Icon>✓</Icon>
                Still or Sparkling
              </MainColumnBody>
              <TableCell>
                <Icon>✓</Icon>
                Only Sparkling
              </TableCell>
              <TableCell>
                <Icon>X</Icon>Only Still
              </TableCell>
              <TableCell>
                <Icon>✓</Icon>
                Still or Sparkling
              </TableCell>
              <TableCell>
                <Icon>X</Icon>Only Still
              </TableCell>
            </tr>
            <tr>
              <CellHeadingLeft>Sustainability</CellHeadingLeft>
              <MainColumnBody>
                <Icon>✓</Icon>
                Less Waste
              </MainColumnBody>
              <TableCell>
                <Icon>✓</Icon>
                Less Waste
              </TableCell>
              <TableCell>
                <Icon>✓</Icon>
                Less Waste
              </TableCell>
              <TableCell>
                <Icon>X</Icon>Lots of Waste
              </TableCell>
              <TableCell>
                <Icon>✓</Icon>
                No Waste
              </TableCell>
            </tr>
            <tr>
              <CellHeadingLeft>Taste</CellHeadingLeft>
              <MainColumnBody>
                <Icon>✓</Icon>
                Perfectly Balanced
              </MainColumnBody>
              <TableCell>
                <Icon>X</Icon>Slightly Sour
              </TableCell>
              <TableCell>
                <Icon>X</Icon>Usually Flat
              </TableCell>
              <TableCell>
                <Icon>✓</Icon>
                Balanced
              </TableCell>
              <TableCell>
                <Icon>X</Icon>Varies Greatly
              </TableCell>
            </tr>
            <tr>
              <CellHeadingLeft>Smart</CellHeadingLeft>
              <MainColumnFooter>
                <Icon>✓</Icon>
                App & Smart Refills
              </MainColumnFooter>
              <TableCell>
                <Icon>X</Icon>Not Smart
              </TableCell>
              <TableCell>
                <Icon>X</Icon>Not Smart
              </TableCell>
              <TableCell>
                <Icon>X</Icon>Not Smart
              </TableCell>
              <TableCell>
                <Icon>X</Icon>Not Smart
              </TableCell>
            </tr>
          </tbody>
        </Table>
      </Container>

      <InfoContainer>
        <InfoItemContainer>
          <InfoIcon>
            <FiTruck />
          </InfoIcon>
          <p>Free Delivery</p>
          <IconsLowerText>
            We offer complimentary, no-contact delivery with every order.
          </IconsLowerText>
        </InfoItemContainer>
        <InfoItemContainer>
          <InfoIcon>
            <BsBoxSeam />
          </InfoIcon>
          <p>Easy Return</p>
          <IconsLowerText>
            14 day money-back guarantee so there are no surprises.
          </IconsLowerText>
        </InfoItemContainer>
        <InfoItemContainer>
          <InfoIcon>
            <BsShieldCheck />
          </InfoIcon>
          <p>Two Year Warranty</p>
          <IconsLowerText>
            We've got you covered for peace of mind.
          </IconsLowerText>
        </InfoItemContainer>
      </InfoContainer>
    </>
  );
};
export default TableSection;
