import { CreateQuestionMainDataForm } from "@/features/createQuestion-slice/createQuestionMainDataForm";
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
      return <CreateQuestionTimeForm />;
    case 3:

    default:
      return null;
  }
};
