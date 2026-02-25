import { Metadata } from "next";
import ProblemsClient from "./ProblemsClient";

export const metadata: Metadata = {
  title: "Neural Protocols",
  description: "Explore scientifically-backed protocols for overcoming common study obstacles and mental blocks.",
};

export default function Page() {
  return <ProblemsClient />;
}
