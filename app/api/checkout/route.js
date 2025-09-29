// ✅ Force Node runtime and dynamic route to avoid build-time issues
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import Stripe from "stripe";
// Adjust this path if your folders differ: api/checkout -> ../../data/services
import { services } from "../../../data/services";

/** Keep this in sync with your BookingForm's add-ons */
const ADDONS = {
  Hair: [
    { id: "scalp", name: "Scalp massage", price: 10 },
    { id: "gloss", name: "Gloss treatment", price: 20 },
  ],
  Nail: [{ id: "art", name: "Simple nail art", price: 15 }],
  Spa: [{ id: "aroma", name: "Aromatherapy", price: 12 }],
  Face: [{ id: "browtint", name: "Brow tint add-on", price: 10 }],
  Skin: [{ id: "sheet", name: "Sheet mask", price: 8 }],
  Makeup: [{ id: "lashes", name: "False lashes", price: 15 }],
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { service, tier, addons = [], date, time, contact } = body || {};

    const svc = services.find((s) => s.slug === service);
    if (!svc) {
      return NextResponse.json({ error: "Service not found" }, { status: 400 });
    }

    const chosenTier = (svc.tiers || []).find((t) => t.name === tier) || {
      name: "Standard",
      price: svc.fromPrice || 0,
      duration: svc.duration,
    };

    const availableAddons = ADDONS[svc.category] || [];
    const pickedAddons = (Array.isArray(addons) ? addons : [])
      .map((id) => availableAddons.find((a) => a.id === id))
      .filter(Boolean);

    // Stripe init
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
    });

    // Base URL for success/cancel
    const siteUrlEnv = process.env.NEXT_PUBLIC_SITE_URL;
    const reqOrigin = (() => {
      try {
        return new URL(req.url).origin;
      } catch {
        return null;
      }
    })();
    const origin =
      siteUrlEnv ||
      req.headers.get("origin") ||
      reqOrigin ||
      "http://localhost:3000";

    const line_items = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${svc.title} — ${chosenTier.name}`,
            metadata: {
              service: svc.slug,
              tier: chosenTier.name,
              date: date || "",
              time: time || "",
            },
          },
          unit_amount: Math.round((chosenTier.price || 0) * 100),
        },
        quantity: 1,
      },
      ...pickedAddons.map((a) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: `Add-on: ${a.name}`,
            metadata: { service: svc.slug },
          },
          unit_amount: Math.round(a.price * 100),
        },
        quantity: 1,
      })),
    ];

    // Guard: Stripe requires > $0 total
    const totalCents = line_items.reduce(
      (sum, li) => sum + li.price_data.unit_amount * (li.quantity || 1),
      0
    );
    if (totalCents <= 0) {
      return NextResponse.json(
        { error: "Total must be greater than $0" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/booking?canceled=1`,
      metadata: {
        service: svc.slug,
        tier: chosenTier.name,
        date: date || "",
        time: time || "",
        name: contact?.name || "",
        email: contact?.email || "",
        phone: contact?.phone || "",
        addons: JSON.stringify(addons || []),
      },
    });

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err) {
    console.error("CHECKOUT ERROR:", err);
    return NextResponse.json(
      { error: "Unable to start checkout" },
      { status: 500 }
    );
  }
}

// (Optional) Handle preflight if you’re calling from other origins
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
