import { AuthForm } from "@/features/auth-slice/authForm";
import styles from "./ui.module.scss";
import { Advertising } from "@/features/auth-slice/advertising";

export const Auth = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.auth}>
          <AuthForm />
        </section>
        <section className={styles.ads}>
          <Advertising />
        </section>
      </main>
    </>
  );
};
