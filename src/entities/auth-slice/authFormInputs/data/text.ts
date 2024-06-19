interface IAuthFormInputsLabels {
  login: string;
  password: string;
  button: string;
  subtitle: {
    subtitle: string;
    subTitleLinkText: string;
    subTitleLink: string;
  };
}

export const DAuthFormInputsLabels: IAuthFormInputsLabels = {
  login: "phone",
  password: "password",
  button: "login",
  subtitle: {
    subtitle: "No account?",
    subTitleLinkText: "Sign up!",
    subTitleLink: "/register",
  },
};
