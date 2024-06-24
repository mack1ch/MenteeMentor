"use client";

import { useState } from "react";
import { Button, ConfigProvider, Form, FormProps, Input, Space } from "antd";
import { DAuthFormInputsLabels } from "../data/text";
import { authFormTheme } from "../theme";
import styles from "./ui.module.scss";
import Link from "next/link";
import { IAuthFormData } from "../interface";
import { postUser } from "../api";
import { useRouter } from "next/navigation";

export const AuthFormInputs = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFinish: FormProps<IAuthFormData>["onFinish"] = async (values) => {
    setIsLoading(true);
    const res = await postUser(values);
    setIsLoading(false);
    if (res) {
      sessionStorage.setItem("accessToken", res?.accessToken);
      router.push("/app/main");
    }
  };
  return (
    <>
      <ConfigProvider theme={authFormTheme}>
        <Space style={{ width: "100%" }} direction="vertical" size={12}>
          <Form
            onFinish={onFinish}
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
                >
                  <Input size="large" type="tel" />
                </Form.Item>
                <Form.Item
                  style={{ marginTop: "-8px" }}
                  name={DAuthFormInputsLabels.password}
                  label={DAuthFormInputsLabels.password}
                >
                  <Input.Password size="large" />
                </Form.Item>
              </Space>
              <Button
                loading={isLoading}
                type="primary"
                htmlType="submit"
                style={{ width: "100%", height: "58px", marginTop: "-8px" }}
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
