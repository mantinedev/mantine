import React, { forwardRef } from 'react';
import {
  MantineSize,
  useMantineTheme,
  useExtractedMargins,
  useSx,
  DefaultProps,
} from '@mantine/core';
import { sizes as DAY_SIZES } from '../../Month/Day/Day.styles';

interface CalendarWrapperProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  size: MantineSize;
  fullWidth: boolean;
}

export const CalendarWrapper = forwardRef<HTMLDivElement, CalendarWrapperProps>(
  ({ size, fullWidth, style, sx, className, ...others }: CalendarWrapperProps, ref) => {
    const theme = useMantineTheme();
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const { sxClassName } = useSx({ sx, className });
    return (
      <div
        ref={ref}
        className={sxClassName}
        style={{
          maxWidth: fullWidth ? '100%' : theme.fn.size({ size, sizes: DAY_SIZES }) * 7,
          ...mergedStyles,
        }}
        {...rest}
      />
    );
  }
);

CalendarWrapper.displayName = '@mantine/dates/CalendarWrapper';
