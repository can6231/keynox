import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getDb } from "../../../lib/mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as any,
});

export async function POST(req: Request) {
  const { cart } = await req.json();
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
    mode: "payment",
    line_items: cart.map((item: any) => ({
      quantity: 1,
      price_data: {
        currency: "try",
        unit_amount: Number(item.price.replace(" TL", "")) * 100,
        product_data: {
          name: `${item.name} - ${item.platform}`,
        },
      },
    })),
    success_url: "https://keynox-kappa.vercel.app/success",
    cancel_url: "https://keynox-kappa.vercel.app/cart",
  });

  return NextResponse.json({ url: session.url });
}
