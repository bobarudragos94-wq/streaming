"use server";

import { site } from "@/content/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  code?: "validation" | "not-configured" | "generic";
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendInquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const type = String(formData.get("type") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !EMAIL_RE.test(email) || !message) {
    return { status: "error", code: "validation" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No email provider configured yet (pre-launch) — tell the visitor
    // to use the direct address instead of pretending we sent something.
    return { status: "error", code: "not-configured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${site.name} Website <onboarding@resend.dev>`,
        to: [site.email],
        reply_to: email,
        subject: `[${site.name}] ${type || "colaborare"} — ${name}`,
        text: `Nume: ${name}\nEmail: ${email}\nTip: ${type}\n\n${message}`,
      }),
    });
    if (!res.ok) return { status: "error", code: "generic" };
    return { status: "success" };
  } catch {
    return { status: "error", code: "generic" };
  }
}
