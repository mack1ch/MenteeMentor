import { instance } from "@/shared/api";
import { IAuth } from "@/shared/interface/auth";
import { IError } from "@/shared/interface/error";
import { IAuthFormData } from "../interface";
import { AxiosError } from "axios";
import { message } from "antd";

export const postUser = async (
  authFormData: IAuthFormData
): Promise<IAuth | null> => {
  const response = await instance
    .post<IAuth>("/auth/login/", {
      login: authFormData.phone,
      password: authFormData.password,
    })
    .catch((error: AxiosError<IError>) => {
      message.error(`${error.response?.data.message}`);
      return error;
    });
  return response instanceof AxiosError ? null : response.data;
};
