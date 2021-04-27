import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import { PlaceholderIcon } from './PlaceholderIcon';
import useStyles, { sizes } from './Avatar.styles';

export const AVATAR_SIZES = sizes;

interface AvatarProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Image url */
  src?: string;

  /** Image alt text or title for placeholder variant */
  alt?: string;

  /** Avatar width and height */
  size?: MantineNumberSize;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Color from theme used for letter and icon placeholders */
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
    !src ? setError(true) : setError(false);
  }, [src]);

  return (
    <div {...others} data-mantine-composable className={cx(classes.avatar, className)}>
      {error ? (
        <div data-mantine-placeholder className={classes.placeholder} title={alt}>
          {children || <PlaceholderIcon className={classes.placeholderIcon} />}
        </div>
      ) : (
        <img className={classes.image} src={src} alt={alt} onError={() => setError(true)} />
      )}
    </div>
  );
}

Avatar.displayName = '@mantine/core/Avatar';
