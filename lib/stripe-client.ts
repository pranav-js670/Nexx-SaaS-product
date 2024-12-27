import { loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<any>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};
