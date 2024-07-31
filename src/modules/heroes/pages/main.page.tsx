import { memo } from "react";
import MainPageSearchBoxContainer from "../containers/main-page-search-box.container";
import "../../common/styles/section-p-container.css";

const MainPage = () => {
  return (
    <section className="section_p__content_container">
      <MainPageSearchBoxContainer />
    </section>
  );
};

export default memo(MainPage);
