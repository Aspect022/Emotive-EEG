"use client"

import Image from "next/image"
import { ArrowRight, Cpu, Activity, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LandingPageProps {
  onStart: () => void
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center gap-12 px-6 py-12 lg:flex-row lg:gap-16 lg:px-16">
        {/* Left: Text Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              EEG Cognitive Assessment
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            The EmotivCare{" "}
            <span className="text-primary">Framework</span>
          </h1>

          <p className="text-pretty leading-relaxed text-muted-foreground">
            Advanced EEG-based cognitive research and data acquisition protocol
            using the EMOTIV EPOC X 14-channel system. Designed for
            undergraduate research with clinical-grade precision.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={onStart}
              className="group gap-2 bg-primary px-8 py-6 text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              Start Recording
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-4 flex gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-2xl font-bold text-foreground">14</span>
              <span className="text-xs text-muted-foreground">EEG Channels</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-2xl font-bold text-foreground">5</span>
              <span className="text-xs text-muted-foreground">Activity Modules</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-2xl font-bold text-foreground">256</span>
              <span className="text-xs text-muted-foreground">Samples/sec</span>
            </div>
          </div>
        </div>

        {/* Right: Framework Image */}
        <div className="relative w-full max-w-lg">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <Image
              src="/images/emotivcare-framework.jpg"
              alt="EmotivCare Framework - End-to-end EEG data pipeline showing brain signal acquisition through EMOTIV EPOC X, signal processing, and cognitive analysis"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -inset-px rounded-xl bg-primary/5 blur-xl" />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="border-t border-border px-6 py-12 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Cpu className="h-5 w-5" />}
            title="Multi-Level Arithmetic"
            description="Progressive cognitive load assessment through 5 levels of mental mathematical processing."
          />
          <FeatureCard
            icon={<Activity className="h-5 w-5" />}
            title="Pattern Recognition"
            description="Visual-spatial intelligence evaluation with shape matching and logical symbol sequences."
          />
          <FeatureCard
            icon={<Zap className="h-5 w-5" />}
            title="Sustained Attention"
            description="Selective focus and vigilance measurement over extended cognitive tasks."
          />
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
