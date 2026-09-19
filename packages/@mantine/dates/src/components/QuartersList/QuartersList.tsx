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
import { ControlsGroupSettings, DateLabelFormat, DateStringValue } from '../../types';
import { toDateString } from '../../utils';
import { useDatesContext } from '../DatesProvider';
import { PickerControl, PickerControlProps } from '../PickerControl';
import { getQuarterInTabOrder } from './get-quarter-in-tab-order/get-quarter-in-tab-order';
import { getQuartersData } from './get-quarters-data/get-quarters-data';
import { isQuarterDisabled } from './is-quarter-disabled/is-quarter-disabled';
import classes from './QuartersList.module.css';

export type QuartersListStylesNames =
  | 'quartersList'
  | 'quartersListCell'
  | 'quartersListRow'
  | 'quartersListControl';

export interface QuartersListSettings extends ControlsGroupSettings {
  /** `dayjs` format for quarters list or a function that returns quarter label based on the date value @default "[Q]Q" @category appearance */
  quartersListFormat?: DateLabelFormat;

  /** Passes props down to quarter picker control */
  getQuarterControlProps?: (date: DateStringValue) => Partial<PickerControlProps> & DataAttributes;

  /** Determines whether controls should be separated @default true @category appearance */
  withCellSpacing?: boolean;

  /** Determines whether the list should take the full width of its container @default false @category appearance */
  fullWidth?: boolean;
}

export interface QuartersListProps
  extends
    BoxProps,
    QuartersListSettings,
    StylesApiProps<QuartersListFactory>,
    ElementProps<'table'> {
  __staticSelector?: string;

  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean;

  /** Determines whether propagation for Escape key should be stopped */
  __stopPropagation?: boolean;

  /** Year for which quarters list should be displayed */
  year: DateStringValue;

  /** Component size */
  size?: MantineSize;
}

export type QuartersListFactory = Factory<{
  props: QuartersListProps;
  ref: HTMLTableElement;
  stylesNames: QuartersListStylesNames;
}>;

const defaultProps = {
  quartersListFormat: '[Q]Q',
  withCellSpacing: true,
} satisfies Partial<QuartersListProps>;

export const QuartersList = factory<QuartersListFactory>((_props) => {
  const props = useProps('QuartersList', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    year,
    quartersListFormat,
    locale,
    minDate,
    maxDate,
    getQuarterControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    fullWidth,
    size,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<QuartersListFactory>({
    name: __staticSelector || 'QuartersList',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    rootSelector: 'quartersList',
  });

  const ctx = useDatesContext();
  const quarters = getQuartersData(year);

  const quarterInTabOrder = getQuarterInTabOrder({
    quarters,
    minDate: toDateString(minDate)!,
    maxDate: toDateString(maxDate)!,
    getQuarterControlProps,
  });

  const rows = quarters.map((quartersRow, rowIndex) => {
    const cells = quartersRow.map((quarter, cellIndex) => {
      const controlProps = getQuarterControlProps?.(quarter);
      const isQuarterInTabOrder = quarter === quarterInTabOrder;

      return (
        <td
          key={cellIndex}
          {...getStyles('quartersListCell')}
          data-with-spacing={withCellSpacing || undefined}
        >
          <PickerControl
            {...getStyles('quartersListControl')}
            size={size}
            unstyled={unstyled}
            fullWidth={fullWidth}
            __staticSelector={__staticSelector || 'QuartersList'}
            data-mantine-stop-propagation={__stopPropagation || undefined}
            disabled={isQuarterDisabled({
              quarter,
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
              __onControlKeyDown?.(event, { rowIndex, cellIndex, date: quarter });
            }}
            onClick={(event) => {
              controlProps?.onClick?.(event);
              __onControlClick?.(event, quarter);
            }}
            onMouseEnter={(event) => {
              controlProps?.onMouseEnter?.(event);
              __onControlMouseEnter?.(event, quarter);
            }}
            onMouseDown={(event) => {
              controlProps?.onMouseDown?.(event);
              __preventFocus && event.preventDefault();
            }}
            tabIndex={__preventFocus || !isQuarterInTabOrder ? -1 : 0}
          >
            {controlProps?.children ??
              (typeof quartersListFormat === 'function'
                ? quartersListFormat(quarter)
                : dayjs(quarter).locale(ctx.getLocale(locale)).format(quartersListFormat))}
          </PickerControl>
        </td>
      );
    });

    return (
      <tr key={rowIndex} {...getStyles('quartersListRow')}>
        {cells}
      </tr>
    );
  });

  return (
    <Box
      component="table"
      size={size}
      {...getStyles('quartersList')}
      data-full-width={fullWidth || undefined}
      {...others}
    >
      <tbody>{rows}</tbody>
    </Box>
  );
});

QuartersList.classes = classes;
QuartersList.displayName = '@mantine/dates/QuartersList';
