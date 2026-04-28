import { NextResponse } from "next/server";
import { getDb } from "../../../lib/mongodb";

export async function GET() {
  const db = await getDb();

  const result = await db.collection("keys").findOneAndUpdate(
    { used: false },
    {
      $set: {
        used: true,
        usedAt: new Date()
      }
    },
    {
      sort: { createdAt: 1 }
    }
  );

  if (!result) {
    return NextResponse.json(
      { error: "Stok tükendi" },
      { status: 400 }
    );
  }

  // 🔥 TypeScript fix
  const keyData = result as any;

  return NextResponse.json({
    key: keyData.key
  });
}
