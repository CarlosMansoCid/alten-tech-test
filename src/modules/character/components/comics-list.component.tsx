import { lazy, memo } from "react";
import { useGetCharacterComics } from "../hooks/useGetCharacterComics";
import { IComic } from "../interfaces/IComic";
import ComicCard from "./comic-card.component";
const EmptyResults = lazy(
  () => import("../../common/components/empty-results")
);

interface IComicsList {
  id: string;
}

const ComicsList = ({ id }: IComicsList) => {
  const { data } = useGetCharacterComics(id as string);
  const comicList = data?.data?.results || [];
  if (comicList?.length === 0) {
    return <EmptyResults />;
  }
  return (
    <>
      {comicList?.map((comic: IComic) => {
        return (
          <li>
            <ComicCard key={comic.id} comic={comic} />
          </li>
        );
      })}
    </>
  );
};

export default memo(ComicsList);
