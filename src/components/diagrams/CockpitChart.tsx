import type { JSX } from 'react';
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { cockpitSeries } from '../../data/content';

const funnelSeries = [
  { name: 'Negociação', value: 38, color: '#f4b000' },
  { name: 'Qualificação', value: 26, color: '#d99b00' },
  { name: 'Apresentação', value: 22, color: '#8fa7c4' },
  { name: 'Descoberta', value: 14, color: '#506c91' },
];

const metrics = [
  { value: '128', label: 'Leads no funil' },
  { value: '342', label: 'Conversas hoje' },
  { value: '4m 36s', label: 'Tempo médio' },
  { value: '100%', label: 'Cobertura 24/7' },
];

export function CockpitChart({ reducedMotion }: { reducedMotion: boolean }): JSX.Element {
  return (
    <section
      role="region"
      aria-label="Cockpit operacional"
      className="min-h-[380px] rounded-lg border border-white/15 bg-[#06162f] p-3 sm:h-[240px] sm:min-h-0"
    >
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-md border border-white/15 bg-[#0b2448] px-2 py-2.5">
            <span className="block text-[10px] leading-tight font-semibold text-white/70">{metric.label}</span>
            <strong className="mt-1 block text-lg leading-none font-semibold tracking-[-0.03em] text-white tabular-nums">
              {metric.value}
            </strong>
          </div>
        ))}
      </div>

      <div aria-hidden="true" className="mt-3 grid h-[120px] min-w-0 grid-cols-[minmax(0,1.35fr)_minmax(112px,0.8fr)] gap-2">
        <div className="min-w-0 rounded-md border border-white/10 px-1 pt-3">
          <p className="px-2 text-[10px] font-semibold text-white/70">Leads por dia</p>
          <div className="h-[90px] w-full">
            <ResponsiveContainer
              width="100%"
              height="100%"
              minWidth={0}
              minHeight={0}
              initialDimension={{ width: 240, height: 148 }}
            >
              <LineChart data={cockpitSeries} margin={{ top: 12, right: 8, bottom: 0, left: -28 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: '#aebed2', fontSize: 8 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#aebed2', fontSize: 8 }} axisLine={false} tickLine={false} />
                <Line
                  type="linear"
                  dataKey="leads"
                  stroke="#f4b000"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#f4b000', strokeWidth: 0 }}
                  activeDot={false}
                  isAnimationActive={!reducedMotion}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="min-w-0 rounded-md border border-white/10 pt-3">
          <p className="px-2 text-center text-[10px] font-semibold text-white/70">Leads por etapa</p>
          <div className="h-[78px] w-full">
            <ResponsiveContainer
              width="100%"
              height="100%"
              minWidth={0}
              minHeight={0}
              initialDimension={{ width: 128, height: 118 }}
            >
              <PieChart>
                <Pie
                  data={funnelSeries}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="52%"
                  innerRadius="48%"
                  outerRadius="74%"
                  paddingAngle={2}
                  stroke="none"
                  isAnimationActive={!reducedMotion}
                >
                  {funnelSeries.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 px-2">
            {funnelSeries.map((entry) => (
              <span key={entry.name} className="text-[8px] text-white/70">{entry.name}</span>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only">
        Cockpit com 128 leads, 342 conversas, tempo médio de 4 minutos e 36 segundos e cobertura de 100 por cento. A tendência diária de leads é: segunda 18, terça 31, quarta 24, quinta 43, sexta 58, sábado 49 e domingo 72. A distribuição do funil é: Negociação 38 por cento, Qualificação 26 por cento, Apresentação 22 por cento e Descoberta 14 por cento.
      </p>
    </section>
  );
}
