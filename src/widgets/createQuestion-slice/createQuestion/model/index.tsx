import { CreateQuestionMainDataForm } from "@/features/createQuestion-slice/createQuestionMainDataForm";
import { CreateQuestionMoneyForm } from "@/features/createQuestion-slice/createQuestionMoneyForm";
import { CreateQuestionTimeForm } from "@/features/createQuestion-slice/createQuestionTimeForm";

export const CreateQuestionFormSelector = ({
  currentRoadItemID,
  onClick,
}: {
  currentRoadItemID: number;
  onClick: () => void;
}) => {
  switch (currentRoadItemID) {
    case 1:
      return <CreateQuestionMainDataForm onClick={onClick} />;
    case 2:
      return <CreateQuestionTimeForm onClick={onClick} />;
    case 3:
      return <CreateQuestionMoneyForm onClick={onClick} />;
    default:
      return null;
  }
};
