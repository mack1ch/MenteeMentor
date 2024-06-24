import { THeaderRoutItemTitle } from "@/shared/interface/header";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import MainBlue from "../../../../../public/icons/header/main-blue.svg";
import AnswersBlue from "../../../../../public/icons/header/answers-blue.svg";
import QuestionsBlue from "../../../../../public/icons/header/questions-blue.svg";
import ShopBlue from "../../../../../public/icons/header/shop-blue.svg";
export const getActiveIconByActiveTitle = (
  activeTitle?: THeaderRoutItemTitle
): StaticImport | undefined => {
  switch (activeTitle) {
    case "Main": {
      return MainBlue;
    }
    case "Answers": {
      return AnswersBlue;
    }
    case "Questions": {
      return QuestionsBlue;
    }

    case "Shop": {
      return ShopBlue;
    }
    default: {
      return undefined;
    }
  }
};
