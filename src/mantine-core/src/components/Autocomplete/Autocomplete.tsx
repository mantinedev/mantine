import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { useId, useUncontrolled, useMergedRef, useDidUpdate } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineSize, mergeStyles } from '../../theme';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { Paper } from '../Paper/Paper';
import { Transition, MantineTransition } from '../Transition/Transition';
import { DefaultItem } from './DefaultItem/DefaultItem';
import useStyles from './Autocomplete.styles';

export type AutocompleteStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | keyof ReturnType<typeof useStyles>;

export interface AutocompleteItem {
  value: string;
  [key: string]: any;
}

export interface AutocompleteProps
  extends DefaultProps<AutocompleteStylesNames>,
    InputBaseProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange'> {
  /** Input size */
  size?: MantineSize;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Autocomplete data used to renderer items in dropdown */
  data: AutocompleteItem[];

  /** Change item renderer */
  itemComponent?: React.FC<any>;

  /** Dropdown shadow from theme or any value to set box-shadow */
  shadow?: string;

  /** Limit amount of items rendered in dropdown */
  limit?: number;

  /** Called when item from dropdown was selected */
  onItemSubmit?(item: AutocompleteItem): void;

  /** Controlled input value */
  value?: string;

  /** Uncontrolled input defaultValue */
  defaultValue?: string;

  /** Controlled input onChange handler */
  onChange?(value: string): void;

  /** Dropdown body appear/disappear transition */
  transition?: MantineTransition;

  /** Dropdown body transition duration */
  transitionDuration?: number;

  /** Dropdown body transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Initial dropdown opened state */
  initiallyOpened?: boolean;

  /** Function based on which items in dropdown are filtered */
  filter?(value: string, item: AutocompleteItem): boolean;
}

function defaultFilter(value: string, item: AutocompleteItem) {
  return item.value.toLowerCase().trim().includes(value.toLowerCase().trim());
}

export function Autocomplete({
  className,
  style,
  required = false,
  label,
  id,
  error,
  description,
  size = 'sm',
  shadow = 'sm',
  data,
  limit = 5,
  value,
  defaultValue,
  onChange,
  itemComponent: Item = DefaultItem,
  onItemSubmit,
  onKeyDown,
  onFocus,
  onBlur,
  onClick,
  transition = 'skew-up',
  transitionDuration = 0,
  initiallyOpened = false,
  transitionTimingFunction,
  wrapperProps,
  elementRef,
  themeOverride,
  classNames,
  styles,
  filter = defaultFilter,
  ...others
}: AutocompleteProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames as any, 'autocomplete');
  const _styles = mergeStyles(classes, styles as any);
  const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
  const [hovered, setHovered] = useState(-1);
  const inputRef = useRef<HTMLInputElement>();
  const uuid = useId(id);
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
    rule: (val) => typeof val === 'string',
  });

  useDidUpdate(() => {
    setHovered(0);
  }, [_value]);

  const handleItemClick = (item: AutocompleteItem) => {
    typeof onItemSubmit === 'function' && onItemSubmit(item);
    handleChange(item.value);
    setDropdownOpened(false);
    inputRef.current.focus();
  };

  const filteredData = data.filter((item) => filter(_value, item)).slice(0, limit);

  const items = filteredData.map((item, index) => (
    <Item
      key={item.value}
      className={cx(classes.item, { [classes.hovered]: hovered === index })}
      style={{ ..._styles.item, ...(hovered === index ? _styles.hovered : null) }}
      onMouseEnter={() => setHovered(index)}
      id={`${uuid}-${index}`}
      role="option"
      aria-selected={hovered === index}
      onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        handleItemClick(item);
      }}
      {...item}
    />
  ));

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    typeof onKeyDown === 'function' && onKeyDown(event);

    switch (event.nativeEvent.code) {
      case 'ArrowUp': {
        event.preventDefault();
        setHovered((current) => (current > 0 ? current - 1 : current));
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        setHovered((current) => (current < filteredData.length - 1 ? current + 1 : current));
        break;
      }

      case 'Enter': {
        if (filteredData[hovered]) {
          event.preventDefault();
          typeof onItemSubmit === 'function' && onItemSubmit(filteredData[hovered]);
          handleChange(filteredData[hovered].value);
        }
      }
    }
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onFocus === 'function' && onFocus(event);
    setDropdownOpened(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    setDropdownOpened(false);
  };

  const handleInputClick = (event: any) => {
    typeof onClick === 'function' && onClick(event);
    setDropdownOpened(true);
  };

  const shouldRenderDropdown = dropdownOpened && filteredData.length > 1;

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
      themeOverride={themeOverride}
      classNames={classNames as any}
      styles={styles as any}
      __staticSelector="autocomplete"
      {...wrapperProps}
    >
      <div
        className={classes.wrapper}
        style={_styles.wrapper}
        role="combobox"
        aria-haspopup="listbox"
        aria-owns={`${uuid}-items`}
        aria-controls={uuid}
        aria-expanded={shouldRenderDropdown}
        onMouseLeave={() => setHovered(-1)}
        tabIndex={-1}
      >
        <Input<'input'>
          {...others}
          required={required}
          elementRef={useMergedRef(elementRef, inputRef)}
          id={uuid}
          type="string"
          invalid={!!error}
          size={size}
          onKeyDown={handleInputKeydown}
          themeOverride={themeOverride}
          classNames={classNames as any}
          styles={styles as any}
          __staticSelector="autocomplete"
          value={_value}
          onChange={(event) => handleChange(event.currentTarget.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onClick={handleInputClick}
          aria-autocomplete="list"
          aria-controls={shouldRenderDropdown ? `${uuid}-items` : null}
          aria-activedescendant={hovered !== -1 ? `${uuid}-${hovered}` : null}
        />

        <Transition
          mounted={shouldRenderDropdown}
          transition={transition}
          duration={transitionDuration}
          timingFunction={transitionTimingFunction}
        >
          {(transitionStyles) => (
            <Paper
              id={`${uuid}-items`}
              aria-labelledby={`${uuid}-label`}
              role="listbox"
              className={classes.dropdown}
              shadow={shadow}
              style={{ ..._styles.dropdown, ...transitionStyles }}
            >
              {items}
            </Paper>
          )}
        </Transition>
      </div>
    </InputWrapper>
  );
}

Autocomplete.displayName = '@mantine/core/Autocomplete';
