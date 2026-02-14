"use client"

import { useState, useCallback } from "react"
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getQuestionsForActivity, getActivityTitle } from "@/lib/questions"
import type { ActivityType } from "@/components/activity-selector"

interface ActivityRunnerProps {
  activityId: ActivityType
  onComplete: (activityId: ActivityType, score: number, total: number) => void
  onBack: () => void
}

export function ActivityRunner({ activityId, onComplete, onBack }: ActivityRunnerProps) {
  const questions = getQuestionsForActivity(activityId)
  const title = getActivityTitle(activityId)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const question = questions[currentIndex]
  const progress = ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100

  const handleSelect = useCallback(
    (index: number) => {
      if (isAnswered) return
      setSelectedAnswer(index)
      setIsAnswered(true)
      if (index === question.correctIndex) {
        setScore((prev) => prev + 1)
      }
    },
    [isAnswered, question.correctIndex]
  )

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setShowResults(true)
    }
  }, [currentIndex, questions.length])

  if (showResults) {
    return (
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-foreground">{title} Complete</h2>
          <p className="mb-6 text-muted-foreground">
            You scored{" "}
            <span className="font-mono font-bold text-primary">
              {score}/{questions.length}
            </span>
          </p>
          <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${(score / questions.length) * 100}%` }}
            />
          </div>
          <Button
            onClick={() => onComplete(activityId, score, questions.length)}
            className="gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            Return to Activities
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col px-6 py-8 lg:px-16">
      <div className="mx-auto w-full max-w-2xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Exit
          </Button>
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="font-mono text-sm text-muted-foreground">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Activity Title */}
        <div className="mb-2 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="font-mono text-xs uppercase tracking-widest text-primary">{title}</span>
        </div>

        {/* Category */}
        <span className="mb-4 inline-block rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
          {question.category}
        </span>

        {/* Question */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold leading-relaxed text-foreground">{question.text}</h3>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => {
            let borderClass = "border-border hover:border-primary/50"
            let bgClass = "bg-card"
            let textClass = "text-foreground"

            if (isAnswered) {
              if (index === question.correctIndex) {
                borderClass = "border-green-500/50"
                bgClass = "bg-green-500/10"
              } else if (index === selectedAnswer && index !== question.correctIndex) {
                borderClass = "border-red-500/50"
                bgClass = "bg-red-500/10"
              } else {
                borderClass = "border-border opacity-50"
              }
            } else if (selectedAnswer === index) {
              borderClass = "border-primary"
            }

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={isAnswered}
                className={`flex items-center gap-4 rounded-xl border ${borderClass} ${bgClass} p-4 text-left transition-all`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary font-mono text-sm font-medium text-muted-foreground">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={`text-sm font-medium ${textClass}`}>{option}</span>
                {isAnswered && index === question.correctIndex && (
                  <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-green-500" />
                )}
                {isAnswered && index === selectedAnswer && index !== question.correctIndex && (
                  <XCircle className="ml-auto h-5 w-5 shrink-0 text-red-500" />
                )}
              </button>
            )
          })}
        </div>

        {/* Next button */}
        {isAnswered && (
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleNext}
              className="gap-2 bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
