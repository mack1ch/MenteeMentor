"use client";

import { CreateQuestionRoad } from "@/entities/createQuestion-slice/createRoad";
import { DCreateQuestionLabels, DCreateQuestionRoadLabels } from "../data";
import styles from "./ui.module.scss";
import { useState } from "react";
import { CreateQuestionFormSelector } from "../model";
import { message } from "antd";

export const CreateQuestion = () => {
  const [currentRoadItemID, setCurrentRoadItemID] = useState<number>(1);
  const handleRoadClick = (roadItemID: number) => {
    setCurrentRoadItemID(roadItemID);
  };
  const handleContinueClick = () => {
    if (currentRoadItemID !== 3) {
      setCurrentRoadItemID((prev) => prev + 1);
    } else {
      message.success("Отправлено");
    }
  };
  return (
    <>
      <section className={styles.createQuestion}>
        <div className={styles.header}>
          <h2 className={styles.h2}>{DCreateQuestionLabels.title}</h2>
          <span className={styles.divider} />
          <CreateQuestionRoad
            createRoadData={DCreateQuestionRoadLabels}
            onClick={handleRoadClick}
            currentRoadItemID={currentRoadItemID}
          />
        </div>
        <div className={styles.main}>
          <CreateQuestionFormSelector
            currentRoadItemID={currentRoadItemID}
            onClick={handleContinueClick}
          />
        </div>
      </section>
    </>
  );
};
