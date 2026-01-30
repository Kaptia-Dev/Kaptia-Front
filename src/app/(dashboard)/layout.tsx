import React from "react";
import { MainLayout } from "@/components/layouts";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MainLayout>{children}</MainLayout>;
}
