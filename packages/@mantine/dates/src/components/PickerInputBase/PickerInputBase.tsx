import React from 'react';
import cx from 'clsx';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
  CloseButton,
  ElementProps,
  factory,
  Factory,
  Input,
  InputVariant,
  MantineSize,
  Modal,
  ModalProps,
  Popover,
  PopoverProps,
  StylesApiProps,
  useInputProps,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DatePickerType } from '../../types';
import { DateFormatter } from '../../utils';
import { HiddenDatesInput, HiddenDatesInputValue } from '../HiddenDatesInput';
import classes from './PickerInputBase.module.css';

export type PickerInputBaseStylesNames = __InputStylesNames;

export interface DateInputSharedProps
  extends Omit<__BaseInputProps, 'size'>,
    ElementProps<'button', 'defaultValue' | 'value' | 'onChange' | 'type'> {
  /** Determines whether dropdown should be closed when date is selected, not applicable when type="multiple", true by default */
  closeOnChange?: boolean;

  /** Type of dropdown, defaults to popover */
  dropdownType?: 'popover' | 'modal';

  /** Props passed down to Popover component */
  popoverProps?: Partial<Omit<PopoverProps, 'children'>>;

  /** Props passed down to Modal component */
  modalProps?: Partial<Omit<ModalProps, 'children'>>;

  /** Determines whether input value can be cleared, adds clear button to right section, false by default */
  clearable?: boolean;

  /** Props passed down to clear button */
  clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;

  /** Determines whether the user can modify the value */
  readOnly?: boolean;

  /** Determines whether dates value should be sorted before onChange call, only applicable when type="multiple", true by default */
  sortDates?: boolean;

  /** Separator between range value */
  labelSeparator?: string;

  /** Input placeholder */
  placeholder?: string;

  /** A function to format selected dates values into a string. By default, date is formatted based on the input type. */
  valueFormatter?: DateFormatter;
}

export interface PickerInputBaseProps
  extends BoxProps,
    DateInputSharedProps,
    Omit<StylesApiProps<PickerInputBaseFactory>, 'classNames' | 'styles'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
  __staticSelector?: string;
  children: React.ReactNode;
  formattedValue: string | null | undefined;
  dropdownHandlers: ReturnType<typeof useDisclosure>[1];
  dropdownOpened: boolean;
  onClear: () => void;
  shouldClear: boolean;
  value: HiddenDatesInputValue;
  type: DatePickerType;
  size?: MantineSize;
}

export type PickerInputBaseFactory = Factory<{
  props: PickerInputBaseProps;
  ref: HTMLButtonElement;
  stylesNames: PickerInputBaseStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<PickerInputBaseProps> = {};

export const PickerInputBase = factory<PickerInputBaseFactory>((_props, ref) => {
  const {
    inputProps,
    wrapperProps,
    placeholder,
    classNames,
    styles,
    unstyled,
    popoverProps,
    modalProps,
    dropdownType,
    children,
    formattedValue,
    dropdownHandlers,
    dropdownOpened,
    onClick,
    clearable,
    onClear,
    clearButtonProps,
    rightSection,
    shouldClear,
    readOnly,
    disabled,
    value,
    name,
    form,
    type,
    ...others
  } = useInputProps('PickerInputBase', defaultProps, _props);

  const _rightSection =
    rightSection ||
    (clearable && shouldClear && !readOnly && !disabled ? (
      <CloseButton
        variant="transparent"
        onClick={onClear}
        unstyled={unstyled}
        size={inputProps.size || 'sm'}
        {...clearButtonProps}
      />
    ) : null);

  const handleClose = () => {
    const isInvalidRangeValue = type === 'range' && Array.isArray(value) && value[0] && !value[1];
    if (isInvalidRangeValue) {
      onClear();
    }

    dropdownHandlers.close();
  };

  return (
    <>
      {dropdownType === 'modal' && !readOnly && (
        <Modal
          opened={dropdownOpened}
          onClose={handleClose}
          withCloseButton={false}
          size="auto"
          data-dates-modal
          unstyled={unstyled}
          {...modalProps}
        >
          {children}
        </Modal>
      )}

      <Input.Wrapper {...wrapperProps}>
        <Popover
          position="bottom-start"
          opened={dropdownOpened}
          trapFocus
          returnFocus
          unstyled={unstyled}
          {...popoverProps}
          disabled={popoverProps?.disabled || dropdownType === 'modal' || readOnly}
          onClose={() => {
            popoverProps?.onClose?.();
            handleClose();
          }}
        >
          <Popover.Target>
            <Input
              aria-label={formattedValue || placeholder}
              data-dates-input
              data-read-only={readOnly || undefined}
              disabled={disabled}
              component="button"
              type="button"
              multiline
              onClick={(event) => {
                onClick?.(event);
                dropdownHandlers.toggle();
              }}
              rightSection={_rightSection}
              {...inputProps}
              ref={ref}
              classNames={{ ...classNames, input: cx(classes.input, (classNames as any)?.input) }}
              {...others}
            >
              {formattedValue || (
                <Input.Placeholder
                  error={inputProps.error}
                  unstyled={unstyled}
                  className={(classNames as any)?.placeholder}
                  style={(styles as any)?.placeholder}
                >
                  {placeholder}
                </Input.Placeholder>
              )}
            </Input>
          </Popover.Target>

          <Popover.Dropdown data-dates-dropdown>{children}</Popover.Dropdown>
        </Popover>
      </Input.Wrapper>
      <HiddenDatesInput value={value} name={name} form={form} type={type} />
    </>
  );
});

PickerInputBase.classes = classes;
PickerInputBase.displayName = '@mantine/dates/PickerInputBase';
