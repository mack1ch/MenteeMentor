import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { globalTheme } from "../theme";

export const ThemeLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <ConfigProvider theme={globalTheme}>{children}</ConfigProvider>
    </>
  );
};
