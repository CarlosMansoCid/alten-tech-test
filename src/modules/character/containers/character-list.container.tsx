import { memo } from "react";
import { useListCharacters } from "../hooks/useListCharacters";
import CharactersList from "../components/characters-list.component";
import { useCharacterContext } from "../contexts/useCharacterContext";
import "../styles/character-list.css";
import ErrorOnFetch from "../../common/components/error-on-fetch";

const CharacterListContainer = () => {
  const query = useListCharacters();
  const { characters } = useCharacterContext();
  if (query.isError || query?.data?.message) return <ErrorOnFetch />;
  return (
    <section className="character_list__root">
      <CharactersList characters={characters || []} />
    </section>
  );
};

export default memo(CharacterListContainer);
