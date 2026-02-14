"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
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

  const isValid = name.trim() !== "" && gender !== "" && age.trim() !== "" && consentGiven

  const handleSubmit = () => {
    if (isValid) {
      onSubmit({ name, gender, age, consentGiven })
    }
  }

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg">
        <div className="rounded-xl border border-border bg-card p-8">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                Step 1 of 2
              </span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">Participant Registration</h2>
            <p className="text-sm text-muted-foreground">
              Please fill in your details before starting the cognitive assessment.
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Age */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="age" className="text-sm font-medium text-foreground">
                Age
              </Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-3">
              <Label className="text-sm font-medium text-foreground">Gender</Label>
              <RadioGroup value={gender} onValueChange={setGender} className="flex gap-6">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="male" id="male" className="border-border text-primary" />
                  <Label htmlFor="male" className="text-sm text-foreground cursor-pointer">Male</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="female" id="female" className="border-border text-primary" />
                  <Label htmlFor="female" className="text-sm text-foreground cursor-pointer">Female</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="other" id="other-gender" className="border-border text-primary" />
                  <Label htmlFor="other-gender" className="text-sm text-foreground cursor-pointer">Other</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Consent */}
            <div className="rounded-lg border border-border bg-secondary/50 p-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={consentGiven}
                  onCheckedChange={(checked) => setConsentGiven(checked === true)}
                  className="mt-0.5 border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <Label htmlFor="consent" className="cursor-pointer text-sm leading-relaxed text-muted-foreground">
                  I have read and understood the research consent form. I agree to participate
                  in this EEG-based cognitive assessment study conducted using the EMOTIV EPOC X
                  device. I understand that this is a non-medical, academic research study and
                  that my data will be handled confidentially.
                </Label>
              </div>
            </div>
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
            <Button
              onClick={handleSubmit}
              disabled={!isValid}
              className="gap-2 bg-primary px-6 text-primary-foreground hover:bg-primary/90 disabled:opacity-40"
            >
              Proceed to Activities
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
