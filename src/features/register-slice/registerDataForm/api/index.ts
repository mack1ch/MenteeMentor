import { instance, instanceLogged } from "@/shared/api";
import { IAuth } from "@/shared/interface/auth";
import { IError } from "@/shared/interface/error";
import { AxiosError } from "axios";
import { message } from "antd";
import { IRegisterDataForm } from "../interface";
import { IUser } from "@/shared/interface/user";

export const postUser = async (
  authFormData: IRegisterDataForm
): Promise<IAuth | null> => {
  const response = await instance
    .post<IAuth>("/auth/register/", {
      name: authFormData.name,
      phone: authFormData.phone,
      password: authFormData.password,
    })
    .catch((error: AxiosError<IError>) => {
      message.error(`${error.response?.data.message}`);
      return error;
    });
  return response instanceof AxiosError ? null : response.data;
};

export const changedUser = async (
  authFormData: IRegisterDataForm
): Promise<IUser | null> => {
  const response = await instanceLogged
    .patch<IUser>("/users/me", {
      name: authFormData.name,
      phone: authFormData.phone,
      password: authFormData.password,
    })
    .catch((error: AxiosError<IError>) => {
      message.error(`${error.response?.data.message}`);
      return error;
    });
  return response instanceof AxiosError ? null : response.data;
};
