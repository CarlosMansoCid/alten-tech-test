import { memo } from "react";
import ComicCardSkelleton from "./comic-card-skelleton";

const ComicsListSkelleton = () => {
  return (
    <>
      {new Array(10).fill("")?.map(() => {
        return <ComicCardSkelleton />;
      })}
    </>
  );
};

export default memo(ComicsListSkelleton);
