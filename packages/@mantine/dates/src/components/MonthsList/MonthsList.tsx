import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { ControlsGroupSettings, DateStringValue } from '../../types';
import { toDateString } from '../../utils';
import { useDatesContext } from '../DatesProvider';
import { PickerControl, PickerControlProps } from '../PickerControl';
import { getMonthInTabOrder } from './get-month-in-tab-order/get-month-in-tab-order';
import { getMonthsData } from './get-months-data/get-months-data';
import { isMonthDisabled } from './is-month-disabled/is-month-disabled';
import classes from './MonthsList.module.css';

export type MonthsListStylesNames =
  | 'monthsList'
  | 'monthsListCell'
  | 'monthsListRow'
  | 'monthsListControl';

export interface MonthsListSettings extends ControlsGroupSettings {
  /** `dayjs` format for months list */
  monthsListFormat?: string;

  /** Passes props down month picker control */
  getMonthControlProps?: (date: DateStringValue) => Partial<PickerControlProps> & DataAttributes;

  /** Determines whether controls should be separated @default `true` */
  withCellSpacing?: boolean;
}

export interface MonthsListProps
  extends BoxProps,
    MonthsListSettings,
    StylesApiProps<MonthsListFactory>,
    ElementProps<'table'> {
  __staticSelector?: string;

  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean;

  /** Determines whether propagation for Escape key should be stopped */
  __stopPropagation?: boolean;

  /** Year for which months list should be displayed */
  year: DateStringValue;

  /** Component size */
  size?: MantineSize;
}

export type MonthsListFactory = Factory<{
  props: MonthsListProps;
  ref: HTMLTableElement;
  stylesNames: MonthsListStylesNames;
}>;

const defaultProps = {
  monthsListFormat: 'MMM',
  withCellSpacing: true,
} satisfies Partial<MonthsListProps>;

export const MonthsList = factory<MonthsListFactory>((_props, ref) => {
  const props = useProps('MonthsList', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    year,
    monthsListFormat,
    locale,
    minDate,
    maxDate,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<MonthsListFactory>({
    name: __staticSelector || 'MonthsList',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    rootSelector: 'monthsList',
  });

  const ctx = useDatesContext();

  const months = getMonthsData(year);

  const monthInTabOrder = getMonthInTabOrder({
    months,
    minDate: toDateString(minDate)!,
    maxDate: toDateString(maxDate)!,
    getMonthControlProps,
  });

  const rows = months.map((monthsRow, rowIndex) => {
    const cells = monthsRow.map((month, cellIndex) => {
      const controlProps = getMonthControlProps?.(month);
      const isMonthInTabOrder = dayjs(month).isSame(monthInTabOrder, 'month');
      return (
        <td
          key={cellIndex}
          {...getStyles('monthsListCell')}
          data-with-spacing={withCellSpacing || undefined}
        >
          <PickerControl
            {...getStyles('monthsListControl')}
            size={size}
            unstyled={unstyled}
            __staticSelector={__staticSelector || 'MonthsList'}
            data-mantine-stop-propagation={__stopPropagation || undefined}
            disabled={isMonthDisabled({
              month,
              minDate: toDateString(minDate)!,
              maxDate: toDateString(maxDate)!,
            })}
            ref={(node) => {
              if (node) {
                __getControlRef?.(rowIndex, cellIndex, node);
              }
            }}
            {...controlProps}
            onKeyDown={(event) => {
              controlProps?.onKeyDown?.(event);
              __onControlKeyDown?.(event, { rowIndex, cellIndex, date: month });
            }}
            onClick={(event) => {
              controlProps?.onClick?.(event);
              __onControlClick?.(event, month);
            }}
            onMouseEnter={(event) => {
              controlProps?.onMouseEnter?.(event);
              __onControlMouseEnter?.(event, month);
            }}
            onMouseDown={(event) => {
              controlProps?.onMouseDown?.(event);
              __preventFocus && event.preventDefault();
            }}
            tabIndex={__preventFocus || !isMonthInTabOrder ? -1 : 0}
          >
            {dayjs(month).locale(ctx.getLocale(locale)).format(monthsListFormat)}
          </PickerControl>
        </td>
      );
    });

    return (
      <tr key={rowIndex} {...getStyles('monthsListRow')}>
        {cells}
      </tr>
    );
  });

  return (
    <Box component="table" ref={ref} size={size} {...getStyles('monthsList')} {...others}>
      <tbody>{rows}</tbody>
    </Box>
  );
});

MonthsList.classes = classes;
MonthsList.displayName = '@mantine/dates/MonthsList';
