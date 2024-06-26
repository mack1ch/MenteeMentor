interface ICreateQuestionTimeLabels {
  time: string;
  timeVariants: {
    id: number;
    title: string;
    time?: string;
  }[];
  format: string;
  formatVariants: { id: number; title: string }[];
  expertPremium: string;
  specificUser: string;
  button: string;
}

export const DCreateQuestionTimeLabelsLabels: ICreateQuestionTimeLabels = {
  time: "When can you be in touch?",
  button: "Continue",
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
  formatVariants: [
    {
      id: 0,
      title: "Video call",
    },
    {
      id: 1,
      title: "Chat",
    },
    {
      id: 2,
      title: "Doesn't matter",
    },
  ],
  expertPremium: "Ask a question only to Experts",
  specificUser: "Ask a question to a specific user",
};
