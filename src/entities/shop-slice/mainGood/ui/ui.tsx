import Image from "next/image";
import styles from "./ui.module.scss";
import Premium from "../../../../../public/icons/premium/premiumWithStars-orange.svg";
import Good from "../../../../../public/assets/shop/goodPicture.png";
export const MainGood = () => {
  return (
    <>
      <section className={styles.good}>
        <div className={styles.good_info}>
          <h3 className={styles.h3}>Best cap of the season</h3>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            maiores voluptates! Totam nemo consectetur iusto molestias nisi
            nulla mollitia quod expedita, incidunt aliquid, aut nesciunt.
            Aliquam ipsam distinctio reiciendis expedita!
          </p>
          <button disabled className={styles.getButton}>
            Get <Image src={Premium} width={24} height={24} alt="Premium" />
          </button>
        </div>
        <div className={styles.image}>
          <Image src={Good} alt="Good" layout="responsive" />
        </div>
      </section>
    </>
  );
};
