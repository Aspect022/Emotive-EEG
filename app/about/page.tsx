import { Navbar } from "@/components/navbar"
import Image from "next/image"
import {
  Brain,
  Cpu,
  Waves,
  Activity,
  Calculator,
  Shapes,
  BookOpen,
  Focus,
  Zap,
  Radio,
  Shield,
  BarChart3,
  ArrowDown,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex flex-col">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/50">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
            <div className="h-[500px] w-[700px] rounded-full bg-primary/6 blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="h-5 w-5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                About the Project
              </span>
            </div>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              The EmotivCare{" "}
              <span className="text-primary">Framework</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              An end-to-end EEG device architecture, data pipeline, and experimental
              design for cognitive research using the EMOTIV EPOC X headset.
              Designed for academic research and undergraduate projects.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                Non-Medical Research
              </span>
              <span className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
                EMOTIV EPOC X
              </span>
              <span className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
                14-Channel EEG
              </span>
            </div>
          </div>
        </section>

        {/* Device Overview */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionLabel icon={<Cpu />} label="Device Architecture" />
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            EMOTIV EPOC X Technical Specifications
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            A research-grade, wearable EEG acquisition system designed to collect
            scalp-level neural electrical signals for non-clinical cognitive and
            behavioral studies.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "EEG Channels", value: "14 + 2 Ref (CMS/DRL)", desc: "Saline-soaked felt pads for conductivity" },
              { label: "Sampling Rate", value: "2048 Hz internal", desc: "Downsampled to 128/256 SPS for output" },
              { label: "Connectivity", value: "2.4GHz USB / BT 5.0", desc: "Low latency wireless transmission" },
              { label: "Motion Sensor", value: "9-Axis ICM-20948", desc: "Accelerometer, gyroscope, magnetometer" },
              { label: "Bandwidth", value: "0.16 - 43 Hz", desc: "Optimized for cognitive EEG bands" },
              { label: "ADC Resolution", value: "14/16-bit", desc: "High-precision analog-to-digital conversion" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="group rounded-2xl border border-border bg-card/50 p-6 transition-all hover:border-primary/30"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {spec.label}
                </p>
                <p className="mt-2 text-xl font-bold text-foreground">{spec.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{spec.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* System Flow */}
        <section className="border-y border-border/50 bg-card/20 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel icon={<ArrowDown />} label="Data Pipeline" />
            <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              End-to-End System Architecture
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
              From neural activity to cognitive analysis -- the complete signal
              processing lifecycle.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {[
                "Neural Activity",
                "Scalp Electrodes",
                "Analog Amplification",
                "Digitization (ADC)",
                "Wireless Transmission",
                "Host Computer",
                "Signal Processing",
                "Feature Extraction",
                "Cognitive Analysis",
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground">{step}</span>
                  </div>
                  {i < 8 && (
                    <svg className="h-4 w-4 shrink-0 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10-20 Electrode System */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionLabel icon={<Radio />} label="Electrode Placement" />
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            International 10-20 System
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            Standardized electrode placement ensures cross-study comparability,
            maps scalp signals to cortical regions, and enables task-specific
            electrode selection.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card/50 p-2">
            <Image
              src="/images/emotivcare-framework.jpg"
              alt="EmotivCare Framework showing EEG electrode mapping and brain regions"
              width={1200}
              height={600}
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {[
              { electrodes: "AF3 / AF4", lobe: "Frontal", role: "Attention & Logic", band: "Beta" },
              { electrodes: "F3 / F4", lobe: "Frontal", role: "Working Memory", band: "Theta" },
              { electrodes: "T7 / T8", lobe: "Temporal", role: "Auditory & Memory", band: "Alpha/Theta" },
              { electrodes: "P7 / P8", lobe: "Parietal", role: "Spatial Integration", band: "Alpha" },
              { electrodes: "O1 / O2", lobe: "Occipital", role: "Visual Processing", band: "Alpha" },
            ].map((e) => (
              <div key={e.electrodes} className="rounded-xl border border-border bg-secondary/30 p-4">
                <p className="font-mono text-sm font-bold text-primary">{e.electrodes}</p>
                <p className="mt-1 text-xs text-muted-foreground">{e.lobe} Lobe</p>
                <p className="mt-2 text-sm font-medium text-foreground">{e.role}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{e.band} band</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brain Waves */}
        <section className="border-y border-border/50 bg-card/20 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel icon={<Waves />} label="Neural Frequencies" />
            <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              The Language of the Brain
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                { band: "Delta", symbol: "d", range: "0.5 - 4 Hz", state: "Deep sleep, fatigue, unconsciousness" },
                { band: "Theta", symbol: "t", range: "4 - 8 Hz", state: "Drowsiness, meditation, working memory load" },
                { band: "Alpha", symbol: "a", range: "8 - 13 Hz", state: "Relaxed wakefulness, dominant in occipital eyes-closed" },
                { band: "Beta", symbol: "b", range: "13 - 30 Hz", state: "Active thinking, focus, alertness, anxiety" },
                { band: "Gamma", symbol: "g", range: "30 - 45 Hz", state: "Peak concentration, information integration" },
              ].map((w, i) => (
                <div
                  key={w.band}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">{w.band}</span>
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg font-mono text-xs font-bold"
                      style={{ backgroundColor: `hsl(${24 + i * 8}, 80%, ${50 - i * 5}%)`, color: "white" }}
                    >
                      {w.symbol}
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-sm text-primary">{w.range}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{w.state}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signal Processing */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionLabel icon={<Activity />} label="Signal Processing" />
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            From Raw Voltage to Insight
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            Raw EEG is contaminated by noise -- eye blinks, muscle activity, motion
            artifacts, and power-line interference. Our preprocessing pipeline ensures
            clean, reproducible data.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { step: "1", title: "Bandpass Filter", desc: "0.5 - 45 Hz. Removes drift and high-frequency noise outside the EEG range of interest." },
              { step: "2", title: "Notch Filter", desc: "50/60 Hz removal. Eliminates power-line interference (mains hum) that contaminates recordings." },
              { step: "3", title: "Artifact Rejection", desc: "ICA-based removal of eye blinks (EOG) and jaw muscle activity (EMG) from clean neural signals." },
              { step: "4", title: "Epoch Segmentation", desc: "Time-locked windowing of EEG data around stimulus events for event-related analysis." },
              { step: "5", title: "Feature Extraction", desc: "FFT-based power spectral density analysis to quantify band power across cognitive states." },
              { step: "6", title: "Quality Check", desc: "Verify 1/f spectral slope and signal-to-noise ratio before proceeding to analysis." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 rounded-xl border border-border bg-card/50 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 font-mono text-sm font-bold text-primary">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5 Activities */}
        <section className="border-y border-border/50 bg-card/20 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel icon={<BarChart3 />} label="Cognitive Modules" />
            <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              5 EEG Activity Modules
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
              Each activity is designed to isolate a dominant cognitive process, producing
              complementary neural patterns for comprehensive assessment.
            </p>

            <div className="mt-12 flex flex-col gap-6">
              {[
                {
                  icon: <Calculator className="h-6 w-6" />,
                  title: "Mental Arithmetic",
                  target: "Logical-Mathematical Intelligence",
                  electrodes: "F3, F4 (Frontal)",
                  bands: "Theta, Beta",
                  desc: "Progressive difficulty from basic operations to complex multi-step calculations. Measures cognitive load, working memory, and analytical thinking. Directly relevant to engineering, data analysis, finance, and quantitative research careers.",
                  careers: ["Engineering", "Data Analysis", "Finance", "Software Development"],
                },
                {
                  icon: <Shapes className="h-6 w-6" />,
                  title: "Pattern Matching",
                  target: "Visual-Spatial Intelligence",
                  electrodes: "P7, P8 (Parietal)",
                  bands: "Alpha",
                  desc: "Visual and logical pattern recognition with shape matching and abstract symbol sequences. Evaluates how efficiently the brain processes structure, symmetry, and abstract relationships.",
                  careers: ["Software Engineering", "Machine Learning", "Design", "Architecture"],
                },
                {
                  icon: <BookOpen className="h-6 w-6" />,
                  title: "Memory Retention",
                  target: "Memory Intelligence",
                  electrodes: "T7, T8 (Temporal)",
                  bands: "Alpha, Theta",
                  desc: "Multi-stage learning and memory retention across short-term and working memory. Tests how information is encoded, consolidated, and retrieved. Essential for learning-based roles.",
                  careers: ["Research", "Teaching", "Professional Training", "Medicine"],
                },
                {
                  icon: <Brain className="h-6 w-6" />,
                  title: "Reading Comprehension",
                  target: "Linguistic Intelligence",
                  electrodes: "AF3, AF4, F3, F4",
                  bands: "Theta, Beta",
                  desc: "Passage analysis testing language comprehension, critical thinking, and decision-making. Evaluates how effectively an individual reads, interprets, and responds to textual information.",
                  careers: ["Management", "Consulting", "Policy", "Corporate Analysis"],
                },
                {
                  icon: <Focus className="h-6 w-6" />,
                  title: "Sustained Attention",
                  target: "Attention Intelligence",
                  electrodes: "AF3, AF4 (Pre-frontal)",
                  bands: "Beta",
                  desc: "Continuous stimulus stream requiring selective focus on specific targets. Measures vigilance, executive control, and cognitive endurance under sustained conditions.",
                  careers: ["Software Testing", "Operations", "Quality Control", "Research"],
                },
              ].map((activity) => (
                <div
                  key={activity.title}
                  className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 lg:flex-row lg:gap-10"
                >
                  <div className="flex shrink-0 flex-col gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {activity.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-xs text-muted-foreground">Electrodes</span>
                      <span className="text-xs font-medium text-foreground">{activity.electrodes}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-xs text-muted-foreground">Bands</span>
                      <span className="text-xs font-medium text-primary">{activity.bands}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{activity.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{activity.target}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{activity.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activity.careers.map((c) => (
                        <span key={c} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Stack */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionLabel icon={<Cpu />} label="Software Stack" />
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Software Ecosystem
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              { layer: "Device Control", tool: "EMOTIV Launcher", role: "Pairing, setup, and impedance verification" },
              { layer: "Acquisition", tool: "EMOTIV PRO", role: "Live EEG capture, visualization, and event marking" },
              { layer: "API Layer", tool: "Cortex API (WebSockets)", role: "JSON-RPC programmatic access for BCI applications" },
              { layer: "Analysis", tool: "Python / MATLAB", role: "Offline processing, FFT, feature extraction, ML" },
            ].map((s) => (
              <div key={s.layer} className="flex gap-4 rounded-xl border border-border bg-card/50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Cpu className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.layer}</p>
                  <h3 className="mt-1 text-sm font-semibold text-foreground">{s.tool}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="border-y border-border/50 bg-card/20 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel icon={<Shield />} label="Best Practices" />
            <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Common Pitfalls & Solutions
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "The Pop", desc: "Sudden amplitude spike from a loose sensor. Check contact quality immediately when detected." },
                { title: "Salt Bridge", desc: "Over-saturated pads cause short circuits between sensors. Pads should be damp, not dripping." },
                { title: "Latency", desc: "Avoid standard Bluetooth for ERPs. Use proprietary USB dongle for millisecond precision." },
                { title: "Dry-Out", desc: "Saline lasts 60-90 minutes. Rehydrate pads with a dropper for longer sessions." },
              ].map((p) => (
                <div key={p.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-sm font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionLabel icon={<Zap />} label="Future Vision" />
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            The Future of EmotivCare
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Multimodal Integration", desc: "Combining EEG with VR/AR for immersive environmental studies and richer cognitive state classification." },
              { title: "Neuro-Adaptive Learning", desc: "Real-time content adaptation based on stress and engagement metrics derived from live EEG signals." },
              { title: "Democratization", desc: "Undergraduate access to clinical-grade tools. Rigour is the bridge between a consumer gadget and a scientific instrument." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-12 border-l-2 border-primary pl-6">
            <p className="text-lg italic text-foreground">
              {"\"Rigour is the bridge between a consumer gadget and a scientific instrument.\""}
            </p>
            <cite className="mt-2 block text-sm text-muted-foreground">
              -- EmotivCare Framework
            </cite>
          </blockquote>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 px-6 py-8 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <span className="text-xs text-muted-foreground">EmotivCare Research Platform</span>
            <span className="text-xs text-muted-foreground">EMOTIV EPOC X | 14-Channel EEG</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-primary [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      <span className="font-mono text-xs uppercase tracking-widest text-primary">
        {label}
      </span>
    </div>
  )
}
