"use client"

import { useState } from "react"
import {
  ArrowRight,
  ArrowLeft,
  Brain,
  Activity,
  Zap,
  ShieldCheck,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export interface ParticipantData {
  id: string
  email: string
  fullName: string
  age: string
  gender: string
  consentGiven: boolean
}

interface RegistrationFormProps {
  onSubmit: (data: ParticipantData) => void
  onBack: () => void
}

export function RegistrationForm({ onSubmit, onBack }: RegistrationFormProps) {
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [consentGiven, setConsentGiven] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const isValid =
    email.trim() !== "" &&
    fullName.trim() !== "" &&
    age.trim() !== "" &&
    gender !== "" &&
    consentGiven

  const handleSubmit = async () => {
    if (!isValid) return
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/participants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          full_name: fullName.trim(),
          age,
          gender,
          consent_given: consentGiven,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong")
        setLoading(false)
        return
      }

      onSubmit({
        id: data.participant.id,
        email: email.trim().toLowerCase(),
        fullName: fullName.trim(),
        age,
        gender,
        consentGiven,
      })
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-8 lg:px-0 lg:py-0">
      {/* Split panel container */}
      <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/5 lg:min-h-[600px]">
        {/* Left panel — welcome / branding */}
        <div className="hidden w-5/12 flex-col justify-between bg-primary p-10 lg:flex">
          <div>
            <div className="mb-10 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/20">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-primary-foreground">
                EmotivCare
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold leading-tight text-primary-foreground">
              Welcome!
            </h2>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Register to begin your EEG cognitive assessment session. Your data
              is handled confidentially for academic research purposes only.
            </p>
          </div>

          {/* Decorative stats */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 p-3.5">
              <Activity className="h-5 w-5 shrink-0 text-primary-foreground/80" />
              <div>
                <p className="text-xs font-medium text-primary-foreground/60">
                  EEG Channels
                </p>
                <p className="text-sm font-semibold text-primary-foreground">
                  14 Channels — EPOC X
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 p-3.5">
              <Zap className="h-5 w-5 shrink-0 text-primary-foreground/80" />
              <div>
                <p className="text-xs font-medium text-primary-foreground/60">
                  Cognitive Modules
                </p>
                <p className="text-sm font-semibold text-primary-foreground">
                  5 Activities — 60 Questions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex w-full flex-col justify-center bg-card p-8 lg:w-7/12 lg:p-12">
          <div className="mb-8">
            {/* Mobile logo */}
            <div className="mb-6 flex items-center gap-2.5 lg:hidden">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Brain className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-base font-semibold text-foreground">
                EmotivCare
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Participant Details
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in your details to begin the cognitive assessment.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="email"
                className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="fullName"
                className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Full Name
              </Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* Age + Gender row */}
            <div className="flex gap-4">
              <div className="flex w-1/3 flex-col gap-1.5">
                <Label
                  htmlFor="age"
                  className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  min={10}
                  max={99}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="25"
                  className="h-12 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1.5">
                <Label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Gender
                </Label>
                <div className="flex gap-2">
                  {(["male", "female", "other"] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`flex h-12 flex-1 items-center justify-center rounded-xl border text-sm font-medium capitalize transition-all ${
                        gender === g
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-muted-foreground/30"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Consent */}
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="mb-2.5 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Research Consent
                </span>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                I have read and understood the research consent form. I agree to
                participate in this EEG-based cognitive assessment study
                conducted using the EMOTIV EPOC X device. I understand my data
                will be handled confidentially for academic research. I may
                withdraw at any time.
              </p>
              <div className="flex items-center gap-3">
                <Checkbox
                  id="consent"
                  checked={consentGiven}
                  onCheckedChange={(c) => setConsentGiven(c === true)}
                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <Label
                  htmlFor="consent"
                  className="cursor-pointer text-sm text-foreground"
                >
                  I agree to participate
                </Label>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            {/* Submit button — full width, dark (like the Awwwards ref) */}
            <Button
              onClick={handleSubmit}
              disabled={!isValid || loading}
              className="h-14 w-full gap-2 rounded-xl bg-foreground text-base font-semibold text-background hover:bg-foreground/90 disabled:opacity-30"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Registering...
                </>
              ) : (
                <>
                  Continue to Activities
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to home
            </button>
            <span className="text-xs text-muted-foreground/50">
              Data stored securely
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
