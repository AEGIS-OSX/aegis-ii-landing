export async function POST(request: Request) {
  const { name, organization, role, email, aum, message } = await request.json();

  if (!name || !organization || !role || !email || !aum) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  console.log("[access-request]", { name, organization, role, email, aum, message: message?.slice(0, 100) });

  return Response.json({ ok: true }, { status: 200 });
}

export async function GET() {
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
