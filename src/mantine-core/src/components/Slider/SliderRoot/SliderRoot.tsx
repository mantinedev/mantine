import React, { forwardRef } from 'react';
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
  size: MantineNumberSize;
  children: React.ReactNode;
}

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
  ({ className, style, size, classNames, styles, ...others }: SliderRootProps, ref) => {
    const { classes, cx } = useStyles({ size }, classNames, 'slider');
    const _styles = mergeStyles(classes, styles);
    const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });

    return (
      <div
        {...rest}
        tabIndex={-1}
        className={cx(classes.root, className)}
        ref={ref}
        style={mergedStyles}
      />
    );
  }
);

SliderRoot.displayName = '@mantine/core/SliderRoot';
