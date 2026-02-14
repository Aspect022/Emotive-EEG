import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = await createClient()

    // Get all participants
    const { data: participants, error: pErr } = await supabase
      .from("participants")
      .select("*")
      .order("created_at", { ascending: false })

    if (pErr) {
      return NextResponse.json({ error: pErr.message }, { status: 500 })
    }

    // Get all activity results
    const { data: results, error: rErr } = await supabase
      .from("activity_results")
      .select("*")
      .order("completed_at", { ascending: false })

    if (rErr) {
      return NextResponse.json({ error: rErr.message }, { status: 500 })
    }

    // Compute aggregated stats
    const totalParticipants = participants?.length || 0
    const totalSessions = results?.length || 0

    // Gender distribution
    const genderDist: Record<string, number> = {}
    participants?.forEach((p) => {
      genderDist[p.gender] = (genderDist[p.gender] || 0) + 1
    })

    // Average scores per activity type
    const activityStats: Record<string, { scores: number[]; times: number[] }> = {}
    results?.forEach((r) => {
      if (!activityStats[r.activity_type]) {
        activityStats[r.activity_type] = { scores: [], times: [] }
      }
      const pct = r.total_questions > 0 ? (r.score / r.total_questions) * 100 : 0
      activityStats[r.activity_type].scores.push(pct)
      activityStats[r.activity_type].times.push(r.time_taken_seconds || 0)
    })

    const activityAverages = Object.entries(activityStats).map(([type, data]) => ({
      activity: type.charAt(0).toUpperCase() + type.slice(1),
      avgScore: Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length),
      avgTime: Math.round(data.times.reduce((a, b) => a + b, 0) / data.times.length),
      count: data.scores.length,
    }))

    // Score distribution bins (0-20, 20-40, 40-60, 60-80, 80-100)
    const scoreBins = [
      { range: "0-20%", count: 0 },
      { range: "20-40%", count: 0 },
      { range: "40-60%", count: 0 },
      { range: "60-80%", count: 0 },
      { range: "80-100%", count: 0 },
    ]
    results?.forEach((r) => {
      const pct = r.total_questions > 0 ? (r.score / r.total_questions) * 100 : 0
      if (pct < 20) scoreBins[0].count++
      else if (pct < 40) scoreBins[1].count++
      else if (pct < 60) scoreBins[2].count++
      else if (pct < 80) scoreBins[3].count++
      else scoreBins[4].count++
    })

    // Timeout rate per activity
    const timeoutStats: Record<string, { total: number; timedOut: number }> = {}
    results?.forEach((r) => {
      if (r.answers && Array.isArray(r.answers)) {
        if (!timeoutStats[r.activity_type]) {
          timeoutStats[r.activity_type] = { total: 0, timedOut: 0 }
        }
        r.answers.forEach((a: { timedOut?: boolean }) => {
          timeoutStats[r.activity_type].total++
          if (a.timedOut) timeoutStats[r.activity_type].timedOut++
        })
      }
    })

    const timeoutRates = Object.entries(timeoutStats).map(([type, data]) => ({
      activity: type.charAt(0).toUpperCase() + type.slice(1),
      timeoutRate: data.total > 0 ? Math.round((data.timedOut / data.total) * 100) : 0,
      totalQuestions: data.total,
      timedOut: data.timedOut,
    }))

    // Recent participants (last 10)
    const recentParticipants = (participants || []).slice(0, 10).map((p) => ({
      id: p.id,
      name: p.full_name,
      email: p.email,
      gender: p.gender,
      age: p.age,
      sessionSeconds: p.total_session_seconds || 0,
      createdAt: p.created_at,
    }))

    // Per-participant activity completion
    const participantResults: Record<string, string[]> = {}
    results?.forEach((r) => {
      if (!participantResults[r.participant_id]) {
        participantResults[r.participant_id] = []
      }
      participantResults[r.participant_id].push(r.activity_type)
    })

    const completionCounts = { completed: 0, partial: 0, notStarted: 0 }
    participants?.forEach((p) => {
      const done = participantResults[p.id]?.length || 0
      if (done >= 5) completionCounts.completed++
      else if (done > 0) completionCounts.partial++
      else completionCounts.notStarted++
    })

    // Average total session time
    const sessionTimes = participants
      ?.map((p) => p.total_session_seconds || 0)
      .filter((t) => t > 0) || []
    const avgSessionTime =
      sessionTimes.length > 0
        ? Math.round(sessionTimes.reduce((a, b) => a + b, 0) / sessionTimes.length)
        : 0

    return NextResponse.json({
      totalParticipants,
      totalSessions,
      genderDist,
      activityAverages,
      scoreBins,
      timeoutRates,
      recentParticipants,
      completionCounts,
      avgSessionTime,
    })
  } catch (err) {
    console.error("Analysis API error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
