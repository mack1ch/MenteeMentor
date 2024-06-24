"use client";

import { CreateQuestionRoad } from "@/entities/createQuestion-slice/createRoad";
import { DCreateQuestionLabels, DCreateQuestionRoadLabels } from "../data";
import styles from "./ui.module.scss";
import { useState } from "react";
import { CreateQuestionFormSelector } from "../model";

export const CreateQuestion = () => {
  const [currentRoadItemID, setCurrentRoadItemID] = useState<number>(2);
  const handleRoadClick = (roadItemID: number) => {
    setCurrentRoadItemID(roadItemID);
  };
  const handleContinueClick = () => {
    if (currentRoadItemID !== 4) {
      setCurrentRoadItemID((prev) => prev + 1);
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
