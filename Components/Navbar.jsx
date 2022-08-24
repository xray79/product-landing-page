import styled from "styled-components";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Nav = styled.nav`
  width: 100%;
  height: 10rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: none;
  color: white;
`;

const Logo = styled.div`
  flex: 1;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 2rem;
  gap: 5rem;
`;

const Li = styled.li`
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 1rem 3rem;
  border-radius: 2rem;
  background-color: white;
  cursor: pointer;
  border: none;
`;

const StyledBadge = styled.button`
  border: 1px solid white;
  color: white;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  padding: rem;
  margin: 0 2rem;
  background: none;
`;

const Lang = styled.button`
  border: none;
  background: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: white;
  position: relative;
  cursor: pointer;
`;

const LangMenu = styled.div`
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

const LangMenuDE = styled.div`
  margin-bottom: 1.2rem;
`;

const BurgerBarTop = styled.div`
  background-color: white;
  height: 1px;
  width: 4rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transition: all 0.2s ease-in-out;
  transform: translateX(${(props) => (props.hover ? "-60%" : "-50%")});
  ${(props) =>
    props.clicked ? "transform: rotate(45deg) translate(-10px, 10px);" : ""};
`;

const BurgerBarBottom = styled.div`
  background-color: white;
  height: 1px;
  width: 4rem;
  position: absolute;
  top: 55%;
  left: 50%;
  transition: all 0.2s ease-in-out;
  transform: translateX(${(props) => (props.hover ? "-40%" : "-50%")});
  ${(props) =>
    props.clicked ? "transform: rotate(-45deg) translate(-7px, -12px);" : ""};
`;

const BurgerMenu = styled.div`
  z-index: 3; /* to show above Menu */
  background: none;
  border: none;
  height: 4rem;
  width: 5rem;
  margin: 0 2rem;
  cursor: pointer;
  position: relative;
`;

const Menu = styled.div`
  ${(props) =>
    props.clicked ? "opacity: 1; z-index: 2" : "opacity: 0; z-index: -2;"};
  transition: all 0.2s ease-in-out;
  height: 100vh;
  width: 100vw;
  background-color: blue;
  position: fixed;
  top: 0;
  left: 0;
`;

const NavBar = () => {
  const [isLangActive, setIsLangActive] = useState(false);
  const [isMenuHover, setIsMenuHover] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const langClickHandler = () => {
    setIsLangActive(!isLangActive);
  };

  const menuHoverEnterHandler = () => {
    setIsMenuHover(true);
  };

  const menuHoverExitHandler = () => {
    setIsMenuHover(false);
  };

  const menuClickHandler = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <Nav>
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
          >
            <BurgerBarTop hover={isMenuHover} clicked={isMenuClicked} />
            <BurgerBarBottom hover={isMenuHover} clicked={isMenuClicked} />
          </BurgerMenu>
        </Icons>
      </Nav>
      <Menu clicked={isMenuClicked} />
    </>
  );
};
export default NavBar;
