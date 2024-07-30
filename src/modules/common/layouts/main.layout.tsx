import { memo } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section>
      <article>Layout</article>
      <Outlet />
    </section>
  );
};

export default memo(MainLayout);
