import dayjs from 'dayjs';
import { Box, DataAttributes } from '@mantine/core';
import { DateLabelFormat, DateStringValue } from '../../../types';
import { PickerControl, PickerControlProps } from '../../PickerControl';
import { useCalendarColumn, useCalendarContext } from '../Calendar.context';
import { formatLabel } from '../format-label/format-label';
import { getMonthInTabOrder } from './get-month-in-tab-order/get-month-in-tab-order';
import { getMonthsData } from './get-months-data/get-months-data';
import { getQuarterInTabOrder } from './get-quarter-in-tab-order/get-quarter-in-tab-order';
import { getQuartersData } from './get-quarters-data/get-quarters-data';
import { getYearInTabOrder } from './get-year-in-tab-order/get-year-in-tab-order';
import { getYearsData } from './get-years-data/get-years-data';
import { isMonthDisabled } from './is-month-disabled/is-month-disabled';
import { isQuarterDisabled } from './is-quarter-disabled/is-quarter-disabled';
import { isYearDisabled } from './is-year-disabled/is-year-disabled';
import classes from './ControlsList.module.css';

export type ControlsListKind = 'months' | 'quarters' | 'years';

type ListStylesNames<Kind extends ControlsListKind> =
  | `${Kind}List`
  | `${Kind}ListRow`
  | `${Kind}ListCell`
  | `${Kind}ListControl`;

export type MonthsListStylesNames = ListStylesNames<'months'>;
export type QuartersListStylesNames = ListStylesNames<'quarters'>;
export type YearsListStylesNames = ListStylesNames<'years'>;

export type GetControlProps = (
  date: DateStringValue
) => Partial<PickerControlProps> & DataAttributes;

export interface ControlsListProps {
  kind: ControlsListKind;
  period: DateStringValue;
  format: DateLabelFormat;
  getControlProps: GetControlProps | undefined;
  withCellSpacing: boolean | undefined;
  fullWidth: boolean | undefined;
  label?: string;
}

interface ListInput {
  kind: ControlsListKind;
  period: DateStringValue;
  minDate: DateStringValue | undefined;
  maxDate: DateStringValue | undefined;
  getControlProps: GetControlProps | undefined;
}

function getListData({ kind, period }: ListInput): DateStringValue[][] {
  if (kind === 'months') {
    return getMonthsData(period);
  }

  if (kind === 'quarters') {
    return getQuartersData(period);
  }

  return getYearsData(period);
}

function isControlDisabled({ kind, minDate, maxDate }: ListInput, date: DateStringValue) {
  if (kind === 'months') {
    return isMonthDisabled({ month: date, minDate, maxDate });
  }

  if (kind === 'quarters') {
    return isQuarterDisabled({ quarter: date, minDate, maxDate });
  }

  return isYearDisabled({ year: date, minDate, maxDate });
}

function getControlInTabOrder(input: ListInput, data: DateStringValue[][]) {
  const { kind, minDate, maxDate, getControlProps } = input;

  if (kind === 'months') {
    return getMonthInTabOrder({
      months: data,
      minDate,
      maxDate,
      getMonthControlProps: getControlProps,
    });
  }

  if (kind === 'quarters') {
    return getQuarterInTabOrder({
      quarters: data,
      minDate,
      maxDate,
      getQuarterControlProps: getControlProps,
    });
  }

  return getYearInTabOrder({ years: data, minDate, maxDate, getYearControlProps: getControlProps });
}

function isSameControl(kind: ControlsListKind, a: DateStringValue, b: DateStringValue | undefined) {
  if (!b) {
    return false;
  }

  if (kind === 'months') {
    return dayjs(a).isSame(b, 'month');
  }

  if (kind === 'quarters') {
    return a === b;
  }

  return dayjs(a).isSame(b, 'year');
}

export function ControlsList({
  kind,
  period,
  format,
  getControlProps,
  withCellSpacing,
  fullWidth,
  label,
}: ControlsListProps) {
  const ctx = useCalendarContext();
  const column = useCalendarColumn();
  const levelIndex = column?.index ?? 0;
  const { size, unstyled, __staticSelector } = ctx.stylesApiProps;

  const input: ListInput = {
    kind,
    period,
    minDate: ctx.minDate,
    maxDate: ctx.maxDate,
    getControlProps,
  };

  const data = getListData(input);
  const controlInTabOrder = getControlInTabOrder(input, data);

  const rows = data.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const controlProps = getControlProps?.(date);

      return (
        <td
          key={cellIndex}
          {...ctx.getStyles(`${kind}ListCell`)}
          data-with-spacing={withCellSpacing || undefined}
        >
          <PickerControl
            {...ctx.getStyles(`${kind}ListControl`)}
            size={size}
            unstyled={unstyled}
            fullWidth={fullWidth}
            __staticSelector={__staticSelector}
            disabled={isControlDisabled(input, date)}
            ref={(node) => {
              if (node) {
                ctx.navigation.getControlRef(levelIndex, rowIndex, cellIndex, node);
              }
            }}
            {...controlProps}
            onKeyDown={(event) => {
              controlProps?.onKeyDown?.(event);
              ctx.navigation.onControlKeyDown(levelIndex, event, { rowIndex, cellIndex, date });
            }}
            onClick={(event) => {
              controlProps?.onClick?.(event);
              ctx.onControlClick?.(event, date);
            }}
            onMouseEnter={(event) => {
              controlProps?.onMouseEnter?.(event);
              ctx.onControlMouseEnter?.(event, date);
            }}
            tabIndex={isSameControl(kind, date, controlInTabOrder) ? 0 : -1}
          >
            {controlProps?.children ?? formatLabel(format, date, ctx.locale)}
          </PickerControl>
        </td>
      );
    });

    return (
      <tr key={rowIndex} {...ctx.getStyles(`${kind}ListRow`)}>
        {cells}
      </tr>
    );
  });

  return (
    <Box
      component="table"
      size={size}
      {...ctx.getStyles(`${kind}List`)}
      role="grid"
      aria-label={label}
      data-full-width={fullWidth || undefined}
    >
      <tbody>{rows}</tbody>
    </Box>
  );
}

ControlsList.classes = classes;
