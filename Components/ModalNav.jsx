import Portal from "./Portal";
import styled from "styled-components";
import { useContext } from "react";
import { menuContext } from "../store/Context";
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
  Menu,
} from "./NavStyles";

const ModalMenu = styled(Menu)`
  background-color: white;
  ${(props) => (props.clicked ? "z-index: 100;" : "")}
`;

const ModalLogo = styled(Logo)`
  align-self: flex-start;
  margin-left: 2rem;
`;

const ModalList = styled(List)`
  flex: none;
  flex-direction: column;
  align-items: flex-start;
  font-size: 5rem;
  gap: 0.5rem;
  margin-left: 2rem;
  margin-bottom: 15rem;
`;

const ModalLi = styled(Li)`
  &:last-child {
    color: #cbbebe;
  }
`;

const ModalIcons = styled(Icons)`
  flex: none;
  margin-top: 1.5rem;
  margin-right: 15rem;
  margin-bottom: 2rem;
`;

const ModalBurgerMenu = styled(BurgerMenu)`
  align-self: flex-end;
  margin-right: 3rem;
  color: black;
`;

const ModalLang = styled(Lang)`
  align-self: flex-start;
  margin-left: 2rem;
  color: black;
  font-size: 2rem;
`;

const ModalLangMenu = styled(LangMenu)`
  color: grey;
  box-shadow: 0 5px 5px 3px rgba(42, 39, 39, 0.113);
`;

const ModalDetails = styled(ModalList)`
  font-size: 2.3rem;
  line-height: 2rem;
  margin-left: 1.3rem;
  margin-bottom: 4rem;
`;

const ModalDetailsLi = styled(Li)``;

const CopyrightDiv = styled.div`
  align-self: flex-end;
  margin-right: 2rem;
  font-size: 1.5rem;
  color: grey;
`;

const ModalButton = styled(Button)`
  background-color: black;
  color: white;
`;

const ModalStyledBadge = styled(StyledBadge)`
  color: black;
  border: 1px solid black;
`;

const ModalNav = () => {
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
    <Portal>
      <ModalMenu clicked={isMenuClicked}>
        <ModalIcons>
          <ModalLogo>
            <img src="./logo-black.svg" alt="" />
          </ModalLogo>
          <ModalButton>Buy</ModalButton>
          <ModalStyledBadge>0</ModalStyledBadge>
        </ModalIcons>

        <ModalBurgerMenu
          onMouseEnter={menuHoverEnterHandler}
          onMouseLeave={menuHoverExitHandler}
          onClick={menuClickHandler}
          clicked={isMenuClicked}
        >
          <BurgerBarTop hover={isMenuHover} clicked={isMenuClicked} />
          <BurgerBarBottom hover={isMenuHover} clicked={isMenuClicked} />
        </ModalBurgerMenu>

        <ModalList>
          <ModalLi>Mitte Home</ModalLi>
          <ModalLi>Cartridge</ModalLi>
          <ModalLi>Shop</ModalLi>
          <ModalLi>Login or Signup</ModalLi>
        </ModalList>

        <ModalDetails>
          <ModalDetailsLi>Manifesto</ModalDetailsLi>
          <ModalDetailsLi>Our story</ModalDetailsLi>
          <ModalDetailsLi>Jobs</ModalDetailsLi>
          <ModalDetailsLi>Contact</ModalDetailsLi>
          <lModalDetailsLi>Support</lModalDetailsLi>
          <ModalDetailsLi>Blog</ModalDetailsLi>
        </ModalDetails>

        <ModalLang onClick={langClickHandler}>
          EN
          <ModalLangMenu active={isLangActive}>
            <LangMenuDE>DE</LangMenuDE>
            <div>EN</div>
          </ModalLangMenu>
        </ModalLang>
        <CopyrightDiv>All Rights Reserved. © Copyright. 2022</CopyrightDiv>
      </ModalMenu>
    </Portal>
  );
};
export default ModalNav;