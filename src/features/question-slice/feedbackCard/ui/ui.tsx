import styles from "./ui.module.scss";

export const FeedbackCard = () => {
  return (
    <>
      <article className={styles.feedbackCard}>
        <h2 className={styles.h2}>
          Is there something missing from MentiMentor?
        </h2>
        <button className={styles.primaryButton}>Send feedback</button>
      </article>
    </>
  );
};
