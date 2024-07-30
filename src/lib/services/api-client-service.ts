import axios, { AxiosInstance, AxiosResponse } from "axios";

export default class ApiClientService<Type> {
  axiosInstance: AxiosInstance;
  path: string = "";
  basePath: string = "";
  baseUrl: string = "";
  contentType?: string = "application/json";

  constructor(basePath: string, baseUrl?: string, contentType?: string) {
    this.basePath = basePath;
    this.contentType = contentType;
    this.baseUrl = baseUrl || (import.meta.env.VITE_SERVER_URL as string);
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  setPath(path: string) {
    this.path = path;
  }
  getPath() {
    return this.path;
  }
  async get() {
    return await this.axiosInstance.get(`${this.basePath}${this.path}`);
  }
  async getOne(id: string): Promise<AxiosResponse<Type>> {
    return await this.axiosInstance.get(`${this.basePath}${this.path}${id}`);
  }
  async post(payload = {}): Promise<AxiosResponse<Type>> {
    return await this.axiosInstance.post(
      `${this.basePath}${this.path}`,
      payload
    );
  }
  async update(
    payload = {},
    id: string
  ): Promise<AxiosResponse<Type, undefined>> {
    return await this.axiosInstance.patch(
      `${this.basePath}${this.path}/${id}`,
      payload
    );
  }
  async delete(id: string): Promise<AxiosResponse<Type>> {
    return await this.axiosInstance.delete(
      `${this.basePath}${this.path}/${id}`
    );
  }
  async getAxiosInstance() {
    return this.axiosInstance;
  }
}
