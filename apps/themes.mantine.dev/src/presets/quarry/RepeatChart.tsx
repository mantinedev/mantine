'use client';

import { CompositeChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { repeatRate } from './data';
import classes from './RepeatChart.module.css';

const PRICE_LABEL = '1 Sep: pouch price £3.80 → £4.25';
const LAST = repeatRate[repeatRate.length - 1];

const activeDot = (fill: string) => ({
  r: 4,
  fill,
  stroke: 'var(--mantine-color-surface-panel)',
  strokeWidth: 2,
});

interface ViewBoxLike {
  x?: number;
  y?: number;
}

function PriceLabel({ viewBox }: { viewBox?: ViewBoxLike }) {
  const x = (viewBox?.x ?? 0) + 6;
  const y = (viewBox?.y ?? 0) - 24;
  return (
    <g className={classes.priceLabel}>
      <rect x={x} y={y} width={PRICE_LABEL.length * 5.9 + 14} height={20} rx={5} />
      <text x={x + 7} y={y + 14}>
        {PRICE_LABEL}
      </text>
    </g>
  );
}

interface TooltipProps {
  label?: string;
  compare: boolean;
}

function ChartTooltip({ label, compare }: TooltipProps) {
  const point = repeatRate.find((item) => item.week === label);
  if (!point) {
    return null;
  }

  return (
    <Paper shadow="md" radius="md" className={classes.tooltip}>
      <b>Week of {point.week}</b>
      <div>
        <i data-series="2026" />
        2026<em>{point.y2026}%</em>
      </div>
      {compare && (
        <div>
          <i data-series="2025" />
          2025<em>{point.y2025}%</em>
        </div>
      )}
    </Paper>
  );
}

const endLabel = (value: number) => ({
  value: `${value}%`,
  position: 'right' as const,
  offset: 9,
  fill: 'var(--mantine-color-bright)',
  fontWeight: 700,
  fontSize: 11,
});

export function RepeatChart({ compare }: { compare: boolean }) {
  const { ref, width } = useElementSize();

  return (
    <Paper className={classes.card}>
      <div className={classes.head}>
        <div>
          <div className={classes.title}>Repeat orders as a share of all orders</div>
          <Text size="sm" className={classes.sub}>
            Weekly, 6 July to 5 October
          </Text>
        </div>
        <div className={classes.legend}>
          <span>
            <i data-series="2026" />
            2026
          </span>
          {compare && (
            <span>
              <i data-series="2025" />
              2025
            </span>
          )}
        </div>
      </div>

      <div className={classes.chart} ref={ref}>
        <CompositeChart
          h={230}
          data={repeatRate}
          dataKey="week"
          series={[
            ...(compare
              ? [
                  {
                    name: 'y2025',
                    label: '2025',
                    color: 'var(--quarry-series-2)',
                    type: 'line' as const,
                  },
                ]
              : []),
            { name: 'y2026', label: '2026', color: 'var(--quarry-series-1)', type: 'area' },
          ]}
          curveType="linear"
          strokeWidth={2}
          withDots={false}
          gridAxis="x"
          gridColor="var(--quarry-grid)"
          tickLine="none"
          strokeDasharray="0"
          composedChartProps={{ margin: { top: 30, right: 64, bottom: 0, left: 0 } }}
          areaProps={{ fillOpacity: 0.08, activeDot: activeDot('var(--quarry-series-1)') }}
          lineProps={{ activeDot: activeDot('var(--quarry-series-2)') }}
          xAxisProps={{
            interval: width > 0 && width < 520 ? 3 : 1,
            tick: { transform: 'translate(0, 6)', fontSize: 11, fill: 'currentColor' },
          }}
          yAxisProps={{
            domain: [30, 45],
            ticks: [30, 35, 40, 45],
            tickFormatter: (value: number) => `${value}%`,
            tick: { transform: 'translate(-4, 0)', fontSize: 11, fill: 'currentColor' },
            width: 40,
          }}
          referenceLines={[
            {
              x: '31 Aug',
              color: 'var(--mantine-color-bright)',
              label: { content: (props) => <PriceLabel viewBox={props.viewBox as ViewBoxLike} /> },
            },
          ]}
          referenceDots={[
            {
              x: LAST.week,
              y: LAST.y2026,
              r: 4.5,
              color: 'var(--quarry-series-1)',
              stroke: 'var(--mantine-color-surface-panel)',
              label: endLabel(LAST.y2026),
            },
            ...(compare
              ? [
                  {
                    x: LAST.week,
                    y: LAST.y2025,
                    r: 4.5,
                    color: 'var(--quarry-series-2)',
                    stroke: 'var(--mantine-color-surface-panel)',
                    label: endLabel(LAST.y2025),
                  },
                ]
              : []),
          ]}
          tooltipProps={{
            content: ({ label }) => <ChartTooltip label={label as string} compare={compare} />,
            cursor: { stroke: 'var(--mantine-color-dimmed)', strokeWidth: 1 },
          }}
          role="img"
          aria-label="Repeat order share by week. 2026 holds near 41 percent until the week of 31 August, then falls to about 33 percent. 2025 rises slowly from 39 to 41 percent over the same weeks."
        />
      </div>
    </Paper>
  );
}
