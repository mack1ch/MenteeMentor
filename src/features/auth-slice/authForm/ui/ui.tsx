import { Space } from "antd";
import styles from "./ui.module.scss";
import { DAuthFormText } from "../data/text";
import { AuthFormInputs } from "@/entities/auth-slice/authFormInputs";
import Image from "next/image";
import MenteeMentor from "../../../../../public/assets/logos/menteeMentor_logo.png";

export const AuthForm = () => {
  return (
    <>
      <Space
        size={64}
        style={{ width: "100%", maxWidth: "482px" }}
        direction="vertical"
      >
        <Image
          style={{ marginRight: "auto" }}
          src={MenteeMentor}
          width={91}
          height={44}
          alt="MenteeMentor"
        />
        <Space style={{ width: "100%" }} direction="vertical" size={36}>
          <Space style={{ width: "100%" }} direction="vertical" size={8}>
            <h1 className={styles.h1}>{DAuthFormText.title}</h1>
            <p className={styles.p}>{DAuthFormText.subtitle}</p>
          </Space>
          <AuthFormInputs />
        </Space>
      </Space>
    </>
  );
};
