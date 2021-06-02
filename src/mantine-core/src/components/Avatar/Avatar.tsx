import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '../../theme';
import { PlaceholderIcon } from './PlaceholderIcon';
import useStyles, { sizes } from './Avatar.styles';

export const AVATAR_SIZES = sizes;

export interface AvatarProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'div'> {
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
  classNames,
  ...others
}: AvatarProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, radius, size, theme }, classNames);
  const [error, setError] = useState(!src);

  useEffect(() => {
    !src ? setError(true) : setError(false);
  }, [src]);

  return (
    <div {...others} className={cx(classes.wrapper, className)}>
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
