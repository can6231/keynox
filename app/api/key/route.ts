import { NextResponse } from "next/server";

const keys = [
  "CYBER-1111-2222",
  "CYBER-3333-4444",
  "CYBER-5555-6666"
];

export async function GET() {
  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  return NextResponse.json({
    key: randomKey
  });
}
