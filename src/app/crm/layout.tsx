import React from "react";
import { MainLayout } from "./components/layout";

export default function CRMLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MainLayout>{children}</MainLayout>;
}
