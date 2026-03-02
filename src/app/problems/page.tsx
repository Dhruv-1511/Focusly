import { Metadata } from "next";
import { ProblemsClient } from "./ProblemsClient";
import { PROBLEMS } from "@/data/mock";

export const metadata: Metadata = {
  title: "Neural Protocols",
  description: "Explore scientifically-backed protocols for overcoming common study obstacles and mental blocks.",
};

async function getProblems() {
  // In a real app, this would be a database call or fetch from a secure API
  // For now, we'll simulate an async fetch of our mock data
  return PROBLEMS;
}

export default async function Page() {
  const problems = await getProblems();
  return <ProblemsClient initialProblems={problems} />;
}

