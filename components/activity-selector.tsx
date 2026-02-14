"use client"

import {
  ArrowLeft,
  Calculator,
  Shapes,
  BookOpen,
  FileText,
  Focus,
  CheckCircle2,
} from "lucide-react"
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
    description:
      "Multi-level mental math: addition, subtraction, multiplication, and division with progressive difficulty.",
    icon: <Calculator className="h-5 w-5" />,
    questions: 20,
  },
  {
    id: "pattern",
    title: "Pattern Matching",
    description:
      "Visual and logical pattern recognition with shape matching and abstract symbol sequences.",
    icon: <Shapes className="h-5 w-5" />,
    questions: 10,
  },
  {
    id: "memory",
    title: "Memory Retention",
    description:
      "Learning, encoding, and recall tasks testing short-term and working memory capacity.",
    icon: <BookOpen className="h-5 w-5" />,
    questions: 10,
  },
  {
    id: "comprehension",
    title: "Reading Comprehension",
    description:
      "Passage-based questions testing language understanding and decision-making.",
    icon: <FileText className="h-5 w-5" />,
    questions: 10,
  },
  {
    id: "attention",
    title: "Sustained Attention",
    description:
      "Focus and vigilance tasks measuring selective attention over extended stimuli streams.",
    icon: <Focus className="h-5 w-5" />,
    questions: 10,
  },
]

export function ActivitySelector({
  onSelect,
  onBack,
  completedActivities,
}: ActivitySelectorProps) {
  const allDone = completedActivities.length === activities.length

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-16 lg:py-24">
      {/* Page header */}
      <div className="mb-12 flex max-w-lg flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs font-medium text-muted-foreground">
            Step 2 of 2
          </span>
        </div>
        <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
          Cognitive Assessments
        </h1>
        <p className="text-pretty text-muted-foreground">
          Select an activity module. Complete all 5 for a full cognitive
          profile.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-10 w-full max-w-3xl">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Progress</span>
          <span className="font-mono text-sm font-medium text-primary">
            {completedActivities.length}/{activities.length}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{
              width: `${(completedActivities.length / activities.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Activity cards */}
      <div className="grid w-full max-w-3xl gap-3 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => {
          const isCompleted = completedActivities.includes(activity.id)
          return (
            <button
              key={activity.id}
              onClick={() => !isCompleted && onSelect(activity.id)}
              disabled={isCompleted}
              className={`group relative flex flex-col gap-4 rounded-2xl border p-6 text-left transition-all ${
                isCompleted
                  ? "border-primary/20 bg-primary/5 opacity-60"
                  : "border-border bg-card/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              }`}
            >
              {isCompleted && (
                <div className="absolute right-4 top-4">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              )}
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                  isCompleted
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                }`}
              >
                {activity.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-foreground">
                  {activity.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
              </div>
              <span className="mt-auto font-mono text-xs text-muted-foreground">
                {activity.questions} questions
              </span>
            </button>
          )
        })}
      </div>

      {/* Footer actions */}
      <div className="mt-10 flex w-full max-w-3xl items-center justify-between">
        <Button
          variant="ghost"
          onClick={onBack}
          className="gap-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        {allDone && (
          <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              All activities completed
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
