import { memo } from "react";
import "../styles/navbar-label.css";

interface INavbarLabel {
  label: string;
}

const NavbarLabel = ({ label }: INavbarLabel) => {
  return <p className="navbar_label__root">{label}</p>;
};

export default memo(NavbarLabel);
