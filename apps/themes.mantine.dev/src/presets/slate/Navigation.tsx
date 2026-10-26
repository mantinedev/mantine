import { IconBell, IconMoon, IconPlus, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  NavLink,
  ScrollArea,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { type Channel, type DirectMessage, PEOPLE } from './data';
import { PersonAvatar } from './PersonAvatar';
import classes from './Navigation.module.css';

export function Rail() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <nav className={classes.rail} aria-label="Productions">
      <UnstyledButton
        className={classes.workspace}
        data-current
        title="The Lighthouse Keeper’s Daughter"
        aria-label="The Lighthouse Keeper’s Daughter, current"
      >
        LK
      </UnstyledButton>
      <UnstyledButton
        className={classes.workspace}
        title="Saltings, in post"
        aria-label="Saltings, in post"
      >
        SA
        <span className={classes.workspaceDot} />
      </UnstyledButton>
      <UnstyledButton
        className={classes.workspace}
        data-add
        title="Join a production"
        aria-label="Join a production"
      >
        <IconPlus size={18} stroke={1.8} />
      </UnstyledButton>
      <span className={classes.spacer} />
      <ActionIcon
        variant="subtle"
        size={38}
        radius={10}
        className={classes.railButton}
        aria-label="Switch color scheme"
        onClick={toggleColorScheme}
      >
        <IconMoon stroke={1.8} className={classes.moon} />
        <IconSun stroke={1.8} className={classes.sun} />
      </ActionIcon>
      <ActionIcon
        variant="subtle"
        size={38}
        radius={10}
        className={classes.railButton}
        aria-label="Notifications"
      >
        <IconBell stroke={1.8} />
      </ActionIcon>
    </nav>
  );
}

interface SidebarProps {
  channels: Channel[];
  dms: DirectMessage[];
  current: string;
  opened: boolean;
  onSelect: (id: string) => void;
}

function Unread({ count }: { count: number }) {
  return count ? (
    <Badge size="sm" radius="xl" className={classes.unread}>
      {count}
    </Badge>
  ) : null;
}

export function Sidebar({ channels, dms, current, opened, onSelect }: SidebarProps) {
  return (
    <aside className={classes.side} data-opened={opened || undefined} aria-label="Channels">
      <div className={classes.head}>
        <div className={classes.production}>The Lighthouse Keeper’s Daughter</div>
        <div className={classes.productionSub}>Shooting in Pembrokeshire, day 14 of 22</div>
      </div>

      <ScrollArea className={classes.scroll} type="hover">
        <div className={classes.groups}>
          <div className={classes.groupLabel}>
            Channels
            <ActionIcon variant="subtle" size={22} radius="sm" aria-label="Add channel">
              <IconPlus stroke={1.8} />
            </ActionIcon>
          </div>
          {channels.map((channel) => (
            <NavLink
              key={channel.id}
              component="button"
              variant="filled"
              className={classes.channel}
              active={channel.id === current}
              aria-current={channel.id === current}
              data-unread={channel.unread > 0 || undefined}
              label={channel.name}
              leftSection={<span className={classes.hash}>#</span>}
              rightSection={<Unread count={channel.unread} />}
              onClick={() => onSelect(channel.id)}
            />
          ))}

          <div className={classes.groupLabel}>
            Direct messages
            <ActionIcon variant="subtle" size={22} radius="sm" aria-label="New message">
              <IconPlus stroke={1.8} />
            </ActionIcon>
          </div>
          {dms.map((dm) => (
            <NavLink
              key={dm.id}
              component="button"
              variant="filled"
              className={classes.channel}
              active={dm.id === current}
              aria-current={dm.id === current}
              data-unread={dm.unread > 0 || undefined}
              label={PEOPLE[dm.who].name}
              leftSection={
                <span className={classes.presence} data-presence={PEOPLE[dm.who].presence} />
              }
              rightSection={<Unread count={dm.unread} />}
              onClick={() => onSelect(dm.id)}
            />
          ))}
        </div>
      </ScrollArea>

      <div className={classes.me}>
        <PersonAvatar who="ffion" size={26} />
        <span>
          <b>Ffion Rees</b>
          <span>2nd AD, on set</span>
        </span>
      </div>
    </aside>
  );
}
