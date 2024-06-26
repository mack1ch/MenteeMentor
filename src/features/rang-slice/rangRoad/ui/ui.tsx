import styles from "./ui.module.scss";

export const RangRoad = () => {
  return (
    <>
      <div className={styles.rangRoad}>
        <span className={styles.line} />
        <div className={styles.rangRoadItemsWrap}>
          <span
            style={{ alignItems: "flex-start" }}
            className={styles.rangRoadItem}
          >
            <span className={styles.circle}>1</span>
            <p className={styles.p}>Newbie</p>
          </span>
          <span className={styles.rangRoadItem}>
            <span className={styles.circle}>2</span>
            <p className={styles.p}>Master</p>
          </span>
          <span
            style={{ alignItems: "flex-end" }}
            className={styles.rangRoadItem}
          >
            <span className={styles.circle}>3</span>
            <p className={styles.p}>Gummu</p>
          </span>
        </div>
      </div>
    </>
  );
};
