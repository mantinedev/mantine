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
}

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
  ({ className, size, classNames, styles, disabled, ...others }: SliderRootProps, ref) => {
    const { classes, cx } = useStyles({ size, disabled }, { classNames, styles, name: 'Slider' });
    return <Box {...others} tabIndex={-1} className={cx(classes.root, className)} ref={ref} />;
  }
);

SliderRoot.displayName = '@mantine/core/SliderRoot';
