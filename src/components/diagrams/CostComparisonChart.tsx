import type { JSX } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const costData = [
  { name: 'Vendedor júnior', value: 48000, fill: '#667085' },
  { name: 'Prime CRM', value: 7200, fill: '#f4b000' },
];

export function CostComparisonChart({ reducedMotion }: { reducedMotion: boolean }): JSX.Element {
  return (
    <figure className="min-w-0" aria-label="Comparação de custo anual">
      <div aria-hidden="true" className="grid grid-cols-2 gap-4 px-5 text-center">
        <span className="text-sm font-semibold text-white/80 tabular-nums">R$ 48.000/ano</span>
        <span className="text-sm font-semibold text-gold tabular-nums">R$ 7,2 mil/ano</span>
      </div>
      <div aria-hidden="true" className="mt-1 h-40 min-w-0 w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
          minHeight={0}
          initialDimension={{ width: 360, height: 224 }}
        >
          <BarChart data={costData} margin={{ top: 22, right: 8, bottom: 4, left: -12 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: 'rgba(255,255,255,0.22)' }}
              tickLine={false}
              tick={{ fill: '#d6deea', fontSize: 11 }}
            />
            <YAxis hide domain={[0, 52000]} />
            <Bar
              dataKey="value"
              fill="#667085"
              radius={[4, 4, 0, 0]}
              maxBarSize={76}
              isAnimationActive={!reducedMotion}
            >
              {costData.map((entry) => <Cell key={entry.name} fill={entry.fill} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <figcaption className="sr-only">
        Um vendedor júnior custa 48 mil reais por ano, contra 7 mil e 200 reais por ano do Prime CRM.
      </figcaption>
    </figure>
  );
}
