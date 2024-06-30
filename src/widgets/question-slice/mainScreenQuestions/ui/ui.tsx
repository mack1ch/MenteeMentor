import { QuestionCard } from "@/features/question-slice/questionCard";
import styles from "./ui.module.scss";
import { FeedbackCard } from "@/features/question-slice/feedbackCard";

export const MainScreenQuestions = () => {
  return (
    <>
      <section className={styles.question}>
        <h1 className={styles.title}>Questions</h1>
        <div className={styles.render}>
          <QuestionCard />
          <FeedbackCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </section>
    </>
  );
};
