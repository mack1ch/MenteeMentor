"use client";

import { Button, Form, Input, Space } from "antd";
import { useEffect, useState } from "react";
import { DARegisterDataFormLabels } from "../data/text";
import styles from "./ui.module.scss";
import { DRegisterConfirmPhoneForm } from "../../registerConfirmPhoneForm/data";
import { LeftOutlined } from "@ant-design/icons";
export const RegisterDataForm = ({ onClick }: { onClick?: () => void }) => {
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
        <Space style={{ width: "100%" }} direction="vertical">
          <Space style={{ width: "100%" }} direction="vertical" size={-100}>
            <h1 className={styles.h1}>{DRegisterConfirmPhoneForm.header}</h1>
            <Form.Item
              name={DARegisterDataFormLabels.name}
              label={DARegisterDataFormLabels.name}
              rules={[{ required: true }]}
            >
              <Input size="large" type="text" />
            </Form.Item>
            <Form.Item
              name={DARegisterDataFormLabels.login}
              label={DARegisterDataFormLabels.login}
              rules={[{ required: true }]}
            >
              <Input size="large" type="number" />
            </Form.Item>
            <Form.Item
              name={DARegisterDataFormLabels.password}
              label={DARegisterDataFormLabels.password}
              rules={[{ required: true }]}
            >
              <Input.Password size="large" />
            </Form.Item>
          </Space>
          <div className={styles.buttonsWrap}>
            <Button
              href="/"
              shape="circle"
              icon={<LeftOutlined />}
              size="large"
            />
            <Button
              type="primary"
              htmlType="submit"
              disabled={!isSubmittable}
              onClick={onClick}
              style={{ width: "100%" }}
              size="large"
            >
              {DARegisterDataFormLabels.button}
            </Button>
          </div>
        </Space>
      </Form>
    </>
  );
};
