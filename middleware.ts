import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/api/access-request'],
};

// Redis.fromEnv() THROWS when UPSTASH_REDIS_REST_URL / _TOKEN are unset, and
// this project has no Vercel env vars at all -- so constructing the limiter at
// module scope turned every POST to /api/access-request into a 500, taking the
// lead-capture form down. Build it lazily and degrade LOUDLY instead: the form
// keeps working, and the missing rate limit is logged on every request rather
// than silently assumed to be in place.
let limiter: Ratelimit | null = null;
let limiterReady = false;

function getLimiter(): Ratelimit | null {
  if (limiterReady) return limiter;
  limiterReady = true;
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    console.warn(
      '[middleware] UPSTASH_REDIS_REST_URL/_TOKEN not set -- rate limiting on ' +
        '/api/access-request is DISABLED. Provision Upstash to re-enable it.',
    );
    return null;
  }
  try {
    limiter = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, '60 s'),
      analytics: false,
    });
  } catch (err) {
    console.error('[middleware] rate limiter init failed; continuing unlimited:', err);
    limiter = null;
  }
  return limiter;
}

export default async function middleware(req: NextRequest) {
  const rl = getLimiter();
  if (!rl) return NextResponse.next();

  const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
  try {
    const { success } = await rl.limit(ip);
    if (!success) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
  } catch (err) {
    // A Redis outage must not take the lead form down with it.
    console.error('[middleware] rate limit check failed; allowing request:', err);
  }
  return NextResponse.next();
}
