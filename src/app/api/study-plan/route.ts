import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import StudyPlan from "@/models/StudyPlan";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");

    const query: any = { userId: (session.user as any).id };
    if (date) query.date = date;

    const plans = await StudyPlan.find(query).sort({ date: -1 });
    return NextResponse.json({ success: true, data: plans });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();
    
    // Check if plan for this date already exists and update it, or create new
    const existingPlan = await StudyPlan.findOne({ 
      userId: (session.user as any).id, 
      date: body.date 
    });

    if (existingPlan) {
      existingPlan.daily = body.daily;
      await existingPlan.save();
      return NextResponse.json({ success: true, data: existingPlan });
    } else {
      const plan = await StudyPlan.create({
        ...body,
        userId: (session.user as any).id
      });
      return NextResponse.json({ success: true, data: plan }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
