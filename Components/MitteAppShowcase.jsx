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

const BackgroundMitte = styled(Background)`
  background-color: red;
`;

const MitteFlexDesc = styled(FlexDesc)`
  flex: 2;
`;

const MitteFlexImg = styled(FlexImg)`
  flex: 2;
`;

const MitteAppShowcase = () => {
  return (
    <>
      <BackgroundMitte>
        <Container>
          <FlexTitle>Mitte App</FlexTitle>
          <MitteFlexDesc>
            <FlexDescHeading>
              Smart Refills: Never run out of Mitte Home cartridges & CO₂
              cylinders.
            </FlexDescHeading>
            <FlexDescText>
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
            </FlexDescText>
          </MitteFlexDesc>
          <MitteFlexImg>3</MitteFlexImg>
        </Container>
      </BackgroundMitte>
    </>
  );
};
export default MitteAppShowcase;
