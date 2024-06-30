import { QuestionsFilter } from "@/features/question-slice/questionsFilter";
import styles from "./ui.module.scss";
import { QuestionCard } from "@/features/question-slice/questionCard";

export const Questions = () => {
  return (
    <>
      <div className={styles.questions}>
        <QuestionsFilter />
        <div className={styles.wrap}>
          <h1 className={styles.title}>Questions</h1>
          <div className={styles.render}>
            <QuestionCard />

            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </div>
        </div>
      </div>
    </>
  );
};
