import { RightOutlined } from "@ant-design/icons";
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
          <h3 style={{ color: "#F77C48" }} className={styles.rang__item}>
            Gumu
          </h3>
        </div>
        <button className={styles.array}>
          <RightOutlined style={{ color: "#8A8A8A" }} />
        </button>
      </div>
    </>
  );
};
