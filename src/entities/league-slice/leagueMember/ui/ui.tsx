import styles from "./ui.module.scss";
import Avatar from "../../../../../public/assets/avatars/avatar.png";
import Image from "next/image";
import Coins from "../../../../../public/icons/price/coins-purple.svg";
export const LeagueMember = ({ index }: { index: number }) => {
  return (
    <>
      <article className={styles.leagueMember}>
        <h4 className={styles.h4}>
          <span className={styles.number}>#</span> {index}
        </h4>

        <div className={styles.member}>
          <Image
            src={Avatar}
            layout="reponsive"
            alt="Avatar"
            className={styles.avatar}
          />
          <div className={styles.memberInfo}>
            <h4 className={styles.name}>Justuss Sofico</h4>
            <p className={styles.role}>Master</p>
          </div>
          <div className={styles.coinsWrap}>
            <Image src={Coins} width={16} height={16} alt="Coin" />
            <span className={styles.totalCoins}>1990</span>
          </div>
        </div>
      </article>
    </>
  );
};
