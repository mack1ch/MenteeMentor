import { RangHeader } from "@/features/rang-slice/rangHeader";
import styles from "./ui.module.scss";
import { RangRoad } from "@/features/rang-slice/rangRoad";

export const RangCard = () => {
  return (
    <>
      <article className={styles.rangCard}>
        <div className={styles.header}>
          <RangHeader />
          <p className={styles.p}>5 questions left to answer</p>
        </div>
        <RangRoad />
      </article>
    </>
  );
};
