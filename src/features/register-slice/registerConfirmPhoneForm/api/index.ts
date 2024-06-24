import { instanceLogged } from "@/shared/api";
import { IError } from "@/shared/interface/error";
import { ICode } from "@/shared/interface/register";
import { message } from "antd";
import { AxiosError } from "axios";

export const postCode = async (code: string): Promise<ICode | null> => {
  const response = await instanceLogged
    .post<ICode>("/verification-codes/verify", {
      code: code,
    })
    .catch((error: AxiosError<IError>) => {
      message.error(`${error.response?.data.message}`);
      return error;
    });
  return response instanceof AxiosError ? null : response.data;
};
