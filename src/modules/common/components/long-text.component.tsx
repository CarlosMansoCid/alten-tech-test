import { DetailedHTMLProps, HTMLAttributes, memo } from "react";
import "../styles/long-text.css";

interface ILongTitle
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  label: string;
  classnames?: string;
  isTitle?: boolean;
}
const LongTitle = ({ label, classnames, isTitle = false }: ILongTitle) => {
  if (isTitle)
    return <h1 className={`long_text__root  ${classnames}`}>{label}</h1>;
  return <h2 className={`long_text__root  ${classnames}`}>{label}</h2>;
};

export default memo(LongTitle);
