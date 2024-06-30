import { LeagueMember } from "@/entities/league-slice/leagueMember";
import styles from "./ui.module.scss";

export const LeagueMembersRender = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <div className={styles.wrap}>
        {arr.map((_, index) => (
          <LeagueMember key={index} index={_} />
        ))}
      </div>
    </>
  );
};
