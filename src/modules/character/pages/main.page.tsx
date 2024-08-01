import { memo, Suspense } from "react";
import MainPageSearchBoxContainer from "../containers/main-page-search-box.container";
import CharacterListContainer from "../containers/character-list.container";
import CharacterListFallback from "../components/character-list-fallback.component";
import { useCharacterContext } from "../contexts/useCharacterContext";
import "../../common/styles/section-p-container.css";
import { FavoritesPage } from "./characters.pages";

const MainPage = () => {
  const { showFavorites } = useCharacterContext();
  return (
    <section className="section_p__content_container">
      <MainPageSearchBoxContainer />
      <Suspense fallback={<CharacterListFallback />}>
        {showFavorites ? <FavoritesPage /> : <CharacterListContainer />}
      </Suspense>
    </section>
  );
};

export default memo(MainPage);
