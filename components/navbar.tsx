"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brain } from "lucide-react"

export function Navbar({ currentStep }: { currentStep?: string }) {
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Analysis", href: "/analysis" },
    { label: "About", href: "/about" },
  ]

  function isActive(href: string) {
    if (href === "/") return pathname === "/" && (!currentStep || currentStep === "Home")
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Brain className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-base font-semibold tracking-tight text-foreground">
            EmotivCare
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                isActive(item.href)
                  ? "bg-secondary font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* Show current flow step if on main page */}
          {currentStep && !["Home"].includes(currentStep) && pathname === "/" && (
            <span className="rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              {currentStep}
            </span>
          )}
        </nav>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
          <span className="text-xs font-medium text-primary">P</span>
        </div>
      </div>
    </header>
  )
}
