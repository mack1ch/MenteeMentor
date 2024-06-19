"use client";

import { useEffect, useState } from "react";
import { Button, ConfigProvider, Form, Input, Space } from "antd";
import { DAuthFormInputsLabels } from "../data/text";
import { authFormTheme } from "../theme";
import styles from "./ui.module.scss";
import Link from "next/link";
export const AuthFormInputs = () => {
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
      <ConfigProvider theme={authFormTheme}>
        <Space style={{ width: "100%" }} direction="vertical" size={12}>
          <Form
            style={{ width: "100%" }}
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
          >
            <Space style={{ width: "100%" }} direction="vertical">
              <Space style={{ width: "100%" }} direction="vertical" size={-100}>
                <Form.Item
                  name={DAuthFormInputsLabels.login}
                  label={DAuthFormInputsLabels.login}
                  rules={[{ required: true }]}
                >
                  <Input size="large" type="tel" />
                </Form.Item>
                <Form.Item
                  name={DAuthFormInputsLabels.password}
                  label={DAuthFormInputsLabels.password}
                  rules={[{ required: true }]}
                >
                  <Input.Password size="large" />
                </Form.Item>
              </Space>
              <Button
                type="primary"
                htmlType="submit"
                disabled={!isSubmittable}
                style={{ width: "100%" }}
                size="large"
              >
                {DAuthFormInputsLabels.button}
              </Button>
            </Space>
          </Form>
          <p className={styles.p}>
            {DAuthFormInputsLabels.subtitle.subtitle}{" "}
            <Link
              className={styles.link}
              href={DAuthFormInputsLabels.subtitle.subTitleLink}
            >
              {DAuthFormInputsLabels.subtitle.subTitleLinkText}
            </Link>
          </p>
        </Space>
      </ConfigProvider>
    </>
  );
};
