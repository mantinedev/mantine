import { useController } from '@mantine/core';
import { UseDisclosureHandlers } from '@mantine/hooks';
import { useDatesInput } from '../../../hooks';
import { CalendarLevel, DatePickerType, DatePickerValue, DateStringValue } from '../../../types';
import { DateFormatter, getDefaultClampedDate, toDateString } from '../../../utils';
import { clampLevel } from '../../Calendar/clamp-level/clamp-level';
import { CalendarControllerOptions } from '../../Calendar/use-calendar/use-calendar';
import { DateInputSharedProps } from '../PickerInputBase';
import { useDropdownDraft } from '../use-dropdown-draft/use-dropdown-draft';
import {
  PickerInputController,
  PickerInputControllerOptions,
} from '../use-picker-input-controller/use-picker-input-controller';
import { PickerDropdownType } from '../use-resolved-dropdown-type/use-resolved-dropdown-type';

interface UsePickerInputInput<
  Type extends DatePickerType,
  Controller extends PickerInputController,
> {
  useControllerHook: (options: PickerInputControllerOptions) => Controller;
  controller: Controller | undefined;
  calendarProps: CalendarControllerOptions & {
    onLevelChange?: (level: any) => void;
  };
  minLevel: CalendarLevel | undefined;
  maxLevel: CalendarLevel | undefined;
  defaultDate: DateStringValue | Date | undefined;
  type: Type;
  value: DatePickerValue<Type> | undefined;
  defaultValue: DatePickerValue<Type> | undefined;
  onChange: ((value: DatePickerValue<Type>) => void) | undefined;
  locale: string | undefined;
  format: string | undefined;
  labelSeparator: string | undefined;
  closeOnChange: boolean | undefined;
  sortDates: boolean | undefined;
  valueFormatter: DateFormatter | undefined;
  minDate: DateStringValue | Date | undefined;
  maxDate: DateStringValue | Date | undefined;
  disabled: boolean | undefined;
  readOnly: boolean | undefined;
  dropdownType: PickerDropdownType;
  popoverProps: DateInputSharedProps['popoverProps'];
  applyOnSubmit: boolean | undefined;
}

interface UsePickerInputReturnValue<
  Type extends DatePickerType,
  Controller extends PickerInputController,
> {
  controller: Controller;
  datesInput: ReturnType<typeof useDatesInput<Type>>;
  dropdownHandlers: UseDisclosureHandlers;
  dropdownOpened: boolean;
  popoverProps: DateInputSharedProps['popoverProps'];
  pickerValue: DatePickerValue<Type>;
  onPickerChange: (value: DatePickerValue<Type>) => void;
  onDropdownSubmit: (() => void) | undefined;
  submitDisabled: boolean;
}

export function usePickerInput<
  Type extends DatePickerType,
  Controller extends PickerInputController,
>(input: UsePickerInputInput<Type, Controller>): UsePickerInputReturnValue<Type, Controller> {
  const {
    opened: popoverOpened,
    onChange: onPopoverChange,
    ...popoverRest
  } = input.popoverProps || {};

  const initialValue = input.value !== undefined ? input.value : input.defaultValue;
  const initialValueDate = Array.isArray(initialValue) ? initialValue[0] : initialValue;

  const controller = useController(input.useControllerHook, input.controller, {
    date: input.calendarProps.date,
    defaultDate: toDateString(initialValueDate as DateStringValue | null) || input.defaultDate,
    onDateChange: input.calendarProps.onDateChange,
    level: input.calendarProps.level
      ? clampLevel(input.calendarProps.level, input.minLevel, input.maxLevel)
      : undefined,
    defaultLevel: clampLevel(input.calendarProps.defaultLevel, input.minLevel, input.maxLevel),
    onLevelChange: input.calendarProps.onLevelChange,
    dropdownOpened: popoverOpened,
    onDropdownOpenedChange: onPopoverChange,
  });

  const dropdownHandlers = {
    open: controller.openDropdown,
    close: controller.closeDropdown,
    toggle: controller.toggleDropdown,
    set: controller.setDropdownOpened,
  };

  const datesInput = useDatesInput({
    type: input.type,
    value: input.value,
    defaultValue: input.defaultValue,
    onChange: input.onChange,
    locale: input.locale,
    format: input.format,
    labelSeparator: input.labelSeparator,
    closeOnChange: input.closeOnChange,
    sortDates: input.sortDates,
    valueFormatter: input.valueFormatter,
    dropdown: { opened: controller.dropdownOpened, handlers: dropdownHandlers },
  });

  const currentValue = datesInput._value as DatePickerValue<DatePickerType>;
  const valueDate =
    toDateString(Array.isArray(currentValue) ? currentValue[0] : currentValue) ||
    (input.controller ? null : toDateString(input.defaultDate)) ||
    null;
  const cannotOpen = !!(input.disabled || input.readOnly);

  controller.registerPickerInput({
    valueDate,
    fallbackDate: getDefaultClampedDate({ minDate: input.minDate, maxDate: input.maxDate }),
    disabled: cannotOpen,
  });

  const dropdownOpened = controller.dropdownOpened && !cannotOpen;
  const draft = useDropdownDraft({
    dropdownType: input.dropdownType,
    applyOnSubmit: input.applyOnSubmit,
    opened: dropdownOpened,
    type: input.type,
    value: datesInput._value,
    setValue: datesInput.setValue,
    commitValue: datesInput.applyValue,
    closeDropdown: controller.closeDropdown,
  });

  return {
    controller,
    datesInput,
    dropdownHandlers,
    dropdownOpened,
    popoverProps: popoverRest,
    pickerValue: draft.pickerValue,
    onPickerChange: draft.onPickerChange,
    onDropdownSubmit: draft.draftMode ? draft.submit : undefined,
    submitDisabled: draft.submitDisabled,
  };
}
