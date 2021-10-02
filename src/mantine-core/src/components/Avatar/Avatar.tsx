import React, { useEffect, useState } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  mergeStyles,
  ClassNames,
  useExtractedMargins,
} from '@mantine/styles';
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon';
import useStyles from './Avatar.styles';

export type AvatarStylesNames = ClassNames<typeof useStyles>;

interface _AvatarProps<C extends React.ElementType, R extends HTMLElement>
  extends DefaultProps<AvatarStylesNames> {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

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

export type AvatarProps<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
> = _AvatarProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof _AvatarProps<C, R>>;

export function Avatar<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
>({
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
  elementRef,
  ...others
}: AvatarProps<C, R>) {
  const { classes, cx } = useStyles({ color, radius, size }, classNames, 'avatar');
  const _styles = mergeStyles(classes, styles);
  const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });
  const [error, setError] = useState(!src);
  const Element = component || 'div';

  useEffect(() => {
    !src ? setError(true) : setError(false);
  }, [src]);

  return (
    <Element
      {...rest}
      className={cx(classes.root, className)}
      style={mergedStyles}
      ref={elementRef as any}
    >
      {error ? (
        <div className={classes.placeholder} title={alt} style={_styles.placeholder}>
          {children || (
            <AvatarPlaceholderIcon
              className={classes.placeholderIcon}
              style={_styles.placeholderIcon}
            />
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
    </Element>
  );
}

Avatar.displayName = '@mantine/core/Avatar';
