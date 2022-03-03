import React, { useEffect, useState, forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import { Box } from '../Box';
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon';
import useStyles from './Avatar.styles';

export type AvatarStylesNames = ClassNames<typeof useStyles>;

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
}

export type AvatarProps<C> = PolymorphicComponentProps<C, _AvatarProps>;

type AvatarComponent = (<C = 'div'>(props: AvatarProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const Avatar: AvatarComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      component,
      className,
      size = 'md',
      src,
      alt,
      radius = 'sm',
      children,
      color = 'gray',
      classNames,
      styles,
      imageProps,
      ...others
    }: AvatarProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles(
      { color, radius, size },
      { classNames, styles, name: 'Avatar' }
    );
    const [error, setError] = useState(!src);

    useEffect(() => {
      !src ? setError(true) : setError(false);
    }, [src]);

    return (
      <Box<any>
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
);

Avatar.displayName = '@mantine/core/Avatar';
