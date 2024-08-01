import { memo } from "react";
import "../styles/common.css";

interface ITitle {
  label: string;
}
const Title = ({ label }: ITitle) => {
  return <h1 className="title__root">{label}</h1>;
};

export default memo(Title);
