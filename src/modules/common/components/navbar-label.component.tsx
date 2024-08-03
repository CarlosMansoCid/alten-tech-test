import { DetailedHTMLProps, HTMLAttributes, memo } from "react";
import "../styles/navbar-label.css";

interface INavbarLabel
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  label: string | number;
}

const NavbarLabel = ({ label, ...rest }: INavbarLabel) => {
  return (
    <p className="navbar_label__root" {...rest}>
      {label}
    </p>
  );
};

export default memo(NavbarLabel);
