"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./ui.module.scss";
import { Button } from "antd";
import { IRegisterSubjectAndLanguageForm } from "@/widgets/register-slice/register/data/registerRoad";
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks";
import { setUserSubjects } from "@/shared/redux/slice/register-slice";
import useSWR from "swr";
import { fetcher } from "@/shared/api";
import { ISubject } from "@/shared/interface/user";

export const RegisterSubjectForm = ({
  onClick,
  subjectData,
}: {
  onClick?: () => void;
  subjectData: IRegisterSubjectAndLanguageForm;
}) => {
  const [isSubmittable, setIsSubmittable] = useState<boolean>(false);
  const { data: subjects } = useSWR<ISubject[]>("/subjects", fetcher);
  const dispatch = useAppDispatch();
  const userSubjects = useAppSelector(
    (state) => state.registerForm.userSubjects
  );
  

  const handleChange = useCallback(
    (ID: number) => {
      if (userSubjects?.includes(ID)) {
        dispatch(
          setUserSubjects(userSubjects.filter((subjID) => subjID !== ID))
        );
      } else {
        dispatch(setUserSubjects([...(userSubjects ?? []), ID]));
      }
    },
    [dispatch, userSubjects]
  );
  useEffect(() => {
    if (userSubjects && userSubjects.length > 0) {
      setIsSubmittable(true);
    } else {
      setIsSubmittable(false);
    }
  }, [userSubjects]);

  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles.h1}>{subjectData.title}</h1>
        <div className={styles.subjectCardWrap}>
          {subjects?.map((subject) => (
            <article
              style={{
                border: userSubjects?.includes(subject.id)
                  ? "2px solid rgba(72, 118, 247, 1)"
                  : undefined,
              }}
              onClick={() => handleChange(subject.id)}
              key={subject.id}
              className={styles.article}
            >
              {subject.name}
            </article>
          ))}
        </div>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!isSubmittable}
          onClick={onClick}
          style={{
            width: "100%",
            marginTop: "32px",
            maxWidth: "482px",
            height: "58px",
          }}
          size="large"
        >
          {subjectData.button}
        </Button>
      </div>
    </>
  );
};
