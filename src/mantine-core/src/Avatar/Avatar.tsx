import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { AvatarIcon } from '@modulz/radix-icons';
import { useMantineTheme, DefaultProps, MantineNumberSize, getSizeValue } from '@mantine/theme';
import useStyles from './Avatar.styles';

interface AvatarProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  src: string;
  size?: number;
  alt?: string;
  radius?: MantineNumberSize;
}

export function Avatar({
  className,
  size = 60,
  style,
  src,
  alt,
  radius,
  themeOverride,
  ...others
}: AvatarProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const [error, setError] = useState(!src);
  const [loading, setLoading] = useState(!!src);

  useEffect(() => {
    if (!src) {
      setError(true);
    } else {
      setLoading(true);
    }
  }, [src]);

  return (
    <div
      {...others}
      data-mantine-composable
      className={cx(classes.avatar, { [classes.loading]: loading }, className)}
      style={{
        ...style,
        width: size,
        height: size,
        borderRadius: radius ? getSizeValue({ size: radius, sizes: theme.radius }) : size,
      }}
    >
      {error ? (
        <div
          className={classes.placeholder}
          style={{ width: size, height: size, borderRadius: size }}
        >
          <AvatarIcon className={classes.placeholderIcon} />
        </div>
      ) : (
        <img
          onLoad={() => setLoading(true)}
          className={classes.image}
          src={src}
          alt={alt}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

Avatar.displayName = '@mantine/core/Avatar';
