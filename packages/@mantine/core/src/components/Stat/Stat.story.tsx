import { useState } from 'react';
import { Button, Paper, SimpleGrid } from '../../index';
import { Stat } from './Stat';

export default { title: 'Stat' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 260 }}>
      <Paper withBorder p="md" radius="md">
        <Stat label="Active users" value={92410} thousandSeparator diff={12.4} />
      </Paper>
    </div>
  );
}

export function PrefixSuffix() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Paper withBorder p="md" radius="md">
        <Stat
          label="Revenue"
          value={1340.5}
          prefix="$"
          decimalScale={2}
          fixedDecimalScale
          thousandSeparator
        />
      </Paper>
      <Paper withBorder p="md" radius="md">
        <Stat label="Conversion" value={4.28} suffix="%" diff={-1.4} />
      </Paper>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Stat
          key={size}
          size={size}
          label="Active users"
          value={92410}
          thousandSeparator
          diff={12.4}
        />
      ))}
    </div>
  );
}

export function WithIcon() {
  return (
    <div style={{ padding: 40, maxWidth: 260 }}>
      <Paper withBorder p="md" radius="md">
        <Stat
          label="Downloads"
          value={18320}
          thousandSeparator
          diff={8.1}
          icon={
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </Paper>
    </div>
  );
}

export function Diffs() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Stat label="Up" value={100} diff={12.4} />
      <Stat label="Down" value={100} diff={-8.2} />
      <Stat label="Neutral" value={100} diff={0} />
      <Stat label="Rounds to zero" value={100} diff={0.04} />
      <Stat label="No icon" value={100} diff={5} withDiffIcon={false} />
    </div>
  );
}

export function Loading() {
  return (
    <div style={{ padding: 40, maxWidth: 260 }}>
      <Paper withBorder p="md" radius="md">
        <Stat label="Revenue" value={1340.5} prefix="$" suffix="USD" diff={4.1} loading />
      </Paper>
    </div>
  );
}

export function Color() {
  return (
    <div style={{ padding: 40, maxWidth: 260 }}>
      <Stat label="Active users" value={92410} thousandSeparator color="blue" diff={12.4} />
    </div>
  );
}

export function StatRow() {
  return (
    <div style={{ padding: 40 }}>
      <SimpleGrid cols={3}>
        <Paper withBorder p="md" radius="md">
          <Stat label="Users" value={92410} thousandSeparator diff={12.4} />
        </Paper>
        <Paper withBorder p="md" radius="md">
          <Stat
            label="Revenue"
            value={1340.5}
            prefix="$"
            decimalScale={2}
            fixedDecimalScale
            thousandSeparator
            diff={-4.1}
          />
        </Paper>
        <Paper withBorder p="md" radius="md">
          <Stat label="Conversion" value={4.28} suffix="%" diff={0.8} />
        </Paper>
      </SimpleGrid>
    </div>
  );
}

export function Compound() {
  return (
    <div style={{ padding: 40, maxWidth: 260 }}>
      <Paper withBorder p="md" radius="md">
        <Stat>
          <Stat.Label>Revenue</Stat.Label>
          <Stat.Diff value={12.4} />
          <Stat.Value prefix="$">1,340.50</Stat.Value>
        </Stat>
      </Paper>
    </div>
  );
}

export function Countdown() {
  const [targets] = useState(() => ({
    sale: Date.now() + 1000 * 60 * 60 * 3 + 5000,
    launch: Date.now() + 1000 * 60 * 60 * 26,
    round: Date.now() + 15000,
    short: Date.now() + 5400,
  }));

  return (
    <div style={{ padding: 40, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Paper withBorder p="md" radius="md">
        <Stat.Countdown label="Sale ends in" value={targets.sale} />
      </Paper>
      <Paper withBorder p="md" radius="md">
        <Stat.Countdown label="Launch in" value={targets.launch} format="D[d] HH:mm:ss" />
      </Paper>
      <Paper withBorder p="md" radius="md">
        <Stat.Countdown label="Round ends" value={targets.round} format="mm:ss.SSS" />
      </Paper>
      <Paper withBorder p="md" radius="md">
        <Stat.Countdown label="Short" value={targets.short} format="[Sale] mm:ss" />
      </Paper>
    </div>
  );
}

export function Animate() {
  const [value, setValue] = useState(92410);

  return (
    <div style={{ padding: 40, maxWidth: 260 }}>
      <Stat label="Live viewers" value={value} animate thousandSeparator />
      <Button mt="md" onClick={() => setValue((current) => current + 1234)}>
        Increment
      </Button>
    </div>
  );
}

export function StringValue() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Stat label="Followers" value="12k" diff={3.2} />
      <Stat label="Uptime" value="01:00:00" />
      <Stat label="Score" value="N/A" />
      <Stat label="Numeric string" value="1234.5" thousandSeparator />
    </div>
  );
}

export function Formatter() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Stat label="Temperature" value={21.5} formatter={(value) => `${value} °C`} />
      <Stat
        label="New customers"
        value={482}
        diff={38}
        diffFormatter={(diff) => `${diff > 0 ? '+' : ''}${diff} this week`}
      />
      <Stat
        label="Localized labels"
        value={100}
        diff={-2.5}
        diffLabels={{ increase: 'hausse', decrease: 'baisse', neutral: 'stable' }}
      />
    </div>
  );
}

export function CompoundIcon() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Paper withBorder p="md" radius="md">
        <Stat>
          <Stat.Icon>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Stat.Icon>
          <Stat.Label>Downloads</Stat.Label>
          <Stat.Value>18,320</Stat.Value>
          <Stat.Diff value={8.1}>+8.1% vs last week</Stat.Diff>
        </Stat>
      </Paper>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 260 }}>
      <Stat unstyled label="Active users" value={92410} thousandSeparator diff={12.4} />
    </div>
  );
}
