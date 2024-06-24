import { RegisterConfirmPhoneForm } from "@/features/register-slice/registerConfirmPhoneForm";
import { RegisterDataForm } from "@/features/register-slice/registerDataForm/ui/ui";
import { RegisterSubjectForm } from "@/features/register-slice/registerSubjectForm";
import {
  DRegisterLanguageForm,
  DRegisterSubjectForm,
} from "../data/registerRoad";
import { RegisterLanguageForm } from "@/features/register-slice/registerLanguageForm";

export const RegisterFormSelector = ({
  currentRoadItemID,
  onClick,
  isLoading = false,
}: {
  currentRoadItemID: number;
  isLoading: boolean;
  onClick: () => void;
}) => {
  switch (currentRoadItemID) {
    case 1:
      return <RegisterDataForm onClick={onClick} />;
    case 2:
      return <RegisterConfirmPhoneForm onClick={onClick} />;
    case 3:
      return (
        <RegisterSubjectForm
          subjectData={DRegisterSubjectForm}
          onClick={onClick}
        />
      );
    case 4:
      return (
        <RegisterLanguageForm
          isLoading={isLoading}
          subjectData={DRegisterLanguageForm}
          onClick={onClick}
        />
      );
    default:
      return null;
  }
};
