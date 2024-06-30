import { CreateQuestion } from "@/widgets/createQuestion-slice/createQuestion";
import { LeagueCard } from "@/widgets/league-slice/leagueCard";
import { MainScreenQuestions } from "@/widgets/question-slice/mainScreenQuestions";
import { RangCard } from "@/widgets/rang-slice/rangCard";

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
            gap: "12px",
          }}
        >
          <CreateQuestion />
          <div
            style={{
              display: "flex",
              flex: 1,
              gap: "12px",
              flexDirection: "column",
            }}
          >
            <RangCard />
            <LeagueCard />
          </div>
        </div>
        <MainScreenQuestions />
      </div>
    </>
  );
}
