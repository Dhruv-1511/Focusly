import { Metadata } from "next";
import SettingsClient from "./SettingsClient";

export const metadata: Metadata = {
  title: "System Settings",
  description: "Configure your neural profile, security protocols, and platform preferences.",
};

export default function Page() {
  return <SettingsClient />;
}
