import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  MantineColor,
  rem,
} from '../../core';
import classes from './RingProgress.module.css';
import { getCurves } from './get-curves/get-curves';
import { Curve } from './Curve/Curve';

interface RingProgressSection extends React.ComponentPropsWithRef<'circle'> {
  value: number;
  color: MantineColor;
  tooltip?: React.ReactNode;
}

export type RingProgressStylesNames = 'root' | 'svg' | 'label' | 'curve';
export type RingProgressCssVariables = {
  root: '--rp-size' | '--rp-label-offset';
};

export interface RingProgressProps
  extends BoxProps,
    StylesApiProps<RingProgressFactory>,
    ElementProps<'div'> {
  /** Label displayed in the center of the ring */
  label?: React.ReactNode;

  /** Ring thickness */
  thickness?: number;

  /** Width and height of the progress ring */
  size?: number;

  /** Sets whether the edges of the progress circle are rounded */
  roundCaps?: boolean;

  /** Ring sections */
  sections: RingProgressSection[];

  /** Color of the root section, key of theme.colors or CSS color value */
  rootColor?: MantineColor;
}

export type RingProgressFactory = Factory<{
  props: RingProgressProps;
  ref: HTMLDivElement;
  stylesNames: RingProgressStylesNames;
  vars: RingProgressCssVariables;
}>;

const defaultProps: Partial<RingProgressProps> = {
  size: 120,
  thickness: 12,
};

const varsResolver = createVarsResolver<RingProgressFactory>((_, { size, thickness }) => ({
  root: {
    '--rp-size': rem(size),
    '--rp-label-offset': rem(thickness! * 2),
  },
}));

export const RingProgress = factory<RingProgressFactory>((_props, ref) => {
  const props = useProps('RingProgress', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    label,
    sections,
    size,
    thickness,
    roundCaps,
    rootColor,
    ...others
  } = props;

  const getStyles = useStyles<RingProgressFactory>({
    name: 'RingProgress',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const curves = getCurves({
    size: size!,
    thickness: thickness!,
    sections,
    renderRoundedLineCaps: roundCaps,
    rootColor,
  }).map(({ data, sum, root, lineRoundCaps, offset }, index) => (
    <Curve
      {...data}
      key={index}
      size={size!}
      thickness={thickness!}
      sum={sum}
      offset={offset}
      color={data?.color}
      root={root}
      lineRoundCaps={lineRoundCaps}
      getStyles={getStyles}
    />
  ));

  return (
    <Box {...getStyles('root')} size={size} ref={ref} {...others}>
      <svg {...getStyles('svg')}>{curves}</svg>
      {label && <div {...getStyles('label')}>{label}</div>}
    </Box>
  );
});

RingProgress.classes = classes;
RingProgress.displayName = '@mantine/core/RingProgress';
