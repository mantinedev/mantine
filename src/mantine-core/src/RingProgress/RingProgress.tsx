import React, { ReactNode } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import { RingProgressCircle } from './RingProgressCircle';
import { RingProgressSVG } from './RingProgressSvg';
import useStyles, { sizes } from './RingProgress.styles';
import { RingProgressLabel } from './RingProgressLabel';

export const RING_PROGRESS_SIZES = sizes;

export interface RingProgressProps extends DefaultProps, React.ComponentProps<'div'> {
  /** Defines the text to be displayed on the center of the progress ring */
  label?: ReactNode;

  /** Defines the thickness of the progress ring */
  thickness?: number;

  /** Size of the progress ring */
  size?: MantineNumberSize;

  /** Defines the values in the form of section in the progress ring */
  sections?: { value: number; color: string }[];
}

const offsetCalculation = (thickness, value) => {
  const radius = 50 - thickness / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  return offset;
};

export function RingProgress({
  label,
  sections,
  size = 'md',
  thickness = 4,
  themeOverride,
  className,
  ...others
}: RingProgressProps) {
  const classes = useStyles({ size, theme: useMantineTheme(themeOverride) });

  let value: number = 0;
  let offset: number = 0;
  const sectionsData =
    sections &&
    sections.map((item) => {
      value += item.value;
      offset = offsetCalculation(thickness, value);

      return {
        value: item.value,
        color: item.color,
        offset,
      };
    });

  return (
    <div {...others} className={cx(classes.wrapperDiv, className)}>
      <RingProgressSVG size={size}>
        <RingProgressCircle thickness={thickness} stroke="silver" />
        {sectionsData &&
          sectionsData.map((section) => (
            <RingProgressCircle
              thickness={thickness}
              stroke={section.color}
              value={section.value}
              offset={section.offset}
            />
          ))}
      </RingProgressSVG>
      {label && <RingProgressLabel>{label}</RingProgressLabel>}
    </div>
  );
}

RingProgress.displayName = '@mantine/core/RingProgress';
