import { Avatar, type AvatarProps } from '@mantine/core';
import { PEOPLE, type Tone } from './data';

const TONES: Record<Tone, string> = {
  blue: '#3a6ea5',
  violet: '#8a4fa0',
  green: '#2f8a6e',
  orange: '#b3622a',
  gray: '#5b5f66',
  rose: '#a83f5d',
  bot: '#121315',
};

interface PersonAvatarProps extends Omit<AvatarProps, 'size' | 'color' | 'radius'> {
  who: string;
  size?: 36 | 26 | 20;
}

export function PersonAvatar({ who, size = 36, ...others }: PersonAvatarProps) {
  const person = PEOPLE[who];
  return (
    <Avatar size={size} radius={size / 4} color={TONES[person.tone]} {...others}>
      {person.initials}
    </Avatar>
  );
}
