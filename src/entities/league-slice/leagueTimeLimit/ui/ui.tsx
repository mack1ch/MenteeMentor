import styles from "./ui.module.scss";

export const LeagueTimeLimit = () => {
  return (
    <>
      <article className={styles.timeLimit}>
        <p className={styles.p}>time left</p>
        <span className={styles.row}>
          <h5 className={styles.h5}>3 days </h5>
          <p className={styles.p}>2 hours</p>
        </span>
      </article>
    </>
  );
};
