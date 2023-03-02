import React, { useState, useRef, forwardRef } from 'react';
import { useUncontrolled, useMergedRef, useId } from '@mantine/hooks';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
import { Input } from '../Input';
import { extractSystemStyles } from '../Box';
import { CloseButton } from '../CloseButton';
import { BaseSelectProps, BaseSelectStylesNames } from '../Select/types';
import { DefaultValue, DefaultValueStylesNames } from './DefaultValue/DefaultValue';
import useStyles, { InputFieldPosition } from './TagInput.styles';

export type TagInputStylesNames =
  | DefaultValueStylesNames
  | Exclude<
      Selectors<typeof useStyles>,
      'tagInputEmpty' | 'tagInputInputHidden' | 'tagInputPointer'
    >
  | Exclude<
      BaseSelectStylesNames,
      | 'selected'
      | 'item'
      | 'nothingFound'
      | 'separator'
      | 'separatorLabel'
      | 'itemsWrapper'
      | 'dropdown'
    >;
export interface TagInputProps extends DefaultProps<TagInputStylesNames>, BaseSelectProps {
  /** Input size */
  size?: MantineSize;

  /** Properties spread to root element */
  wrapperProps?: Record<string, any>;

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

  /** Input Tag position */
  inputFieldPosition?: InputFieldPosition;
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
      variant,
      onChangeInput,
      disabled = false,
      radius = 'sm',
      icon,
      rightSection,
      sx,
      maxTags,
      name,
      addOnPaste = true,
      pasteSplit = defaultPasteSplit,
      validationRegex = /.*/,
      onValidationReject = () => {},
      onlyUnique = false,
      inputFieldPosition = 'inside',
      ...others
    }: TagInputProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { size, invalid: !!error, inputFieldPosition },
      { classNames, styles, name: 'TagInput' }
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
      if (IMEOpen) {
        return;
      }
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

    const inputElement = (
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
        onCompositionStart={() => setIMEOpen(true)}
        onCompositionEnd={() => setIMEOpen(false)}
        onBlur={handleInputBlur}
        readOnly={valuesOverflow.current}
        placeholder={_value.length === 0 ? placeholder : undefined}
        disabled={disabled}
        autoComplete="off"
        {...rest}
      />
    );

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
          {inputFieldPosition === 'top' && (
            <div className={cx(classes.values)}>{selectedItems}</div>
          )}
          <Input<'div'>
            __staticSelector="TagInput"
            style={{ overflow: 'hidden' }}
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
              !disabled && !valuesOverflow.current;
              inputRef.current?.focus();
            }}
            classNames={{
              ...classNames,
            }}
            rightSection={
              !disabled && clearable && _value.length > 0 ? (
                <CloseButton variant="transparent" onClick={handleClear} size={size} />
              ) : (
                rightSection
              )
            }
            onPaste={handlePaste}
          >
            <div className={classes.values} id={`${uuid}-items`}>
              {inputFieldPosition === 'inside' && (
                <div className={classes.values}>
                  {selectedItems}
                  {inputElement}
                </div>
              )}
              {(inputFieldPosition === 'bottom' || inputFieldPosition === 'top') && (
                <>{inputElement}</>
              )}
            </div>
          </Input>
          {inputFieldPosition === 'bottom' && (
            <div className={cx(classes.values)}>{selectedItems}</div>
          )}
        </div>

        {name && <input type="hidden" name={name} value={_value.join(',')} />}
      </Input.Wrapper>
    );
  }
);

TagInput.displayName = '@mantine/core/TagInput';
