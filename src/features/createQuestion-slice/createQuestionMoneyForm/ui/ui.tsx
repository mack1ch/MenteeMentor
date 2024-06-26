import { Button, Form, Input, Select, Switch } from "antd";
import styles from "./ui.module.scss";
import { DCreateQuestionMoneyFormLabels } from "../data";
import Image from "next/image";
import Premium from "../../../../../public/icons/premium/premiumWithStars-orange.svg";
import Coin from "../../../../../public/icons/price/coin-orange.svg";
import Ticket from "../../../../../public/icons/price/ticket-blue.svg";
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
          style={{ width: "100%" }}
          name={DCreateQuestionMoneyFormLabels.howMuchTime}
          label={DCreateQuestionMoneyFormLabels.howMuchTime}
        >
          <Select size="large" />
        </Form.Item>
        <div className={styles.ticketsAndMoney}>
          <Form.Item
            style={{ width: "100%" }}
            name={DCreateQuestionMoneyFormLabels.tickets}
            label={
              <>
                <Image
                  style={{ marginRight: "4px" }}
                  src={Ticket}
                  width={20}
                  height={20}
                  alt="Ticket"
                />{" "}
                Tickets
              </>
            }
          >
            <Input type="number" size="large" />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            name={DCreateQuestionMoneyFormLabels.money}
            label={
              <>
                <Image
                  style={{ marginRight: "4px" }}
                  src={Coin}
                  width={20}
                  height={20}
                  alt="Coin"
                />{" "}
                Coins
              </>
            }
          >
            <Input type="number" size="large" />
          </Form.Item>
        </div>
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
            <Image
              src={Premium}
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
          {DCreateQuestionMoneyFormLabels.button}
        </Button>
      </Form>
    </>
  );
};
