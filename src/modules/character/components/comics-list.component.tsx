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
  console.log(comicList);
  if (comicList?.length === 0) {
    return <EmptyResults />;
  }
  return (
    <>
      {comicList?.map((comic: IComic) => {
        return <ComicCard key={comic.id} comic={comic} />;
      })}
    </>
  );
};

export default memo(ComicsList);
