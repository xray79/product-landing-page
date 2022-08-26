import styled from "styled-components";

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
    width: 20rem;
    background-color: white;
    color: grey;
    border-radius: 5px;
    padding: 1rem;
    opacity: 0;
    z-index: -3;
    transition: all 0.2s ease;
  }

  &:hover::after {
    opacity: 1;
    z-index: 1;
  }
`;

export const FlexImg = styled.div`
  position: relative;
  text-align: left;
  font-size: 1.5rem;
  flex: 5;
  height: 100%;
  transition: all 30s ease;
`;
