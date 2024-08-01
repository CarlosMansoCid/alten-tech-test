import { memo } from "react";
import CharactersList from "../components/characters-list.component";
import { useCharacterContext } from "../contexts/useCharacterContext";
import EmptyResults from "../../common/components/empty-results";

const FavoritesListContainer = () => {
  const { favorites } = useCharacterContext();
  if (favorites.length === 0) return <EmptyResults />;
  return (
    <section className="character_list__root">
      <CharactersList characters={favorites} />
    </section>
  );
};

export default memo(FavoritesListContainer);
