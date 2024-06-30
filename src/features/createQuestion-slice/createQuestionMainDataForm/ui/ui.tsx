"use client";

import {
  Button,
  Form,
  Image,
  Input,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";

import { useEffect, useState } from "react";
import { FileType, getBase64 } from "../model";
import { UploadButton } from "../model/uploadButton";
import styles from "./ui.module.scss";
import { DCreateQuestionMainDataFormLabels } from "../data";
import useSWR from "swr";
import { ISubject } from "@/shared/interface/user";
import { fetcher } from "@/shared/api";
import { ISelectOptions } from "@/shared/interface/options";
export const CreateQuestionMainDataForm = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  const [form] = Form.useForm();
  const [isSubmittableButton, setSubmittableButton] = useState<boolean>(false);
  const values = Form.useWatch([], form);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const { data: subjects } = useSWR<ISubject[]>("/subjects", fetcher);
  const subjectsOptions: ISelectOptions[] | undefined = subjects?.map(
    (subject) => ({
      value: subject.id.toString(),
      label: subject.name,
    })
  );
  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittableButton(true))
      .catch(() => setSubmittableButton(false));
  }, [form, values]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleFilePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  return (
    <>
      <Form
        style={{ width: "100%" }}
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <div className={styles.formLayout}>
          <Upload
            style={{ marginBottom: "12px" }}
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handleFilePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : <UploadButton />}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{ display: "none" }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}
          <Form.Item
            style={{ width: "100%" }}
            name={DCreateQuestionMainDataFormLabels.title}
            label={DCreateQuestionMainDataFormLabels.title}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            style={{ width: "100%", marginTop: "-24px" }}
            name={DCreateQuestionMainDataFormLabels.description}
            label={DCreateQuestionMainDataFormLabels.description}
          >
            <Input.TextArea autoSize size="large" />
          </Form.Item>
          <div
            style={{ marginTop: "-24px" }}
            className={styles.subjectAndTheme}
          >
            <Form.Item
              style={{ width: "48%" }}
              name={DCreateQuestionMainDataFormLabels.subject}
              label={DCreateQuestionMainDataFormLabels.subject}
            >
              <Select options={subjectsOptions} size="large" />
            </Form.Item>
            <Form.Item
              style={{ width: "48%" }}
              name={DCreateQuestionMainDataFormLabels.theme}
              label={DCreateQuestionMainDataFormLabels.theme}
            >
              <Select size="large" />
            </Form.Item>
          </div>
          <Button
            onClick={onClick}
            disabled={!isSubmittableButton}
            type="primary"
            style={{ width: "100%", height: "58px" }}
            size="large"
          >
            {DCreateQuestionMainDataFormLabels.button}
          </Button>
        </div>
      </Form>
    </>
  );
};
