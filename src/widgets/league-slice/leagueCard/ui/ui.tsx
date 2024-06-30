import { LeagueEmblem } from "@/entities/league-slice/leagueEmblem";
import styles from "./ui.module.scss";
import { LeagueTimeLimit } from "@/entities/league-slice/leagueTimeLimit";
import { LeagueMembersRender } from "@/features/league-slice/leagueMembersRender";
import ArrowRight from "../../../../../public/icons/global/arrow-right.svg";
import Image from "next/image";
export const LeagueCard = () => {
  return (
    <>
      <article className={styles.leagueCard}>
        <button className={styles.clickButton}>
          <Image src={ArrowRight} width={24} height={24} alt="Click" />
        </button>
        <LeagueEmblem />
        <LeagueTimeLimit />
        <LeagueMembersRender />
      </article>
    </>
  );
};
