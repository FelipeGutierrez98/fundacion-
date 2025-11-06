// src/app/api/checkout/route.ts
/* import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
 */
/* const stripeSecret = process.env.STRIPE_SECRET_KEY;
if (!stripeSecret) {
  
  throw new Error("STRIPE_SECRET_KEY is not set");
}
 */
// No pases apiVersion si te dio error antes: Stripe usa la del dashboard.
// Si quieres fijarla, usa una literal válida, por ejemplo: '2024-06-20'.
/* const stripe = new Stripe(stripeSecret);

type CheckoutBody = {
  amount: number;             
  currency?: string;          
  email?: string;             
};
 */
/* export async function POST(req: NextRequest) {
  try {
    
    const body = (await req.json()) as CheckoutBody;

    const amount = Number(body.amount);
    const currency = (body.currency ?? "usd").toLowerCase();
    const email = body.email;

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: "Donación a Fundación Luz Dorada",
              description: "Gracias por tu apoyo 💛",
            },
            unit_amount: amount, 
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/donar?status=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/donar?status=cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "No se pudo crear la sesión de pago" },
      { status: 500 }
    );
  }
}
 */