import { Metadata } from "next";
import FocusClient from "./FocusClient";

export const metadata: Metadata = {
  title: "Focus Zone",
  description: "Initiate digital isolation and enter deep work sessions with our neural-sync timer and ambient stations.",
};

export default function Page() {
  return <FocusClient />;
}
