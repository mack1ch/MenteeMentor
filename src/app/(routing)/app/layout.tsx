"use client";

import { Header } from "@/features/header-slice/header";
import { AppLayout } from "@/shared/layouts/appLayout";
import { ThemeLayout } from "@/shared/layouts/themeLayout";
import { PrivateRoutes } from "@/shared/lib/privateRoutes";
import React, { ReactNode } from "react";

export default function LayoutPage({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <PrivateRoutes>
        <ThemeLayout>
          <Header />
          <AppLayout>{children}</AppLayout>
        </ThemeLayout>
      </PrivateRoutes>
    </>
  );
}
