import styled from "styled-components";
import {
  Background,
  Container,
  FlexDesc,
  FlexDescHeading,
  FlexDescText,
  FlexTitle,
  FlexImg,
} from "./MachineStyles";

const BackgroundMitte = styled.div`
  background-color: white;
`;

const MitteContainer = styled(Container)`
  background-color: white;
  padding: 10rem 0;
`;

// second container (middle) styles
const MitteFlexDesc = styled(FlexDesc)`
  flex: 2;
  margin-top: 0rem;
  padding: 0 2rem;
`;

const MitteFlexDescHeading = styled(FlexDescHeading)`
  width: 100%;
  padding-top: 0;
`;

const MitteFlexDescText = styled(FlexDescText)`
  width: 100%;
`;

const MitteAppIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 5rem; */
  width: max(20rem, 60%);
  margin: 3rem auto 3rem 0;
  overflow: hidden;
  @media (max-width: 990px) {
    margin: 3rem auto 3rem auto;
  }
`;

const Img = styled.img`
  width: 40%;
  height: auto;
  cursor: pointer;
`;

// Third container (right side)
const MitteFlexImg = styled(FlexImg)`
  flex: 3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Video = styled.video`
  height: 100%;
  width: 60%;
`;

const MitteAppShowcase = () => {
  return (
    <>
      <BackgroundMitte>
        <MitteContainer>
          <FlexTitle>Mitte App</FlexTitle>
          <MitteFlexDesc>
            <MitteFlexDescHeading>
              Smart Refills:
              <br /> Never run out of Mitte Home cartridges & CO₂ cylinders.
            </MitteFlexDescHeading>
            <MitteFlexDescText>
              <p>
                Since the Mitte Home cartridges and CO₂ cylinders need to be
                replaced based on usage, we offer Smart Refills, a demand-driven
                consumable replenishment service that is 100% based on your
                water consumption. Don’t worry — it’s not a subscription but
                rather order reminders when you're running low on Mitte Home
                cartridges or CO₂ cylinders
              </p>
              <br />
              <p>
                How does it work? Connect your Mitte Home device with the free
                Mitte app. Then when your consumables are nearly empty, you
                receive a notification via the Mitte app on your phone. Confirm
                the order in the app and they’ll arrive before your current ones
                run out. You remain in complete control of your orders and
                you’re free to pause or cancel anytime.
              </p>
              <br />
              <p>
                In our spirit of sustainability, we’ll take care of disposing
                and reusing the depleted consumables appropriately. With every
                Smart Refills order, you’ll receive a DHL GoGreen return label
                so you can ship back the depleted consumables back to us for
                free.
              </p>
            </MitteFlexDescText>
            <MitteAppIconsContainer>
              <Img src="./apple-badge-en-us.svg" alt="" />
              <Img src="./google-play-badge-en.webp" alt="" />
            </MitteAppIconsContainer>
          </MitteFlexDesc>
          <MitteFlexImg>
            <Video src="./App-Preview_Web.mp4" autoPlay loop muted />
          </MitteFlexImg>
        </MitteContainer>
      </BackgroundMitte>
    </>
  );
};
export default MitteAppShowcase;
