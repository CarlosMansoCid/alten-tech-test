import { IList } from "./IList";
import { ISeriesSumary } from "./ISeriesSumary";

export interface ISeriesList extends IList {
  items?: ISeriesSumary[];
}
