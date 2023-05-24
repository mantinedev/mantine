import React, { forwardRef } from 'react';
import { DefaultProps, Selectors, useComponentDefaultProps, Box, MantineSize } from '@mantine/core';
import type { DayOfWeek } from '../../types';
import { useDatesContext } from '../DatesProvider';
import { getWeekdayNames } from './get-weekdays-names/get-weekdays-names';
import useStyles from './WeekdaysRow.styles';

export type WeekdaysRowStylesNames = Selectors<typeof useStyles>;

export interface WeekdaysRowProps
  extends DefaultProps<WeekdaysRowStylesNames>,
    React.ComponentPropsWithoutRef<'tr'> {
  variant?: string;
  __staticSelector?: string;

  /** Controls size */
  size?: MantineSize;

  /** dayjs locale, defaults to value defined in DatesProvider */
  locale?: string;

  /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** dayjs format to get weekday name, defaults to "dd" */
  weekdayFormat?: string | ((date: Date) => React.ReactNode);

  /** Choose cell type that will be used to render weekdays, defaults to th */
  cellComponent?: 'td' | 'th';
}

const defaultProps: Partial<WeekdaysRowProps> = {
  weekdayFormat: 'dd',
  cellComponent: 'th',
  size: 'sm',
};

export const WeekdaysRow = forwardRef<HTMLTableRowElement, WeekdaysRowProps>((props, ref) => {
  const {
    className,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    cellComponent: CellComponent,
    __staticSelector,
    classNames,
    styles,
    unstyled,
    variant,
    size,
    ...others
  } = useComponentDefaultProps('WeekdaysRow', defaultProps, props);

  const ctx = useDatesContext();

  const { classes, cx } = useStyles(null, {
    name: ['WeekdaysRow', __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  const weekdays = getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
  }).map((weekday, index) => (
    <CellComponent key={index} className={classes.weekday}>
      {weekday}
    </CellComponent>
  ));

  return (
    <Box component="tr" ref={ref} className={cx(classes.weekdaysRow, className)} {...others}>
      {weekdays}
    </Box>
  );
});

WeekdaysRow.displayName = '@mantine/dates/WeekdaysRow';
