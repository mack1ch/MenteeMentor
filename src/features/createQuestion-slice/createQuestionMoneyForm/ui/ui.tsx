import { Button, Form, Input, Switch } from "antd";
import styles from "./ui.module.scss";
import { DCreateQuestionMoneyFormLabels } from "../data";

export const CreateQuestionMoneyForm = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  return (
    <>
      <Form
        style={{ width: "100%" }}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name={DCreateQuestionMoneyFormLabels.fastAnswerTitle}
          style={{ width: "100%" }}
        >
          <div className={styles.switcher}>
            <Switch />
            <span className={styles.labelsWrap}>
              <label className={styles.labelTitle}>
                {DCreateQuestionMoneyFormLabels.fastAnswerTitle}
              </label>
              <label className={styles.labelSubTitle}>
                {DCreateQuestionMoneyFormLabels.fastAnswerSubTitle}
              </label>
            </span>
          </div>
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          name={DCreateQuestionMoneyFormLabels.howMuchTime}
          label={DCreateQuestionMoneyFormLabels.howMuchTime}
        >
          <Input size="large" />
        </Form.Item>
        <div className={styles.ticketsAndMoney}>
          <Form.Item
            style={{ width: "100%" }}
            name={DCreateQuestionMoneyFormLabels.tickets}
            label={DCreateQuestionMoneyFormLabels.tickets}
          >
            <Input type="number" size="large" />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            name={DCreateQuestionMoneyFormLabels.money}
            label={DCreateQuestionMoneyFormLabels.money}
          >
            <Input type="number" size="large" />
          </Form.Item>
        </div>
        <Button
          onClick={onClick}
          type="primary"
          style={{ width: "100%", height: "58px" }}
          size="large"
        >
          {DCreateQuestionMoneyFormLabels.button}
        </Button>
      </Form>
    </>
  );
};