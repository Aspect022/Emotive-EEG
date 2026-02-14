"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import {
  Users,
  Clock,
  Activity,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"

interface AnalysisData {
  totalParticipants: number
  totalSessions: number
  genderDist: Record<string, number>
  activityAverages: {
    activity: string
    avgScore: number
    avgTime: number
    count: number
  }[]
  scoreBins: { range: string; count: number }[]
  timeoutRates: {
    activity: string
    timeoutRate: number
    totalQuestions: number
    timedOut: number
  }[]
  recentParticipants: {
    id: string
    name: string
    email: string
    gender: string
    age: number
    sessionSeconds: number
    createdAt: string
  }[]
  completionCounts: { completed: number; partial: number; notStarted: number }
  avgSessionTime: number
}

const CHART_COLORS = [
  "hsl(24, 80%, 50%)",
  "hsl(30, 70%, 45%)",
  "hsl(20, 60%, 40%)",
  "hsl(35, 75%, 55%)",
  "hsl(15, 85%, 60%)",
]

function formatTime(seconds: number) {
  if (seconds < 60) return `${seconds}s`
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}m ${s}s`
}

export default function AnalysisPage() {
  const [data, setData] = useState<AnalysisData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/analysis")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <p className="text-sm text-muted-foreground">Loading analysis data...</p>
          </div>
        </main>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex flex-1 items-center justify-center">
          <p className="text-muted-foreground">Failed to load data.</p>
        </main>
      </div>
    )
  }

  const genderData = Object.entries(data.genderDist).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value,
  }))

  const completionData = [
    { name: "Completed", value: data.completionCounts.completed },
    { name: "Partial", value: data.completionCounts.partial },
    { name: "Not Started", value: data.completionCounts.notStarted },
  ].filter((d) => d.value > 0)

  const radarData = data.activityAverages.map((a) => ({
    subject: a.activity,
    score: a.avgScore,
    fullMark: 100,
  }))

  const hasData = data.totalParticipants > 0

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8">
        {/* Page header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Data Analysis
            </span>
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Research Analytics
          </h1>
          <p className="mt-2 text-muted-foreground">
            Real-time statistics from EEG cognitive assessment sessions.
          </p>
        </div>

        {!hasData ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card/50 py-24">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary mb-4">
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">No data yet</h2>
            <p className="mt-2 max-w-md text-center text-muted-foreground">
              Data will appear here once participants complete activities. Head to
              the home page to start a session.
            </p>
          </div>
        ) : (
          <>
            {/* Summary cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <SummaryCard
                icon={<Users className="h-5 w-5" />}
                label="Total Participants"
                value={data.totalParticipants.toString()}
              />
              <SummaryCard
                icon={<Activity className="h-5 w-5" />}
                label="Total Sessions"
                value={data.totalSessions.toString()}
              />
              <SummaryCard
                icon={<Clock className="h-5 w-5" />}
                label="Avg Session Time"
                value={formatTime(data.avgSessionTime)}
              />
              <SummaryCard
                icon={<CheckCircle2 className="h-5 w-5" />}
                label="Fully Completed"
                value={data.completionCounts.completed.toString()}
              />
            </div>

            {/* Charts row 1 */}
            <div className="grid gap-6 lg:grid-cols-2 mb-6">
              {/* Avg Score by Activity */}
              <ChartCard title="Average Score by Activity" subtitle="Percentage correct across all participants">
                {data.activityAverages.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data.activityAverages} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,18%)" />
                      <XAxis dataKey="activity" tick={{ fill: "hsl(30,5%,55%)", fontSize: 12 }} axisLine={{ stroke: "hsl(0,0%,18%)" }} />
                      <YAxis tick={{ fill: "hsl(30,5%,55%)", fontSize: 12 }} axisLine={{ stroke: "hsl(0,0%,18%)" }} domain={[0, 100]} />
                      <Tooltip
                        contentStyle={{ backgroundColor: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)", borderRadius: "8px", color: "hsl(30,10%,90%)" }}
                        formatter={(value: number) => [`${value}%`, "Avg Score"]}
                      />
                      <Bar dataKey="avgScore" fill="hsl(24,80%,50%)" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <EmptyChartState />
                )}
              </ChartCard>

              {/* Score Distribution */}
              <ChartCard title="Score Distribution" subtitle="Distribution of scores across all sessions">
                {data.scoreBins.some((b) => b.count > 0) ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data.scoreBins} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,18%)" />
                      <XAxis dataKey="range" tick={{ fill: "hsl(30,5%,55%)", fontSize: 12 }} axisLine={{ stroke: "hsl(0,0%,18%)" }} />
                      <YAxis tick={{ fill: "hsl(30,5%,55%)", fontSize: 12 }} axisLine={{ stroke: "hsl(0,0%,18%)" }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)", borderRadius: "8px", color: "hsl(30,10%,90%)" }}
                        formatter={(value: number) => [value, "Sessions"]}
                      />
                      <Bar dataKey="count" fill="hsl(30,70%,45%)" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <EmptyChartState />
                )}
              </ChartCard>
            </div>

            {/* Charts row 2 */}
            <div className="grid gap-6 lg:grid-cols-3 mb-6">
              {/* Gender Distribution */}
              <ChartCard title="Gender Distribution" subtitle="Participant demographics">
                {genderData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={genderData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={4}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {genderData.map((_, i) => (
                          <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)", borderRadius: "8px", color: "hsl(30,10%,90%)" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <EmptyChartState />
                )}
              </ChartCard>

              {/* Completion Status */}
              <ChartCard title="Completion Status" subtitle="Assessment progress breakdown">
                {completionData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={completionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={4}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {completionData.map((_, i) => (
                          <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)", borderRadius: "8px", color: "hsl(30,10%,90%)" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <EmptyChartState />
                )}
              </ChartCard>

              {/* Radar Chart */}
              <ChartCard title="Cognitive Profile" subtitle="Average scores across domains">
                {radarData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={250}>
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="hsl(0,0%,18%)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(30,5%,55%)", fontSize: 11 }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(30,5%,55%)", fontSize: 10 }} />
                      <Radar dataKey="score" stroke="hsl(24,80%,50%)" fill="hsl(24,80%,50%)" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                ) : (
                  <EmptyChartState />
                )}
              </ChartCard>
            </div>

            {/* Timeout rates */}
            {data.timeoutRates.length > 0 && (
              <div className="mb-6">
                <ChartCard title="Timeout Rate by Activity" subtitle="Percentage of questions where participants ran out of time">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data.timeoutRates} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,18%)" />
                      <XAxis dataKey="activity" tick={{ fill: "hsl(30,5%,55%)", fontSize: 12 }} axisLine={{ stroke: "hsl(0,0%,18%)" }} />
                      <YAxis tick={{ fill: "hsl(30,5%,55%)", fontSize: 12 }} axisLine={{ stroke: "hsl(0,0%,18%)" }} domain={[0, 100]} />
                      <Tooltip
                        contentStyle={{ backgroundColor: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)", borderRadius: "8px", color: "hsl(30,10%,90%)" }}
                        formatter={(value: number) => [`${value}%`, "Timeout Rate"]}
                      />
                      <Bar dataKey="timeoutRate" fill="hsl(0,62.8%,30.6%)" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>
            )}

            {/* Recent Participants Table */}
            <div className="rounded-2xl border border-border bg-card/50 overflow-hidden">
              <div className="border-b border-border px-6 py-4">
                <h3 className="text-lg font-semibold text-foreground">Recent Participants</h3>
                <p className="text-sm text-muted-foreground">Last 10 registered participants</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-secondary/30">
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Age</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Gender</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Session Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {data.recentParticipants.map((p) => (
                      <tr key={p.id} className="transition-colors hover:bg-secondary/20">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground">{p.name}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">{p.email}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">{p.age}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary capitalize">{p.gender}</span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-muted-foreground">{formatTime(p.sessionSeconds)}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">{new Date(p.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                    {data.recentParticipants.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-sm text-muted-foreground">No participants yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/50 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-xs text-muted-foreground">EmotivCare Research Platform</span>
          <span className="text-xs text-muted-foreground">EMOTIV EPOC X | 14-Channel EEG</span>
        </div>
      </footer>
    </div>
  )
}

function SummaryCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/50 px-6 py-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold text-foreground">{value}</p>
      </div>
    </div>
  )
}

function ChartCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-6">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-xs text-muted-foreground">{subtitle}</p>
      {children}
    </div>
  )
}

function EmptyChartState() {
  return (
    <div className="flex h-[250px] items-center justify-center">
      <div className="flex flex-col items-center gap-2 text-center">
        <AlertTriangle className="h-6 w-6 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">No data available yet</p>
      </div>
    </div>
  )
}
