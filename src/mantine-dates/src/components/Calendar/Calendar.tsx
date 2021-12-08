import React, { forwardRef } from 'react';
import { CalendarBase, CalendarBaseProps } from '../CalendarBase/CalendarBase';

export type CalendarProps = CalendarBaseProps;

export const Calendar = forwardRef<HTMLDivElement, CalendarBaseProps>(
  ({ __staticSelector = 'Calendar', ...others }: CalendarProps, ref) => (
    <CalendarBase __staticSelector={__staticSelector} ref={ref} {...others} />
  )
);

Calendar.displayName = '@mantine/dates/Calendar';
