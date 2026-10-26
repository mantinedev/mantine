'use client';

import {
  IconAdjustmentsHorizontal,
  IconCalendar,
  IconLayoutKanban,
  IconMoon,
  IconReceipt,
  IconSun,
  IconUser,
} from '@tabler/icons-react';
import { ActionIcon, Avatar, Tooltip, useMantineColorScheme } from '@mantine/core';
import classes from './Benchbook.module.css';

const ICON_PROPS = { size: 20, stroke: 1.75 };

const links = [
  { label: 'Commissions', icon: IconLayoutKanban, active: true },
  { label: 'Clients', icon: IconUser },
  { label: 'Calendar', icon: IconCalendar },
  { label: 'Invoices', icon: IconReceipt },
];

interface RailButtonProps {
  label: string;
  tooltip?: string;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

function RailButton({ label, tooltip, active, onClick, children }: RailButtonProps) {
  return (
    <Tooltip label={tooltip ?? label} position="right" offset={8}>
      <ActionIcon
        variant="subtle"
        size={42}
        className={classes.railButton}
        aria-label={label}
        aria-current={active ? 'page' : undefined}
        onClick={onClick}
      >
        {children}
      </ActionIcon>
    </Tooltip>
  );
}

export function Rail() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <nav className={classes.rail} aria-label="Main">
      <span className={classes.logo} aria-hidden>
        B
      </span>
      {links.map((link) => (
        <RailButton key={link.label} label={link.label} active={link.active}>
          <link.icon {...ICON_PROPS} />
        </RailButton>
      ))}
      <span className={classes.railSpacer} />
      <RailButton label="Switch color scheme" tooltip="Color scheme" onClick={toggleColorScheme}>
        <IconMoon {...ICON_PROPS} className={classes.moon} />
        <IconSun {...ICON_PROPS} className={classes.sun} />
      </RailButton>
      <RailButton label="Settings">
        <IconAdjustmentsHorizontal {...ICON_PROPS} />
      </RailButton>
      <Avatar size={34} classNames={{ placeholder: classes.railAvatar }} title="Tom Rowe">
        TR
      </Avatar>
    </nav>
  );
}
