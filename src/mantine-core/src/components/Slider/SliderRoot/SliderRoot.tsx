import React from 'react';
import { mergeStyles, MantineNumberSize, DefaultProps, ClassNames } from '@mantine/styles';
import useStyles from './SliderRoot.styles';

export type SliderRootStylesNames = ClassNames<typeof useStyles>;

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
  const { classes, cx } = useStyles({ size }, classNames, 'slider');
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
