import React, { useState } from 'react';
import cx from 'clsx';
import { AvatarIcon } from '@modulz/radix-icons';
import { useMantineTheme, DefaultProps } from '@mantine/theme';
import useStyles from './Avatar.styles';

interface AvatarProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  src: string;
  size?: number;
  alt?: string;
}

export default function Avatar({
  className,
  size = 60,
  style,
  src,
  alt,
  themeOverride,
  ...others
}: AvatarProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  const [error, setError] = useState(!src);

  return (
    <div
      {...others}
      data-mantine-composable
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
