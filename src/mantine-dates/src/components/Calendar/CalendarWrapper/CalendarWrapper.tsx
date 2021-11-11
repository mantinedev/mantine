import React, { forwardRef } from 'react';
import { MantineSize, useExtractedMargins, useSx, DefaultProps } from '@mantine/core';
import { sizes as DAY_SIZES } from '../../Month/Day/Day.styles';

interface CalendarWrapperProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  size: MantineSize;
  fullWidth: boolean;
  amountOfMonths?: number;
}

export const CalendarWrapper = forwardRef<HTMLDivElement, CalendarWrapperProps>(
  (
    { size, fullWidth, amountOfMonths = 1, style, sx, className, ...others }: CalendarWrapperProps,
    ref
  ) => {
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const { sxClassName, theme } = useSx({ sx, className });
    const _maxWidth = theme.fn.size({ size, sizes: DAY_SIZES }) * 7;
    const maxWidth =
      amountOfMonths > 1 ? _maxWidth * amountOfMonths + (amountOfMonths - 1) * 16 : _maxWidth;

    return (
      <div
        ref={ref}
        className={sxClassName}
        style={{
          maxWidth: fullWidth ? '100%' : maxWidth,
          ...mergedStyles,
        }}
        {...rest}
      />
    );
  }
);

CalendarWrapper.displayName = '@mantine/dates/CalendarWrapper';
