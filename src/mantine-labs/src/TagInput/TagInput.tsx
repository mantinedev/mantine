import React, { useState, useRef, forwardRef } from 'react';
import { useUncontrolled, useMergedRef, useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineSize,
  Selectors,
  InputWrapper,
  InputWrapperStylesNames,
  Input,
  InputStylesNames,
  CloseButton,
  extractSystemStyles,
} from '@mantine/core';
import { BaseSelectProps } from '@mantine/core/src/components/Select/types';
import useStyles, { RIGHT_SECTION_WIDTH } from './TagInput.styles';
import { DefaultValue, DefaultValueStylesNames } from './DefaultValue/DefaultValue';

export type TagInputStylesNames =
  | DefaultValueStylesNames
  | Exclude<
      Selectors<typeof useStyles>,
      'tagInputEmpty' | 'tagInputInputHidden' | 'tagInputPointer'
    >
  | InputStylesNames
  | InputWrapperStylesNames;
export interface TagInputProps extends DefaultProps<TagInputStylesNames>, BaseSelectProps {
  /** Input size */
  size?: MantineSize;

  /** Properties spread to root element (InputWrapper component) */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** Controlled input value */
  value?: string[];

  /** Uncontrolled input defaultValue */
  defaultValue?: string[];

  /** Controlled input onChange handler */
  onChange?(value: string[]): void;

  /** Component used to render values */
  valueComponent?: React.FC<any>;

  /** Allow to clear item */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** Clear input field value on blur */
  clearInputOnBlur?: boolean;

  /** Called each time search query changes */
  onChangeInput?(query: string): void;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Limit amount of tags */
  maxTags?: number;

  /** Component used to render right section */
  rightSection?: React.ReactNode;

  /** Called to split after onPaste  */
  pasteSplit?: (data: any) => string[];

  /** Allow to paste item */
  addOnPaste?: boolean;

  /** Called for validation when add tags */
  validationRegex?: RegExp;

  /** Called when validationRegex reject tags */
  onValidationReject?: (data: string[]) => void;

  /** Allow to only unique */
  onlyUnique?: boolean;
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

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      className,
      style,
      required,
      label,
      description,
      size = 'sm',
      error,
      classNames,
      styles,
      wrapperProps,
      value,
      defaultValue,
      onChange = () => {},
      valueComponent: Value = DefaultValue,
      id,
      onFocus,
      onBlur,
      placeholder,
      clearable = false,
      clearInputOnBlur = false,
      clearButtonLabel,
      variant,
      onChangeInput,
      disabled = false,
      radius = 'sm',
      icon,
      rightSection,
      rightSectionWidth,
      sx,
      maxTags,
      name,
      addOnPaste = true,
      pasteSplit = defaultPasteSplit,
      validationRegex = /.*/,
      onValidationReject = () => {},
      onlyUnique = false,
      ...others
    }: TagInputProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles(
      { size, invalid: !!error },
      { classNames, styles, name: 'TagInput' }
    );
    const { systemStyles, rest } = extractSystemStyles(others);

    const inputRef = useRef<HTMLInputElement>();
    const wrapperRef = useRef<HTMLDivElement>();
    const uuid = useUuid(id);
    const [inputValue, setInputValue] = useState('');

    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: [],
      rule: (val) => Array.isArray(val),
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
      typeof onChangeInput === 'function' && onChangeInput(event.currentTarget.value);
      setInputValue(event.currentTarget.value);
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      clearInputOnBlur && setInputValue('');
    };

    const handleAddTags = (newTags: string[]): boolean => {
      let tags = newTags;
      if (onlyUnique) {
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
      switch (event.nativeEvent.code) {
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
      .map((val) => {
        const selectedItem = {
          value: val,
          label: val,
        };
        return selectedItem;
      })
      .filter((val) => !!val)
      .map((item) => (
        <Value
          {...item}
          disabled={disabled}
          className={classes.value}
          onRemove={() => {
            handleValueRemove(item.value);
          }}
          key={item.value}
          size={size}
          styles={styles}
          classNames={classNames}
          radius={radius}
        />
      ));

    const handleClear = (): void => {
      setInputValue('');
      setValue([]);
      inputRef.current?.focus();
      valuesOverflow.current = false;
    };

    const handlePaste = (e: React.ClipboardEvent): void => {
      if (!addOnPaste) {
        return;
      }

      e.preventDefault();
      const data = getClipboardData(e);
      const tags = pasteSplit(data);
      handleAddTags(tags);
    };

    return (
      <InputWrapper
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
            style={{ overflow: 'hidden' }}
            component="div"
            multiline
            size={size}
            variant={variant}
            disabled={disabled}
            invalid={!!error}
            required={required}
            radius={radius}
            icon={icon}
            onMouseDown={(event) => {
              event.preventDefault();
              !disabled && !valuesOverflow.current;
              inputRef.current?.focus();
            }}
            classNames={{
              ...classNames,
            }}
            rightSectionWidth={theme.fn.size({ size, sizes: RIGHT_SECTION_WIDTH }) as number}
            rightSection={
              !disabled && clearable && _value.length > 0 ? (
                <CloseButton
                  variant="transparent"
                  aria-label={clearButtonLabel}
                  onClick={handleClear}
                  size={size}
                />
              ) : (
                rightSection
              )
            }
            onPaste={handlePaste}
          >
            <div className={classes.values} id={`${uuid}-items`}>
              {selectedItems}

              <input
                ref={useMergedRef(ref, inputRef)}
                type="text"
                id={uuid}
                className={cx(classes.tagInput, {
                  [classes.tagInputEmpty]: _value.length === 0,
                })}
                onKeyDown={handleInputKeydown}
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
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
      </InputWrapper>
    );
  }
);

TagInput.displayName = '@mantine/labs/TagInput';
