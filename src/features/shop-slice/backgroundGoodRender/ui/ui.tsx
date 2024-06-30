import { BackgroundGood } from "@/entities/shop-slice/backgroundGood";
import styles from "./ui.module.scss";

export const BackgroundGoodRender = () => {
  return (
    <>
      <section className={styles.wrap}>
        <div className={styles.header}>
          <h2 className={styles.h2}>Backgrounds</h2>
          <p className={styles.p}>New items every week</p>
        </div>
        <div className={styles.render}>
          <BackgroundGood />
          <BackgroundGood />
          <BackgroundGood />
          <BackgroundGood />
          <BackgroundGood />
        </div>
      </section>
    </>
  );
};
