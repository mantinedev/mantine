import React, { forwardRef } from 'react';
import { MantineSize, useExtractedMargins, useSx, DefaultProps } from '@mantine/core';
import { sizes as DAY_SIZES } from '../../Month/Day/Day.styles';

interface CalendarWrapperProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  size: MantineSize;
  fullWidth: boolean;
  hasMultipleMonths?: boolean;
}

export const CalendarWrapper = forwardRef<HTMLDivElement, CalendarWrapperProps>(
  (
    { size, fullWidth, hasMultipleMonths, style, sx, className, ...others }: CalendarWrapperProps,
    ref
  ) => {
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const { sxClassName, theme } = useSx({ sx, className });

    const getMaxWidth = (sizeValues) => {
      const maxWidth = theme.fn.size(sizeValues) * 7;
      return hasMultipleMonths ? maxWidth * 2 + 16 : maxWidth;
    };

    return (
      <div
        ref={ref}
        className={sxClassName}
        style={{
          maxWidth: fullWidth ? '100%' : getMaxWidth({ size, sizes: DAY_SIZES }),
          ...mergedStyles,
        }}
        {...rest}
      />
    );
  }
);

CalendarWrapper.displayName = '@mantine/dates/CalendarWrapper';
