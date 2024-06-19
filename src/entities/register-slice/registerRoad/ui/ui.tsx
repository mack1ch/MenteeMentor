import { IRegisterRoad } from "@/shared/interface/register";
import styles from "./ui.module.scss";
export const RegisterRoad = ({
  registerRoadData,
  currentRoadItemID,
  onClick,
}: {
  registerRoadData: IRegisterRoad[];
  currentRoadItemID: number;
  onClick?: (arg: number) => void;
}) => {
  return (
    <>
      <div className={styles.registerRoad}>
        {registerRoadData.map((roadItem) => {
          const isItemCurrent = currentRoadItemID === roadItem.id;
          const isRoadItemIDLessCurrentItemID = roadItem.id < currentRoadItemID;
          return (
            <>
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
                  onClick(roadItem.id)
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
                  {roadItem.id}
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
                  {roadItem.title}
                </h3>
              </div>
              {roadItem.id !==
                registerRoadData[registerRoadData.length - 1].id && (
                <span className={styles.divider} />
              )}
            </>
          );
        })}
      </div>
    </>
  );
};
