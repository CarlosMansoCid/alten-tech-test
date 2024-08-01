import { memo } from "react";
import "../styles/spinner.css";

const Spinner = () => {
  return (
    <div className="spinner__root">
      <span className="spinner__element" />
    </div>
  );
};

export default memo(Spinner);
