import React, { useEffect, useState, forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  ClassNames,
  useExtractedMargins,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon';
import useStyles from './Avatar.styles';

export type AvatarStylesNames = ClassNames<typeof useStyles>;

interface _AvatarProps extends DefaultProps<AvatarStylesNames> {
  /** Image url */
  src?: string;

  /** Image alt text or title for placeholder variant */
  alt?: string;

  /** Avatar width and height */
  size?: MantineNumberSize;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Color from theme used for letter and icon placeholders */
  color?: MantineColor;
}

export type AvatarProps<C extends React.ElementType> = PolymorphicComponentProps<C, _AvatarProps>;

type AvatarComponent = <C extends React.ElementType = 'div'>(
  props: AvatarProps<C>
) => React.ReactElement;

export const Avatar: AvatarComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      component,
      className,
      style,
      size = 'md',
      src,
      alt,
      radius = 'sm',
      children,
      color = 'gray',
      classNames,
      styles,
      sx,
      ...others
    }: AvatarProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles(
      { color, radius, size },
      { classNames, styles, sx, name: 'Avatar' }
    );
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const [error, setError] = useState(!src);
    const Element = component || 'div';

    useEffect(() => {
      !src ? setError(true) : setError(false);
    }, [src]);

    return (
      <Element {...rest} className={cx(classes.root, className)} style={mergedStyles} ref={ref}>
        {error ? (
          <div className={classes.placeholder} title={alt}>
            {children || <AvatarPlaceholderIcon className={classes.placeholderIcon} />}
          </div>
        ) : (
          <img className={classes.image} src={src} alt={alt} onError={() => setError(true)} />
        )}
      </Element>
    );
  }
);

Avatar.displayName = '@mantine/core/Avatar';
