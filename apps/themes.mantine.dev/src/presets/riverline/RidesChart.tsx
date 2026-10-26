'use client';

import { CompositeChart } from '@mantine/charts';
import { Paper, Text } from '@mantine/core';
import { CardHead } from './CardHead';
import { NOW_HOUR, ridesByHour } from './data';
import classes from './RidesChart.module.css';

const formatHour = (hour: number) => `${String(hour).padStart(2, '0')}:00`;
const activeDot = (fill: string) => ({
  r: 4,
  fill,
  stroke: 'var(--mantine-color-surface-panel)',
  strokeWidth: 2,
});

const formatRides = (value: number) => value.toLocaleString('en-US');

interface TooltipProps {
  label?: number;
  payload?: readonly { dataKey?: unknown; value?: unknown }[];
}

function RidesTooltip({ label, payload }: TooltipProps) {
  if (label === undefined || !payload?.length) {
    return null;
  }

  const hour = String(label).padStart(2, '0');
  const today = ridesByHour[label]?.today;

  return (
    <Paper shadow="md" className={classes.tooltip}>
      <Text size="sm" className={classes.tooltipTitle}>
        {hour}:00 to {hour}:59
      </Text>
      <div className={classes.tooltipRow}>
        <span className={classes.swatch} data-series="today" />
        Today
        <b>{today === null ? 'Not yet' : formatRides(today)}</b>
      </div>
      <div className={classes.tooltipRow}>
        <span className={classes.swatch} data-series="lastWeek" />
        Last Tuesday
        <b>{formatRides(ridesByHour[label].lastWeek)}</b>
      </div>
    </Paper>
  );
}

export function RidesChart() {
  return (
    <Paper component="section" aria-labelledby="rides-title">
      <CardHead
        id="rides-title"
        title="Rides by hour"
        description="Compared with the same day last week"
      >
        <div className={classes.legend}>
          <span>
            <i data-series="today" />
            Today
          </span>
          <span>
            <i data-series="lastWeek" />
            Last Tuesday
          </span>
        </div>
      </CardHead>

      <div className={classes.chart}>
        <CompositeChart
          h={280}
          data={ridesByHour}
          dataKey="hour"
          series={[
            { name: 'lastWeek', label: 'Last Tuesday', color: 'heron.5', type: 'line' },
            {
              name: 'today',
              label: 'Today',
              color: 'var(--mantine-primary-color-filled)',
              type: 'area',
            },
          ]}
          curveType="linear"
          strokeWidth={2}
          withDots={false}
          gridAxis="x"
          tickLine="none"
          strokeDasharray="0"
          areaProps={{
            fillOpacity: 0.1,
            activeDot: activeDot('var(--mantine-primary-color-filled)'),
          }}
          lineProps={{ activeDot: activeDot('var(--mantine-color-heron-5)') }}
          xAxisProps={{
            type: 'number',
            domain: [0, 23],
            ticks: [0, 3, 6, 9, 12, 15, 18, 21],
            tickFormatter: formatHour,
          }}
          yAxisProps={{
            domain: [0, 2500],
            ticks: [0, 500, 1000, 1500, 2000, 2500],
            tickFormatter: (value: number) => (value >= 1000 ? `${value / 1000}K` : `${value}`),
            width: 40,
          }}
          referenceLines={[
            {
              x: NOW_HOUR - 1 + 20 / 60,
              color: 'var(--mantine-color-border-strong)',
              label: 'Now, 14:20',
              labelPosition: 'insideTopRight',
            },
          ]}
          referenceDots={[
            {
              x: 8,
              y: ridesByHour[8].today ?? 0,
              r: 4.5,
              stroke: 'var(--mantine-color-surface-panel)',
              color: 'var(--mantine-primary-color-filled)',
              label: {
                value: '1,985 at 08:00',
                position: 'right',
                fill: 'var(--mantine-color-bright)',
                fontWeight: 600,
              },
            },
          ]}
          tooltipProps={{
            content: ({ label, payload }) => (
              <RidesTooltip label={label as number} payload={payload} />
            ),
          }}
          aria-label="Rides by hour today compared with last Tuesday. Morning peak at 08:00 with 1,985 rides today."
          role="img"
        />
      </div>
    </Paper>
  );
}
