import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { AvatarIcon } from '@modulz/radix-icons';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles from './Avatar.styles';

interface AvatarProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  src: string;
  alt?: string;
  size?: MantineNumberSize;
  radius?: MantineNumberSize;
}

export function Avatar({
  className,
  size = 'md',
  src,
  alt,
  radius,
  themeOverride,
  ...others
}: AvatarProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ radius, size, theme });
  const [error, setError] = useState(!src);

  useEffect(() => {
    !src && setError(true);
  }, [src]);

  return (
    <div {...others} data-mantine-composable className={cx(classes.avatar, className)}>
      {error ? (
        <div className={classes.placeholder}>
          <AvatarIcon className={classes.placeholderIcon} />
        </div>
      ) : (
        <img className={classes.image} src={src} alt={alt} onError={() => setError(true)} />
      )}
    </div>
  );
}

Avatar.displayName = '@mantine/core/Avatar';
