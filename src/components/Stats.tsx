import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { champions, topScorersAllTime, worldCups } from "@/data/worldcups";
import { Reveal } from "./visual";

export function Stats() {
  const teamsEvolution = worldCups.map((w) => ({
    year: w.year,
    seleções: w.teams,
    gols: w.goals,
    avg: +(w.goals / w.matches).toFixed(2),
  }));

  return (
    <section id="estatisticas" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
              Os números
            </span>
            <h2 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">
              Estatísticas <span className="text-gradient-gold">históricas</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ChartCard title="Países com mais títulos" subtitle="Mundiais conquistados">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={champions} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                  <XAxis
                    dataKey="country"
                    stroke="oklch(0.7 0.03 100)"
                    tick={{ fontSize: 11 }}
                  />
                  <YAxis stroke="oklch(0.7 0.03 100)" tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.18 0.04 160)",
                      border: "1px solid oklch(0.82 0.16 85 / 0.4)",
                      borderRadius: 12,
                    }}
                  />
                  <Bar dataKey="titles" fill="var(--color-chart-1)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </Reveal>

          <Reveal delay={0.1}>
            <ChartCard title="Maiores artilheiros (todas as Copas)" subtitle="Gols na história">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={topScorersAllTime}
                  layout="vertical"
                  margin={{ top: 10, right: 10, left: 30, bottom: 0 }}
                >
                  <CartesianGrid stroke="oklch(1 0 0 / 0.06)" horizontal={false} />
                  <XAxis type="number" stroke="oklch(0.7 0.03 100)" tick={{ fontSize: 11 }} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    stroke="oklch(0.7 0.03 100)"
                    tick={{ fontSize: 11 }}
                    width={110}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.18 0.04 160)",
                      border: "1px solid oklch(0.82 0.16 85 / 0.4)",
                      borderRadius: 12,
                    }}
                  />
                  <Bar dataKey="goals" fill="var(--color-chart-2)" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </Reveal>

          <Reveal>
            <ChartCard title="Evolução do número de seleções" subtitle="13 → 32 participantes">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={teamsEvolution} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                  <XAxis dataKey="year" stroke="oklch(0.7 0.03 100)" tick={{ fontSize: 11 }} />
                  <YAxis stroke="oklch(0.7 0.03 100)" tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.18 0.04 160)",
                      border: "1px solid oklch(0.82 0.16 85 / 0.4)",
                      borderRadius: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="seleções"
                    stroke="var(--color-chart-1)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-chart-1)", r: 4 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </Reveal>

          <Reveal delay={0.1}>
            <ChartCard title="Média de gols por partida" subtitle="A evolução tática do futebol">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={teamsEvolution} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                  <XAxis dataKey="year" stroke="oklch(0.7 0.03 100)" tick={{ fontSize: 11 }} />
                  <YAxis stroke="oklch(0.7 0.03 100)" tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.18 0.04 160)",
                      border: "1px solid oklch(0.82 0.16 85 / 0.4)",
                      borderRadius: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="avg"
                    stroke="var(--color-chart-2)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-chart-2)", r: 4 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="mb-6">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">{subtitle}</div>
        <h3 className="mt-1 font-display text-3xl text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );
}
