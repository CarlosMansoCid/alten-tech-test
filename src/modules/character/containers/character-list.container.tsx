import { memo } from "react";
import { useListCharacters } from "../hooks/useListCharacters";
import CharactersList from "../components/characters-list.component";
import { useCharacterContext } from "../contexts/useCharacterContext";
import "../styles/character-list.css";

const CharacterListContainer = () => {
  useListCharacters();
  const { characters } = useCharacterContext();
  return (
    <section className="character_list__root">
      <CharactersList characters={characters || []} />
    </section>
  );
};

export default memo(CharacterListContainer);
