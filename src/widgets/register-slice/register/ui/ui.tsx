"use client";

import { RegisterRoad } from "@/entities/register-slice/registerRoad";
import styles from "./ui.module.scss";
import { DRegisterRoad } from "../data/registerRoad";
import Image from "next/image";
import MenteeMentorLogo from "../../../../../public/assets/logos/menteeMentor_logo.png";
import { useState } from "react";
import { ConfigProvider, message } from "antd";
import { RegisterFormSelector } from "../model";
import { registerTheme } from "../theme";
import { postProfile } from "../api";
import { useAppSelector } from "@/shared/redux/hooks";
import { useRouter } from "next/navigation";
export const Register = () => {
  const [currentRoadItemID, setCurrentRoadItemID] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const userLanguages = useAppSelector(
    (state) => state.registerForm.userLanguages
  );
  const userSubjects = useAppSelector(
    (state) => state.registerForm.userSubjects
  );
  const handleRoadClick = (roadItemID: number) => {
    setCurrentRoadItemID(roadItemID);
  };
  const handleContinueClick = async () => {
    router.prefetch("/app/main");
    if (currentRoadItemID !== 4) {
      setCurrentRoadItemID((prev) => prev + 1);
    } else {
      setIsLoading(true);
      const res = await postProfile(userSubjects, userLanguages);
      setIsLoading(false);
      if (res) {
        message.success("Congratulations! Are you registered");
        router.push("/app/main");
      }
    }
  };
  return (
    <>
      <ConfigProvider theme={registerTheme}>
        <div className={styles.background}>
          <main className={styles.main}>
            <section className={styles.header}>
              <Image
                src={MenteeMentorLogo}
                width={91}
                height={44}
                alt="MenteeMentor"
              />
              <RegisterRoad
                onClick={handleRoadClick}
                currentRoadItemID={currentRoadItemID}
                registerRoadData={DRegisterRoad}
              />
            </section>
            <section className={styles.formsWrap}>
              <RegisterFormSelector
                isLoading={isLoading}
                currentRoadItemID={currentRoadItemID}
                onClick={handleContinueClick}
              />
            </section>
          </main>
        </div>
      </ConfigProvider>
    </>
  );
};
