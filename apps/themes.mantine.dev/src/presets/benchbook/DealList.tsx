'use client';

import { IconPlus, IconSearch } from '@tabler/icons-react';
import { ActionIcon, Chip, Group, TextInput, Title, UnstyledButton } from '@mantine/core';
import { CommissionMeter } from './CommissionMeter';
import { type Deal, type DealFilter, dealFilters, formatMoney, STAGES } from './data';
import classes from './Benchbook.module.css';

interface DealListProps {
  deals: Deal[];
  selected: string;
  onSelect: (id: string) => void;
  filter: DealFilter;
  onFilterChange: (filter: DealFilter) => void;
  query: string;
  onQueryChange: (query: string) => void;
}

export function DealList({
  deals,
  selected,
  onSelect,
  filter,
  onFilterChange,
  query,
  onQueryChange,
}: DealListProps) {
  return (
    <section className={classes.listPane} aria-label="Commissions">
      <div className={classes.listHead}>
        <Title order={1} className={classes.listTitle}>
          Commissions
        </Title>
        <ActionIcon aria-label="New commission">
          <IconPlus size={20} stroke={1.75} />
        </ActionIcon>
      </div>

      <TextInput
        type="search"
        className={classes.search}
        placeholder="Search clients and pieces"
        aria-label="Search commissions"
        leftSection={<IconSearch size={17} stroke={1.75} />}
        value={query}
        onChange={(event) => onQueryChange(event.currentTarget.value)}
      />

      <Chip.Group value={filter} onChange={(value) => onFilterChange(value as DealFilter)}>
        <Group gap={6} className={classes.chips} role="group" aria-label="Show">
          {dealFilters.map((item) => (
            <Chip key={item.value} value={item.value}>
              {item.label} <span className={classes.chipCount}>{item.count}</span>
            </Chip>
          ))}
        </Group>
      </Chip.Group>

      <ul className={classes.deals}>
        {deals.length === 0 && (
          <li className={classes.emptyList}>
            No commissions match. Try another name or clear the search.
          </li>
        )}
        {deals.map((deal) => (
          <li key={deal.id}>
            <UnstyledButton
              className={classes.deal}
              aria-current={deal.id === selected}
              onClick={() => onSelect(deal.id)}
            >
              <span className={classes.dealClient}>{deal.client}</span>
              <span className={classes.dealValue}>{formatMoney(deal.value)}</span>
              <span className={classes.dealProject}>{deal.project}</span>
              <span className={classes.dealDue} data-late={deal.late || undefined}>
                {deal.due}
              </span>
              <span className={classes.meterRow}>
                <CommissionMeter stage={deal.stage} />
                {STAGES[deal.stage]}
              </span>
            </UnstyledButton>
          </li>
        ))}
      </ul>
    </section>
  );
}
