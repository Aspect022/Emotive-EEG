"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  Keyboard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getQuestionsForActivity, getActivityTitle } from "@/lib/questions"
import type { ActivityType } from "@/components/activity-selector"

interface AnswerRecord {
  questionId: number
  questionText: string
  selected: number | null // null = timed out (NA)
  correct: number
  timeTaken: number // seconds taken to answer
  timedOut: boolean
  difficulty: string
  category: string
}

interface ActivityRunnerProps {
  activityId: ActivityType
  onComplete: (
    activityId: ActivityType,
    score: number,
    total: number,
    answers?: AnswerRecord[]
  ) => void
  onBack: () => void
}

export function ActivityRunner({
  activityId,
  onComplete,
  onBack,
}: ActivityRunnerProps) {
  const questions = getQuestionsForActivity(activityId)
  const title = getActivityTitle(activityId)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [timedOut, setTimedOut] = useState(false)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isStarted, setIsStarted] = useState(false) // pre-start screen
  const answersRef = useRef<AnswerRecord[]>([])
  const startTimeRef = useRef<number>(Date.now())
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const question = questions[currentIndex]
  const progress =
    ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100

  // Start timer for current question
  useEffect(() => {
    if (!isStarted || isAnswered || showResults) return

    setTimeLeft(question.timeLimit)
    startTimeRef.current = Date.now()

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up
          clearInterval(timerRef.current!)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [currentIndex, isStarted, isAnswered, showResults, question.timeLimit])

  // Handle timeout
  useEffect(() => {
    if (timeLeft === 0 && isStarted && !isAnswered && !showResults) {
      setTimedOut(true)
      setIsAnswered(true)
      const elapsed = Math.round(
        (Date.now() - startTimeRef.current) / 1000
      )
      answersRef.current.push({
        questionId: question.id,
        questionText: question.text,
        selected: null,
        correct: question.correctIndex,
        timeTaken: elapsed,
        timedOut: true,
        difficulty: question.difficulty,
        category: question.category,
      })
    }
  }, [timeLeft, isStarted, isAnswered, showResults, question])

  // Keyboard listener: 1, 2, 3 for options — and Enter/Space to advance
  useEffect(() => {
    if (!isStarted || showResults) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // If answered, allow Enter/Space to go next
      if (isAnswered) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleNext()
        }
        return
      }

      // Map 1/2/3 (both numpad and regular) to option selection
      const keyMap: Record<string, number> = {
        "1": 0,
        "2": 1,
        "3": 2,
      }
      const optionIndex = keyMap[e.key]
      if (optionIndex !== undefined && optionIndex < question.options.length) {
        e.preventDefault()
        handleSelect(optionIndex)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isStarted, isAnswered, showResults, question]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelect = useCallback(
    (index: number) => {
      if (isAnswered) return
      if (timerRef.current) clearInterval(timerRef.current)

      const elapsed = Math.round(
        (Date.now() - startTimeRef.current) / 1000
      )

      setSelectedAnswer(index)
      setIsAnswered(true)
      setTimedOut(false)

      answersRef.current.push({
        questionId: question.id,
        questionText: question.text,
        selected: index,
        correct: question.correctIndex,
        timeTaken: elapsed,
        timedOut: false,
        difficulty: question.difficulty,
        category: question.category,
      })

      if (index === question.correctIndex) {
        setScore((prev) => prev + 1)
      }
    },
    [isAnswered, question]
  )

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setTimedOut(false)
    } else {
      setShowResults(true)
    }
  }, [currentIndex, questions.length])

  // Pre-start instructions screen
  if (!isStarted) {
    return (
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Keyboard className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            {title}
          </h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            {questions.length} questions with increasing difficulty. Each
            question is timed. Use your <strong className="text-foreground">keyboard numpad</strong> to answer:
          </p>

          <div className="mb-8 flex justify-center gap-4">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border-2 border-primary/30 bg-primary/5"
              >
                <span className="font-mono text-2xl font-bold text-primary">
                  {num}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Option {num}
                </span>
              </div>
            ))}
          </div>

          <div className="mb-8 flex flex-col gap-2 rounded-xl bg-secondary/50 p-4 text-left text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                Easy: 15s | Medium: 20s | Hard: 30s per question
              </span>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                If time runs out, the answer is recorded as NA
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Keyboard className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                Press <strong className="text-foreground">Enter</strong> to advance after each question
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex-1 h-12 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={() => setIsStarted(true)}
              className="flex-1 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Begin Test
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Results screen
  if (showResults) {
    const pct = Math.round((score / questions.length) * 100)
    const naCount = answersRef.current.filter((a) => a.timedOut).length
    return (
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            {title} Complete
          </h2>
          <p className="mb-1 text-muted-foreground">
            You scored{" "}
            <span className="font-mono font-bold text-primary">
              {score}/{questions.length}
            </span>
          </p>
          <p className="mb-2 font-mono text-sm text-muted-foreground">
            {pct}% accuracy
          </p>
          {naCount > 0 && (
            <p className="mb-4 flex items-center justify-center gap-1.5 font-mono text-xs text-muted-foreground">
              <AlertTriangle className="h-3.5 w-3.5 text-yellow-500" />
              {naCount} question{naCount > 1 ? "s" : ""} timed out (NA)
            </p>
          )}
          <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <Button
            onClick={() =>
              onComplete(
                activityId,
                score,
                questions.length,
                answersRef.current
              )
            }
            className="h-12 gap-2 rounded-xl bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            Return to Activities
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  // Timer bar color
  const timerPct = (timeLeft / question.timeLimit) * 100
  const timerColor =
    timerPct > 50
      ? "bg-green-500"
      : timerPct > 25
        ? "bg-yellow-500"
        : "bg-red-500"

  return (
    <div className="flex flex-1 flex-col px-6 py-8 lg:px-16">
      <div className="mx-auto w-full max-w-2xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Exit
          </Button>
          <div className="flex items-center gap-4">
            <span
              className={`rounded-full px-2.5 py-0.5 font-mono text-xs uppercase ${
                question.difficulty === "easy"
                  ? "bg-green-500/10 text-green-500"
                  : question.difficulty === "medium"
                    ? "bg-yellow-500/10 text-yellow-500"
                    : "bg-red-500/10 text-red-500"
              }`}
            >
              {question.difficulty}
            </span>
            <span className="font-mono text-sm text-muted-foreground">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-3 h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Timer bar */}
        <div className="mb-6 flex items-center gap-3">
          <Clock
            className={`h-4 w-4 ${timerPct <= 25 ? "animate-pulse text-red-500" : "text-muted-foreground"}`}
          />
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-linear ${timerColor}`}
              style={{ width: `${timerPct}%` }}
            />
          </div>
          <span
            className={`min-w-[2.5rem] text-right font-mono text-sm font-bold ${
              timerPct <= 25 ? "animate-pulse text-red-500" : "text-muted-foreground"
            }`}
          >
            {timeLeft}s
          </span>
        </div>

        {/* Activity Title */}
        <div className="mb-2 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {title}
          </span>
        </div>

        {/* Category */}
        <span className="mb-4 inline-block rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
          {question.category}
        </span>

        {/* Question */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold leading-relaxed text-foreground">
            {question.text}
          </h3>
        </div>

        {/* Timed Out banner */}
        {timedOut && (
          <div className="mb-4 flex items-center gap-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
            <AlertTriangle className="h-5 w-5 shrink-0 text-yellow-500" />
            <div>
              <p className="font-semibold text-yellow-500">{"Time's"} up!</p>
              <p className="text-sm text-muted-foreground">
                This response has been recorded as NA. The correct answer was{" "}
                <strong className="text-foreground">
                  Option {question.correctIndex + 1}: {question.options[question.correctIndex]}
                </strong>
              </p>
            </div>
          </div>
        )}

        {/* 3 Options — with keyboard number labels */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => {
            let borderClass = "border-border hover:border-primary/50"
            let bgClass = "bg-card"

            if (isAnswered) {
              if (index === question.correctIndex) {
                borderClass = "border-green-500/50"
                bgClass = "bg-green-500/10"
              } else if (
                selectedAnswer === index &&
                index !== question.correctIndex
              ) {
                borderClass = "border-red-500/50"
                bgClass = "bg-red-500/10"
              } else {
                borderClass = "border-border opacity-40"
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={isAnswered}
                className={`flex items-center gap-4 rounded-xl border ${borderClass} ${bgClass} p-4 text-left transition-all`}
              >
                {/* Keyboard number indicator */}
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 font-mono text-lg font-bold transition-colors ${
                    isAnswered && index === question.correctIndex
                      ? "border-green-500/50 bg-green-500/20 text-green-400"
                      : isAnswered &&
                          selectedAnswer === index &&
                          index !== question.correctIndex
                        ? "border-red-500/50 bg-red-500/20 text-red-400"
                        : "border-primary/30 bg-primary/5 text-primary"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {option}
                </span>
                {isAnswered && index === question.correctIndex && (
                  <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-green-500" />
                )}
                {isAnswered &&
                  selectedAnswer === index &&
                  index !== question.correctIndex && (
                    <XCircle className="ml-auto h-5 w-5 shrink-0 text-red-500" />
                  )}
              </button>
            )
          })}
        </div>

        {/* Keyboard hint */}
        {!isAnswered && (
          <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
            Press <kbd className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-foreground">1</kbd>{" "}
            <kbd className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-foreground">2</kbd>{" "}
            <kbd className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-foreground">3</kbd>{" "}
            to select
          </p>
        )}

        {/* Next prompt */}
        {isAnswered && (
          <div className="mt-6 flex items-center justify-between">
            <p className="font-mono text-xs text-muted-foreground">
              Press{" "}
              <kbd className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-foreground">
                Enter
              </kbd>{" "}
              to continue
            </p>
            <Button
              onClick={handleNext}
              className="h-11 gap-2 rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              {currentIndex < questions.length - 1
                ? "Next"
                : "See Results"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
