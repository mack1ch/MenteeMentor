import { ReactNode } from "react";
import styles from "./ui.module.scss";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles.app}>{children}</div>
    </>
  );
};
