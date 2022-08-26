import styled from "styled-components";

const Container = styled.div`
  margin: 8rem 1.7rem 14rem 1.7rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* gap: 5rem; */
  text-align: center;
  font-size: 2.1rem;
`;

const Img = styled.img`
  height: 5.5rem;
  margin-bottom: 2rem;
`;

const FeaturesGrid = () => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};
export default FeaturesGrid;
