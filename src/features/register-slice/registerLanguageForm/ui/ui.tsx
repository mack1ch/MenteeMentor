"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./ui.module.scss";
import { Button } from "antd";
import { IRegisterSubjectAndLanguageForm } from "@/widgets/register-slice/register/data/registerRoad";
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks";
import { setUserLanguages } from "@/shared/redux/slice/register-slice";
import { ILanguage } from "@/shared/interface/user";
import { fetcher } from "@/shared/api";
import useSWR from "swr";

export const RegisterLanguageForm = ({
  onClick,
  subjectData,
  isLoading,
}: {
  onClick?: () => void;
  isLoading: boolean;
  subjectData: IRegisterSubjectAndLanguageForm;
}) => {
  const [isSubmittable, setIsSubmittable] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const userLanguages = useAppSelector(
    (state) => state.registerForm.userLanguages
  );
  const { data: languages } = useSWR<ILanguage[]>("/languages", fetcher);
  const handleChange = useCallback(
    (ID: number) => {
      if (userLanguages?.includes(ID)) {
        dispatch(
          setUserLanguages(userLanguages.filter((langID) => langID !== ID))
        );
      } else {
        dispatch(setUserLanguages([...(userLanguages ?? []), ID]));
      }
    },
    [dispatch, userLanguages]
  );
  useEffect(() => {
    if (userLanguages && userLanguages.length > 0) {
      setIsSubmittable(true);
    } else {
      setIsSubmittable(false);
    }
  }, [userLanguages]);
  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles.h1}>{subjectData.title}</h1>
        <div className={styles.subjectCardWrap}>
          {languages?.map((language) => (
            <article
              style={{
                border: userLanguages?.includes(language.id)
                  ? "2px solid rgba(72, 118, 247, 1)"
                  : undefined,
              }}
              onClick={() => handleChange(language.id)}
              key={language.id}
              className={styles.article}
            >
              {language.name}
            </article>
          ))}
        </div>
        <Button
          loading={isLoading}
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
