import {
  FactoryPayload,
  genericFactory,
  MantineComponentStaticProperties,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import type { CalendarLevel } from '../../../types';
import type { DateFormatter } from '../../../utils';
import { pickCalendarProps } from '../../Calendar';
import { useDatesContext } from '../../DatesProvider';
import { PickerInputBase } from '../PickerInputBase';
import type {
  PickerInputController,
  PickerInputControllerOptions,
} from '../use-picker-input-controller/use-picker-input-controller';
import { usePickerInput } from '../use-picker-input/use-picker-input';

type PickedProps = ReturnType<typeof pickCalendarProps>;

export type PickerInputComponent<Payload extends FactoryPayload> = Payload['signature'] &
  MantineComponentStaticProperties<Payload> & { displayName?: string };

export interface CreatePickerInputOptions {
  name: string;
  Picker: React.ComponentType<any>;
  useControllerHook: (options: PickerInputControllerOptions) => PickerInputController;
  defaultProps: Record<string, any>;
  classes: Record<string, string>;
  minLevel?: CalendarLevel;
  pickPickerProps?: (props: Record<string, any>) => PickedProps;
  getValueFormatter?: (
    calendarProps: Record<string, any>,
    ctx: ReturnType<typeof useDatesContext>
  ) => DateFormatter | undefined;
}

export function createPickerInput<Payload extends FactoryPayload>({
  name,
  Picker,
  useControllerHook,
  defaultProps,
  classes,
  minLevel,
  pickPickerProps = pickCalendarProps,
  getValueFormatter,
}: CreatePickerInputOptions): PickerInputComponent<Payload> {
  const component = genericFactory<Payload>(((_props: Record<string, any>) => {
    const props = useProps(['Input', 'InputWrapper', name], defaultProps, _props);
    const {
      type,
      value,
      defaultValue,
      onChange,
      valueFormat,
      labelSeparator,
      locale,
      classNames,
      styles,
      unstyled,
      closeOnChange,
      size,
      variant,
      dropdownType,
      sortDates,
      minDate,
      maxDate,
      vars,
      valueFormatter,
      presets,
      attributes,
      controller: controllerProp,
      ...rest
    } = props;

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<any>({
      classNames,
      styles,
      props,
    });

    const { calendarProps, others } = pickPickerProps(rest);
    const ctx = useDatesContext();

    const pickerInput = usePickerInput({
      useControllerHook,
      controller: controllerProp,
      calendarProps,
      minLevel: minLevel ?? calendarProps.minLevel,
      maxLevel: calendarProps.maxLevel,
      defaultDate: calendarProps.defaultDate,
      type,
      value,
      defaultValue,
      onChange,
      locale,
      format: valueFormat,
      labelSeparator,
      closeOnChange,
      sortDates,
      valueFormatter: valueFormatter || getValueFormatter?.(calendarProps, ctx),
      minDate,
      maxDate,
      disabled: others.disabled,
      readOnly: others.readOnly,
      dropdownType,
      popoverProps: others.popoverProps,
    });

    return (
      <PickerInputBase
        formattedValue={pickerInput.datesInput.formattedValue}
        withPresets={!!presets}
        dropdownOpened={pickerInput.dropdownOpened}
        dropdownHandlers={pickerInput.dropdownHandlers}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        onClear={pickerInput.datesInput.onClear}
        shouldClear={pickerInput.datesInput.shouldClear}
        value={pickerInput.datesInput._value}
        size={size}
        variant={variant}
        dropdownType={dropdownType}
        {...others}
        popoverProps={pickerInput.popoverProps}
        type={type}
        __staticSelector={name}
        attributes={attributes}
      >
        <Picker
          {...calendarProps}
          size={size}
          variant={variant}
          type={type}
          value={pickerInput.datesInput._value}
          controller={pickerInput.controller}
          onChange={pickerInput.datesInput.setValue}
          locale={locale}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          __staticSelector={name}
          minDate={minDate}
          maxDate={maxDate}
          presets={presets}
          attributes={attributes}
        />
      </PickerInputBase>
    );
  }) as any);

  component.classes = classes;
  component.displayName = `@mantine/dates/${name}`;

  return component as PickerInputComponent<Payload>;
}
