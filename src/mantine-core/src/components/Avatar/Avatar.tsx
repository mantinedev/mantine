import React, { useEffect, useState, forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  Selectors,
  PolymorphicComponentProps,
  PolymorphicRef,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon';
import useStyles from './Avatar.styles';

export type AvatarStylesNames = Selectors<typeof useStyles>;

interface _AvatarProps extends DefaultProps<AvatarStylesNames> {
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

  /** `img` element attributes */
  imageProps?: React.ComponentPropsWithoutRef<'img'>;

  /** Custom placeholder */
  children?: React.ReactNode;
}

export type AvatarProps<C> = PolymorphicComponentProps<C, _AvatarProps>;

type AvatarComponent = (<C = 'div'>(props: AvatarProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<AvatarProps<any>> = {
  size: 'md',
  color: 'gray',
};

export const Avatar: AvatarComponent = forwardRef(
  (props: AvatarProps<'div'>, ref: PolymorphicRef<'div'>) => {
    const {
      component,
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
    const { classes, cx } = useStyles(
      { color, radius, size },
      { classNames, styles, name: 'Avatar' }
    );
    const [error, setError] = useState(!src);

    useEffect(() => {
      !src ? setError(true) : setError(false);
    }, [src]);

    return (
      <Box
        component={component || 'div'}
        className={cx(classes.root, className)}
        ref={ref}
        {...others}
      >
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
  }
) as any;

Avatar.displayName = '@mantine/core/Avatar';
