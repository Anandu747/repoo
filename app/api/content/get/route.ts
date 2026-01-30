import { readContent } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const content = readContent();
  return NextResponse.json(content);
}
