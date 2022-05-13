import React, { useEffect, useState, forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  Selectors,
  useMantineDefaultProps,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../Box';
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon';
import { AvatarGroup } from './AvatarGroup/AvatarGroup';
import { useAvatarGroupContext } from './AvatarGroup/AvatarGroup.context';
import useStyles from './Avatar.styles';

export type AvatarStylesNames = Selectors<typeof useStyles>;

export interface AvatarProps extends DefaultProps<AvatarStylesNames> {
  /** Image url */
  src?: string | null;

  /** Image alt text or title for placeholder variant */
  alt?: string;

  /** Avatar width and height */
  size?: MantineNumberSize;

  /** Value from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Color from theme.colors used for letter and icon placeholders */
  color?: MantineColor;

  /** img element attributes */
  imageProps?: Record<string, any>;

  /** Custom placeholder */
  children?: React.ReactNode;
}

const defaultProps: Partial<AvatarProps> = {
  size: 'md',
  color: 'gray',
};

export const _Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    className,
    size,
    src,
    alt,
    radius,
    children,
    color,
    classNames,
    styles,
    imageProps,
    ...others
  } = useMantineDefaultProps('Avatar', defaultProps, props);
  const ctx = useAvatarGroupContext();

  const { classes, cx } = useStyles(
    { color, radius, size, withinGroup: ctx.withinGroup, spacing: ctx.spacing },
    { classNames, styles, name: 'Avatar' }
  );
  const [error, setError] = useState(!src);

  useEffect(() => {
    !src ? setError(true) : setError(false);
  }, [src]);

  return (
    <Box component="div" className={cx(classes.root, className)} ref={ref} {...others}>
      {error ? (
        <div className={classes.placeholder} title={alt}>
          {children || <AvatarPlaceholderIcon className={classes.placeholderIcon} />}
        </div>
      ) : (
        <img
          {...imageProps}
          className={classes.image}
          src={src}
          alt={alt}
          onError={() => setError(true)}
        />
      )}
    </Box>
  );
}) as any;

_Avatar.displayName = '@mantine/core/Avatar';
_Avatar.Group = AvatarGroup;

export const Avatar = createPolymorphicComponent<'div', AvatarProps, { Group: typeof AvatarGroup }>(
  _Avatar
);
