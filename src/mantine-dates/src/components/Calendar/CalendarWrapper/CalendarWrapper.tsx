import React from 'react';
import { MantineSize, getSizeValue, useExtractedMargins } from '@mantine/core';
import { sizes as DAY_SIZES } from '../../Month/Day/Day.styles';

interface CalendarWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  size: MantineSize;
  fullWidth: boolean;
}

export function CalendarWrapper({ size, fullWidth, style, ...others }: CalendarWrapperProps) {
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  return (
    <div
      style={{
        maxWidth: fullWidth ? '100%' : getSizeValue({ size, sizes: DAY_SIZES }) * 7,
        ...mergedStyles,
      }}
      {...rest}
    />
  );
}

CalendarWrapper.displayName = '@mantine/dates/CalendarWrapper';
