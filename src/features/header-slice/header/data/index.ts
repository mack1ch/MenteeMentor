import { IHeaderRoutItem } from "@/shared/interface/header";
import MainGrey from "../../../../../public/icons/header/main-grey.svg";
import QuestionsGrey from "../../../../../public/icons/header/questions-grey.svg";
import AnswersGrey from "../../../../../public/icons/header/answers-grey.svg";
import ShopGrey from "../../../../../public/icons/header/shop-grey.svg";

export const DHeaderRouterItems: IHeaderRoutItem[] = [
  {
    id: 0,
    title: "Main",
    icon: MainGrey,
    path: "/app/main",
  },
  {
    id: 1,
    title: "Questions",
    icon: QuestionsGrey,
    path: "/app/questions",
  },
  {
    id: 2,
    title: "Answers",
    icon: AnswersGrey,
    path: "/app/answers",
  },
  {
    id: 3,
    title: "Shop",
    icon: ShopGrey,
    path: "/app/shop",
  },
];
