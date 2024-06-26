import { QuestionCard } from "@/features/question-slice/questionCard";
import { CreateQuestion } from "@/widgets/createQuestion-slice/createQuestion";
import { Question } from "@/widgets/question-slice/question";
import { Space } from "antd";

export default function Home() {
  return (
    <>
      <Space style={{ width: "100%" }} size={12} direction="vertical">
        <CreateQuestion />
        <Question />
      </Space>
    </>
  );
}
