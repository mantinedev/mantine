import React from 'react';
import {
  mergeStyles,
  MantineNumberSize,
  DefaultProps,
  ClassNames,
  useExtractedMargins,
} from '@mantine/styles';
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
  const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });

  return (
    <div
      {...rest}
      tabIndex={-1}
      className={cx(classes.root, className)}
      ref={elementRef}
      style={mergedStyles}
    />
  );
}

SliderRoot.displayName = '@mantine/core/SliderRoot';
