import { memo } from "react";
import MainPageSearchBoxContainer from "../containers/main-page-search-box.container";
import "../../common/styles/section-p-container.css";
import CharacterCard from "../components/character-card.component";
import { characterListMock } from "../mock/characterList.mock";

const MainPage = () => {
  return (
    <section className="section_p__content_container">
      <MainPageSearchBoxContainer />
      <CharacterCard character={characterListMock[0]} isFavorite={true} />
    </section>
  );
};

export default memo(MainPage);
