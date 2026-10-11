import { useRef } from 'react';
import cx from 'clsx';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
  Button,
  ButtonProps,
  ClearSectionMode,
  Drawer,
  DrawerProps,
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
  useStyles,
} from '@mantine/core';
import { useDidUpdate, useDisclosure, useId, useMergedRef } from '@mantine/hooks';
import { DatePickerType } from '../../types';
import { DateFormatter } from '../../utils';
import { useDatesContext } from '../DatesProvider';
import { HiddenDatesInput, HiddenDatesInputValue } from '../HiddenDatesInput';
import { DatesDropdownProvider } from './DatesDropdown.context';
import { getDatesPopoverMiddlewares } from './get-dates-popover-middlewares/get-dates-popover-middlewares';
import { getSheetPickerProps } from './get-sheet-picker-props/get-sheet-picker-props';
import {
  PickerDropdownType,
  ResponsivePickerDropdownType,
} from './use-resolved-dropdown-type/use-resolved-dropdown-type';
import classes from './PickerInputBase.module.css';

export type PickerInputBaseStylesNames = __InputStylesNames | 'submitButton';

export interface DateInputSharedProps
  extends
    Omit<__BaseInputProps, 'size'>,
    ElementProps<'button', 'defaultValue' | 'value' | 'onChange' | 'type'> {
  /** Determines whether the dropdown is closed when date is selected, not applicable with `type="multiple"`. Ignored in `modal` and `drawer` dropdown types while `applyOnSubmit` is enabled @default true @category behavior */
  closeOnChange?: boolean;

  /** Type of the dropdown: `'popover'`, `'modal'`, `'drawer'` or an object with breakpoints, for example `{ base: 'drawer', sm: 'popover' }`. Object keys can be `theme.breakpoints` keys or custom values in px, for example `{ base: 'drawer', 600: 'popover' }` @default { base: 'drawer', sm: 'popover' } @category appearance */
  dropdownType?: ResponsivePickerDropdownType;

  /** Props passed down to `Popover` component. `opened` and `onChange` control the dropdown opened state with every `dropdownType` */
  popoverProps?: Partial<Omit<PopoverProps, 'children'>>;

  /** Props passed down to `Modal` component */
  modalProps?: Partial<Omit<ModalProps, 'children'>>;

  /** Props passed down to `Drawer` component */
  drawerProps?: Partial<Omit<DrawerProps, 'children'>>;

  /** Determines whether the selected value is applied only when the submit button is pressed when the dropdown is rendered in `modal` or `drawer`. If set to `false`, the value is applied on selection, same as with `dropdownType="popover"` @default true @category behavior */
  applyOnSubmit?: boolean;

  /** Label of the submit button, overrides `submitButtonLabel` from `DatesProvider` settings @default 'Save' @category appearance */
  submitButtonLabel?: string;

  /** Props passed down to the submit button */
  submitButtonProps?: ButtonProps & ElementProps<'button'>;

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
    Omit<DateInputSharedProps, 'dropdownType' | 'applyOnSubmit'>,
    Omit<StylesApiProps<PickerInputBaseFactory>, 'classNames' | 'styles'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
  __staticSelector?: string;
  /** Resolved dropdown type @category appearance */
  dropdownType: PickerDropdownType;
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

  /** Called when the submit button is pressed, the button is rendered in `modal` and `drawer` dropdown types only when this handler is set @category behavior */
  onDropdownSubmit?: () => void;

  /** Disables the submit button @category behavior */
  submitDisabled?: boolean;

  /** Determines whether the drawer sheet container receives initial focus, set to `false` when the dropdown content requests focus itself @default true @category behavior */
  sheetAutofocus?: boolean;
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
    drawerProps,
    dropdownType,
    submitButtonLabel,
    submitButtonProps,
    onDropdownSubmit,
    submitDisabled,
    sheetAutofocus,
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
  const inputId = useId(inputProps.id);
  const overlayId = `${inputId}-dropdown`;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const keyboardInteractionRef = useRef(false);

  const getStyles = useStyles<PickerInputBaseFactory>({
    name: inputProps.__staticSelector ?? 'PickerInputBase',
    classes,
    props: _props,
    classNames,
    styles,
    unstyled,
    attributes: inputProps.attributes,
  });

  useDidUpdate(() => {
    if (dropdownOpened) {
      keyboardInteractionRef.current = false;
      return;
    }

    if (keyboardInteractionRef.current) {
      const activeElement = document.activeElement;
      const focusLost =
        !activeElement ||
        activeElement === document.body ||
        !!dropdownRef.current?.contains(activeElement);

      if (focusLost) {
        inputRef.current?.focus({ preventScroll: true });
      }
    }

    onDropdownClose?.();
  }, [dropdownOpened]);

  const clearButton = (
    <Input.ClearButton onClick={onClear} unstyled={unstyled} {...clearButtonProps} />
  );

  const handleClose = () => {
    dropdownHandlers.close();
  };

  const isPopover = dropdownType === 'popover';
  const isModal = dropdownType === 'modal';
  const isSheet = dropdownType === 'drawer';
  const ctx = useDatesContext();

  const submitButton =
    !isPopover && onDropdownSubmit ? (
      <Button
        size={isSheet ? getSheetPickerProps(inputProps.size).size : inputProps.size}
        fullWidth
        unstyled={unstyled}
        {...submitButtonProps}
        disabled={submitDisabled || submitButtonProps?.disabled}
        {...getStyles('submitButton', {
          className: submitButtonProps?.className,
          style: submitButtonProps?.style,
        })}
        onClick={(event) => {
          submitButtonProps?.onClick?.(event);
          onDropdownSubmit();
        }}
      >
        {ctx.getSubmitButtonLabel(submitButtonLabel)}
      </Button>
    ) : null;

  const content = (
    <DatesDropdownProvider
      value={{
        preventFocus: false,
        stopPropagation: isPopover,
        layout: isSheet ? 'sheet' : 'default',
      }}
    >
      {children}
      {submitButton}
    </DatesDropdownProvider>
  );

  return (
    <>
      {isModal && !readOnly && (
        <Modal
          opened={dropdownOpened}
          withCloseButton={false}
          size="auto"
          data-dates-modal
          unstyled={unstyled}
          id={overlayId}
          {...modalProps}
          onClose={() => {
            modalProps?.onClose?.();
            handleClose();
          }}
        >
          {content}
        </Modal>
      )}

      {isSheet && !readOnly && (
        <Drawer
          opened={dropdownOpened}
          position="bottom"
          size="auto"
          offset={5}
          radius="lg"
          withCloseButton={false}
          withHandle
          data-dates-drawer
          unstyled={unstyled}
          id={overlayId}
          {...drawerProps}
          onClose={() => {
            drawerProps?.onClose?.();
            handleClose();
          }}
        >
          <div
            className={unstyled ? undefined : classes.sheet}
            tabIndex={-1}
            data-autofocus={sheetAutofocus !== false || undefined}
          >
            {content}
          </div>
        </Drawer>
      )}

      <Input.Wrapper {...wrapperProps} id={inputId}>
        <Popover
          position="bottom-start"
          opened={dropdownOpened}
          trapFocus
          returnFocus={false}
          unstyled={unstyled}
          {...popoverProps}
          middlewares={getDatesPopoverMiddlewares(popoverProps?.middlewares)}
          disabled={popoverProps?.disabled || !isPopover || readOnly}
          withRoles={isPopover && !readOnly ? popoverProps?.withRoles : false}
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
              aria-haspopup={!isPopover && !readOnly ? 'dialog' : undefined}
              aria-expanded={!isPopover && !readOnly ? dropdownOpened : undefined}
              aria-controls={
                !isPopover && !readOnly && dropdownOpened
                  ? `${(isModal ? modalProps?.id : drawerProps?.id) || overlayId}-body`
                  : undefined
              }
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
              id={inputId}
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
            aria-labelledby={inputId}
            aria-modal={popoverProps?.trapFocus === false ? undefined : true}
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
            <div className={unstyled ? undefined : classes.dropdownContent}>{content}</div>
          </Popover.Dropdown>
        </Popover>
      </Input.Wrapper>
      <HiddenDatesInput value={value} name={name} form={form} type={type} withTime={withTime} />
    </>
  );
});

PickerInputBase.classes = classes;
PickerInputBase.displayName = '@mantine/dates/PickerInputBase';
