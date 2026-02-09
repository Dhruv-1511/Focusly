import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Problem from "@/models/Problem";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();
    const problems = await Problem.find({});
    return NextResponse.json({ success: true, data: problems });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const problem = await Problem.create(body);
    return NextResponse.json({ success: true, data: problem }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
