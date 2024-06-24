import type { Metadata } from "next";
import "./globals.scss";
import localFont from "next/font/local";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StoreProvider from "@/shared/redux/provider";

export const metadata: Metadata = {
  title: "MenteeMentor",
  description: "MenteeMentor",
};

const Mont = localFont({
  src: [
    {
      path: "../../public/font/Mont-Regular.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Mont-SemiBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Mont-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Mont.className}>
        <StoreProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
