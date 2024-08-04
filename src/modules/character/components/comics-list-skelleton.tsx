import { memo } from "react";
import ComicCardSkelleton from "./comic-card-skelleton";

const ComicsListSkelleton = () => {
  return (
    <>
      {new Array(10).fill("")?.map((_, index) => {
        return <ComicCardSkelleton key={`${index}=${crypto.randomUUID()}`} />;
      })}
    </>
  );
};

export default memo(ComicsListSkelleton);
