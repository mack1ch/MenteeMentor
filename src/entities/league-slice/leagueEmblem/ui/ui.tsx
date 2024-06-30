import Image from "next/image";
import styles from "./ui.module.scss";
import Stone1 from "../.././../../../public/assets/leagues/amethyst.png";
import Stone2 from "../.././../../../public/assets/leagues/diamond.png";
import Stone3 from "../.././../../../public/assets/leagues/emerald.png";
import Stone4 from "../.././../../../public/assets/leagues/gold.png";
import Stone5 from "../.././../../../public/assets/leagues/ruby.png";
export const LeagueEmblem = () => {
  return (
    <>
      <div className={styles.leagueEmblemWrap}>
        <div style={{ opacity: "0.4" }} className={styles.leagueEmblem__Item}>
          <Image src={Stone1} alt="Stone1" layout="responsive" />
        </div>
        <div style={{ opacity: "0.4" }} className={styles.leagueEmblem__Item}>
          <Image src={Stone2} alt="Stone1" layout="responsive" />
        </div>
        <div
          style={{ marginTop: "-10px" }}
          className={styles.leagueEmblem__Item}
        >
          <Image src={Stone3} alt="Stone1" layout="responsive" />
          <article className={styles.emblemInfo}>
            <h5 className={styles.h5}>Amethyst League</h5>
            <p className={styles.p}>The best of the best</p>
          </article>
        </div>
        <div style={{ opacity: "0.4" }} className={styles.leagueEmblem__Item}>
          <Image src={Stone4} alt="Stone1" layout="responsive" />
        </div>
        <div style={{ opacity: "0.4" }} className={styles.leagueEmblem__Item}>
          <Image src={Stone5} alt="Stone1" layout="responsive" />
        </div>
      </div>
    </>
  );
};
