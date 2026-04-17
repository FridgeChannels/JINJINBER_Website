import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO_EMAIL = "xhzhang@jinjieber.com";

type ContactPayload = {
  contactName: string;
  enterprise: string;
  primaryEmail: string;
  marketSector: string;
  technicalRequest: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function buildMailText(body: ContactPayload): string {
  const lines = [
    "Jinjieber.com — System Specification Inquiry",
    "",
    `Contact Name: ${body.contactName.trim()}`,
    `Enterprise: ${body.enterprise.trim()}`,
    `Primary Email: ${body.primaryEmail.trim()}`,
    `Market Sector: ${body.marketSector.trim()}`,
    "",
    "Detailed Technical Request:",
    body.technicalRequest.trim(),
  ];
  return lines.join("\n");
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const o = json as Record<string, unknown>;
  const payload: ContactPayload = {
    contactName: typeof o.contactName === "string" ? o.contactName : "",
    enterprise: typeof o.enterprise === "string" ? o.enterprise : "",
    primaryEmail: typeof o.primaryEmail === "string" ? o.primaryEmail : "",
    marketSector: typeof o.marketSector === "string" ? o.marketSector : "",
    technicalRequest: typeof o.technicalRequest === "string" ? o.technicalRequest : "",
  };

  if (
    !isNonEmptyString(payload.contactName) ||
    !isNonEmptyString(payload.enterprise) ||
    !isNonEmptyString(payload.primaryEmail) ||
    !isNonEmptyString(payload.marketSector) ||
    !isNonEmptyString(payload.technicalRequest)
  ) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!isValidEmail(payload.primaryEmail)) {
    return NextResponse.json({ error: "Primary email is invalid." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const from = process.env.SMTP_FROM;
  if (!host || !from) {
    console.error("contact API: missing SMTP_HOST or SMTP_FROM");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
  }

  const port = Number.parseInt(process.env.SMTP_PORT ?? "587", 10);
  const secure = process.env.SMTP_SECURE === "true" || process.env.SMTP_SECURE === "1";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const transporter = nodemailer.createTransport({
    host,
    port: Number.isFinite(port) ? port : 587,
    secure,
    ...(user ? { auth: { user, pass: pass ?? "" } } : {}),
    ...(process.env.SMTP_TLS_REJECT_UNAUTHORIZED === "0"
      ? { tls: { rejectUnauthorized: false } }
      : {}),
  });

  const text = buildMailText(payload);
  const subject =
    process.env.CONTACT_MAIL_SUBJECT?.trim() ||
    `Technical review inquiry — ${payload.enterprise.trim()}`;

  try {
    await transporter.sendMail({
      from,
      to: TO_EMAIL,
      replyTo: payload.primaryEmail.trim(),
      subject,
      text,
    });
  } catch (e) {
    console.error("contact API: sendMail failed", e);
    return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
