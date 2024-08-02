import { memo, Suspense } from "react";
import Title from "../../common/components/title.component";
import { useParams } from "react-router-dom";
import ComicsList from "../components/comics-list.component";
import ComicsListSkelleton from "../components/comics-list-skelleton";
import "../styles/comics-section.css";

const ComicsListContainer = () => {
  const { id } = useParams();

  return (
    <section className="comics_list__root">
      <Title label={"Comics"} />
      <section className="comic_list__container">
        <Suspense fallback={<ComicsListSkelleton />}>
          <ComicsList id={id as string} />
        </Suspense>
      </section>
    </section>
  );
};

export default memo(ComicsListContainer);
