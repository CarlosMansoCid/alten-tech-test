export interface IResponse<Type> extends Response {
  attributionHTML?: string;
  attributionText?: string;
  copyright?: string;
  data?: {
    count?: number;
    limit?: number;
    offset?: number;
    results: Type[] | [];
    total?: number;
  };
  etag?: string;
  status: number;
  message?: string;
  code?: string;
}
