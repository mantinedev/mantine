import React, { forwardRef } from 'react';
import { MantineNumberSize, DefaultProps, Selectors } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './SliderRoot.styles';

export type SliderRootStylesNames = Selectors<typeof useStyles>;

export interface SliderRootProps
  extends DefaultProps<SliderRootStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  size: MantineNumberSize;
  children: React.ReactNode;
  disabled: boolean;
  variant: string;
}

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
  (
    {
      className,
      size,
      classNames,
      styles,
      disabled,
      unstyled,
      variant,
      ...others
    }: SliderRootProps,
    ref
  ) => {
    const { classes, cx } = useStyles(null, {
      name: 'Slider',
      classNames,
      styles,
      unstyled,
      variant,
      size,
    });
    return <Box {...others} tabIndex={-1} className={cx(classes.root, className)} ref={ref} />;
  }
);

SliderRoot.displayName = '@mantine/core/SliderRoot';
