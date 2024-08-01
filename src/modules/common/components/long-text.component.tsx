import { DetailedHTMLProps, HTMLAttributes, memo } from "react";
import "../styles/long-text.css";

interface ILongTitle
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  label: string;
  classnames?: string;
}
const LongTitle = ({ label, classnames }: ILongTitle) => {
  return <h2 className={`long_text__root  ${classnames}`}>{label}</h2>;
};

export default memo(LongTitle);
