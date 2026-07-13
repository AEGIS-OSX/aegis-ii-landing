export async function POST(request: Request) {
  const body = await request.json();
  const { name, organization, role, email, aum, message } = body;

  if (!name || !organization || !role || !email || !aum) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (
    typeof name !== "string" ||
    typeof organization !== "string" ||
    typeof role !== "string" ||
    typeof email !== "string" ||
    typeof aum !== "string" ||
    (message !== undefined && typeof message !== "string")
  ) {
    return Response.json({ error: "Invalid field types" }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedOrg = organization.trim();
  const trimmedRole = role.trim();
  const trimmedEmail = email.trim();
  const trimmedAum = aum.trim();
  const trimmedMessage = message ? message.trim() : "";

  if (trimmedName.length > 100 || trimmedOrg.length > 100 || trimmedRole.length > 100) {
    return Response.json({ error: "Field too long" }, { status: 400 });
  }

  if (trimmedEmail.length > 254) {
    return Response.json({ error: "Email too long" }, { status: 400 });
  }

  if (trimmedMessage.length > 1000) {
    return Response.json({ error: "Message too long" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  console.log("[access-request]", { name: trimmedName, organization: trimmedOrg, role: trimmedRole, email: trimmedEmail, aum: trimmedAum, message: trimmedMessage.slice(0, 100) });

  return Response.json({ ok: true }, { status: 200 });
}

export async function GET() {
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
