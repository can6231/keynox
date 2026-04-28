import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getDb } from "../../../lib/mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as any,
});

export async function GET() {
  const db = await getDb();

  // 🔥 stok kontrol
  const stock = await db.collection("keys").countDocuments({
    used: false,
  });

  if (stock === 0) {
    return NextResponse.json(
      { error: "Stok tükendi" },
      { status: 400 }
    );
  }

  // 💳 Stripe ödeme oluştur
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "try",
          product_data: {
            name: "Cyber Quest",
          },
          unit_amount: 29900,
        },
        quantity: 1,
      },
    ],
    mode: "payment",

    success_url: "https://keynox-kappa.vercel.app/success",
    cancel_url: "https://keynox-kappa.vercel.app/cart",
  });

  return NextResponse.redirect(session.url!);
}
