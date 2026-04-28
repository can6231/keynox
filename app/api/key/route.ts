import { NextResponse } from "next/server";
    import { getDb } from "../../../lib/mongodb";

export async function GET() {
  const db = await getDb();

  // kullanılmamış key al ve used=true yap
  const result = await db.collection("keys").findOneAndUpdate(
    { used: false },
    { $set: { used: true } },
    { returnDocument: "after" }
  );

  if (!result.value) {
    return NextResponse.json({
      error: "Key kalmadı"
    });
  }

  return NextResponse.json({
    key: result.value.key
  });
}
