"use client";

import { useState } from "react";
import styles from "./ui.module.scss";
import useSWR from "swr";
import { ILanguage, ISubject } from "@/shared/interface/user";
import { fetcher } from "@/shared/api";

export const QuestionsFilter = () => {
  const [filterButtonID, setFilterButtonID] = useState<number | null>(1);
  const [selectedItems, setSelectedItems] = useState<
    { id: number; type: "language" | "subject" }[]
  >([]);
  const { data: subjects } = useSWR<ISubject[]>("/subjects", fetcher);
  const { data: languages } = useSWR<ILanguage[]>("/languages", fetcher);

  const handleFilterClick = (id: number) => {
    setFilterButtonID(id);
    setSelectedItems([]);
  };

  const handleButtonClick = (id: number, type: "language" | "subject") => {
    const isSelected = selectedItems.some(
      (item) => item.id === id && item.type === type
    );
    if (isSelected) {
      setSelectedItems(
        selectedItems.filter((item) => !(item.id === id && item.type === type))
      );
    } else {
      setSelectedItems([...selectedItems, { id, type }]);
    }
  };

  const isItemSelected = (id: number, type: "language" | "subject") =>
    selectedItems.some((item) => item.id === id && item.type === type);

  return (
    <>
      <section className={styles.filterWrap}>
        <div className={styles.header}>
          <button
            style={{ color: filterButtonID === 1 ? "#222" : undefined }}
            onClick={() => handleFilterClick(1)}
            className={styles.filterButton}
          >
            All
          </button>
          <button
            style={{ color: filterButtonID === 2 ? "#222" : undefined }}
            onClick={() => handleFilterClick(2)}
            className={styles.filterButton}
          >
            Academic
          </button>
          <button
            style={{ color: filterButtonID === 3 ? "#222" : undefined }}
            onClick={() => handleFilterClick(3)}
            className={styles.filterButton}
          >
            How to enter university
          </button>
          <button
            style={{ color: filterButtonID === 4 ? "#222" : undefined }}
            onClick={() => handleFilterClick(4)}
            className={styles.filterButton}
          >
            Languages
          </button>
        </div>
        <div className={styles.main}>
          {filterButtonID === 1 && (
            <>
              {languages?.map((language) => (
                <button
                  key={language.id}
                  className={styles.main__button}
                  style={{
                    border: isItemSelected(language.id, "language")
                      ? "2px solid blue"
                      : undefined,
                  }}
                  onClick={() => handleButtonClick(language.id, "language")}
                >
                  {language.name}
                </button>
              ))}
              {subjects?.map((subject) => (
                <button
                  key={subject.id}
                  className={styles.main__button}
                  style={{
                    border: isItemSelected(subject.id, "subject")
                      ? "2px solid blue"
                      : undefined,
                  }}
                  onClick={() => handleButtonClick(subject.id, "subject")}
                >
                  {subject.name}
                </button>
              ))}
            </>
          )}
          {filterButtonID === 2 && (
            <>
              {subjects?.map((subject) => (
                <button
                  key={subject.id}
                  className={styles.main__button}
                  style={{
                    border: isItemSelected(subject.id, "subject")
                      ? "2px solid blue"
                      : undefined,
                  }}
                  onClick={() => handleButtonClick(subject.id, "subject")}
                >
                  {subject.name}
                </button>
              ))}
            </>
          )}
          {filterButtonID === 4 && (
            <>
              {languages?.map((language) => (
                <button
                  key={language.id}
                  className={styles.main__button}
                  style={{
                    border: isItemSelected(language.id, "language")
                      ? "2px solid blue"
                      : undefined,
                  }}
                  onClick={() => handleButtonClick(language.id, "language")}
                >
                  {language.name}
                </button>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};
