import { createContext, useState } from "react";

export const screenWidth = "400px";

export const menuContext = createContext();

const Context = ({ children }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isMenuHover, setIsMenuHover] = useState(false);
  const [isLangActive, setIsLangActive] = useState(false);

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
    <menuContext.Provider
      value={{
        isMenuClicked,
        menuClickHandler,
        isMenuHover,
        menuHoverEnterHandler,
        menuHoverExitHandler,
        isLangActive,
        langClickHandler,
      }}
    >
      {children}
    </menuContext.Provider>
  );
};
export default Context;
