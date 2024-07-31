import { IComicSumary } from "./IComicSumary";
import { IList } from "./IList";

export interface IComicsList extends IList {
  items?: IComicSumary[];
}
