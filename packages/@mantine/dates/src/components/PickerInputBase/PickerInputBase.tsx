import cx from 'clsx';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
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
  /** Determines whether the dropdown is closed when date is selected, not applicable with `type="multiple"`, `true` by default */
  closeOnChange?: boolean;

  /** Type of the dropdown, `'popover'` by default */
  dropdownType?: 'popover' | 'modal';

  /** Props passed down to `Popover` component */
  popoverProps?: Partial<Omit<PopoverProps, 'children'>>;

  /** Props passed down to `Modal` component */
  modalProps?: Partial<Omit<ModalProps, 'children'>>;

  /** If set, clear button is displayed in the `rightSection` when the component has value. Ignored if `rightSection` prop is set. `false` by default */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;

  /** If set, the component value cannot be changed by the user */
  readOnly?: boolean;

  /** Determines whether dates values should be sorted before `onChange` call, only applicable with type="multiple", `true` by default */
  sortDates?: boolean;

  /** Separator between range value */
  labelSeparator?: string;

  /** Input placeholder */
  placeholder?: string;

  /** A function to format selected dates values into a string. By default, date is formatted based on the input type. */
  valueFormatter?: DateFormatter;

  /** Called when the dropdown is closed */
  onDropdownClose?: () => void;
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
  withTime?: boolean;
}

export type PickerInputBaseFactory = Factory<{
  props: PickerInputBaseProps;
  ref: HTMLButtonElement;
  stylesNames: PickerInputBaseStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {} satisfies Partial<PickerInputBaseProps>;

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
    onDropdownClose,
    withTime,
    ...others
  } = useInputProps('PickerInputBase', defaultProps, _props);

  const clearButton = (
    <Input.ClearButton onClick={onClear} unstyled={unstyled} {...clearButtonProps} />
  );

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
          returnFocus={false}
          unstyled={unstyled}
          onClose={onDropdownClose}
          {...popoverProps}
          disabled={popoverProps?.disabled || dropdownType === 'modal' || readOnly}
          onChange={(_opened) => {
            if (!_opened) {
              popoverProps?.onClose?.();
              handleClose();
            }
          }}
        >
          <Popover.Target>
            <Input
              data-dates-input
              data-read-only={readOnly || undefined}
              disabled={disabled}
              component="button"
              type="button"
              onClick={(event) => {
                onClick?.(event);
                dropdownHandlers.toggle();
              }}
              __clearSection={clearButton}
              __clearable={clearable && shouldClear && !readOnly && !disabled}
              rightSection={rightSection}
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
      <HiddenDatesInput value={value} name={name} form={form} type={type} withTime={withTime} />
    </>
  );
});

PickerInputBase.classes = classes;
PickerInputBase.displayName = '@mantine/dates/PickerInputBase';
