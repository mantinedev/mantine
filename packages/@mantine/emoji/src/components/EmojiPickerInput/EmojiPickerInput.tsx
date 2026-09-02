import { useCallback, useState } from 'react';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  Input,
  InputVariant,
  Popover,
  PopoverProps,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
  InputBase,
  __BaseInputProps,
  __InputStylesNames,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import type { EmojiPickerEmoji } from '../../types';
import { EmojiPicker, EmojiPickerProps } from '../EmojiPicker';
import classes from './EmojiPickerInput.module.css';

export type EmojiPickerInputStylesNames =
  | 'dropdown'
  | 'inputEmoji'
  | 'inputEmojiName'
  | __InputStylesNames;

export type EmojiPickerInputCssVariables = {
  root: never;
};

export interface EmojiPickerInputProps
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<EmojiPickerInputFactory>,
    ElementProps<'button', 'size' | 'onChange' | 'value' | 'defaultValue'> {
  /** Controlled emoji id value */
  value?: string | null;

  /** Default emoji id value for uncontrolled state */
  defaultValue?: string | null;

  /** Called when value changes */
  onChange?: (value: string | null) => void;

  /** Input placeholder displayed when no emoji is selected */
  placeholder?: string;

  /** Determines whether the clear button is displayed @default false */
  clearable?: boolean;

  /** Props passed to the `Popover` component */
  popoverProps?: Omit<PopoverProps, 'children'>;

  /** Controlled popover opened state */
  opened?: boolean;

  /** Default popover opened state for uncontrolled mode */
  defaultOpened?: boolean;

  /** Called when popover opened state changes */
  onOpenedChange?: (opened: boolean) => void;

  /** Determines whether the popover closes after emoji is selected @default true */
  closeOnSelect?: boolean;

  /** Emoji data object, use `emojiMartAdapter` or `emojibaseAdapter` to convert data */
  data: EmojiPickerProps['data'];

  /** Called when an emoji is selected */
  onEmojiSelect?: EmojiPickerProps['onEmojiSelect'];

  /** Props passed to the `EmojiPicker` component inside the dropdown */
  pickerProps?: Omit<EmojiPickerProps, 'data' | 'onEmojiSelect'>;

  /** Determines whether the input is in read-only mode */
  readOnly?: boolean;

  /** Determines whether the input is disabled */
  disabled?: boolean;
}

export type EmojiPickerInputFactory = Factory<{
  props: EmojiPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: EmojiPickerInputStylesNames;
  vars: EmojiPickerInputCssVariables;
  variant: InputVariant;
}>;

const defaultProps = {
  closeOnSelect: true,
  clearable: false,
  size: 'sm',
} satisfies Partial<EmojiPickerInputProps>;

const varsResolver = createVarsResolver<EmojiPickerInputFactory>(() => ({
  root: {},
}));

export const EmojiPickerInput = factory<EmojiPickerInputFactory>((_props) => {
  const props = useProps('EmojiPickerInput', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    value: valueProp,
    defaultValue,
    onChange,
    placeholder,
    clearable,
    popoverProps,
    opened: openedProp,
    defaultOpened,
    onOpenedChange,
    closeOnSelect,
    data,
    onEmojiSelect,
    pickerProps,
    readOnly,
    disabled,
    label,
    description,
    error,
    success,
    required,
    className,
    style,
    id,
    size,
    variant,
    errorProps,
    successProps,
    labelProps,
    descriptionProps,
    wrapperProps: _wrapperProps,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    mod,
    attributes,
    rightSection,
    ...others
  } = props;

  const getStyles = useStyles<EmojiPickerInputFactory>({
    name: 'EmojiPickerInput',
    props,
    classes,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<EmojiPickerInputFactory>({
    classNames,
    styles,
    props,
  });

  const [value, setValue] = useUncontrolled({
    value: valueProp,
    defaultValue: defaultValue ?? null,
    onChange,
  });

  const [dropdownOpened, setDropdownOpened] = useState(defaultOpened ?? false);

  const opened = openedProp ?? dropdownOpened;
  const setOpened = useCallback(
    (val: boolean) => {
      setDropdownOpened(val);
      onOpenedChange?.(val);
    },
    [onOpenedChange]
  );

  const selectedEmoji = value ? data.emojis[value] : null;
  const [displayedEmoji, setDisplayedEmoji] = useState<string | null>(null);

  const handleEmojiSelect = useCallback(
    (emoji: EmojiPickerEmoji) => {
      setValue(emoji.id);
      setDisplayedEmoji(emoji.emoji);
      onEmojiSelect?.(emoji);
      if (closeOnSelect) {
        setOpened(false);
      }
    },
    [setValue, onEmojiSelect, closeOnSelect, setOpened]
  );

  const handleClear = useCallback(() => {
    setValue(null);
    setDisplayedEmoji(null);
  }, [setValue]);

  const handleInputClick = () => {
    if (!readOnly && !disabled) {
      setOpened(!opened);
    }
  };

  const inputContent = selectedEmoji ? (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--mantine-spacing-xs)',
        overflow: 'hidden',
      }}
    >
      <span {...getStyles('inputEmoji')}>{displayedEmoji || selectedEmoji.emoji}</span>
      <span {...getStyles('inputEmojiName')}>{selectedEmoji.name}</span>
    </span>
  ) : null;

  const clearButton =
    clearable && selectedEmoji && !readOnly && !disabled ? (
      <Input.ClearButton
        data-clear
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          handleClear();
        }}
      />
    ) : undefined;

  const wrapperProps = {
    label,
    description,
    error,
    success,
    required,
    classNames: resolvedClassNames,
    className,
    __staticSelector: 'EmojiPickerInput',
    __stylesApiProps: props,
    errorProps,
    successProps,
    labelProps,
    descriptionProps,
    unstyled,
    styles: resolvedStyles,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    id,
    mod,
    attributes,
    ..._wrapperProps,
  };

  return (
    <Input.Wrapper {...wrapperProps}>
      <Popover
        opened={opened}
        onChange={setOpened}
        __staticSelector="EmojiPickerInput"
        position="bottom-start"
        offset={5}
        trapFocus
        returnFocus
        {...popoverProps}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        disabled={readOnly || disabled}
      >
        <Popover.Target>
          <Input
            component="button"
            type="button"
            pointer
            {...others}
            {...getStyles('input')}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            __staticSelector="EmojiPickerInput"
            onClick={handleInputClick}
            rightSection={rightSection || clearButton}
            disabled={disabled}
            error={error}
            success={success}
            size={size}
            variant={variant}
            unstyled={unstyled}
            id={id}
            attributes={attributes}
            aria-expanded={opened}
          >
            {inputContent || <Input.Placeholder>{placeholder}</Input.Placeholder>}
          </Input>
        </Popover.Target>

        <Popover.Dropdown {...getStyles('dropdown')}>
          <EmojiPicker {...pickerProps} data={data} onEmojiSelect={handleEmojiSelect} autoFocus />
        </Popover.Dropdown>
      </Popover>
    </Input.Wrapper>
  );
});

EmojiPickerInput.classes = { ...InputBase.classes, ...classes };
EmojiPickerInput.displayName = '@mantine/emoji/EmojiPickerInput';
