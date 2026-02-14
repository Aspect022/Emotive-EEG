"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft, User, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export interface ParticipantData {
  name: string
  gender: string
  age: string
  consentGiven: boolean
}

interface RegistrationFormProps {
  onSubmit: (data: ParticipantData) => void
  onBack: () => void
}

export function RegistrationForm({ onSubmit, onBack }: RegistrationFormProps) {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [consentGiven, setConsentGiven] = useState(false)

  const isValid =
    name.trim() !== "" && gender !== "" && age.trim() !== "" && consentGiven

  const handleSubmit = () => {
    if (isValid) {
      onSubmit({ name, gender, age, consentGiven })
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-16 lg:py-24">
      {/* Page header */}
      <div className="mb-12 flex max-w-lg flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs font-medium text-muted-foreground">
            Step 1 of 2
          </span>
        </div>
        <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
          Participant Registration
        </h1>
        <p className="text-pretty text-muted-foreground">
          Fill in your details before starting the cognitive assessment.
        </p>
      </div>

      {/* Form card */}
      <div className="w-full max-w-xl">
        <div className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm lg:p-10">
          <div className="flex flex-col gap-7">
            {/* Name field */}
            <div className="flex flex-col gap-2.5">
              <Label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <User className="h-3.5 w-3.5 text-muted-foreground" />
                Full Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="h-12 border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* Age field */}
            <div className="flex flex-col gap-2.5">
              <Label
                htmlFor="age"
                className="text-sm font-medium text-foreground"
              >
                Age
              </Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="h-12 border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* Gender field */}
            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">
                Gender
              </Label>
              <RadioGroup
                value={gender}
                onValueChange={setGender}
                className="flex gap-3"
              >
                {[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ].map((option) => (
                  <label
                    key={option.value}
                    htmlFor={option.value}
                    className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm transition-all ${
                      gender === option.value
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-border hover:bg-secondary"
                    }`}
                  >
                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="border-border text-primary"
                    />
                    {option.label}
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Consent */}
            <div className="rounded-xl border border-border bg-background p-5">
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Research Consent
                </span>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                I have read and understood the research consent form. I agree to
                participate in this EEG-based cognitive assessment study
                conducted using the EMOTIV EPOC X device. I understand that this
                is a non-medical, academic research study and that my data will
                be handled confidentially. I may withdraw at any time without
                penalty.
              </p>
              <div className="flex items-center gap-3">
                <Checkbox
                  id="consent"
                  checked={consentGiven}
                  onCheckedChange={(checked) =>
                    setConsentGiven(checked === true)
                  }
                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <Label
                  htmlFor="consent"
                  className="cursor-pointer text-sm text-foreground"
                >
                  I agree to participate
                </Label>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onBack}
              className="gap-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!isValid}
              className="gap-2 bg-primary px-8 py-5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-30 disabled:shadow-none"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
