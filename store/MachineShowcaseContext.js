import { createContext, useState } from "react";

export const MachineContext = createContext();

const MachineShowcaseContext = ({ children }) => {
  const [IsMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };
  const handleMouseExit = () => {
    setIsMouseOver(false);
  };

  return (
    <MachineContext.Provider
      value={{ IsMouseOver, handleMouseEnter, handleMouseExit }}
    >
      {children}
    </MachineContext.Provider>
  );
};
export default MachineShowcaseContext;
