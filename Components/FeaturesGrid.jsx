import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const GridContainer = styled(Container)`
  margin: auto;
  padding: 8rem 1.7rem 14rem 1.7rem;
  display: grid;
  place-items: center;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  font-size: 2.1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Img = styled.img`
  height: 5.5rem;
  margin-bottom: 2rem;
`;

const FeaturesGrid = () => {
  return (
    <>
      <Container>
        <GridContainer>
          <div>
            <Img src="./filtration-icon.svg" alt="" />
            <p>Superior filtration technology.</p>
          </div>
          <div>
            <Img src="./minerals-icon.svg" alt="" />
            <p>Enhanced with minerals for taste.</p>
          </div>
          <div>
            <Img src="options-icon.svg" alt="" />
            <p>
              Choose from three options
              <br /> of still or sparkling.
            </p>
          </div>
          <div>
            <Img src="connected-icon.svg" alt="" />
            <p>Effortlessly Smart Refills.</p>
          </div>
        </GridContainer>
      </Container>
    </>
  );
};
export default FeaturesGrid;
