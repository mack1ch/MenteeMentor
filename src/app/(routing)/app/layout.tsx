"use client";

import { Header } from "@/features/header-slice/header";
import { ThemeLayout } from "@/shared/layouts/themeLayout";
import React, { ReactNode } from "react";

export default function LayoutPage({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <ThemeLayout>
        <Header />
        {children}
      </ThemeLayout>
    </>
  );
}
