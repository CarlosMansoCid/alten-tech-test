import { memo } from "react";
import { Link } from "react-router-dom";

const HeroesCard = () => {
  return (
    <article>
      <Link to={"#"}>Heroe</Link>
    </article>
  );
};

export default memo(HeroesCard);
