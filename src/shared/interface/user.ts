export interface IUser {
  id: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  isVerified: boolean;
  updatedAt: Date;
  avatar: string;
  createdAt: Date;
}

export interface IProfile {
  id: number;
  user: IUser;
  languages: ILanguage[];
  subjects: ISubject[];
  education?: string;
  answersCount: number;
  questionsCount: number;
  answerSpeed?: number;
}

export interface ILanguage {
  id: number;
  name: string;
}

export interface ISubject {
  id: number;
  name: string;
}
