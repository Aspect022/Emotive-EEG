"use client"

import { useState, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { LandingPage } from "@/components/landing-page"
import {
  RegistrationForm,
  type ParticipantData,
} from "@/components/registration-form"
import {
  ActivitySelector,
  type ActivityType,
} from "@/components/activity-selector"
import { ActivityRunner } from "@/components/activity-runner"

type AppStep = "landing" | "register" | "select-activity" | "run-activity"

export default function Page() {
  const [step, setStep] = useState<AppStep>("landing")
  const [participant, setParticipant] = useState<ParticipantData | null>(null)
  const [completedActivities, setCompletedActivities] = useState<
    ActivityType[]
  >([])
  const [currentActivity, setCurrentActivity] = useState<ActivityType | null>(
    null
  )

  const currentNav =
    step === "landing"
      ? "Home"
      : step === "register"
        ? "Register"
        : step === "select-activity" || step === "run-activity"
          ? "Activities"
          : "Home"

  const handleStartRecording = useCallback(() => {
    setStep("register")
  }, [])

  const handleRegistration = useCallback((data: ParticipantData) => {
    setParticipant(data)
    setStep("select-activity")
  }, [])

  const handleSelectActivity = useCallback((activity: ActivityType) => {
    setCurrentActivity(activity)
    setStep("run-activity")
  }, [])

  const handleActivityComplete = useCallback(
    async (
      activityId: ActivityType,
      score: number,
      total: number,
      answers?: {
        questionId: number
        questionText: string
        selected: number | null
        correct: number
        timeTaken: number
        timedOut: boolean
        difficulty: string
        category: string
      }[],
      activityDurationSeconds?: number
    ) => {
      // Save results to Supabase
      if (participant) {
        try {
          await fetch("/api/results", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              participant_id: participant.id,
              activity_type: activityId,
              score,
              total_questions: total,
              answers: answers || null,
              started_at: new Date().toISOString(),
              time_taken_seconds: activityDurationSeconds || 0,
            }),
          })

          // Also update the participant's total session time
          if (activityDurationSeconds) {
            await fetch("/api/participants", {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                participant_id: participant.id,
                add_session_seconds: activityDurationSeconds,
              }),
            })
          }
        } catch (err) {
          console.error("Failed to save results:", err)
        }
      }

      if (!completedActivities.includes(activityId)) {
        setCompletedActivities((prev) => [...prev, activityId])
      }
      setCurrentActivity(null)
      setStep("select-activity")
    },
    [completedActivities, participant]
  )

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar currentStep={currentNav} />

      {step === "landing" && <LandingPage onStart={handleStartRecording} />}

      {step === "register" && (
        <RegistrationForm
          onSubmit={handleRegistration}
          onBack={() => setStep("landing")}
        />
      )}

      {step === "select-activity" && (
        <ActivitySelector
          onSelect={handleSelectActivity}
          onBack={() => setStep("register")}
          completedActivities={completedActivities}
        />
      )}

      {step === "run-activity" && currentActivity && (
        <ActivityRunner
          activityId={currentActivity}
          onComplete={handleActivityComplete}
          onBack={() => {
            setCurrentActivity(null)
            setStep("select-activity")
          }}
        />
      )}
    </div>
  )
}
