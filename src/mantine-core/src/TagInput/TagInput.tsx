import React, { useState, useRef, forwardRef } from 'react';
import { useUncontrolled, useMergedRef, useId } from '@mantine/hooks';
import { DefaultProps, MantineSize, Selectors, useComponentDefaultProps } from '@mantine/styles';
import { Input, InputStylesNames, InputWrapperStylesNames } from '../Input';
import { extractSystemStyles } from '../Box';
import { CloseButton } from '../CloseButton';
import { BaseSelectProps } from '../Select/types';
import { DefaultValue, DefaultValueStylesNames } from './DefaultValue/DefaultValue';
import useStyles from './TagInput.styles';

export type TagInputStylesNames =
  | DefaultValueStylesNames
  | InputStylesNames
  | InputWrapperStylesNames
  | Selectors<typeof useStyles>;

export interface TagInputProps extends DefaultProps<TagInputStylesNames>, BaseSelectProps {
  /** Input size */
  size?: MantineSize;

  /** Props added to root element */
  wrapperProps?: Record<string, any>;

  /** Value for controlled component */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called when value changes */
  onChange?(value: string[]): void;

  /** Component used to render values */
  valueComponent?: React.FC<any>;

  /** Determines whether clear button should be visible */
  clearable?: boolean;

  /** Determines whether the input should be cleared on blur */
  clearInputOnBlur?: boolean;

  /** Called when input value changes */
  onInputChange?(value: string): void;

  /** Maximum number of allowed tags */
  maxTags?: number;

  /** Function that determines how values are splitted on paste */
  pasteSplit?(data: any): string[];

  /** Determines whether it is allowed to add values by pasting from clipboard */
  addOnPaste?: boolean;

  /** Regular expression used for tags validation */
  validationRegex?: RegExp;

  /** Called when tags are rejected */
  onValidationReject?(data: string[]): void;

  /** Determines whether tags must be unique */
  uniqueTags?: boolean;
}

const defaultPasteSplit = (data: string): string[] => {
  const separators = [',', ';', '\\(', '\\)', '\\*', '/', ':', '\\?', '\n', '\r'];
  return data.split(new RegExp(separators.join('|'))).map((d) => d.trim());
};

const getClipboardData = (e: React.ClipboardEvent): string => {
  if (e.clipboardData) {
    return e.clipboardData.getData('text/plain');
  }

  return '';
};

const uniq = (arr = []) => {
  const out = [];

  arr.forEach((item) => {
    if (out.indexOf(item) === -1) {
      out.push(item);
    }
  });

  return out;
};

const defaultProps: Partial<TagInputProps> = {
  size: 'sm',
  valueComponent: DefaultValue,
  clearable: false,
  radius: 'sm',
  addOnPaste: true,
  pasteSplit: defaultPasteSplit,
  validationRegex: /.*/,
  onValidationReject: () => {},
  uniqueTags: false,
};

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>((props: TagInputProps, ref) => {
  const {
    className,
    style,
    required,
    label,
    description,
    size,
    error,
    classNames,
    styles,
    wrapperProps,
    value,
    defaultValue,
    onChange,
    valueComponent: Value,
    id,
    onFocus,
    onBlur,
    placeholder,
    clearable,
    clearInputOnBlur,
    variant,
    onInputChange,
    disabled,
    radius,
    icon,
    rightSection,
    sx,
    maxTags,
    name,
    addOnPaste,
    pasteSplit,
    validationRegex,
    onValidationReject,
    uniqueTags,
    unstyled,
    ...others
  } = useComponentDefaultProps('TagInput', defaultProps, props);

  const { classes, cx } = useStyles(
    { size, invalid: !!error },
    { name: 'TagInput', classNames, styles, unstyled, variant, size }
  );

  const { systemStyles, rest } = extractSystemStyles(others);

  const inputRef = useRef<HTMLInputElement>();
  const wrapperRef = useRef<HTMLDivElement>();
  const uuid = useId(id);
  const [inputValue, setInputValue] = useState('');
  const [IMEOpen, setIMEOpen] = useState(false);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const valuesOverflow = useRef(!!maxTags && maxTags < _value.length);

  const handleValueRemove = (_val: string) => {
    const newValue = _value.filter((val) => val !== _val);
    setValue(newValue);

    if (!!maxTags && newValue.length < maxTags) {
      valuesOverflow.current = false;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange?.(event.currentTarget.value);
    setInputValue(event.currentTarget.value);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    clearInputOnBlur && setInputValue('');
  };

  const handleAddTags = (newTags: string[]) => {
    let tags = newTags;
    if (uniqueTags) {
      tags = uniq(tags);
      tags = tags.filter((tag) => _value.every((currentTag) => currentTag !== tag));
    }

    const rejectedTags = tags.filter((tag) => !validationRegex.test(tag));

    if (maxTags >= 0) {
      const remainingLimit = Math.max(maxTags - _value.length, 0);
      tags = tags.slice(0, remainingLimit);
    }

    if (onValidationReject && rejectedTags.length > 0) {
      onValidationReject(rejectedTags);
    }

    if (rejectedTags.length > 0) {
      return false;
    }

    if (tags.length > 0) {
      const newValue = _value.concat(tags);
      setValue(newValue);
      setInputValue('');
      return true;
    }

    setInputValue('');
    return false;
  };

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (IMEOpen) return;

    switch (event.key) {
      case 'Enter': {
        if (inputValue) {
          event.preventDefault();
          handleAddTags([inputValue]);

          if (_value.length === maxTags - 1) {
            valuesOverflow.current = true;
            inputRef.current?.blur();
            return;
          }

          inputRef.current?.focus();
        }

        break;
      }

      case 'Backspace': {
        if (_value.length > 0 && inputValue.length === 0) {
          setValue(_value.slice(0, -1));
        }

        break;
      }
    }
  };

  const selectedItems = _value
    .filter((val) => !!val)
    .map((val) => ({ value: val, label: val }))
    .map((item) => (
      <Value
        {...item}
        disabled={disabled}
        className={classes.value}
        onRemove={() => handleValueRemove(item.value)}
        key={item.value}
        size={size}
        styles={styles}
        classNames={classNames}
        radius={radius}
      />
    ));

  const handleClear = () => {
    setInputValue('');
    setValue([]);
    inputRef.current?.focus();
    valuesOverflow.current = false;
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    if (!addOnPaste) return;
    event.preventDefault();
    handleAddTags(pasteSplit(getClipboardData(event)));
  };

  return (
    <Input.Wrapper
      required={required}
      id={uuid}
      label={label}
      error={error}
      description={description}
      size={size}
      className={className}
      style={style}
      classNames={classNames}
      styles={styles}
      __staticSelector="TagInput"
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <div
        className={classes.wrapper}
        aria-haspopup="listbox"
        aria-owns={`${uuid}-items`}
        aria-controls={uuid}
        tabIndex={-1}
        ref={wrapperRef}
      >
        <Input<'div'>
          __staticSelector="TagInput"
          component="div"
          multiline
          size={size}
          variant={variant}
          disabled={disabled}
          error={error}
          required={required}
          radius={radius}
          icon={icon}
          onMouseDown={(event) => {
            event.preventDefault();
            inputRef.current?.focus();
          }}
          classNames={{
            ...classNames,
            input: cx(classes.input, classNames?.input),
            wrapper: cx(classes.inputWrapper, classNames?.wrapper),
          }}
          styles={styles}
          unstyled={unstyled}
          onPaste={handlePaste}
          rightSection={
            !disabled && clearable && _value.length > 0 ? (
              <CloseButton variant="transparent" onClick={handleClear} size={size} />
            ) : (
              rightSection
            )
          }
        >
          <div className={classes.values} id={`${uuid}-items`}>
            {selectedItems}

            <input
              ref={useMergedRef(ref, inputRef)}
              type="text"
              id={uuid}
              className={classes.tagInput}
              data-empty={_value.length === 0 || undefined}
              onKeyDown={handleInputKeydown}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={onFocus}
              onCompositionStart={() => setIMEOpen(true)}
              onCompositionEnd={() => setIMEOpen(false)}
              onBlur={handleInputBlur}
              readOnly={valuesOverflow.current}
              placeholder={_value.length === 0 ? placeholder : undefined}
              disabled={disabled}
              autoComplete="off"
              {...rest}
            />
          </div>
        </Input>
      </div>

      {name && <input type="hidden" name={name} value={_value.join(',')} />}
    </Input.Wrapper>
  );
});

TagInput.displayName = '@mantine/core/TagInput';
