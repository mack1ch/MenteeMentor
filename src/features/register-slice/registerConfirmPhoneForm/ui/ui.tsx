"use client";

import { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { DRegisterConfirmPhoneForm } from "../data";
import styles from "./ui.module.scss";
export const RegisterConfirmPhoneForm = ({
  onClick,
}: {
  onClick?: () => void;
}) => {
  const [form] = Form.useForm();
  const [isSubmittable, setIsSubmittable] = useState<boolean>(false);
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setIsSubmittable(true))
      .catch(() => setIsSubmittable(false));
  }, [form, values]);
  return (
    <>
      <Form
        style={{ width: "100%", maxWidth: "480px" }}
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <div className={styles.formLayout}>
          <h1 className={styles.h1}>{DRegisterConfirmPhoneForm.header}</h1>
          <Form.Item
            name={DRegisterConfirmPhoneForm.label}
            rules={[{ required: true }]}
          >
            <Input.OTP
              length={4}
              size="large"
              formatter={(str) => str.toUpperCase()}
            />
          </Form.Item>

          <Button
            onClick={onClick}
            type="primary"
            htmlType="submit"
            disabled={!isSubmittable}
            style={{ width: "100%" }}
            size="large"
          >
            {DRegisterConfirmPhoneForm.button}
          </Button>
        </div>
      </Form>
    </>
  );
};
