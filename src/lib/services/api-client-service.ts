import { generateKey } from "../../modules/common/utils/generate-key";

interface IApiOptions {
  params?: string;
  path?: string;
}

export default class ApiClientService<Type> {
  private baseUrl = "";
  private basePath = "";
  constructor(basePath?: string) {
    this.baseUrl = import.meta.env.VITE_SERVER_URL as string;
    this.basePath = basePath || "";
  }
  private key = generateKey();

  get = ({ params = "", path = "" }: IApiOptions): Promise<Type | Response> =>
    fetch(`${this.baseUrl}${this.basePath}${path}` + "?" + this.key + params);
}
