import { generateKey } from "../../modules/common/utils/generate-key";

export default class ApiClientService<Type> {
  private baseUrl = "";
  private basePath = "";
  constructor(basePath?: string) {
    this.baseUrl = import.meta.env.VITE_SERVER_URL as string;
    this.basePath = basePath || "";
  }
  private key = generateKey();

  get = (params?: string): Promise<Type | Response> =>
    fetch(`${this.baseUrl}${this.basePath}` + this.key + params || "");
}
