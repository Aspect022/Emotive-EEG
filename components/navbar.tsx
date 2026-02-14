"use client"

import { Brain } from "lucide-react"

interface NavbarProps {
  currentStep: string
}

export function Navbar({ currentStep }: NavbarProps) {
  const navItems = ["Home", "Register", "Activities", "Analysis"]

  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5">
          <Brain className="h-5 w-5 text-primary" />
          <span className="font-mono text-sm font-semibold tracking-wide text-primary">EmotivCare</span>
        </div>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <span
            key={item}
            className={`text-sm transition-colors ${
              currentStep === item
                ? "font-medium text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item}
          </span>
        ))}
      </nav>

      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary">
        <span className="text-xs font-medium text-muted-foreground">RS</span>
      </div>
    </header>
  )
}
