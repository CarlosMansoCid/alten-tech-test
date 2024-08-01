import { DetailedHTMLProps, HTMLAttributes, memo } from "react";
import "../styles/skelleton.css";

interface ISkelleton
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Skelleton = ({ ...rest }: ISkelleton) => {
  return <div className={`skelleton__root ${rest?.className}`} {...rest} />;
};

export default memo(Skelleton);
