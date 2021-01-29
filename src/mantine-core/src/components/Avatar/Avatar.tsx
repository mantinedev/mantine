import React, { useState } from 'react';
import cx from 'clsx';
import { AvatarIcon } from '@modulz/radix-icons';
import { DefaultProps } from '@mantine/types';
import classes from './Avatar.styles.less';

interface AvatarProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  src: string;
  size?: number;
  alt?: string;
}

export default function Avatar({ className, size = 60, style, src, alt, ...others }: AvatarProps) {
  const [error, setError] = useState(!src);

  return (
    <div
      {...others}
      data-composable
      className={cx(classes.avatar, className)}
      style={{ ...style, width: size, height: size, borderRadius: size }}
    >
      {error ? (
        <div
          className={classes.placeholder}
          style={{ width: size, height: size, borderRadius: size }}
        >
          <AvatarIcon className={classes.placeholderIcon} />
        </div>
      ) : (
        <img className={classes.image} src={src} alt={alt} onError={() => setError(true)} />
      )}
    </div>
  );
}

Avatar.displayName = '@mantine/core/Avatar';
