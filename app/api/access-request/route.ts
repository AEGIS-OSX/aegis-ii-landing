import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

export async function POST(request: Request) {
  const { name, organization, role, email, aum, message, website } = await request.json();

  if (website && website.trim() !== "") {
    return Response.json({}, { status: 200 });
  }

  if (!name || !organization || !role || !email || !aum) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  console.log("[access-request]", {
    organization,
    role,
    aum,
    timestamp: new Date().toISOString(),
  });

  if (!supabase) {
    return Response.json(
      { ok: false, error: "Database not configured" },
      { status: 500 }
    );
  }

  const { error } = await supabase
    .from("access_requests")
    .insert({ name, organization, role, email, aum, message });

  if (error) {
    console.error("[access-request] Supabase insert error:", error);
    return Response.json({ ok: false }, { status: 500 });
  }

  // Fire-and-forget email notification to founder
  const resendApiKey = process.env.RESEND_API_KEY;
  const founderEmail = process.env.FOUNDER_EMAIL;
  if (resendApiKey && founderEmail) {
    try {
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "noreply@aegis-os.com",
          to: founderEmail,
          subject: "New AEGIS II access request",
          text: `Name: ${name}\nOrganization: ${organization}\nRole: ${role}\nEmail: ${email}\nAUM: ${aum}\nMessage: ${message || "(none)"}`,
        }),
      });
    } catch (e) {
      // Email failure is non-blocking
      console.error("[access-request] Email send failed:", e);
    }
  }

  return Response.json({ ok: true }, { status: 200 });
}

export async function GET() {
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
