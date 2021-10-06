import React, { forwardRef } from 'react';
import { MantineSize, getSizeValue, useExtractedMargins } from '@mantine/core';
import { sizes as DAY_SIZES } from '../../Month/Day/Day.styles';

interface CalendarWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  size: MantineSize;
  fullWidth: boolean;
}

export const CalendarWrapper = forwardRef<HTMLDivElement, CalendarWrapperProps>(
  ({ size, fullWidth, style, ...others }: CalendarWrapperProps, ref) => {
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    return (
      <div
        ref={ref}
        style={{
          maxWidth: fullWidth ? '100%' : getSizeValue({ size, sizes: DAY_SIZES }) * 7,
          ...mergedStyles,
        }}
        {...rest}
      />
    );
  }
);

CalendarWrapper.displayName = '@mantine/dates/CalendarWrapper';
