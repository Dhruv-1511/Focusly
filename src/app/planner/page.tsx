import { Metadata } from "next";
import PlannerClient from "./PlannerClient";

export const metadata: Metadata = {
  title: "Optimization Protocol",
  description: "Architect your study plans with AI-driven throughput optimization and cognitive load management.",
};

export default function Page() {
  return <PlannerClient />;
}
