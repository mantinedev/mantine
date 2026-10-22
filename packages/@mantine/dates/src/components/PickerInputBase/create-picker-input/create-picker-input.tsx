import {
  FactoryPayload,
  genericFactory,
  MantineComponentStaticProperties,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { CalendarLevel } from '../../../types';
import { DateFormatter, getFormattedDate } from '../../../utils';
import { pickCalendarProps } from '../../Calendar';
import { useDatesContext } from '../../DatesProvider';
import { getSheetPickerProps } from '../get-sheet-picker-props/get-sheet-picker-props';
import { PickerInputBase } from '../PickerInputBase';
import {
  PickerInputController,
  PickerInputControllerOptions,
} from '../use-picker-input-controller/use-picker-input-controller';
import { usePickerInput } from '../use-picker-input/use-picker-input';
import { useResolvedDropdownType } from '../use-resolved-dropdown-type/use-resolved-dropdown-type';

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
      applyOnSubmit,
      controller: controllerProp,
      valueDisplay,
      ...rest
    } = props;

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<any>({
      classNames,
      styles,
      props,
    });

    const { calendarProps, others } = pickPickerProps(rest);
    const ctx = useDatesContext();
    const resolvedDropdownType = useResolvedDropdownType(dropdownType);
    const isSheet = resolvedDropdownType === 'drawer';

    const formatter = valueFormatter || getValueFormatter?.(calendarProps, ctx);

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
      valueFormatter: formatter,
      minDate,
      maxDate,
      disabled: others.disabled,
      readOnly: others.readOnly,
      dropdownType: resolvedDropdownType,
      popoverProps: others.popoverProps,
      applyOnSubmit,
    });

    const withPills = valueDisplay === 'pills' && type === 'multiple';
    const multipleValue =
      withPills && Array.isArray(pickerInput.datesInput._value)
        ? (pickerInput.datesInput._value as string[])
        : [];
    const pillsLabels = withPills
      ? multipleValue.map((date) =>
          getFormattedDate({
            type: 'default',
            date,
            locale: ctx.getLocale(locale),
            format: valueFormat,
            labelSeparator: ctx.getLabelSeparator(labelSeparator),
            formatter,
          })
        )
      : undefined;
    const handleRemovePill = (index: number) =>
      pickerInput.datesInput.setValue(multipleValue.filter((_, i) => i !== index));

    return (
      <PickerInputBase
        formattedValue={pickerInput.datesInput.formattedValue}
        valueDisplay={valueDisplay}
        pillsLabels={pillsLabels}
        onRemovePill={handleRemovePill}
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
        {...others}
        dropdownType={resolvedDropdownType}
        popoverProps={pickerInput.popoverProps}
        onDropdownSubmit={pickerInput.onDropdownSubmit}
        submitDisabled={pickerInput.submitDisabled}
        type={type}
        __staticSelector={name}
        attributes={attributes}
      >
        <Picker
          {...calendarProps}
          size={size}
          {...(isSheet ? getSheetPickerProps(size) : null)}
          variant={variant}
          type={type}
          value={pickerInput.pickerValue}
          controller={pickerInput.controller}
          onChange={pickerInput.onPickerChange}
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
