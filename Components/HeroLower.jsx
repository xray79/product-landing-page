import styled from "styled-components";
import { HeroBackground, TextBox, Heading } from "./Hero";

const HeroLowerBackground = styled(HeroBackground)`
  background-image: url("./hero-lower.webp");
`;

const HeroLowerTextBox = styled(TextBox)`
  width: 70rem;
`;

const HeroLowerDesc = styled.p`
  font-size: 1.6rem;
  color: white;
  margin-top: 3rem;
`;

const HeroLower = () => {
  return (
    <>
      <HeroLowerBackground>
        <HeroLowerTextBox>
          <Heading>
            Drinking water that <br /> doesn't cost the Earth.
          </Heading>
          <HeroLowerDesc>
            Just one Mitte Home Mineral Cartridge replaces 250 single-use
            bottles of water, saving countless bottles over its lifetime. And we
            offset 100% of carbon emissions we&apos;ve generated through our
            partnership with ClimatePartner.
          </HeroLowerDesc>
        </HeroLowerTextBox>
      </HeroLowerBackground>
    </>
  );
};
export default HeroLower;
