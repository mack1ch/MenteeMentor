"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, redirectToLogin } from "./model";
interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoutes = ({ children }: PrivateRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      redirectToLogin(router);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
