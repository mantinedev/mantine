'use client';

import { IconX } from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Paper,
  Progress,
  ScrollArea,
  Select,
  SimpleGrid,
  Stat,
  Switch,
  Title,
} from '@mantine/core';
import type { HistoryItem } from './data';
import classes from './RunPanel.module.css';

export const RANGES = ['6 July to 5 October', 'Last 90 days', 'Since January'];

const STATUS_LABELS = { ok: 'Finished', stop: 'Stopped', fail: 'Failed' };

interface RunPanelProps {
  opened: boolean;
  onClose: () => void;
  duration: string;
  budget: number;
  range: string;
  onRangeChange: (range: string) => void;
  compare: boolean;
  onCompareChange: (value: boolean) => void;
  weekly: boolean;
  onWeeklyChange: (value: boolean) => void;
  history: HistoryItem[];
}

export function RunPanel({
  opened,
  onClose,
  duration,
  budget,
  range,
  onRangeChange,
  compare,
  onCompareChange,
  weekly,
  onWeeklyChange,
  history,
}: RunPanelProps) {
  return (
    <aside className={classes.root} data-opened={opened || undefined} aria-label="Run details">
      <ScrollArea className={classes.scroll} scrollbars="y" classNames={{ content: classes.body }}>
        <Title order={2} className={classes.heading}>
          Run
          <ActionIcon
            variant="subtle"
            className={classes.close}
            onClick={onClose}
            aria-label="Close run details"
          >
            <IconX size={18} stroke={1.8} />
          </ActionIcon>
        </Title>

        <Paper radius="lg" className={classes.warehouse}>
          <span className={classes.dot} />
          <span className={classes.warehouseText}>
            <b>Hopwell prod</b>
            <span>Connected, BigQuery EU</span>
          </span>
          <Badge>Read only</Badge>
        </Paper>

        <section>
          <Title order={3} className={classes.sectionTitle}>
            Latest query
          </Title>
          <SimpleGrid cols={2} spacing="xs">
            <Stat label="Duration" value={duration} />
            <Stat label="Rows scanned" value="2.42M" />
            <Stat label="Data read" value="386 MB" />
            <Stat label="Rows returned" value="28" />
          </SimpleGrid>
        </section>

        <section>
          <Title order={3} className={classes.sectionTitle}>
            Daily scan budget
          </Title>
          <Progress value={budget} aria-label="Daily scan budget used" />
          <div className={classes.meterRow}>
            <span>{Number.isInteger(budget) ? budget : budget.toFixed(1)} of 100 GB</span>
            <span>Resets at 00:00</span>
          </div>
        </section>

        <section>
          <Title order={3} className={classes.sectionTitle}>
            Settings for this answer
          </Title>
          <Select
            label="Date range"
            data={RANGES}
            value={range}
            onChange={(value) => value && onRangeChange(value)}
            allowDeselect={false}
            mb="xs"
          />
          <Switch
            label="Compare with last year"
            checked={compare}
            onChange={(event) => onCompareChange(event.currentTarget.checked)}
          />
          <Switch
            label="Re-run every Monday"
            checked={weekly}
            onChange={(event) => onWeeklyChange(event.currentTarget.checked)}
          />
        </section>

        <section>
          <Title order={3} className={classes.sectionTitle}>
            History
          </Title>
          <ul className={classes.history}>
            {history.slice(0, 6).map((item) => (
              <li key={item.id}>
                <span
                  className={classes.status}
                  data-status={item.status}
                  title={STATUS_LABELS[item.status]}
                />
                <span className={classes.query}>{item.query}</span>
                <span className={classes.time}>{item.time}</span>
              </li>
            ))}
          </ul>
        </section>
      </ScrollArea>
    </aside>
  );
}
