import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  MantineComponentStaticProperties,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { useDatesState } from '../../hooks';
import { DatePickerType, PickerBaseProps } from '../../types';
import { shiftTimezone } from '../../utils';
import { Calendar, CalendarBaseProps } from '../Calendar';
import { useDatesContext } from '../DatesProvider';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';

export type YearPickerStylesNames = DecadeLevelGroupStylesNames;

export interface YearPickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    Omit<
      CalendarBaseProps,
      'onNextYear' | 'onPreviousYear' | 'onNextMonth' | 'onPreviousMonth' | 'hasNextLevel'
    > {}

export interface YearPickerProps<Type extends DatePickerType = 'default'>
  extends BoxProps,
    YearPickerBaseProps<Type>,
    StylesApiProps<YearPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Called when year is selected */
  onYearSelect?: (date: Date) => void;
}

export type YearPickerFactory = Factory<{
  props: YearPickerProps;
  ref: HTMLDivElement;
  stylesNames: YearPickerStylesNames;
}>;

const defaultProps: Partial<YearPickerProps> = {
  type: 'default',
};

type YearPickerComponent = (<Type extends DatePickerType = 'default'>(
  props: YearPickerProps<Type> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<YearPickerFactory>;

export const YearPicker: YearPickerComponent = factory<YearPickerFactory>((_props, ref) => {
  const props = useProps('YearPicker', defaultProps, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getYearControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onYearSelect,
    __updateDateOnYearSelect,
    __timezoneApplied,
    ...others
  } = props;

  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState({
    type: type as any,
    level: 'year',
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange: onChange as any,
    onMouseLeave,
    applyTimezone: !__timezoneApplied,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<YearPickerFactory>({
    classNames,
    styles,
    props,
  });
  const ctx = useDatesContext();

  return (
    <Calendar
      ref={ref}
      minLevel="decade"
      __updateDateOnYearSelect={__updateDateOnYearSelect ?? false}
      __staticSelector={__staticSelector || 'YearPicker'}
      onMouseLeave={onRootMouseLeave}
      onYearMouseEnter={(_event, date) => onHoveredDateChange(date)}
      onYearSelect={(date) => {
        onDateChange(date);
        onYearSelect?.(date);
      }}
      getYearControlProps={(date) => ({
        ...getControlProps(date),
        ...getYearControlProps?.(date),
      })}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      {...others}
      date={shiftTimezone('add', others.date, ctx.getTimezone(), __timezoneApplied)}
      __timezoneApplied
    />
  );
}) as any;

YearPicker.classes = Calendar.classes;
YearPicker.displayName = '@mantine/dates/YearPicker';
