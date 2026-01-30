import { writeContent } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  writeContent(data);
  return NextResponse.json({ success: true });
}
