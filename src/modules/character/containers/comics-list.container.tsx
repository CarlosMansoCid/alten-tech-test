import { memo } from "react";
import "../styles/comics-section.css";
import Title from "../../common/components/title.component";

interface IComicsListContainer {
  comics?: [];
}

const ComicsListContainer = ({ comics }: IComicsListContainer) => {
  console.log(comics);
  return (
    <section className="comics_list__root">
      <Title label={"Comics"} />
    </section>
  );
};

export default memo(ComicsListContainer);
