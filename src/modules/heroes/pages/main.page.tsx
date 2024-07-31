import { memo } from "react";
import "../../common/styles/section-p-container.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <section className="section_p__content_container">
      <Link to={"/favorites"}>favorites</Link>
      <Link to={"/1/details"}>favorites</Link>
    </section>
  );
};

export default memo(MainPage);
