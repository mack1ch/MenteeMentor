import ArrowRight from "../../../../../public/icons/global/arrow-right.svg";
import styles from "./ui.module.scss";
import Arrow from "../../../../../public/icons/rang/arrow.svg";
import Image from "next/image";
export const RangHeader = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.rangRoad}>
          <h3 className={styles.rang__item}>Your rang</h3>
          <span className={styles.divider} />
          <h3 style={{ color: "#4876F7" }} className={styles.rang__item}>
            Newbie
          </h3>
          <Image src={Arrow} width={78} height={12} alt="Arrow" />
          <h3 style={{ color: "#8A48F7" }} className={styles.rang__item}>
            Gumu
          </h3>
        </div>
        <button className={styles.array}>
          <Image src={ArrowRight} width={24} height={24} alt="Arrow" />
        </button>
      </div>
    </>
  );
};
