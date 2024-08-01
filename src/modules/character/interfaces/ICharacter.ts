import { IComicsList } from "./IComicsList";
import { IEventList } from "./IEventList";
import { IImage } from "./IImage";
import { ISeriesList } from "./ISeriesList";
import { IStoryList } from "./IStoryList";

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI?: string;
  urls?: string[];
  thumbnail?: IImage;
  comics?: IComicsList;
  stories?: IStoryList;
  events?: IEventList;
  series?: ISeriesList;
}
