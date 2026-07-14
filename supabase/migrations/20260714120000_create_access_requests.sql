-- Migration: create access_requests table for durable lead storage
CREATE TABLE public.access_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  organization text,
  role text,
  email text NOT NULL,
  aum text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.access_requests ENABLE ROW LEVEL SECURITY;

-- Service role can insert (used by the API route server-side client)
CREATE POLICY "service_role_insert" ON public.access_requests
  FOR INSERT
  TO service_role
  WITH CHECK (true);
