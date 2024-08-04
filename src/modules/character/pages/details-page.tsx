import { lazy, memo, Suspense, useMemo } from "react";
import ComicsListContainer from "../containers/comics-list.container";
import DetailsContainer from "../containers/details.container";
import { useCharacterContext } from "../contexts/useCharacterContext";
import { useParams } from "react-router-dom";
import { ICharacter } from "../interfaces/ICharacter";
const DetailsHeaderContainer = lazy(
  () => import("../containers/details-header.container")
);
import DetailsHeaderSkelleton from "../components/details-header-skelleton";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import "../../common/styles/common.css";
import "../styles/details-header.css";

const DetailsPage = () => {
  const { characters } = useCharacterContext();
  const { id } = useParams();
  const { t } = useTranslation();

  const character = useMemo(() => {
    return (
      characters?.filter((char: ICharacter) => {
        return String(char.id) === id;
      })[0] || null
    );
  }, [characters, id]);

  return (
    <>
      <Helmet>
        <title>{t("seo:detailsPage.title")}</title>
      </Helmet>
      <section className="section_details__content_container">
        <section className="details_header__root">
          {character ? (
            <DetailsHeaderContainer character={character} />
          ) : (
            <Suspense fallback={<DetailsHeaderSkelleton />}>
              <DetailsContainer />
            </Suspense>
          )}
          <div className="details_header__shape" />
        </section>
      </section>
      <ComicsListContainer />
    </>
  );
};

export default memo(DetailsPage);
