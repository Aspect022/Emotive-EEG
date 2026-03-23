"use client"

import { useState, useEffect, useMemo } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye, Timer, ArrowRight } from "lucide-react"

// ─── Card Pool ───
const CARD_POOL = [
  { emoji: "🌙", label: "Moon", bg: "bg-indigo-500/15 border-indigo-500/30", text: "text-indigo-400" },
  { emoji: "⭐", label: "Star", bg: "bg-yellow-500/15 border-yellow-500/30", text: "text-yellow-400" },
  { emoji: "🌊", label: "Wave", bg: "bg-cyan-500/15 border-cyan-500/30", text: "text-cyan-400" },
  { emoji: "🔥", label: "Fire", bg: "bg-red-500/15 border-red-500/30", text: "text-red-400" },
  { emoji: "🍀", label: "Clover", bg: "bg-emerald-500/15 border-emerald-500/30", text: "text-emerald-400" },
  { emoji: "🎵", label: "Music", bg: "bg-purple-500/15 border-purple-500/30", text: "text-purple-400" },
  { emoji: "🦋", label: "Butterfly", bg: "bg-pink-500/15 border-pink-500/30", text: "text-pink-400" },
  { emoji: "🌻", label: "Sunflower", bg: "bg-amber-500/15 border-amber-500/30", text: "text-amber-400" },
  { emoji: "❄️", label: "Snowflake", bg: "bg-sky-500/15 border-sky-500/30", text: "text-sky-400" },
  { emoji: "🎯", label: "Target", bg: "bg-rose-500/15 border-rose-500/30", text: "text-rose-400" },
  { emoji: "🌈", label: "Rainbow", bg: "bg-violet-500/15 border-violet-500/30", text: "text-violet-400" },
  { emoji: "🐚", label: "Shell", bg: "bg-orange-500/15 border-orange-500/30", text: "text-orange-400" },
  { emoji: "💎", label: "Diamond", bg: "bg-teal-500/15 border-teal-500/30", text: "text-teal-400" },
  { emoji: "🪶", label: "Feather", bg: "bg-lime-500/15 border-lime-500/30", text: "text-lime-400" },
  { emoji: "🔔", label: "Bell", bg: "bg-fuchsia-500/15 border-fuchsia-500/30", text: "text-fuchsia-400" },
]

export interface MemoryCard {
  emoji: string
  label: string
  bg: string
  text: string
}

function pickRandomCards(count: number): MemoryCard[] {
  const shuffled = [...CARD_POOL].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

interface MemoryCardsPopupProps {
  open: boolean
  onDismiss: (cards: MemoryCard[]) => void
}

export function MemoryCardsPopup({ open, onDismiss }: MemoryCardsPopupProps) {
  const cards = useMemo(() => pickRandomCards(4), [])
  const [secondsLeft, setSecondsLeft] = useState(15)
  const [canProceed, setCanProceed] = useState(false)

  useEffect(() => {
    if (!open) return
    if (secondsLeft <= 0) {
      setCanProceed(true)
      return
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [open, secondsLeft])

  useEffect(() => {
    if (secondsLeft <= 7) setCanProceed(true)
  }, [secondsLeft])

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="max-w-lg border-border bg-card [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Eye className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl">Memorize These Cards</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Take a good look at the cards below. You may be asked about them later.
          </DialogDescription>
        </DialogHeader>

        <div className="my-6 grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-6 transition-all duration-500 ${card.bg}`}
            >
              <span className="text-5xl">{card.emoji}</span>
              <span className={`text-sm font-semibold ${card.text}`}>
                {card.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          {!canProceed && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Timer className="h-4 w-4 animate-pulse" />
              <span>Please study the cards... ({secondsLeft}s)</span>
            </div>
          )}
          <Button
            onClick={() => onDismiss(cards)}
            disabled={!canProceed}
            className="w-full gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90 disabled:opacity-30"
          >
            I've memorized them — Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
