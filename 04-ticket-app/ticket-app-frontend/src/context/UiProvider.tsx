import { useState } from "react";
import UiContext from "./UIContext";

interface Props {
  children?: React.ReactNode;
}

export const UiProvider = ({ children }: Props) => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const showMenu = () => {
    setHiddenMenu(false);
  };
  const hideMenu = () => {
    setHiddenMenu(true);
  };
  return (
    <UiContext.Provider value={{ hiddenMenu, showMenu, hideMenu }}>
      {children}
    </UiContext.Provider>
  );
};
