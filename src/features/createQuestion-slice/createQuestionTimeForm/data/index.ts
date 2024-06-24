interface ICreateQuestionMainDataFormLabels {
  time: string;
  timeVariants: {
    id: number;
    title: string;
    time?: string;
  }[];
  format: string;
  formatVariants: string[];
  expertPremium: string;
  specificUser: string;
}

export const DCreateQuestionMainDataFormLabels: ICreateQuestionMainDataFormLabels =
  {
    time: "When can you be in touch?",
    timeVariants: [
      {
        id: 0,
        title: "Morning",
        time: "8 - 12",
      },
      {
        id: 1,
        title: "Day",
        time: "12 - 6 pm",
      },
      {
        id: 2,
        title: "Evening",
        time: "6 - 12 pm",
      },
      {
        id: 3,
        title: "Just now",
      },
      {
        id: 4,
        title: "Another time",
      },
    ],
    format: "Which format suits you best?",
    formatVariants: ["Video call", "Chat", "Doesn't matter"],
    expertPremium: "Ask a question only to Experts",
    specificUser: "Ask a question to a specific user",
  };
