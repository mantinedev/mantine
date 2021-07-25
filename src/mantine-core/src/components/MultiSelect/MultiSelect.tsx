import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { useId, useUncontrolled } from '@mantine/hooks';
import { DefaultProps, MantineSize, mergeStyles, useMantineTheme } from '../../theme';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { Transition, MantineTransition } from '../Transition/Transition';
import { Paper } from '../Paper/Paper';
import { Text } from '../Text/Text';
import { DefaultValue } from './DefaultValue/DefaultValue';
import useStyles from './MultiSelect.styles';

export interface MultiSelectItem {
  value: string;
  label: string;
  [key: string]: any;
}

export type MultiSelectStylesNames =
  | keyof ReturnType<typeof useStyles>
  | InputWrapperStylesNames
  | InputStylesNames;

interface MultiSelectProps
  extends DefaultProps<MultiSelectStylesNames>,
    InputWrapperBaseProps,
    InputBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange' | 'size'> {
  /** Input size */
  size?: MantineSize;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;

  /** Data for select options */
  data: MultiSelectItem[];

  /** Value for controlled component */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called each time value changes */
  onChange?(value: string[]): void;

  /** Component used to render values */
  valueComponent?: React.FC<any>;

  /** Dropdown body appear/disappear transition */
  transition?: MantineTransition;

  /** Dropdown body transition duration */
  transitionDuration?: number;

  /** Dropdown body transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Dropdown shadow from theme or any value to set box-shadow */
  shadow?: string;

  /** Maximum dropdown height in px */
  maxDropdownHeight?: number;

  /** Nothing found label */
  nothingFound?: React.ReactNode;

  /** Enable items searching */
  searchable?: boolean;
}

export function MultiSelect({
  className,
  style,
  themeOverride,
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
  data,
  onChange,
  valueComponent: Value = DefaultValue,
  id,
  transition = 'pop-top-left',
  transitionDuration = 0,
  transitionTimingFunction,
  maxDropdownHeight = 220,
  shadow = 'sm',
  nothingFound,
  onFocus,
  onBlur,
  searchable = false,
  placeholder,
  ...others
}: MultiSelectProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames as any, 'multi-select');
  const _styles = mergeStyles(classes, styles as any);

  const dropdownRef = useRef<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>();
  const uuid = useId(id);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [, setHovered] = useState(-1);

  const [searchValue, setSearchValue] = useState('');

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    rule: (val) => Array.isArray(val),
    onChange,
  });

  const handleValueRemove = (_val: string) => setValue(_value.filter((val) => val !== _val));

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.nativeEvent.code) {
      case 'Backspace': {
        if (_value.length > 0 && searchValue.length === 0) {
          setValue(_value.slice(0, -1));
        }

        break;
      }

      case 'Escape': {
        setDropdownOpened(false);
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
    setDropdownOpened(true);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onFocus === 'function' && onFocus(event);
    setDropdownOpened(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    setDropdownOpened(false);
  };

  const selectedItems = _value
    .map((val) => data.find((item) => item.value === val))
    .map((item) => (
      <Value
        {...item}
        className={classes.value}
        onRemove={() => handleValueRemove(item.value)}
        key={item.value}
      />
    ));

  const items = [];

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
      __staticSelector="multi-select"
      {...wrapperProps}
    >
      <div
        className={classes.wrapper}
        style={_styles.wrapper}
        role="combobox"
        aria-haspopup="listbox"
        aria-owns={`${uuid}-items`}
        aria-controls={uuid}
        aria-expanded={dropdownOpened}
        onMouseLeave={() => setHovered(-1)}
        tabIndex={-1}
      >
        <Input<'div'>
          className={classes.input}
          component="div"
          onMouseDown={(event) => {
            event.preventDefault();
            inputRef.current?.focus();
          }}
        >
          <div className={classes.values}>
            {selectedItems}
            <input
              ref={inputRef}
              type="text"
              id={uuid}
              className={cx(classes.searchInput, {
                [classes.searchInputInputHidden]: !searchable && _value.length > 0,
              })}
              onKeyDown={handleInputKeydown}
              value={searchValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              readOnly={!searchable}
              placeholder={_value.length === 0 ? placeholder : undefined}
              {...others}
            />
          </div>
        </Input>

        <Transition
          mounted={dropdownOpened}
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
              elementRef={dropdownRef}
              style={{ ..._styles.dropdown, ...transitionStyles, maxHeight: maxDropdownHeight }}
              onMouseDown={(event) => event.preventDefault()}
            >
              {items.length > 0 ? (
                items
              ) : (
                <Text size={size} className={classes.nothingFound} style={_styles.nothingFound}>
                  {nothingFound}
                </Text>
              )}
            </Paper>
          )}
        </Transition>
      </div>
    </InputWrapper>
  );
}

MultiSelect.displayName = '@mantine/core/MultiSelect';
