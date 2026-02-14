-- Participants table: email is the unique key
CREATE TABLE IF NOT EXISTS public.participants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT NOT NULL CHECK (gender IN ('male', 'female', 'other')),
  consent_given BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Activity results table: records each activity attempt per participant
CREATE TABLE IF NOT EXISTS public.activity_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  participant_id UUID NOT NULL REFERENCES public.participants(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL CHECK (activity_type IN ('arithmetic', 'pattern', 'memory', 'comprehension', 'attention')),
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  answers JSONB,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_results ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts and selects (this is a research data collection app, no auth)
CREATE POLICY "allow_anon_insert_participants" ON public.participants
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_anon_select_participants" ON public.participants
  FOR SELECT TO anon USING (true);

CREATE POLICY "allow_anon_insert_results" ON public.activity_results
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_anon_select_results" ON public.activity_results
  FOR SELECT TO anon USING (true);

CREATE POLICY "allow_anon_update_participants" ON public.participants
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

-- Index on email for fast lookups
CREATE INDEX IF NOT EXISTS idx_participants_email ON public.participants(email);

-- Index on participant_id for fast joins
CREATE INDEX IF NOT EXISTS idx_results_participant ON public.activity_results(participant_id);
