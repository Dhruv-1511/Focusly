import { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Monitor your neural performance, track focus hours, and manage your daily study protocol.",
};

export default function Page() {
  return <DashboardClient />;
}
