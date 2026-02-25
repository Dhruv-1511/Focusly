import { Metadata } from "next";
import ToolsClient from "./ToolsClient";

export const metadata: Metadata = {
  title: "Library Arsenal",
  description: "Access our suite of neural-sync tools designed for distraction-free deep work and rapid learning.",
};

export default function Page() {
  return <ToolsClient />;
}
