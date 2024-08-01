import { ReactNode, useState } from "react";
import { CharacterContext } from "./characters.context";
import { ICharacter } from "../interfaces/ICharacter";
import { TFilters } from "../../common/types/TFilters";
export const CharacterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [favorites, setFavorites] = useState<ICharacter[]>([]);
  const [showFavorites, toggleShowFavorites] = useState<boolean>(false);
  const [filters, setFilters] = useState<TFilters>({ name: "" });

  return (
    <CharacterContext.Provider
      value={{
        characters,
        setCharacters,
        favorites,
        setFavorites,
        showFavorites,
        toggleShowFavorites,
        filters,
        setFilters,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
