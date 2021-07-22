import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize, mergeStyles } from '../../theme';
import { PlaceholderIcon } from './PlaceholderIcon';
import useStyles, { sizes } from './Avatar.styles';

export const AVATAR_SIZES = sizes;

export type AvatarStylesNames = keyof ReturnType<typeof useStyles>;

export interface AvatarProps
  extends DefaultProps<AvatarStylesNames>,
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
  style,
  size = 'md',
  src,
  alt,
  radius = 'sm',
  children,
  color = 'gray',
  themeOverride,
  classNames,
  styles,
  ...others
}: AvatarProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, radius, size, theme }, classNames, 'avatar');
  const _styles = mergeStyles(classes, styles);
  const [error, setError] = useState(!src);

  useEffect(() => {
    !src ? setError(true) : setError(false);
  }, [src]);

  return (
    <div {...others} className={cx(classes.root, className)} style={{ ..._styles.root, ...style }}>
      {error ? (
        <div className={classes.placeholder} title={alt} style={_styles.placeholder}>
          {children || (
            <PlaceholderIcon className={classes.placeholderIcon} style={_styles.placeholderIcon} />
          )}
        </div>
      ) : (
        <img
          className={classes.image}
          src={src}
          alt={alt}
          onError={() => setError(true)}
          style={_styles.image}
        />
      )}
    </div>
  );
}

Avatar.displayName = '@mantine/core/Avatar';
