import React, { forwardRef } from 'react';
import { useMantineDefaultProps } from '@mantine/core';
import { CalendarBase, CalendarBaseProps } from '../CalendarBase/CalendarBase';

export type CalendarProps = CalendarBaseProps;

const defaultProps: Partial<CalendarProps> = {
  __staticSelector: 'Calendar',
};

export const Calendar = forwardRef<HTMLDivElement, CalendarBaseProps>(
  (props: CalendarProps, ref) => {
    const { __staticSelector = 'Calendar', ...others } = useMantineDefaultProps(
      'Calendar',
      defaultProps,
      props
    );

    return <CalendarBase __staticSelector={__staticSelector} ref={ref} {...others} />;
  }
);

Calendar.displayName = '@mantine/dates/Calendar';
