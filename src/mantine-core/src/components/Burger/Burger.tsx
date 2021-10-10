import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  ClassNames,
  useExtractedMargins,
} from '@mantine/styles';
import useStyles from './Burger.styles';

export type BurgerStylesNames = Exclude<ClassNames<typeof useStyles>, 'opened'>;

export interface BurgerProps
  extends DefaultProps<BurgerStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  /** Burger state: true for cross, false for burger */
  opened: boolean;

  /** Burger color value, not connected to theme.colors, defaults to theme.black with light color scheme and theme.white with dark */
  color?: MantineColor;

  /** Predefined burger size or number to set width and height in px */
  size?: MantineNumberSize;
}

export const Burger = forwardRef<HTMLButtonElement, BurgerProps>(
  (
    { className, style, opened, color, size = 'md', classNames, styles, ...others }: BurgerProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const _color = color || (theme.colorScheme === 'dark' ? theme.white : theme.black);
    const { classes, cx } = useStyles({ color: _color, size }, classNames, 'burger');
    const _styles = mergeStyles(classes, styles);
    const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });

    return (
      <button
        type="button"
        className={cx(classes.root, className)}
        ref={ref}
        style={mergedStyles}
        {...rest}
      >
        <div className={cx(classes.burger, { [classes.opened]: opened })} style={_styles.burger} />
      </button>
    );
  }
);

Burger.displayName = '@mantine/core/Burger';
