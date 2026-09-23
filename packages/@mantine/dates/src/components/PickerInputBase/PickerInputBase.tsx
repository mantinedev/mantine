import { useRef } from 'react';
import cx from 'clsx';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
  ClearSectionMode,
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
import { useDidUpdate, useDisclosure, useMergedRef } from '@mantine/hooks';
import { DatePickerType } from '../../types';
import { DateFormatter } from '../../utils';
import { HiddenDatesInput, HiddenDatesInputValue } from '../HiddenDatesInput';
import classes from './PickerInputBase.module.css';

export type PickerInputBaseStylesNames = __InputStylesNames;

export interface DateInputSharedProps
  extends
    Omit<__BaseInputProps, 'size'>,
    ElementProps<'button', 'defaultValue' | 'value' | 'onChange' | 'type'> {
  /** Determines whether the dropdown is closed when date is selected, not applicable with `type="multiple"` @default true @category behavior */
  closeOnChange?: boolean;

  /** Type of the dropdown @default 'popover' @category appearance */
  dropdownType?: 'popover' | 'modal';

  /** Props passed down to `Popover` component */
  popoverProps?: Partial<Omit<PopoverProps, 'children'>>;

  /** Props passed down to `Modal` component */
  modalProps?: Partial<Omit<ModalProps, 'children'>>;

  /** If set, clear button is displayed in the `rightSection` when the component has value. Ignored if `rightSection` prop is set. @default false @category behavior */
  clearable?: boolean;

  /** Determines how the clear button and rightSection are rendered @default 'both' @category appearance */
  clearSectionMode?: ClearSectionMode;

  /** Props passed down to the clear button */
  clearButtonProps?: React.ComponentProps<'button'>;

  /** If set, the component value cannot be changed by the user @category behavior */
  readOnly?: boolean;

  /** Determines whether dates values should be sorted before `onChange` call, only applicable with type="multiple" @default true @category state */
  sortDates?: boolean;

  /** Separator between range value @category appearance */
  labelSeparator?: string;

  /** Input placeholder @category appearance */
  placeholder?: string;

  /** A function to format selected dates values into a string. By default, date is formatted based on the input type. @category appearance */
  valueFormatter?: DateFormatter;

  /** Called when the dropdown is closed @category behavior */
  onDropdownClose?: () => void;
}

export interface PickerInputBaseProps
  extends
    BoxProps,
    DateInputSharedProps,
    Omit<StylesApiProps<PickerInputBaseFactory>, 'classNames' | 'styles'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
  __staticSelector?: string;
  /** @category appearance */
  children: React.ReactNode;
  /** @category state */
  formattedValue: string | null | undefined;
  /** @category state */
  dropdownHandlers: ReturnType<typeof useDisclosure>[1];
  /** @category state */
  dropdownOpened: boolean;
  /** @category behavior */
  onClear: () => void;
  /** @category appearance */
  shouldClear: boolean;
  /** @category state */
  value: HiddenDatesInputValue;
  /** @category state */
  type: DatePickerType;
  /** @category appearance */
  size?: MantineSize;
  /** @category state */
  withTime?: boolean;

  /** Set when the dropdown content includes presets, reduces dropdown start padding @category appearance */
  withPresets?: boolean;
}

export type PickerInputBaseFactory = Factory<{
  props: PickerInputBaseProps;
  ref: HTMLButtonElement;
  stylesNames: PickerInputBaseStylesNames;
  variant: InputVariant;
}>;

export const PickerInputBase = factory<PickerInputBaseFactory>((_props) => {
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
    clearSectionMode,
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
    withPresets,
    ref,
    ...others
  } = useInputProps('PickerInputBase', { size: 'sm' }, _props);

  const inputRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const keyboardInteractionRef = useRef(false);

  useDidUpdate(() => {
    if (dropdownOpened) {
      keyboardInteractionRef.current = false;
      return;
    }

    if (!keyboardInteractionRef.current) {
      return;
    }

    const activeElement = document.activeElement;
    const focusLost =
      !activeElement ||
      activeElement === document.body ||
      !!dropdownRef.current?.contains(activeElement);

    if (focusLost) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [dropdownOpened]);

  const clearButton = (
    <Input.ClearButton onClick={onClear} unstyled={unstyled} {...clearButtonProps} />
  );

  const handleClose = () => {
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
          {...popoverProps}
          disabled={popoverProps?.disabled || dropdownType === 'modal' || readOnly}
          onClose={() => {
            onDropdownClose?.();
            popoverProps?.onClose?.();
          }}
          onChange={(_opened) => {
            if (!_opened) {
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
              multiline
              onClick={(event) => {
                onClick?.(event);
                dropdownHandlers.toggle();
              }}
              __clearSection={clearButton}
              __clearable={clearable && shouldClear && !readOnly && !disabled}
              __clearSectionMode={clearSectionMode}
              rightSection={rightSection}
              {...inputProps}
              classNames={{ ...classNames, input: cx(classes.input, (classNames as any)?.input) }}
              {...others}
              ref={useMergedRef(inputRef, ref)}
            >
              {formattedValue || (
                <Input.Placeholder
                  error={inputProps.error}
                  unstyled={unstyled}
                  classNames={classNames}
                  styles={styles}
                  __staticSelector={inputProps.__staticSelector}
                >
                  {placeholder}
                </Input.Placeholder>
              )}
            </Input>
          </Popover.Target>

          <Popover.Dropdown
            data-dates-dropdown
            data-with-presets={withPresets || undefined}
            className={unstyled ? undefined : classes.dropdown}
            ref={dropdownRef}
            onKeyDown={() => {
              keyboardInteractionRef.current = true;
            }}
            onPointerDown={() => {
              keyboardInteractionRef.current = false;
            }}
          >
            {children}
          </Popover.Dropdown>
        </Popover>
      </Input.Wrapper>
      <HiddenDatesInput value={value} name={name} form={form} type={type} withTime={withTime} />
    </>
  );
});

PickerInputBase.classes = classes;
PickerInputBase.displayName = '@mantine/dates/PickerInputBase';
