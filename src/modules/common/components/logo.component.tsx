import { memo } from "react";
import { Link } from "react-router-dom";
import "../styles/logo-component.css";

const Logo = () => {
  return (
    <Link to={"/"} className="logo_component__root">
      <img src="/images/marvel-logo.png" alt="logo" data-testid="logotipe" />
    </Link>
  );
};

export default memo(Logo);
