import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { AvatarIcon } from '@modulz/radix-icons';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles from './Avatar.styles';

interface AvatarProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Image link */
  src?: string;

  /** Image alt text */
  alt?: string;

  /** Image width and height */
  size?: MantineNumberSize;

  /** Image border-radius */
  radius?: MantineNumberSize;

  /** Color from theme used for letter and icon variant */
  color?: string;
}

export function Avatar({
  className,
  size = 'md',
  src,
  alt,
  radius = 'sm',
  children,
  color = 'gray',
  themeOverride,
  ...others
}: AvatarProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, radius, size, theme });
  const [error, setError] = useState(!src);

  useEffect(() => {
    !src && setError(true);
  }, [src]);

  return (
    <div {...others} data-mantine-composable className={cx(classes.avatar, className)}>
      {error ? (
        <div data-mantine-placeholder className={classes.placeholder} title={alt}>
          {children || <AvatarIcon className={classes.placeholderIcon} />}
        </div>
      ) : (
        <img className={classes.image} src={src} alt={alt} onError={() => setError(true)} />
      )}
    </div>
  );
}

Avatar.displayName = '@mantine/core/Avatar';
