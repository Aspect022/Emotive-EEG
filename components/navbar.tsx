"use client"

import { Brain } from "lucide-react"

interface NavbarProps {
  currentStep: string
}

export function Navbar({ currentStep }: NavbarProps) {
  const navItems = ["Home", "Register", "Activities", "Analysis"]

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Brain className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-base font-semibold tracking-tight text-foreground">
            EmotivCare
          </span>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <span
              key={item}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                currentStep === item
                  ? "bg-secondary font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </span>
          ))}
        </nav>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
          <span className="text-xs font-medium text-primary">P</span>
        </div>
      </div>
    </header>
  )
}
