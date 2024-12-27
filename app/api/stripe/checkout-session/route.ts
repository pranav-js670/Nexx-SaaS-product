import { stripe } from "@/lib/stripe";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { price, quantity = 1 }: { price: string; quantity?: number } =
    await req.json();
  const { userId } = auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const userSubscription = await getUserSubscription(userId);

  let customer;
  if (userSubscription) {
    customer = {
      id: userSubscription.stripeCustomerId,
    };
  } else {
    const customerData: { metadata: { dbId: string } } = {
      metadata: {
        dbId: userId,
      },
    };

    const response = await stripe.customers.create(customerData);
    customer = { id: response.id };

    await db.insert(subscriptions).values({
      userId,
      stripeCustomerId: customer.id,
      subscribed: true,
    });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  if (!customer?.id) {
    return new Response("Failed to get a customer id", { status: 500 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${baseUrl}/payments/checkout-success`,
      customer: customer?.id,
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price,
          quantity,
        },
      ],
    });

    if (session) {
      return new Response(JSON.stringify({ sessionId: session.id }), {
        status: 200,
      });
    } else {
      return new Response("Failed to create a session", { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return new Response("Failed to create a session", { status: 500 });
  }
}

async function getUserSubscription(userId: string) {
  const userSubscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, userId),
  });
  return userSubscription;
}
