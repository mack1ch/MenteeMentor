"use client";

import { RegisterRoad } from "@/entities/register-slice/registerRoad";
import styles from "./ui.module.scss";
import { DRegisterRoad } from "../data/registerRoad";
import Image from "next/image";
import MenteeMentorLogo from "../../../../../public/assets/logos/menteeMentor_logo.png";
import { useState } from "react";
import { ConfigProvider, message } from "antd";
import { registerTheme } from "../theme";
import { RegisterFormSelector } from "../model";
export const Register = () => {
  const [currentRoadItemID, setCurrentRoadItemID] = useState<number>(1);
  const handleRoadClick = (roadItemID: number) => {
    setCurrentRoadItemID(roadItemID);
  };
  const handleContinueClick = () => {
    if (currentRoadItemID !== 4) {
      setCurrentRoadItemID((prev) => prev + 1);
    } else {
      message.success("Рега выпонлена");
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
