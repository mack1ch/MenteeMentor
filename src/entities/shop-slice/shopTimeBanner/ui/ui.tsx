import styles from "./ui.module.scss";

export const ShopTimeBanner = () => {
  return (
    <>
      <section className={styles.banner}>
        <p className={styles.p}>time left</p>
        <h2 className={styles.h2}>2 days 3 hours</h2>
      </section>
    </>
  );
};
