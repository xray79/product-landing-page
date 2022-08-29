import styled from "styled-components";

const MainContainer = styled.div`
  margin-top: 15rem;
  background-color: #e5e4e2;
  display: flex;
  justify-content: center;
  font-size: 1.6rem;

  @media (max-width: 1175px) {
    flex-direction: column-reverse;
  }
`;

const ImgContainer = styled.div`
  max-width: 80rem;
`;

const Img = styled.img`
  max-width: 80%;
  height: auto;
`;

const TextContainer = styled.div`
  margin-top: 10rem;
  margin-left: 5rem;
  padding: 5rem;
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const HeadingWhite = styled(Heading)`
  color: white;
`;

const VAT = styled.p`
  color: grey;
  font-size: 1.4rem;
  margin-bottom: 5rem;
`;

const TagLine = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const ListTitle = styled.p`
  margin-bottom: 1.5rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  color: grey;
  margin-bottom: 3rem;

  & li {
    margin-bottom: 0.5rem;
  }
`;

const ButtonsContainer = styled.div`
  & button {
    margin-right: 2rem;
  }
  button:last-child {
    margin-right: 0;
  }
`;

const Buttons = styled.button`
  cursor: pointer;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 5rem;
  border: 1px solid black;
  transition: all 0.5s ease;
`;

const ButtonBuy = styled(Buttons)`
  background-color: black;
  color: white;

  &:hover {
    color: black;
    background-color: transparent;
  }
`;

const ButtonLearn = styled(Buttons)`
  background-color: transparent;
  color: black;

  &:hover {
    color: white;
    background-color: black;
  }
`;

const CallToActionSection = () => {
  return (
    <>
      <MainContainer>
        <ImgContainer>
          <Img src="./25_Starter-Kit-01.webp" alt="" />
        </ImgContainer>
        <TextContainer>
          <Heading>Mitte Home</Heading>
          <HeadingWhite>$349.99</HeadingWhite>
          <VAT>Includes VAT and Shipping</VAT>
          <TagLine>
            Turn your tap water into purified, mineralized, still or sparkling
            water.
          </TagLine>
          <ListTitle>In the box:</ListTitle>
          <FeaturesList>
            <li>Mitte home</li>
            <li>Mitte Balance Cartridge — Makes 300 bottles</li>
            <li>Mitte PET Bottle — Capacity of 860ml</li>
            <li>CO₂ Cylinder — 425g CO₂</li>
          </FeaturesList>
          <ButtonsContainer>
            <ButtonBuy>Buy Now</ButtonBuy>
            <ButtonLearn>Learn More</ButtonLearn>
          </ButtonsContainer>
        </TextContainer>
      </MainContainer>
    </>
  );
};
export default CallToActionSection;
