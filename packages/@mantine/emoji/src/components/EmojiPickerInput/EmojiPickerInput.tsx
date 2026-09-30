import { useCallback, useRef, useState } from 'react';
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
  InputClearButtonProps,
  __BaseInputProps,
  __InputStylesNames,
} from '@mantine/core';
import { useId, useMergedRef, useUncontrolled } from '@mantine/hooks';
import { EmojiPickerEmoji } from '../../types';
import { EmojiPicker, EmojiPickerProps } from '../EmojiPicker';
import classes from './EmojiPickerInput.module.css';

export type EmojiPickerInputStylesNames =
  | 'dropdown'
  | 'inputEmoji'
  | 'inputEmojiName'
  | 'inputValue'
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
  /** Controlled emoji id value @category state */
  value?: string | null;

  /** Default emoji id value for uncontrolled state @category state */
  defaultValue?: string | null;

  /** Called when value changes @category state */
  onChange?: (value: string | null) => void;

  /** Input placeholder displayed when no emoji is selected @category appearance */
  placeholder?: string;

  /** Determines whether the clear button is displayed @default false @category behavior */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: InputClearButtonProps;

  /** Props passed to the `Popover` component, use `opened`, `defaultOpened` and `onOpenedChange` props to control opened state */
  popoverProps?: Omit<PopoverProps, 'children' | 'opened' | 'defaultOpened' | 'onChange'>;

  /** Controlled popover opened state @category state */
  opened?: boolean;

  /** Default popover opened state for uncontrolled mode @category state */
  defaultOpened?: boolean;

  /** Called when popover opened state changes @category state */
  onOpenedChange?: (opened: boolean) => void;

  /** Determines whether the popover closes after emoji is selected @default true @category behavior */
  closeOnSelect?: boolean;

  /** Emoji data object, use `emojiMartAdapter` or `emojibaseAdapter` to convert data @category appearance */
  data: EmojiPickerProps['data'];

  /** Called when an emoji is selected @category behavior */
  onEmojiSelect?: EmojiPickerProps['onEmojiSelect'];

  /** Props passed to the `EmojiPicker` component inside the dropdown */
  pickerProps?: Omit<EmojiPickerProps, 'data' | 'onEmojiSelect'>;

  /** Determines whether the input is in read-only mode @category behavior */
  readOnly?: boolean;

  /** Determines whether the input is disabled @category behavior */
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
    clearButtonProps,
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
    ref,
    ...others
  } = props;

  const inputRef = useRef<HTMLButtonElement>(null);
  const mergedRef = useMergedRef(inputRef, ref);

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

  const [opened, setOpened] = useUncontrolled({
    value: openedProp,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange: onOpenedChange,
  });

  const [skinTone, setSkinTone] = useUncontrolled({
    value: pickerProps?.skinTone,
    defaultValue: pickerProps?.defaultSkinTone,
    finalValue: 0,
    onChange: pickerProps?.onSkinToneChange,
  });

  const selectedEmoji = value ? data.emojis[value] : null;
  const [tonedEmoji, setTonedEmoji] = useState<{ id: string; emoji: string } | null>(null);
  const [prevValue, setPrevValue] = useState(value);
  if (prevValue !== value) {
    setPrevValue(value);
    if (tonedEmoji && tonedEmoji.id !== value) {
      setTonedEmoji(null);
    }
  }
  const displayedEmoji =
    tonedEmoji && tonedEmoji.id === value ? tonedEmoji.emoji : selectedEmoji?.emoji;

  const handleEmojiSelect = useCallback(
    (emoji: EmojiPickerEmoji) => {
      setValue(emoji.id);
      setTonedEmoji({ id: emoji.id, emoji: emoji.emoji });
      onEmojiSelect?.(emoji);
      if (closeOnSelect) {
        setOpened(false);
      }
    },
    [setValue, onEmojiSelect, closeOnSelect, setOpened]
  );

  const handleClear = () => {
    setValue(null);
    setTonedEmoji(null);
    inputRef.current?.focus();
  };

  const handleInputClick = () => {
    if (!readOnly && !disabled) {
      setOpened(!opened);
    }
  };

  const inputContent = selectedEmoji ? (
    <span {...getStyles('inputValue')}>
      <span {...getStyles('inputEmoji')}>{displayedEmoji}</span>
      <span {...getStyles('inputEmojiName')}>{selectedEmoji.name}</span>
    </span>
  ) : null;

  const clearButton =
    clearable && selectedEmoji && !readOnly && !disabled ? (
      <Input.ClearButton
        aria-label="Clear emoji"
        {...clearButtonProps}
        data-clear
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          handleClear();
          clearButtonProps?.onClick?.(event);
        }}
      />
    ) : undefined;

  const _id = useId(id);

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
    mod,
    attributes,
    ..._wrapperProps,
    id: _id,
  };

  return (
    <Input.Wrapper {...wrapperProps}>
      <Popover
        __staticSelector="EmojiPickerInput"
        position="bottom-start"
        offset={5}
        trapFocus
        returnFocus
        {...popoverProps}
        id={_id}
        opened={opened}
        onChange={setOpened}
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
            ref={mergedRef}
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
            id={_id}
            attributes={attributes}
            aria-expanded={opened}
          >
            {inputContent || <Input.Placeholder>{placeholder}</Input.Placeholder>}
          </Input>
        </Popover.Target>

        <Popover.Dropdown {...getStyles('dropdown')}>
          <EmojiPicker
            {...pickerProps}
            skinTone={skinTone}
            onSkinToneChange={setSkinTone}
            data={data}
            onEmojiSelect={handleEmojiSelect}
            autoFocus
          />
        </Popover.Dropdown>
      </Popover>
    </Input.Wrapper>
  );
});

EmojiPickerInput.classes = { ...InputBase.classes, ...classes };
EmojiPickerInput.displayName = '@mantine/emoji/EmojiPickerInput';
