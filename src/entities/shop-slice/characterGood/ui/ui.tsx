import styles from "./ui.module.scss";
import Cap from "../../../../../public/assets/shop/cap.png";
import Image from "next/image";
import Premium from "../../../../../public/icons/premium/premiumWithStars-orange.svg";
import Coins from "../../../../../public/icons/price/coins-purple.svg";
export const CharacterGood = () => {
  return (
    <>
      <article className={styles.good}>
        <Image
          className={styles.image}
          src={Cap}
          layout="responsive"
          alt="Good avatar"
        />
        <div className={styles.good_info}>
          <h6 className={styles.h6}>Cap</h6>
          <p className={styles.p}>
            This book has become a standard among psychologists!
          </p>
        </div>
        <div className={styles.footer}>
          <button className={styles.buyButton}>
            Purchase{" "}
            <Image src={Premium} width={20} height={20} alt="Premium" />
          </button>
          <span className={styles.coins}>
            200 <Image src={Coins} width={20} height={20} alt="Coins" />
          </span>
        </div>
      </article>
    </>
  );
};
