'use client';

import { IconDropletFilled, IconMoon, IconPlus, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Checkbox,
  SegmentedControl,
  Select,
  ThemeIcon,
  Title,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { PersonAvatar } from './Chips';
import { PEOPLE, PERSON_IDS, type PersonId, STOCKS, type ViewId } from './data';
import classes from './Header.module.css';

interface HeaderProps {
  view: ViewId;
  onViewChange: (view: ViewId) => void;
  people: PersonId[];
  onTogglePerson: (person: PersonId) => void;
  thisWeek: boolean;
  onThisWeekChange: (value: boolean) => void;
  stock: string;
  onStockChange: (value: string) => void;
  result: string;
  onNewOrder: () => void;
}

const VIEWS = [
  { value: 'board', label: 'Board' },
  { value: 'list', label: 'List' },
  { value: 'calendar', label: 'Calendar' },
];

export function Header({
  view,
  onViewChange,
  people,
  onTogglePerson,
  thisWeek,
  onThisWeekChange,
  stock,
  onStockChange,
  result,
  onNewOrder,
}: HeaderProps) {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.root}>
      <div className={classes.titleRow}>
        <div className={classes.titleGroup}>
          <ThemeIcon size={44} radius="md" aria-hidden="true">
            <IconDropletFilled size={22} />
          </ThemeIcon>
          <div>
            <div className={classes.shop}>Inkwell Print Co., Leeds</div>
            <Title order={1} className={classes.title}>
              Orders
            </Title>
          </div>
        </div>

        <SegmentedControl
          className={classes.views}
          data={VIEWS}
          value={view}
          onChange={(value) => onViewChange(value as ViewId)}
          aria-label="View"
        />

        <div className={classes.titleActions}>
          <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
            <IconMoon size={18} stroke={1.9} className={classes.moon} />
            <IconSun size={18} stroke={1.9} className={classes.sun} />
          </ActionIcon>
          <Button
            className={classes.newOrder}
            leftSection={<IconPlus size={17} stroke={2.2} />}
            onClick={onNewOrder}
            aria-label="New order"
          >
            <span className={classes.newOrderLabel}>New order</span>
          </Button>
        </div>
      </div>

      <div className={classes.toolbar}>
        <div className={classes.people}>
          <span className={classes.label}>Assigned to</span>
          <div className={classes.peopleList} role="group" aria-label="Filter by assignee">
            {PERSON_IDS.map((id) => (
              <UnstyledButton
                key={id}
                className={classes.person}
                aria-pressed={people.includes(id)}
                aria-label={PEOPLE[id].name}
                onClick={() => onTogglePerson(id)}
              >
                <PersonAvatar who={id} size={30} />
              </UnstyledButton>
            ))}
          </div>
        </div>

        <Checkbox
          label="Due this week"
          checked={thisWeek}
          onChange={(event) => onThisWeekChange(event.currentTarget.checked)}
        />

        <div className={classes.stock}>
          <label htmlFor="inkwell-stock" className={classes.label}>
            Stock
          </label>
          <Select
            id="inkwell-stock"
            data={STOCKS}
            value={stock}
            onChange={(value) => value && onStockChange(value)}
            className={classes.stockSelect}
          />
        </div>

        <span className={classes.spacer} />
        <span className={classes.result}>{result}</span>
      </div>
    </header>
  );
}
