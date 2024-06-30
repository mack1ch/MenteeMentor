"use client";

import Image from "next/image";
import styles from "./ui.module.scss";
import Coins from "../../../../../public/icons/price/coins-purple.svg";
import { useState } from "react";
export const BackgroundGood = () => {
  const [articleIsHover, setArticleIsHover] = useState<boolean>(false);

  return (
    <>
      <article
        onMouseEnter={() => setArticleIsHover(true)}
        onMouseLeave={() => setArticleIsHover(false)}
        className={styles.bgGood}
      >
        <span className={styles.coins}>
          200 <Image src={Coins} width={20} height={20} alt="Coins" />
        </span>
        <div
          style={{
            background: articleIsHover ? "transparent" : "rgba(0, 0, 0, 0.33)",
            backdropFilter: articleIsHover ? "none" : "blur(10px)",
            boxShadow: articleIsHover ? "none" : "initial",
          }}
          className={styles.good_info}
        >
          <div
            style={{ opacity: articleIsHover ? "0" : undefined }}
            className={styles.info}
          >
            <h6 className={styles.h6}>Name</h6>
            <p className={styles.p}>Description</p>
          </div>
          <button className={styles.buyButton}>Purchase</button>
        </div>
      </article>
    </>
  );
};
