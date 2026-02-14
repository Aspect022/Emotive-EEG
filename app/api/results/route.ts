import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      participant_id,
      activity_type,
      score,
      total_questions,
      answers,
      started_at,
    } = body

    if (!participant_id || !activity_type || score == null || !total_questions) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("activity_results")
      .insert({
        participant_id,
        activity_type,
        score,
        total_questions,
        answers: answers || null,
        started_at: started_at || null,
      })
      .select("id")
      .single()

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ result: data })
  } catch (err) {
    console.error("API error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
