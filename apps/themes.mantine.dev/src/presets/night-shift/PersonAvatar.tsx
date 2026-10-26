import { Avatar, type AvatarProps } from '@mantine/core';
import type { Person } from './data';
import classes from './NightShift.module.css';

interface PersonAvatarProps extends AvatarProps {
  person: Person;
}

export function PersonAvatar({ person, className, ...others }: PersonAvatarProps) {
  return (
    <Avatar
      {...others}
      className={className ? `${classes.person} ${className}` : classes.person}
      data-tone={person.tone}
      title={person.name}
      alt={person.name}
    >
      {person.initials}
    </Avatar>
  );
}
