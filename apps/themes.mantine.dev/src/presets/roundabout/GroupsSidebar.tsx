'use client';

import { useState } from 'react';
import { IconMoon, IconSearch, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Text,
  TextInput,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { GROUPS, PHOTOS } from './data';
import { RoundaboutLogo } from './RoundaboutLogo';
import classes from './GroupsSidebar.module.css';

interface GroupsSidebarProps {
  className?: string;
  onOtherGroup: () => void;
}

export function GroupsSidebar({ className, onOtherGroup }: GroupsSidebarProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  const [query, setQuery] = useState('');
  const groups = GROUPS.filter(
    (group) => !query || group.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <aside className={`${classes.root} ${className}`} aria-label="Groups">
      <div className={classes.head}>
        <span className={classes.brand}>
          <RoundaboutLogo />
          Roundabout
        </span>
        <ActionIcon aria-label="Switch color scheme" onClick={() => toggleColorScheme()}>
          <IconMoon size={20} stroke={1.8} className={classes.moon} />
          <IconSun size={20} stroke={1.8} className={classes.sun} />
        </ActionIcon>
      </div>

      <div className={classes.search}>
        <TextInput
          type="search"
          variant="filled"
          placeholder="Search groups"
          aria-label="Search groups"
          leftSection={<IconSearch size={17} stroke={1.8} />}
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
        />
      </div>

      <ul className={classes.list}>
        {groups.length === 0 && (
          <li className={classes.empty}>
            <Text size="sm">No groups match. Try another name.</Text>
          </li>
        )}
        {groups.map((group) => (
          <li key={group.name}>
            <UnstyledButton
              className={classes.group}
              aria-current={group.current ? 'true' : undefined}
              onClick={() => !group.current && onOtherGroup()}
            >
              <Avatar
                className={classes.groupAvatar}
                size={44}
                radius={14}
                color={group.tone}
                src={group.current ? PHOTOS.aurora : undefined}
                alt=""
              >
                {group.initial}
              </Avatar>
              <span className={classes.name}>{group.name}</span>
              <span className={classes.time}>{group.time}</span>
              <span className={classes.last}>{group.last}</span>
              {group.unread ? (
                <Badge circle size="md" className={classes.unread}>
                  {group.unread}
                </Badge>
              ) : (
                <span />
              )}
            </UnstyledButton>
          </li>
        ))}
      </ul>
    </aside>
  );
}
