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

const NavBar = () => {
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
      <Nav clicked={isMenuClicked}>
        <Logo>
          <AddCircleOutlineIcon sx={{ fontSize: 30 }} />
        </Logo>
        <List>
          <Li>Mitte Home</Li>
          <Li>Cartridge</Li>
          <Li>Shop</Li>
        </List>
        <Icons>
          <Button>Buy</Button>
          <StyledBadge>0</StyledBadge>
          <Lang onClick={langClickHandler}>
            EN ↓
            <LangMenu active={isLangActive}>
              <LangMenuDE>DE</LangMenuDE>
              <div>EN</div>
            </LangMenu>
          </Lang>
          <BurgerMenu
            onMouseEnter={menuHoverEnterHandler}
            onMouseLeave={menuHoverExitHandler}
            onClick={menuClickHandler}
            clicked={isMenuClicked}
          >
            <BurgerBarTop hover={isMenuHover} clicked={isMenuClicked} />
            <BurgerBarBottom hover={isMenuHover} clicked={isMenuClicked} />
          </BurgerMenu>
        </Icons>
      </Nav>
      <ModalNav />
    </>
  );
};
export default NavBar;
