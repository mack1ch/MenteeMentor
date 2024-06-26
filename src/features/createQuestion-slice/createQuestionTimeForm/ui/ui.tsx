import { Button, Divider, Form, Switch } from "antd";
import { DCreateQuestionTimeLabelsLabels } from "../data";
import styles from "./ui.module.scss";
import { useState } from "react";
import PremiumOrange from "../../../../../public/icons/premium/premiumWithStars-orange.svg";
import Image from "next/image";
export const CreateQuestionTimeForm = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  const [form] = Form.useForm();
  const [timeVariants, setTimeVariants] = useState<number[] | null>(null);
  const [formatVariants, setFormatVariants] = useState<number[] | null>(null);
  const handleTimeVariant = (variantID: number) => {
    if (timeVariants?.includes(variantID)) {
      setTimeVariants(timeVariants.filter((langID) => langID !== variantID));
    } else if (timeVariants) {
      setTimeVariants([...timeVariants, variantID]);
    } else {
      setTimeVariants([variantID]);
    }
  };
  const handleFormatVariant = (formatID: number) => {
    if (formatVariants?.includes(formatID)) {
      setFormatVariants(formatVariants.filter((langID) => langID !== formatID));
    } else if (formatVariants) {
      setFormatVariants([...formatVariants, formatID]);
    } else {
      setFormatVariants([formatID]);
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
          name={DCreateQuestionTimeLabelsLabels.time}
          label={DCreateQuestionTimeLabelsLabels.time}
        >
          <div
            style={{ marginBottom: "6px" }}
            className={styles.timeVariantsWrap}
          >
            {DCreateQuestionTimeLabelsLabels.timeVariants
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
            {DCreateQuestionTimeLabelsLabels.timeVariants
              .slice(3, 5)
              .map((timeVariant) => (
                <>
                  <button
                    key={timeVariant.id}
                    onClick={() => handleTimeVariant(timeVariant.id)}
                    style={{
                      width: "calc(100% / 3 )",
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
              ))}{" "}
          </div>
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          name={DCreateQuestionTimeLabelsLabels.format}
          label={DCreateQuestionTimeLabelsLabels.time}
        >
          <div className={styles.variantsWrap}>
            {DCreateQuestionTimeLabelsLabels.formatVariants.map((format) => (
              <button
                key={format.id}
                onClick={() => handleFormatVariant(format.id)}
                style={{
                  width: "calc(100% / 2)",
                  background: formatVariants?.includes(format.id)
                    ? "#4876F7"
                    : undefined,
                  color: formatVariants?.includes(format.id)
                    ? "#fff"
                    : undefined,
                }}
                className={styles.format}
              >
                {format.title}
              </button>
            ))}
          </div>
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          name={DCreateQuestionTimeLabelsLabels.expertPremium}
        >
          <div className={styles.switcher}>
            <Switch />
            <label className={styles.label}>
              {DCreateQuestionTimeLabelsLabels.expertPremium}
            </label>
            <Image
              src={PremiumOrange}
              width={24}
              style={{ marginLeft: "-16px" }}
              height={24}
              alt="Just for premium"
            />
          </div>
        </Form.Item>
        <Form.Item
          style={{ width: "100%", marginTop: "-12px" }}
          name={DCreateQuestionTimeLabelsLabels.specificUser}
        >
          <div className={styles.switcher}>
            <Switch />
            <label className={styles.label}>
              {DCreateQuestionTimeLabelsLabels.specificUser}
            </label>
            <Image
              style={{ marginLeft: "-16px" }}
              src={PremiumOrange}
              width={24}
              height={24}
              alt="Just for premium"
            />
          </div>
        </Form.Item>

        <Button
          onClick={onClick}
          type="primary"
          style={{ width: "100%", height: "58px" }}
          size="large"
        >
          {DCreateQuestionTimeLabelsLabels.button}
        </Button>
      </Form>
    </>
  );
};
