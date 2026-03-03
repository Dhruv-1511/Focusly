import dbConnect from "@/lib/db";
import Problem from "@/models/Problem";
import { ProblemDetailClient } from "./ProblemDetailClient";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  try {
    await dbConnect();
    const problem = await Problem.findOne({ id: id });
    
    if (!problem) {
      return notFound();
    }

    // Convert to plain object for client component
    const plainProblem = JSON.parse(JSON.stringify(problem));
    
    return <ProblemDetailClient problem={plainProblem} />;
  } catch (error) {
    console.error("Failed to fetch problem detail:", error);
    return <div className="p-12 text-center text-destructive font-bold">Failed to load neural protocol. Please check database connection.</div>;
  }
}
