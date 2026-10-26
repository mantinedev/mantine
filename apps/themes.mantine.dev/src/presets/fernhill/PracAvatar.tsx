import { Avatar, type AvatarProps } from '@mantine/core';
import classes from './PracAvatar.module.css';

interface PracAvatarProps extends AvatarProps {
  index: number;
  children: React.ReactNode;
}

export function PracAvatar({ index, className, ...others }: PracAvatarProps) {
  return (
    <Avatar
      {...others}
      className={className ? `${classes.root} ${className}` : classes.root}
      data-tone={index}
    />
  );
}
