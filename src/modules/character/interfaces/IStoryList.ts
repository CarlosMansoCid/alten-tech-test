import { IList } from "./IList";
import { IStorySumary } from "./IStorySumary";

export interface IStoryList extends IList {
  items?: IStorySumary[];
}
