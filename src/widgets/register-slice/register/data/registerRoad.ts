import { IRegisterRoad } from "@/shared/interface/register";

export interface IRegisterSubjectAndLanguageForm {
  title: string;
  subjects: IRegisterSubject[];
  button: string;
}

interface IRegisterSubject {
  id: number;
  title: string;
}

export const DRegisterRoad: IRegisterRoad[] = [
  {
    id: 1,
    title: "Основные данные",
  },
  {
    id: 2,
    title: "Подтверждение номера",
  },

  {
    id: 3,
    title: "Специализация",
  },

  {
    id: 4,
    title: "Языки",
  },
];

export const DRegisterSubjectForm: IRegisterSubjectAndLanguageForm = {
  title: "Choose those subjects in which you can help",
  button: "continue",
  subjects: [
    {
      id: 0,
      title: "Maths",
    },
    {
      id: 1,
      title: "Geometry",
    },
    {
      id: 2,
      title: "ICT",
    },
    {
      id: 3,
      title: "History",
    },
  ],
};
export const DRegisterLanguageForm: IRegisterSubjectAndLanguageForm = {
  title: "Choose those languages in which you can help",
  button: "continue",
  subjects: [
    {
      id: 0,
      title: "Russian",
    },
    {
      id: 1,
      title: "English",
    },
    {
      id: 2,
      title: "ICT",
    },
    {
      id: 3,
      title: "History",
    },
  ],
};
