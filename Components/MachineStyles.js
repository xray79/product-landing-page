import styled from "styled-components";

// Main background and container
export const Background = styled.div`
  height: auto;
  width: 100%;
  background-color: #e5e4e2;
  padding: 10rem 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

// Container 1 left
export const FlexTitle = styled.div`
  text-align: left;
  font-size: 1.5rem;
  flex: 1;
  margin-left: 2rem;
  color: #c2b1b1;

  @media (max-width: 990px) {
    display: none;
  }
`;

// Container 2 middle
export const FlexDesc = styled.div`
  text-align: left;
  font-size: 1.5rem;
  flex: 4;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-top: 8rem;

  @media (max-width: 990px) {
    text-align: center;
    align-items: center;
  }
`;

// Container 2 title
export const FlexDescHeading = styled.h2`
  font-weight: 400;
  width: 50%;
  font-size: 4.8rem;
  line-height: 5rem;
  margin-bottom: 3rem;
  align-self: flex-start;

  @media (max-width: 990px) {
    text-align: left;
    width: 90%;
    margin: 0 auto 3rem auto;
  }
`;

// container 2 text/desc
export const FlexDescText = styled.p`
  width: 43%;
  color: #c2b1b1;

  @media (max-width: 990px) {
    text-align: left;
    width: 90%;
    margin-bottom: 3rem;
  }
`;

// container 3
export const FlexImg = styled.div`
  position: relative;
  text-align: left;
  font-size: 1.5rem;
  flex: 5;
  height: 100%;
  width: auto;
`;

// Tooltip styles
export const Number = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 30%;
  display: grid;
  place-items: center;

  color: black;
  border: 1px solid black;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.5rem;

  transition: all 0.2s ease;

  &:hover {
    background-color: black;
    color: white;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 200%;
    max-width: 20rem;
    height: auto;
    background-color: white;
    color: grey;
    border-radius: 5px;
    padding: 1rem;
    opacity: 0; // og val 0
    z-index: -3; // og val -3
    transition: all 0.2s ease;
  }

  &:hover::after {
    opacity: 1;
    z-index: 1;
  }
`;
