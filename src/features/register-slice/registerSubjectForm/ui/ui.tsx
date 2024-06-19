"use client";

import { useEffect, useState } from "react";
import styles from "./ui.module.scss";
import { Button } from "antd";
import { IRegisterSubjectAndLanguageForm } from "@/widgets/register-slice/register/data/registerRoad";

export const RegisterSubjectForm = ({
  onClick,
  subjectData,
}: {
  onClick?: () => void;
  subjectData: IRegisterSubjectAndLanguageForm;
}) => {
  const [chooseSubjectIDsArray, setChooseSubjectIDsArray] = useState<number[]>(
    []
  );
  const [isSubmittable, setIsSubmittable] = useState<boolean>(false);
  const handleChooseSubject = (subjectID: number) => {
    setChooseSubjectIDsArray((prev) =>
      prev.includes(subjectID)
        ? prev.filter((id) => id !== subjectID)
        : [...prev, subjectID]
    );
  };
  useEffect(() => {
    setIsSubmittable(chooseSubjectIDsArray.length > 0);
  }, [chooseSubjectIDsArray]);
  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles.h1}>{subjectData.title}</h1>
        <div className={styles.subjectCardWrap}>
          {subjectData.subjects.map((subject) => (
            <article
              style={{
                background: chooseSubjectIDsArray.includes(subject.id)
                  ? "#222"
                  : undefined,
                color: chooseSubjectIDsArray.includes(subject.id)
                  ? "#fff"
                  : undefined,
              }}
              onClick={() => handleChooseSubject(subject.id)}
              key={subject.id}
              className={styles.article}
            >
              {subject.title}
            </article>
          ))}
        </div>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!isSubmittable}
          onClick={onClick}
          style={{ width: "100%", marginTop: "32px", maxWidth: "482px" }}
          size="large"
        >
          {subjectData.button}
        </Button>
      </div>
    </>
  );
};
