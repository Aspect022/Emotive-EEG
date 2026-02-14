"use client"

import { ArrowLeft, Calculator, Shapes, BookOpen, FileText, Focus } from "lucide-react"
import { Button } from "@/components/ui/button"

export type ActivityType =
  | "arithmetic"
  | "pattern"
  | "memory"
  | "comprehension"
  | "attention"

interface ActivitySelectorProps {
  onSelect: (activity: ActivityType) => void
  onBack: () => void
  completedActivities: ActivityType[]
}

const activities: {
  id: ActivityType
  title: string
  description: string
  icon: React.ReactNode
  questions: number
}[] = [
  {
    id: "arithmetic",
    title: "Mental Arithmetic",
    description: "Multi-level mental math: addition, subtraction, multiplication, and division with progressive difficulty.",
    icon: <Calculator className="h-6 w-6" />,
    questions: 20,
  },
  {
    id: "pattern",
    title: "Pattern Matching",
    description: "Visual and logical pattern recognition with shape matching and abstract symbol sequences.",
    icon: <Shapes className="h-6 w-6" />,
    questions: 10,
  },
  {
    id: "memory",
    title: "Memory Retention",
    description: "Learning, encoding, and recall tasks testing short-term and working memory capacity.",
    icon: <BookOpen className="h-6 w-6" />,
    questions: 10,
  },
  {
    id: "comprehension",
    title: "Reading Comprehension",
    description: "Passage-based questions testing language understanding and decision-making.",
    icon: <FileText className="h-6 w-6" />,
    questions: 10,
  },
  {
    id: "attention",
    title: "Sustained Attention",
    description: "Focus and vigilance tasks measuring selective attention over extended stimuli streams.",
    icon: <Focus className="h-6 w-6" />,
    questions: 10,
  },
]

export function ActivitySelector({ onSelect, onBack, completedActivities }: ActivitySelectorProps) {
  const allDone = completedActivities.length === activities.length

  return (
    <div className="flex flex-1 flex-col px-6 py-12 lg:px-16">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Step 2 of 2
            </span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Cognitive Assessment Activities</h2>
          <p className="text-sm text-muted-foreground">
            Select an activity to begin. Complete all 5 modules for a full cognitive profile.
            {" "}
            <span className="text-primary">
              {completedActivities.length}/{activities.length} completed
            </span>
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${(completedActivities.length / activities.length) * 100}%` }}
          />
        </div>

        {/* Activity Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => {
            const isCompleted = completedActivities.includes(activity.id)
            return (
              <button
                key={activity.id}
                onClick={() => !isCompleted && onSelect(activity.id)}
                disabled={isCompleted}
                className={`group flex flex-col gap-4 rounded-xl border p-6 text-left transition-all ${
                  isCompleted
                    ? "border-primary/30 bg-primary/5 opacity-60"
                    : "border-border bg-card hover:border-primary/50 hover:bg-card/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                      isCompleted ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {activity.icon}
                  </div>
                  {isCompleted && (
                    <span className="rounded-full bg-primary/20 px-2 py-0.5 font-mono text-xs text-primary">
                      Done
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-foreground">{activity.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{activity.description}</p>
                </div>
                <div className="mt-auto font-mono text-xs text-muted-foreground">
                  {activity.questions} questions
                </div>
              </button>
            )
          })}
        </div>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          {allDone && (
            <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-2">
              <span className="font-mono text-sm text-primary">All activities completed</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
