import React from 'react';
import cx from 'clsx';
import { MantineNumberSize, DefaultProps, mergeStyles, useMantineTheme } from '../../../theme';
import useStyles from './SliderRoot.styles';

export type SliderRootStylesNames = keyof ReturnType<typeof useStyles>;

interface SliderRootProps
  extends DefaultProps<SliderRootStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  elementRef: React.ForwardedRef<HTMLDivElement>;
  size: MantineNumberSize;
  children: React.ReactNode;
}

export function SliderRoot({
  className,
  style,
  elementRef,
  size,
  classNames,
  styles,
  ...others
}: SliderRootProps) {
  const theme = useMantineTheme();
  const classes = useStyles({ theme, size }, classNames, 'slider');
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      {...others}
      tabIndex={-1}
      className={cx(classes.root, className)}
      ref={elementRef}
      style={{ ...style, ..._styles.root }}
    />
  );
}

SliderRoot.displayName = '@mantine/core/SliderRoot';
