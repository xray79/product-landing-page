import styled from "styled-components";
import { screenWidth } from "../store/Context";

export const Nav = styled.nav`
  z-index: 50;
  width: 100%;
  height: 8.5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: white;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  transition: all 0.3s ease;
`;

export const Logo = styled.div`
  flex: 1;

  @media (max-width: 1100px) {
    flex: none;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 2rem;
  gap: 5rem;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Li = styled.li`
  &:first-child {
    &::after {
      content: "";
      width: inherit;
      height: 2px;
      display: block;
      background-color: white;
    }
  }

  &:hover {
    &::after {
      content: "";
      width: inherit;
      height: 2px;
      display: block;
      background-color: white;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 0.5rem 2.5rem;
  border-radius: 2rem;
  background-color: white;
  cursor: pointer;
  border: none;
`;

export const StyledBadge = styled.button`
  border: 1px solid white;
  color: white;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  margin: 0 2rem;
  background: none;
`;

export const Lang = styled.button`
  border: none;
  background: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: white;
  position: relative;
  cursor: pointer;
`;

export const LangMenu = styled.div`
  position: absolute;
  top: 2rem;
  left: -5px;
  font-size: 1.4rem;
  background-color: white;
  color: black;
  padding: 0.8rem;
  border-radius: 2px;
  display: ${(props) => (props.active ? "block" : "none")};

  div:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const LangMenuDE = styled.div`
  margin-bottom: 1.2rem;
`;

export const BurgerBarTop = styled.div`
  background-color: white;
  height: 1px;
  width: 4rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transition: all 0.2s ease-in-out;
  transform: translateX(${(props) => (props.hover ? "-60%" : "-50%")});
  ${(props) =>
    props.clicked
      ? "transform: rotate(45deg) translate(-9px, 10px); background-color: black;"
      : ""};
`;

export const BurgerBarBottom = styled.div`
  background-color: white;
  height: 1px;
  width: 4rem;
  position: absolute;
  top: 55%;
  left: 50%;
  transition: all 0.2s ease-in-out;
  transform: translateX(${(props) => (props.hover ? "-40%" : "-50%")});
  ${(props) =>
    props.clicked
      ? "transform: rotate(-45deg) translate(-7px, -12px); background-color: black;"
      : ""};
`;

export const BurgerMenu = styled.div`
  z-index: 200;
  background: none;
  border: none;
  height: 4rem;
  width: 5rem;
  margin: 0 2rem;
  margin-right: 1rem;
  cursor: pointer;
  position: relative;
`;

export const Menu = styled.div`
  ${(props) =>
    props.clicked ? "opacity: 1; z-index: 1;" : "opacity: 0; z-index: -1;"};

  transition: all 0.2s ease-in-out;
  background-color: blue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
`;
