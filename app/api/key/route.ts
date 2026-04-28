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
      sort: { createdAt: 1 },
      returnDocument: "after"
    }
  );

  if (!result) {
    return NextResponse.json(
      { error: "Stok tükendi" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    key: result.key
  });
}
