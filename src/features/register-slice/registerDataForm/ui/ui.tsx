"use client";

import { Button, Form, Input, Space } from "antd";
import { useEffect, useState } from "react";
import { DARegisterDataFormLabels } from "../data/text";
import styles from "./ui.module.scss";
import { DRegisterConfirmPhoneForm } from "../../registerConfirmPhoneForm/data";
import { LeftOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks";
import {
  setUserName,
  setUserPassword,
  setUserPhone,
} from "@/shared/redux/slice/register-slice";
import Link from "next/link";
import { IRegisterDataForm } from "../interface";
import { changedUser, postUser } from "../api";

export const RegisterDataForm = ({ onClick }: { onClick?: () => void }) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmittable, setIsSubmittable] = useState<boolean>(false);
  const values = Form.useWatch([], form);
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.registerForm.userName);
  const userPhone = useAppSelector((state) => state.registerForm.userPhone);
  const userPassword = useAppSelector(
    (state) => state.registerForm.userPassword
  );

  useEffect(() => {
    if (userName && userPhone && userPassword) {
      setIsSubmittable(true);
      form.validateFields({ validateOnly: true });
    } else setIsSubmittable(false);
  }, [form, values, userName, userPassword, userPhone]);

  const onFinish = async () => {
    if (
      userName &&
      userPhone &&
      userPassword &&
      userName?.length > 0 &&
      userPassword?.length > 0 &&
      userPhone?.length > 0
    ) {
      setIsLoading(true);
      const postUserValues: IRegisterDataForm = {
        name: userName || "",
        phone: userPhone || "",
        password: userPassword || "",
      };
      const res = await postUser(postUserValues);
      setIsLoading(false);
      if (res) {
        sessionStorage.setItem("accessToken", res?.accessToken);
        onClick && onClick();
      }
    } else {
      setIsLoading(true);
      const postUserValues: IRegisterDataForm = {
        name: userName || "",
        phone: userPhone || "",
        password: userPassword || "",
      };
      const res = await changedUser(postUserValues);
      setIsLoading(false);
      if (res) {
        dispatch(setUserName(res.name));
        dispatch(setUserPhone(res.phone));

        onClick && onClick();
      }
    }
  };

  return (
    <>
      <Form
        style={{ width: "100%", maxWidth: "480px" }}
        form={form}
        initialValues={{ remember: true }}
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
            >
              <Input
                value={userName}
                defaultValue={userName}
                onChange={(e) => dispatch(setUserName(e.target.value))}
                size="large"
                type="text"
              />
            </Form.Item>
            <Form.Item
              style={{ marginTop: "-8px" }}
              name={DARegisterDataFormLabels.login}
              label={DARegisterDataFormLabels.login}
            >
              <Input
                value={userPhone}
                defaultValue={userPhone}
                onChange={(e) => dispatch(setUserPhone(e.target.value))}
                size="large"
                type="number"
              />
            </Form.Item>
            <Form.Item
              style={{ marginTop: "-8px" }}
              name={DARegisterDataFormLabels.password}
              label={DARegisterDataFormLabels.password}
            >
              <Input.Password
                value={userPassword}
                defaultValue={userPassword}
                onChange={(e) => dispatch(setUserPassword(e.target.value))}
                size="large"
              />
            </Form.Item>
          </Space>
          <div className={styles.buttonsWrap}>
            <Link href="/" className={styles.backButton}>
              <LeftOutlined size={24} />
            </Link>
            <Button
              onClick={onFinish}
              htmlType="submit"
              type="primary"
              loading={isLoading}
              disabled={!isSubmittable}
              style={{ width: "100%", height: "58px" }}
              className={styles.submitButton}
            >
              {DARegisterDataFormLabels.button}
            </Button>
          </div>
        </Space>
      </Form>
    </>
  );
};
