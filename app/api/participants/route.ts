import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, full_name, age, gender, consent_given } = body

    if (!email || !full_name || !age || !gender || !consent_given) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Check if participant already exists by email
    const { data: existing } = await supabase
      .from("participants")
      .select("id, full_name")
      .eq("email", email)
      .single()

    if (existing) {
      // Return existing participant (email already registered)
      return NextResponse.json({
        participant: existing,
        message: "Welcome back! Continuing your session.",
        returning: true,
      })
    }

    // Insert new participant
    const { data, error } = await supabase
      .from("participants")
      .insert({
        email,
        full_name,
        age: parseInt(age, 10),
        gender,
        consent_given,
      })
      .select("id, full_name")
      .single()

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      participant: data,
      message: "Registration successful!",
      returning: false,
    })
  } catch (err) {
    console.error("API error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
