import { useContext } from "react";
import { CharacterContext } from "./characters.context";

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) throw new Error("Must be inside a Character Context Provider");
  return { ...context };
};
