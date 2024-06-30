import styles from "./ui.module.scss";
import { ICreateQuestionRoad } from "@/shared/interface/createQuestion";
export const CreateQuestionRoad = ({
  createRoadData,
  currentRoadItemID,
  onClick,
}: {
  createRoadData: ICreateQuestionRoad[];
  currentRoadItemID: number;
  onClick?: (arg: number) => void;
}) => {
  return (
    <>
      <div className={styles.createRoad}>
        {createRoadData.map((createRoad) => {
          const isItemCurrent = currentRoadItemID === createRoad.id;
          const isRoadItemIDLessCurrentItemID =
            createRoad.id < currentRoadItemID;
          const isRenderRoadItems =
            createRoad.id === currentRoadItemID ||
            currentRoadItemID === createRoad.id + 1;
          return (
            <>
              {isRenderRoadItems && (
                <div
                  style={{
                    cursor: isRoadItemIDLessCurrentItemID
                      ? onClick
                        ? "pointer"
                        : undefined
                      : undefined,
                  }}
                  onClick={() =>
                    onClick &&
                    isRoadItemIDLessCurrentItemID &&
                    onClick(createRoad.id)
                  }
                  className={styles.roadItem}
                >
                  <span
                    style={{
                      background: isItemCurrent
                        ? "#4876F7"
                        : isRoadItemIDLessCurrentItemID
                        ? "rgba(72, 118, 247, 0.20)"
                        : undefined,
                    }}
                    className={styles.roadItem__id}
                  >
                    {createRoad.id}
                  </span>
                  <h3
                    style={{
                      color: isItemCurrent
                        ? "#222"
                        : isRoadItemIDLessCurrentItemID
                        ? "rgba(34, 34, 34, 0.50)"
                        : undefined,
                    }}
                    className={styles.roadItem__title}
                  >
                    {createRoad.title}
                  </h3>
                </div>
              )}

              {isRenderRoadItems &&
                createRoad.id !==
                  createRoadData[createRoadData.length - 1].id && (
                  <span className={styles.divider} />
                )}
            </>
          );
        })}
      </div>
    </>
  );
};
