import styled from "styled-components";
import NavBar from "./Navbar";

const Notification = styled.div`
  z-index: 50;
  width: 100%;
  height: 4.5rem;
  background-color: #acaeaa;
  color: black;
  font-size: 1.8rem;
  display: grid;
  place-items: center;
  position: fixed;
  ${(props) => (props.visibility ? "opacity: 0; z-index: -1" : "")}
`;

const NoteLink = styled.a`
  width: 100%;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeroBackground = styled.div`
  background-image: url("./mitte-home-hero.webp");
  background-size: cover;
  background-position: center;
  min-height: max(80rem, 100vh);
  width: 100%;
  position: relative;
`;

export const TextBox = styled.div`
  max-width: 40rem;
  text-align: center;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Heading = styled.div`
  color: white;
  font-size: 4.7rem;
  margin-bottom: 1.7rem;
`;
const Btn = styled.button`
  padding: 1rem 2rem;
  border-radius: 50rem;
  background-color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 3rem;
`;
const DownArrow = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: 100;

  animation: myAnim 3s ease-in 5s infinite normal forwards;
  @keyframes myAnim {
    0% {
      animation-timing-function: ease-in;
      transform: translateY(0px);
    }
    15% {
      animation-timing-function: ease-in;
      transform: translateY(-20px);
    }
    20% {
      animation-timing-function: ease-in;
      transform: translateY(-24px);
    }
    25% {
      animation-timing-function: ease-in;
      transform: translateY(-20px);
    }
    35% {
      animation-timing-function: ease-in;
      transform: translateY(0);
    }
    45% {
      animation-timing-function: ease-in;
      transform: translateY(-12px);
    }
    55% {
      animation-timing-function: ease-in;
      transform: translateY(0px);
    }
  }
`;

const Hero = (props) => {
  return (
    <>
      <HeroBackground>
        <Notification vis={props.vis}>
          <NoteLink href="#">
            The Mitte Glass Bottle is here -- available now in the Shop
          </NoteLink>
        </Notification>
        <NavBar vis={props.vis} />
        <TextBox>
          <Heading>Meet Mitte Home your new 3-in-1 watermaker.</Heading>
          <Btn>Buy now</Btn>
          <DownArrow>↓</DownArrow>
        </TextBox>
      </HeroBackground>
    </>
  );
};
export default Hero;
