import { ICreateQuestionRoad } from "@/shared/interface/createQuestion";

interface ICreateQuestionLabels {
  title: string;
}

export const DCreateQuestionLabels: ICreateQuestionLabels = {
  title: "Create question",
};

export const DCreateQuestionRoadLabels: ICreateQuestionRoad[] = [
  {
    id: 1,
    title: "Main Data",
  },
  {
    id: 2,
    title: "Time",
  },
  {
    id: 3,
    title: "Points per question",
  },
];
