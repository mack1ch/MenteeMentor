import { CreateQuestion } from "@/widgets/createQuestion-slice/createQuestion";
import { Question } from "@/widgets/question-slice/question";
import { RangCard } from "@/widgets/rang-slice/rangCard";
import { Space } from "antd";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <CreateQuestion />
          <RangCard />
        </div>
        <Question />
      </div>
    </>
  );
}
