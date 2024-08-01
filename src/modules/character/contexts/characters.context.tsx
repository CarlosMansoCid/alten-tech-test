import { createContext, Dispatch, SetStateAction } from "react";
import { ICharacter } from "../interfaces/ICharacter";
import { TFilters } from "../../common/types/TFilters";

type TCharactersContext = {
  characters: ICharacter[] | [];
  setCharacters: Dispatch<SetStateAction<ICharacter[] | never[]>>;
  favorites: ICharacter[];
  setFavorites: Dispatch<SetStateAction<ICharacter[] | never[]>>;
  showFavorites: boolean;
  toggleShowFavorites: Dispatch<SetStateAction<boolean>>;
  filters: TFilters;
  setFilters: Dispatch<SetStateAction<TFilters>>;
};
const characterContextDefaultValues: TCharactersContext = {
  characters: [],
  setCharacters: () => {},
  favorites: [],
  setFavorites: () => {},
  showFavorites: false,
  toggleShowFavorites: () => {},
  filters: { name: "" },
  setFilters: () => {},
};

export const CharacterContext = createContext(characterContextDefaultValues);
