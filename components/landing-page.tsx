"use client"

import Image from "next/image"
import {
  ArrowRight,
  Calculator,
  Shapes,
  BookOpen,
  Focus,
  Brain,
  Activity,
  Zap,
  Waves,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface LandingPageProps {
  onStart: () => void
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[600px] w-[800px] rounded-full bg-primary/8 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pt-28">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                EEG-Powered Cognitive Assessment Platform
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="mx-auto max-w-4xl text-balance text-center text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Better Data.{" "}
            <span className="text-primary">Smarter</span>{" "}
            Research.
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
            End-to-end cognitive assessment platform using EMOTIV EPOC X. Capture,
            process, and analyze EEG signals across 14 channels with clinical-grade
            precision for academic research.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              onClick={onStart}
              size="lg"
              className="group gap-2.5 bg-primary px-8 py-6 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              Start Recording
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-transparent px-8 py-6 text-base font-medium text-foreground hover:bg-secondary"
            >
              Learn More
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex items-center justify-center gap-12 md:gap-20">
            {[
              { value: "14", label: "EEG Channels" },
              { value: "5", label: "Cognitive Modules" },
              { value: "256", label: "Samples/sec" },
              { value: "60", label: "Questions Total" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="font-mono text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon category row */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
          <div className="grid grid-cols-5 gap-4">
            {[
              { icon: <Calculator className="h-5 w-5" />, label: "Arithmetic" },
              { icon: <Shapes className="h-5 w-5" />, label: "Patterns" },
              { icon: <BookOpen className="h-5 w-5" />, label: "Memory" },
              { icon: <Focus className="h-5 w-5" />, label: "Attention" },
              { icon: <Brain className="h-5 w-5" />, label: "Comprehension" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 rounded-xl py-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                  {item.icon}
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework visual section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Framework Overview
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <h2 className="mt-6 text-balance text-center text-3xl font-bold text-foreground md:text-4xl">
          EmotivCare Pipeline
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-muted-foreground">
          From electrode to insight: the complete EEG signal processing and
          cognitive analysis lifecycle.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card/50 p-2">
          <Image
            src="/images/emotivcare-framework.jpg"
            alt="EmotivCare Framework diagram showing the end-to-end EEG data pipeline"
            width={1200}
            height={600}
            className="h-auto w-full rounded-xl object-cover"
            priority
          />
        </div>
      </section>

      {/* Feature sections - alternating layout like Scale.com */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Feature 1 - Gather Insight */}
        <div className="flex flex-col items-center gap-12 py-20 lg:flex-row lg:gap-20">
          <div className="flex max-w-lg flex-col gap-6 lg:flex-1">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                14-Channel EEG
              </span>
            </div>
            <h3 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Capture Cognitive Signals
            </h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              The EMOTIV EPOC X system captures brain activity across 14 saline-based
              electrode channels at 256 Hz. Electrodes placed according to the
              international 10-20 system ensure comprehensive cortical coverage for
              reliable cognitive data acquisition.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AF3", "AF4", "F3", "F4", "F7", "F8", "FC5", "FC6", "T7", "T8", "P7", "P8", "O1", "O2"].map(
                (electrode) => (
                  <span
                    key={electrode}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {electrode}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="lg:flex-1">
            <div className="overflow-hidden rounded-2xl border border-border bg-card/50 p-1.5">
              <Image
                src="/images/eeg-headset.jpg"
                alt="EMOTIV EPOC X EEG headset for 14-channel brain signal acquisition"
                width={600}
                height={400}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Feature 2 - reversed layout */}
        <div className="flex flex-col-reverse items-center gap-12 py-20 lg:flex-row lg:gap-20">
          <div className="lg:flex-1">
            <div className="overflow-hidden rounded-2xl border border-border bg-card/50 p-1.5">
              <Image
                src="/images/brain-waves.jpg"
                alt="EEG brain wave patterns - alpha, beta, theta, delta frequency bands"
                width={600}
                height={400}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="flex max-w-lg flex-col gap-6 lg:flex-1">
            <div className="flex items-center gap-2">
              <Waves className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                Signal Processing
              </span>
            </div>
            <h3 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Analyze Brain Wave Patterns
            </h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Extract and analyze distinct frequency bands from raw EEG data. Monitor alpha,
              beta, theta, and delta waves in real-time to quantify cognitive load,
              attention levels, and emotional states during each assessment phase.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { band: "Delta", range: "0.5 - 4 Hz", desc: "Deep sleep" },
                { band: "Theta", range: "4 - 8 Hz", desc: "Drowsiness" },
                { band: "Alpha", range: "8 - 13 Hz", desc: "Relaxation" },
                { band: "Beta", range: "13 - 30 Hz", desc: "Active thinking" },
              ].map((wave) => (
                <div
                  key={wave.band}
                  className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5"
                >
                  <span className="block text-sm font-semibold text-foreground">
                    {wave.band}
                  </span>
                  <span className="block font-mono text-xs text-primary">
                    {wave.range}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {wave.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activity Modules Grid */}
      <section className="border-t border-border/50 bg-card/20 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-balance text-center text-3xl font-bold text-foreground md:text-4xl">
            5 Cognitive Assessment Modules
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-muted-foreground">
            Each module is precisely designed to evoke measurable neural responses
            across different cognitive domains.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Calculator className="h-5 w-5" />,
                title: "Mental Arithmetic",
                desc: "5-level progressive difficulty from basic operations to multi-step calculations.",
                count: "20 questions",
              },
              {
                icon: <Shapes className="h-5 w-5" />,
                title: "Pattern Recognition",
                desc: "Visual-spatial reasoning with shape matching and logical symbol sequences.",
                count: "10 questions",
              },
              {
                icon: <BookOpen className="h-5 w-5" />,
                title: "Memory Retention",
                desc: "Learning, encoding, and delayed recall of words, digits, and spatial positions.",
                count: "10 questions",
              },
              {
                icon: <Brain className="h-5 w-5" />,
                title: "Reading Comprehension",
                desc: "Passage analysis testing language processing and inferential reasoning.",
                count: "10 questions",
              },
              {
                icon: <Focus className="h-5 w-5" />,
                title: "Sustained Attention",
                desc: "Go/No-Go and oddball paradigm tasks measuring vigilance and selective focus.",
                count: "10 questions",
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Full Assessment",
                desc: "Complete all modules in sequence for a comprehensive cognitive EEG profile.",
                count: "60 total",
                highlight: true,
              },
            ].map((mod) => (
              <div
                key={mod.title}
                className={`group flex flex-col gap-4 rounded-2xl border p-6 transition-all hover:border-primary/40 ${
                  mod.highlight
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-card/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      mod.highlight
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {mod.icon}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {mod.count}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{mod.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[600px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Ready to begin the assessment?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Set up the EMOTIV EPOC X headset and start capturing high-quality EEG data
            across all cognitive modules.
          </p>
          <Button
            onClick={onStart}
            size="lg"
            className="mt-8 gap-2.5 bg-primary px-10 py-6 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
          >
            Start Recording
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-xs text-muted-foreground">
            EmotivCare Research Platform
          </span>
          <span className="text-xs text-muted-foreground">
            EMOTIV EPOC X | 14-Channel EEG
          </span>
        </div>
      </footer>
    </main>
  )
}
