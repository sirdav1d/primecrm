import type { JSX } from 'react';
import {
  Area,
  AreaChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const growthData = [
  { x: 0, value: 2 },
  { x: 20, value: 5 },
  { x: 40, value: 14 },
  { x: 60, value: 30 },
  { x: 80, value: 57 },
  { x: 100, value: 96 },
];

export function GrowthCurve({ reducedMotion }: { reducedMotion: boolean }): JSX.Element {
  return (
    <figure className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] min-w-0 w-full" aria-label="Curva de crescimento do funil">
      <div aria-hidden="true" className="h-full min-w-0 w-full opacity-85">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
          minHeight={0}
          initialDimension={{ width: 1280, height: 420 }}
        >
          <AreaChart data={growthData} margin={{ top: 18, right: 18, bottom: 0, left: 18 }}>
            <XAxis dataKey="x" hide type="number" domain={[0, 100]} />
            <YAxis hide domain={[0, 100]} />
            {[20, 40, 60, 80, 100].map((x) => (
              <ReferenceLine
                key={x}
                x={x}
                stroke="rgba(244,176,0,0.22)"
                strokeDasharray="3 5"
              />
            ))}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#f4b000"
              strokeWidth={2}
              fill="#f4b000"
              fillOpacity={0.08}
              dot={{ r: 2.5, fill: '#f4b000', stroke: '#071a36', strokeWidth: 1 }}
              activeDot={false}
              isAnimationActive={!reducedMotion}
            />
            {[40, 60, 80, 100].map((x) => {
              const point = growthData.find((item) => item.x === x)!;
              return (
                <ReferenceDot
                  key={x}
                  x={point.x}
                  y={point.value}
                  r={4}
                  fill="#f4b000"
                  stroke="#fff0c2"
                  strokeWidth={2}
                />
              );
            })}
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <figcaption className="sr-only">
        A curva cresce de 2 no início para 96 no ponto 100. No caminho, passa por 5 no ponto 20, 14 no ponto 40, 30 no ponto 60 e 57 no ponto 80.
      </figcaption>
    </figure>
  );
}
