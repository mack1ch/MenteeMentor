import { instanceLogged } from "@/shared/api";
import { IError } from "@/shared/interface/error";
import { IProfile } from "@/shared/interface/user";
import { message } from "antd";
import { AxiosError } from "axios";

export const postProfile = async (
  subjectsIDs?: number[],
  languagesIDs?: number[]
): Promise<IProfile | null> => {
  const response = await instanceLogged
    .post<IProfile>("/profiles", {
      subjectIds: subjectsIDs,
      languageIds: languagesIDs,
    })
    .catch((error: AxiosError<IError>) => {
      message.error(`${error.response?.data.message}`);
      return error;
    });
  return response instanceof AxiosError ? null : response.data;
};
