import { HttpStatusCode } from "axios";

export interface IError {
  success: boolean;
  statusCode: HttpStatusCode;
  type?: string;
  message: string;
  description?: string;
  output?: string;
}
