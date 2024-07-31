import { IEventSumary } from "./IEventSumary";
import { IList } from "./IList";

export interface IEventList extends IList {
  items?: IEventSumary[];
}
