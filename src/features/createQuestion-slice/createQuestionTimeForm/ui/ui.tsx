import { Form } from "antd";
import { DCreateQuestionMainDataFormLabels } from "../data";
import styles from "./ui.module.scss";
import { useState } from "react";
export const CreateQuestionTimeForm = () => {
  const [form] = Form.useForm();
  const [timeVariants, setTimeVariants] = useState<number[] | null>(null);
  const handleTimeVariant = (variantID: number) => {
    if (timeVariants?.includes(variantID)) {
      setTimeVariants(timeVariants.filter((langID) => langID !== variantID));
    } else if (timeVariants) {
      setTimeVariants([...timeVariants, variantID]);
    } else {
      setTimeVariants([variantID]);
    }
  };
  return (
    <>
      <Form
        style={{ width: "100%" }}
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          style={{ width: "100%" }}
          name={DCreateQuestionMainDataFormLabels.time}
          label={DCreateQuestionMainDataFormLabels.time}
        >
          <div
            style={{ marginBottom: "6px" }}
            className={styles.timeVariantsWrap}
          >
            {DCreateQuestionMainDataFormLabels.timeVariants
              .slice(0, 3)
              .map((timeVariant) => (
                <>
                  <button
                    key={timeVariant.id}
                    onClick={() => handleTimeVariant(timeVariant.id)}
                    style={{
                      background: timeVariants?.includes(timeVariant.id)
                        ? "#4876F7"
                        : undefined,
                      color: timeVariants?.includes(timeVariant.id)
                        ? "#fff"
                        : undefined,
                    }}
                    className={styles.timeVariant}
                  >
                    {timeVariant.title}{" "}
                    <span className={styles.time}>{timeVariant.time}</span>
                  </button>
                </>
              ))}
          </div>
          <div className={styles.timeVariantsWrap}>
            {DCreateQuestionMainDataFormLabels.timeVariants
              .slice(3, 5)
              .map((timeVariant) => (
                <>
                  <button
                    key={timeVariant.id}
                    onClick={() => handleTimeVariant(timeVariant.id)}
                    style={{
                      width: "calc(100% / 2)",
                      background: timeVariants?.includes(timeVariant.id)
                        ? "#4876F7"
                        : undefined,
                      color: timeVariants?.includes(timeVariant.id)
                        ? "#fff"
                        : undefined,
                    }}
                    className={styles.timeVariant}
                  >
                    {timeVariant.title}{" "}
                    <span className={styles.time}>{timeVariant.time}</span>
                  </button>
                </>
              ))}
          </div>
        </Form.Item>
      </Form>
    </>
  );
};
