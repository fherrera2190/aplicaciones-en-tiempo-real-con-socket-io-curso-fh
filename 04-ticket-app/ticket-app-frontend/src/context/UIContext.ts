import { createContext } from "react";

interface UiContextType {
  hiddenMenu: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}
const UiContext = createContext({} as UiContextType);

export default UiContext;
