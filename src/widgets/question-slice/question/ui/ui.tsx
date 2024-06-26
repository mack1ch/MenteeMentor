import { QuestionCard } from "@/features/question-slice/questionCard";
import styles from "./ui.module.scss";

export const Question = () => {
  return (
    <>
      <section className={styles.question}>
        <h1 className={styles.title}>Questions</h1>
        <div className={styles.render}>
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </section>
    </>
  );
};
