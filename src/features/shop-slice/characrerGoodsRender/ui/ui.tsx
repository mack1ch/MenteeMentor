
import styles from "./ui.module.scss";
import { CharacterGood } from "@/entities/shop-slice/characterGood";

export const CharacterGoodsRender = () => {
  return (
    <>
      <section className={styles.wrap}>
        <div className={styles.header}>
          <h2 className={styles.h2}>Best T-shirts</h2>
        </div>
        <div className={styles.render}>
          <CharacterGood />
          <CharacterGood />
          <CharacterGood />
          <CharacterGood />
          <CharacterGood />
        </div>
      </section>
    </>
  );
};
