import React, { useState, useEffect, forwardRef } from 'react';
import { useUncontrolled, useDidUpdate } from '@mantine/hooks';
import { DefaultProps, getDefaultZIndex, MantineShadow, useMantineTheme } from '@mantine/styles';
import {
  InputWrapperBaseProps,
  InputWrapperStylesNames,
  Input,
  InputSharedProps,
  InputStylesNames,
  useInputProps,
} from '../Input';
import { ColorSwatch } from '../ColorSwatch';
import { Popover, PopoverStylesNames } from '../Popover';
import { MantineTransition } from '../Transition';
import {
  ColorPicker,
  ColorPickerBaseProps,
  ColorPickerStylesNames,
} from '../ColorPicker/ColorPicker';
import { convertHsvaTo, isColorValid, parseColor } from '../ColorPicker/converters';

export type ColorInputStylesNames =
  | InputWrapperStylesNames
  | InputStylesNames
  | ColorPickerStylesNames
  | PopoverStylesNames;

export interface ColorInputProps
  extends InputWrapperBaseProps,
    InputSharedProps,
    ColorPickerBaseProps,
    DefaultProps<ColorInputStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange' | 'defaultValue' | 'value'> {
  /** Disallow free input */
  disallowInput?: boolean;

  /** call onChange with last valid value onBlur */
  fixOnBlur?: boolean;

  /** Dropdown element z-index */
  dropdownZIndex?: number;

  /** Display swatch with color preview on the left side of input */
  withPreview?: boolean;

  /** Dropdown transition name or object */
  transition?: MantineTransition;

  /** Dropdown appear/disappear transition duration in ms */
  transitionDuration?: number;

  /** Dropdown transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Whether to render the dropdown in a Portal */
  withinPortal?: boolean;

  /** Dropdown box-shadow, key of theme.shadows */
  shadow?: MantineShadow;
}

const SWATCH_SIZES = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 36,
};

const defaultProps: Partial<ColorInputProps> = {
  size: 'sm',
  format: 'hex',
  fixOnBlur: true,
  withPreview: true,
  swatchesPerRow: 10,
  withPicker: true,
  transition: 'pop-top-left',
  dropdownZIndex: getDefaultZIndex('popover'),
  transitionDuration: 0,
  withinPortal: true,
  shadow: 'md',
};

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  (props: ColorInputProps, ref) => {
    const {
      wrapperProps,
      inputProps,
      format,
      onChange,
      onChangeEnd,
      onFocus,
      onBlur,
      value,
      defaultValue,
      disallowInput,
      fixOnBlur,
      withPreview,
      swatchesPerRow,
      withPicker,
      icon,
      transition,
      dropdownZIndex,
      transitionDuration,
      transitionTimingFunction,
      withinPortal,
      swatches,
      shadow,
      classNames,
      styles,
      unstyled,
      ...others
    } = useInputProps('ColorInput', defaultProps, props);

    const theme = useMantineTheme();
    const [dropdownOpened, setDropdownOpened] = useState(false);
    const [lastValidValue, setLastValidValue] = useState('');
    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: '',
      onChange,
    });

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      setDropdownOpened(true);
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      setDropdownOpened(false);
      fixOnBlur && setValue(lastValidValue);
    };

    useEffect(() => {
      if (isColorValid(_value) || _value.trim() === '') {
        setLastValidValue(_value);
      }
    }, [_value]);

    useDidUpdate(() => {
      if (isColorValid(_value)) {
        setValue(convertHsvaTo(format, parseColor(_value)));
      }
    }, [format]);

    return (
      <Input.Wrapper {...wrapperProps} __staticSelector="ColorInput">
        <Popover
          __staticSelector="ColorInput"
          position="bottom-start"
          offset={5}
          zIndex={dropdownZIndex}
          withinPortal={withinPortal}
          transitionDuration={transitionDuration}
          transition={transition}
          opened={dropdownOpened}
          shadow={shadow}
          classNames={classNames}
          styles={styles}
          unstyled={unstyled}
        >
          <Popover.Target>
            <div>
              <Input<'input'>
                {...others}
                {...inputProps}
                ref={ref}
                __staticSelector="ColorInput"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                spellCheck={false}
                value={_value}
                onChange={(event) => {
                  const inputValue = event.currentTarget.value;
                  setValue(inputValue);
                  if (isColorValid(inputValue)) {
                    onChangeEnd?.(convertHsvaTo(format, parseColor(inputValue)));
                  }
                }}
                autoComplete="nope"
                icon={
                  icon ||
                  (withPreview ? (
                    <ColorSwatch
                      color={isColorValid(_value) ? _value : '#fff'}
                      size={theme.fn.size({ size: inputProps.size, sizes: SWATCH_SIZES })}
                    />
                  ) : null)
                }
                readOnly={disallowInput}
                sx={{ cursor: disallowInput ? 'pointer' : undefined }}
                unstyled={unstyled}
                classNames={classNames}
                styles={styles}
              />
            </div>
          </Popover.Target>

          <Popover.Dropdown onMouseDown={(event) => event.preventDefault()} p={inputProps.size}>
            <ColorPicker
              __staticSelector="ColorInput"
              value={_value}
              onChange={setValue}
              onChangeEnd={onChangeEnd}
              format={format}
              swatches={swatches}
              swatchesPerRow={swatchesPerRow}
              withPicker={withPicker}
              size={inputProps.size}
              focusable={false}
              unstyled={unstyled}
              styles={styles}
              classNames={classNames}
            />
          </Popover.Dropdown>
        </Popover>
      </Input.Wrapper>
    );
  }
);

ColorInput.displayName = '@mantine/core/ColorInput';
