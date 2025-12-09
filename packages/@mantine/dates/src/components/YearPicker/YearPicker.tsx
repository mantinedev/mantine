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
import { DatePickerType, DateStringValue, PickerBaseProps } from '../../types';
import { Calendar, CalendarBaseProps } from '../Calendar';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';

export type YearPickerStylesNames = DecadeLevelGroupStylesNames;

export interface YearPickerBaseProps<Type extends DatePickerType = 'default'>
  extends
    PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    Omit<
      CalendarBaseProps,
      'onNextYear' | 'onPreviousYear' | 'onNextMonth' | 'onPreviousMonth' | 'hasNextLevel'
    > {}

export interface YearPickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    YearPickerBaseProps<Type>,
    StylesApiProps<YearPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Called when year is selected */
  onYearSelect?: (date: DateStringValue) => void;
}

export type YearPickerFactory = Factory<{
  props: YearPickerProps;
  ref: HTMLDivElement;
  stylesNames: YearPickerStylesNames;
}>;

const defaultProps = {
  type: 'default',
} satisfies Partial<YearPickerProps>;

type YearPickerComponent = (<Type extends DatePickerType = 'default'>(
  props: YearPickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<YearPickerFactory>;

export const YearPicker: YearPickerComponent = factory<YearPickerFactory>((_props) => {
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
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<YearPickerFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <Calendar
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
    />
  );
}) as any;

YearPicker.classes = Calendar.classes;
YearPicker.displayName = '@mantine/dates/YearPicker';
