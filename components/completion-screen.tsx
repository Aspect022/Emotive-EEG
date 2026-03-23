"use client"

import { useEffect, useState } from "react"
import { Coffee, PartyPopper, CheckCircle2, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CompletionScreenProps {
  participantName: string
  totalActivities: number
  onStartSecretTest?: () => void
  isFinalDone?: boolean
}

export function CompletionScreen({
  participantName,
  totalActivities,
  onStartSecretTest,
  isFinalDone = false,
}: CompletionScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false)
  const [steamFrame, setSteamFrame] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(true), 300)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSteamFrame((prev) => (prev + 1) % 3)
    }, 600)
    return () => clearInterval(interval)
  }, [])

  const steamChars = ["~", "~~", "~~~"]
  const firstName = (participantName ?? "").split(" ")[0] || "there"

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="relative w-full max-w-lg text-center">
        {showConfetti && (
          <div className="pointer-events-none absolute inset-0 -top-20 overflow-hidden">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce rounded-full"
                style={{
                  width: `${6 + Math.random() * 8}px`,
                  height: `${6 + Math.random() * 8}px`,
                  background: i % 3 === 0 ? "hsl(24, 80%, 50%)" : i % 3 === 1 ? "hsl(24, 80%, 70%)" : "hsl(0, 0%, 40%)",
                  left: `${10 + Math.random() * 80}%`,
                  top: `${Math.random() * 40}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>
        )}

        <div className="relative mx-auto mb-8 flex h-32 w-32 items-center justify-center">
          <div className="absolute -top-6 flex gap-2 text-2xl font-light text-primary/50 transition-all">
            {steamChars.map((char, i) => (
              <span
                key={i}
                className="transition-opacity duration-300"
                style={{
                  opacity: (steamFrame + i) % 3 === 0 ? 1 : 0.3,
                  transform: `translateY(${(steamFrame + i) % 3 === 0 ? -4 : 0}px)`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="flex h-28 w-28 items-center justify-center rounded-3xl border-2 border-primary/30 bg-primary/10 shadow-lg shadow-primary/10">
            <Coffee className="h-14 w-14 text-primary" />
          </div>
        </div>

        <div className="mx-auto mb-4 flex items-center justify-center gap-2">
          <PartyPopper className="h-6 w-6 text-primary" />
          <span className="font-mono text-sm uppercase tracking-widest text-primary">
            {isFinalDone ? "Assessment Complete" : "All Done"}
          </span>
          <PartyPopper className="h-6 w-6 text-primary" style={{ transform: "scaleX(-1)" }} />
        </div>

        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
          <span className="text-balance">
            {isFinalDone ? `Thank you, ${firstName}!` : `Great job, ${firstName}!`}
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
          {isFinalDone
            ? `You have completed everything including the secret memory test. Your full data has been securely recorded. Grab yourself a coffee or tea — you've earned it!`
            : `You have completed all ${totalActivities} cognitive assessment activities. But before you go... there's one more thing.`}
        </p>

        <div className="mx-auto mb-10 grid max-w-sm grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            <span className="font-mono text-2xl font-bold text-foreground">{totalActivities}/{totalActivities}</span>
            <span className="text-xs text-muted-foreground">Activities Completed</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5">
            <Clock className="h-6 w-6 text-primary" />
            <span className="font-mono text-2xl font-bold text-foreground">Saved</span>
            <span className="text-xs text-muted-foreground">Results Recorded</span>
          </div>
        </div>

        {!isFinalDone && onStartSecretTest ? (
          <Button
            onClick={onStartSecretTest}
            className="mx-auto h-14 w-full max-w-sm gap-2 rounded-xl bg-foreground text-base font-semibold text-background hover:bg-foreground/90"
          >
            <Sparkles className="h-5 w-5" />
            Take the Secret Test
          </Button>
        ) : (
          <div className="mx-auto max-w-sm rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm text-muted-foreground">
              Your results are stored securely and will be used for academic research purposes only. If you need a copy of your report, it will be sent to your registered email.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
