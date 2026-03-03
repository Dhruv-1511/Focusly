import { Metadata } from "next";
import { ProblemsClient } from "./ProblemsClient";
import dbConnect from "@/lib/db";
import Problem from "@/models/Problem";

export const metadata: Metadata = {
  title: "Neural Protocols",
  description: "Explore scientifically-backed protocols for overcoming common study obstacles and mental blocks.",
};

async function getProblems() {
  try {
    await dbConnect();
    const problems = await Problem.find({}).sort({ createdAt: -1 });
    // Convert Mongoose documents to plain objects for client component
    return JSON.parse(JSON.stringify(problems));
  } catch (error) {
    console.error("Failed to fetch problems from database:", error);
    return [];
  }
}

export default async function Page() {
  const problems = await getProblems();
  return <ProblemsClient initialProblems={problems} />;
}
