import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(req: Request) {
  const { key } = await req.json();

  if (!key) {
    return NextResponse.json({ error: "Key boş olamaz" }, { status: 400 });
  }

  const db = await getDb();

  await db.collection("keys").insertOne({
    key,
    used: false,
    createdAt: new Date()
  });

  return NextResponse.json({ success: true });
}
