import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Avatar.styles.less';

interface AvatarProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  src: string;
  size?: number;
  alt?: string;
}

export default function Avatar({ className, size = 60, style, src, alt, ...others }: AvatarProps) {
  return (
    <div
      {...others}
      data-composable
      className={cx(classes.avatar, className)}
      style={{ ...style, width: size, height: size, borderRadius: size }}
    >
      <img className={classes.image} src={src} alt={alt} />
    </div>
  );
}

Avatar.displayName = '@mantine/core/Avatar';
