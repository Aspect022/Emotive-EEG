"use client"

import { useState, useMemo } from "react"
import type { MemoryCard } from "@/components/memory-cards-popup"
import { Button } from "@/components/ui/button"
import { Brain, Sparkles, CheckCircle2, XCircle, ArrowRight } from "lucide-react"

interface SecretTestProps {
  shownCards: MemoryCard[]
  participantId: string
  onComplete: (score: number, total: number) => void
}

const DECOY_CARDS: MemoryCard[] = [
  { emoji: "🍎", label: "Apple", bg: "bg-red-500/15 border-red-500/30", text: "text-red-400" },
  { emoji: "🐱", label: "Cat", bg: "bg-orange-500/15 border-orange-500/30", text: "text-orange-400" },
  { emoji: "🏔️", label: "Mountain", bg: "bg-slate-500/15 border-slate-500/30", text: "text-slate-400" },
  { emoji: "🎈", label: "Balloon", bg: "bg-pink-500/15 border-pink-500/30", text: "text-pink-400" },
  { emoji: "🌵", label: "Cactus", bg: "bg-green-500/15 border-green-500/30", text: "text-green-400" },
  { emoji: "🎸", label: "Guitar", bg: "bg-amber-500/15 border-amber-500/30", text: "text-amber-400" },
  { emoji: "🐳", label: "Whale", bg: "bg-blue-500/15 border-blue-500/30", text: "text-blue-400" },
  { emoji: "🧲", label: "Magnet", bg: "bg-red-500/15 border-red-500/30", text: "text-red-400" },
]

type TestState = "intro" | "question" | "result"

export function SecretTest({ shownCards, participantId, onComplete }: SecretTestProps) {
  const [state, setState] = useState<TestState>("intro")
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [score, setScore] = useState(0)

  const allOptions = useMemo(() => {
    const shuffledDecoys = [...DECOY_CARDS].sort(() => Math.random() - 0.5)
    const decoys = shuffledDecoys.slice(0, 4)
    return [...shownCards, ...decoys].sort(() => Math.random() - 0.5)
  }, [shownCards])

  const correctLabels = useMemo(
    () => new Set(shownCards.map((c) => c.label)),
    [shownCards]
  )

  const handleToggle = (label: string) => {
    setSelectedLabels((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : prev.length < 4
          ? [...prev, label]
          : prev
    )
  }

  const handleSubmit = async () => {
    let correct = 0
    selectedLabels.forEach((label) => {
      if (correctLabels.has(label)) correct++
    })
    setScore(correct)
    setState("result")

    try {
      await fetch("/api/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          participant_id: participantId,
          activity_type: "secret_memory",
          score: correct,
          total_questions: 4,
          answers: [
            {
              questionId: 0,
              questionText: "Select the 4 cards you were shown at the beginning",
              selected: selectedLabels,
              correct: Array.from(correctLabels),
              timeTaken: 0,
              timedOut: false,
              difficulty: "hard",
              category: "Long-term Recall",
            },
          ],
          started_at: new Date().toISOString(),
          time_taken_seconds: 0,
        }),
      })
    } catch (err) {
      console.error("Failed to save secret test:", err)
    }
  }

  if (state === "intro") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-primary/30 bg-primary/10 shadow-lg shadow-primary/10">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-foreground">The Secret Test</h1>
          <p className="mx-auto mb-8 max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Remember those cards you saw at the very beginning? Let's see how well your long-term memory held up. This is just one quick question.
          </p>
          <Button
            onClick={() => setState("question")}
            className="h-14 w-full gap-2 rounded-xl bg-foreground text-base font-semibold text-background hover:bg-foreground/90"
          >
            <Brain className="h-5 w-5" />
            I'm Ready — Show Me
          </Button>
        </div>
      </div>
    )
  }

  if (state === "question") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground">Which 4 cards were you shown?</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Select exactly 4 cards from below. Pick the ones you remember seeing at the start.
          </p>
          <div className="mx-auto mb-8 grid max-w-md grid-cols-4 gap-3">
            {allOptions.map((card) => {
              const isSelected = selectedLabels.includes(card.label)
              return (
                <button
                  key={card.label}
                  onClick={() => handleToggle(card.label)}
                  className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 p-4 transition-all ${
                    isSelected
                      ? "border-primary bg-primary/10 ring-2 ring-primary/30 scale-105"
                      : "border-border bg-card hover:border-muted-foreground/30"
                  }`}
                >
                  <span className="text-3xl">{card.emoji}</span>
                  <span className={`text-xs font-medium ${isSelected ? "text-primary" : "text-muted-foreground"}`}>
                    {card.label}
                  </span>
                </button>
              )
            })}
          </div>
          <p className="mb-4 text-xs text-muted-foreground">{selectedLabels.length}/4 selected</p>
          <Button
            onClick={handleSubmit}
            disabled={selectedLabels.length !== 4}
            className="h-14 w-full gap-2 rounded-xl bg-foreground text-base font-semibold text-background hover:bg-foreground/90 disabled:opacity-30"
          >
            Submit My Answer
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-primary/30 bg-primary/10">
          {score >= 3 ? (
            <CheckCircle2 className="h-10 w-10 text-emerald-500" />
          ) : (
            <Brain className="h-10 w-10 text-primary" />
          )}
        </div>
        <h2 className="mb-2 text-3xl font-bold text-foreground">
          {score === 4 ? "Perfect Recall! 🎉" : score === 3 ? "Great Memory!" : score === 2 ? "Not Bad!" : "Interesting Result!"}
        </h2>
        <p className="mb-6 text-muted-foreground">
          You correctly identified <span className="font-bold text-foreground">{score}</span> out of <span className="font-bold text-foreground">4</span> cards.
        </p>
        <div className="mb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">The cards you were shown</p>
          <div className="mx-auto flex max-w-sm justify-center gap-3">
            {shownCards.map((card) => {
              const wasSelected = selectedLabels.includes(card.label)
              return (
                <div key={card.label} className={`relative flex flex-col items-center gap-1.5 rounded-2xl border p-4 ${card.bg}`}>
                  <span className="text-3xl">{card.emoji}</span>
                  <span className={`text-xs font-medium ${card.text}`}>{card.label}</span>
                  {wasSelected ? (
                    <CheckCircle2 className="absolute -right-1.5 -top-1.5 h-5 w-5 text-emerald-500" />
                  ) : (
                    <XCircle className="absolute -right-1.5 -top-1.5 h-5 w-5 text-red-400" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <Button
          onClick={() => onComplete(score, 4)}
          className="h-14 w-full gap-2 rounded-xl bg-foreground text-base font-semibold text-background hover:bg-foreground/90"
        >
          Finish Assessment
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
