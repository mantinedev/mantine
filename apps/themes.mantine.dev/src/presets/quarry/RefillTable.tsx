'use client';

import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Paper, Table, UnstyledButton } from '@mantine/core';
import { lapsedByRegion, type RefillRow, refills } from './data';
import classes from './RefillTable.module.css';

type SortKey = keyof RefillRow;

const COLUMNS: { key: SortKey; label: string; numeric?: boolean }[] = [
  { key: 'name', label: 'Refill' },
  { key: 'aug', label: 'August', numeric: true },
  { key: 'sep', label: 'September', numeric: true },
  { key: 'chg', label: 'Change', numeric: true },
  { key: 'price', label: 'Price change', numeric: true },
];

const formatNumber = (value: number) => value.toLocaleString('en-GB');

function SortHeader({
  label,
  numeric,
  sort,
  onClick,
}: {
  label: string;
  numeric?: boolean;
  sort?: 'ascending' | 'descending';
  onClick?: () => void;
}) {
  return (
    <Table.Th aria-sort={sort} data-numeric={numeric || undefined}>
      <UnstyledButton className={classes.sort} onClick={onClick}>
        {label}
        {onClick && <IconChevronDown size={12} stroke={1.8} className={classes.sortIcon} />}
      </UnstyledButton>
    </Table.Th>
  );
}

export function RefillTable() {
  const [sortKey, setSortKey] = useState<SortKey>('chg');
  const [direction, setDirection] = useState(1);

  const rows = [...refills].sort(
    (a, b) => (a[sortKey] > b[sortKey] ? 1 : a[sortKey] < b[sortKey] ? -1 : 0) * direction
  );

  const onSort = (key: SortKey) => {
    if (key === sortKey) {
      setDirection((current) => -current);
    } else {
      setSortKey(key);
      setDirection(key === 'name' ? 1 : -1);
    }
  };

  return (
    <Paper className={classes.card}>
      <div className={classes.title}>Repeat orders by refill, August vs September</div>
      <Table.ScrollContainer minWidth={520} scrollAreaProps={{ offsetScrollbars: false }}>
        <Table className={classes.table}>
          <Table.Thead>
            <Table.Tr>
              {COLUMNS.map((column) => (
                <SortHeader
                  key={column.key}
                  label={column.label}
                  numeric={column.numeric}
                  sort={
                    column.key === sortKey
                      ? direction === 1
                        ? 'ascending'
                        : 'descending'
                      : undefined
                  }
                  onClick={() => onSort(column.key)}
                />
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.map((row) => (
              <Table.Tr key={row.name}>
                <Table.Td>{row.name}</Table.Td>
                <Table.Td data-numeric>{formatNumber(row.aug)}</Table.Td>
                <Table.Td data-numeric>{formatNumber(row.sep)}</Table.Td>
                <Table.Td data-numeric>
                  <span className={classes.change} data-down={row.chg <= -10 || undefined}>
                    {row.chg < 0 ? '−' : ''}
                    {Math.abs(row.chg)}%
                  </span>
                </Table.Td>
                <Table.Td data-numeric>
                  {row.price ? <span className={classes.priceUp}>+{row.price}%</span> : 'None'}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
}

export function LapsedTable() {
  return (
    <Paper className={classes.card}>
      <Table.ScrollContainer minWidth={520} scrollAreaProps={{ offsetScrollbars: false }}>
        <Table className={classes.table}>
          <Table.Thead>
            <Table.Tr>
              <SortHeader label="Region" />
              <SortHeader label="Lapsed customers" numeric />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {lapsedByRegion.map((row) => (
              <Table.Tr key={row.region}>
                <Table.Td>{row.region}</Table.Td>
                <Table.Td data-numeric>{row.lapsed}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
}
