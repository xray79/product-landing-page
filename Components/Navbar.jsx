import styled from "styled-components";
import { useContext } from "react";
import { menuContext } from "../store/Context";
import ModalNav from "./ModalNav";
import {
  Nav,
  Logo,
  List,
  Li,
  Icons,
  Button,
  StyledBadge,
  Lang,
  LangMenu,
  LangMenuDE,
  BurgerMenu,
  BurgerBarTop,
  BurgerBarBottom,
} from "./NavStyles";

const AdaptiveNav = styled(Nav)`
  width: 100%;
  ${(props) =>
    props.vis
      ? `background-color: white; 
      color: black; 
      top: 0; 
      left: 0; 
      right: 0;`
      : ""}
`;

const AdaptiveLi = styled(Li)`
  width: 100%;
  &:first-child {
    &::after {
      ${(props) => (props.vis ? "background-color: black" : "")}
    }
  }

  &:hover {
    &::after {
      ${(props) => (props.vis ? "background-color: black" : "")}
    }
  }
`;

const AdaptiveBurgerBarTop = styled(BurgerBarTop)`
  ${(props) => (props.vis ? "background-color: black" : "")}
`;
const AdaptiveBurgerBarBottom = styled(BurgerBarBottom)`
  ${(props) => (props.vis ? "background-color: black" : "")}
`;

const AdaptiveButton = styled(Button)`
  ${(props) => (props.vis ? "background-color: black; color: white;" : "")}
`;
const AdaptiveStyledBadge = styled(StyledBadge)`
  ${(props) => (props.vis ? "color: black; border: 1px solid black;" : "")}
`;
const AdaptiveLang = styled(Lang)`
  ${(props) => (props.vis ? "color: black;" : "")}
`;

const NavBar = (props) => {
  const {
    isMenuClicked,
    menuClickHandler,
    isMenuHover,
    menuHoverEnterHandler,
    menuHoverExitHandler,
    isLangActive,
    langClickHandler,
  } = useContext(menuContext);

  return (
    <>
      <AdaptiveNav clicked={isMenuClicked} vis={props.vis}>
        <Logo>
          <img
            src={props.vis ? "./logo-black.svg" : "./logo-white.svg"}
            alt=""
          />
        </Logo>
        <List>
          <AdaptiveLi vis={props.vis}>Mitte Home</AdaptiveLi>
          <AdaptiveLi vis={props.vis}>Cartridge</AdaptiveLi>
          <AdaptiveLi vis={props.vis}>Shop</AdaptiveLi>
        </List>
        <Icons>
          <AdaptiveButton vis={props.vis}>Buy</AdaptiveButton>
          <AdaptiveStyledBadge vis={props.vis}>0</AdaptiveStyledBadge>
          <AdaptiveLang onClick={langClickHandler} vis={props.vis}>
            EN ↓
            <LangMenu active={isLangActive}>
              <LangMenuDE>DE</LangMenuDE>
              <div>EN</div>
            </LangMenu>
          </AdaptiveLang>
          <BurgerMenu
            onMouseEnter={menuHoverEnterHandler}
            onMouseLeave={menuHoverExitHandler}
            onClick={menuClickHandler}
            clicked={isMenuClicked}
          >
            <AdaptiveBurgerBarTop
              hover={isMenuHover}
              clicked={isMenuClicked}
              vis={props.vis}
            />
            <AdaptiveBurgerBarBottom
              hover={isMenuHover}
              clicked={isMenuClicked}
              vis={props.vis}
            />
          </BurgerMenu>
        </Icons>
      </AdaptiveNav>
      <ModalNav vis={props.vis} />
    </>
  );
};
export default NavBar;
