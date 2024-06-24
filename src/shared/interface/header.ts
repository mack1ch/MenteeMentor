import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type THeaderRoutItemTitle =
  | "Main"
  | "Questions"
  | "Answers"
  | "Shop"
  | "Premium";

export interface IHeaderRoutItem {
  id: number;
  title: THeaderRoutItemTitle;
  path: string;
  icon: StaticImport;
}
