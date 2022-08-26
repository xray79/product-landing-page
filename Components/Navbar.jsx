import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useContext, useState } from "react";
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
      <AdaptiveNav clicked={isMenuClicked} vis={props.visibility}>
        <Logo>
          <img
            src={props.visibility ? "./logo-black.svg" : "./logo-white.svg"}
            alt=""
          />
        </Logo>
        <List>
          <AdaptiveLi vis={props.visibility}>Mitte Home</AdaptiveLi>
          <AdaptiveLi vis={props.visibility}>Cartridge</AdaptiveLi>
          <AdaptiveLi vis={props.visibility}>Shop</AdaptiveLi>
        </List>
        <Icons>
          <AdaptiveButton vis={props.visibility}>Buy</AdaptiveButton>
          <AdaptiveStyledBadge vis={props.visibility}>0</AdaptiveStyledBadge>
          <AdaptiveLang onClick={langClickHandler} vis={props.visibility}>
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
              vis={props.visibility}
            />
            <AdaptiveBurgerBarBottom
              hover={isMenuHover}
              clicked={isMenuClicked}
              vis={props.visibility}
            />
          </BurgerMenu>
        </Icons>
      </AdaptiveNav>
      <ModalNav vis={props.visibility} />
    </>
  );
};
export default NavBar;
