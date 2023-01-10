import React, { useState, useEffect, forwardRef } from 'react';
import { useUncontrolled, useDidUpdate, useEyeDropper } from '@mantine/hooks';
import { DefaultProps, getDefaultZIndex, MantineShadow, useMantineTheme } from '@mantine/styles';
import { noop } from '@mantine/utils';
import {
  InputWrapperBaseProps,
  InputWrapperStylesNames,
  Input,
  InputSharedProps,
  InputStylesNames,
  useInputProps,
} from '../Input';
import { ColorSwatch } from '../ColorSwatch';
import { ActionIcon } from '../ActionIcon';
import { Popover, PopoverStylesNames } from '../Popover';
import { MantineTransition } from '../Transition';
import {
  ColorPicker,
  ColorPickerBaseProps,
  ColorPickerStylesNames,
} from '../ColorPicker/ColorPicker';
import { convertHsvaTo, isColorValid, parseColor } from '../ColorPicker/converters';
import { EyeDropperIcon } from './EyeDropperIcon';

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

  /** Determines whether eye dropper button should be displayed in the right section, true by default */
  withEyeDropper?: boolean;

  /** Replaces default eye dropper icon */
  eyeDropperIcon?: React.ReactNode;

  /** Determines whether the dropdown should be closed when color swatch is clicked, false by default */
  closeOnColorSwatchClick?: boolean;
}

const SWATCH_SIZES = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 36,
};

const EYE_DROPPER_SIZES = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 22,
};

const RIGHT_SECTION_WIDTH = {
  xs: 28,
  sm: 32,
  md: 38,
  lg: 44,
  xl: 58,
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
  withEyeDropper: true,
};

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>((props, ref) => {
  const {
    wrapperProps,
    inputProps,
    format,
    onChange,
    onChangeEnd,
    onFocus,
    onBlur,
    onClick,
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
    readOnly,
    withEyeDropper,
    eyeDropperIcon,
    rightSection,
    rightSectionWidth,
    closeOnColorSwatchClick,
    disabled,
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

  const { supported: eyeDropperSupported, open: openEyeDropper } = useEyeDropper();

  const eyeDropper = (
    <ActionIcon
      sx={{ color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black }}
      size={inputProps.size}
      onClick={() =>
        openEyeDropper()
          .then(({ sRGBHex }) => setValue(convertHsvaTo(format, parseColor(sRGBHex))))
          .catch(noop)
      }
    >
      {eyeDropperIcon || (
        <EyeDropperIcon size={theme.fn.size({ size: inputProps.size, sizes: EYE_DROPPER_SIZES })} />
      )}
    </ActionIcon>
  );

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
    setDropdownOpened(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    setDropdownOpened(false);
    fixOnBlur && setValue(lastValidValue);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    onClick?.(event);
    setDropdownOpened(true);
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
        disabled={
          readOnly || (withPicker === false && (!Array.isArray(swatches) || swatches.length === 0))
        }
      >
        <Popover.Target>
          <div>
            <Input<'input'>
              autoComplete="nope"
              {...others}
              {...inputProps}
              disabled={disabled}
              ref={ref}
              __staticSelector="ColorInput"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onClick={handleInputClick}
              spellCheck={false}
              value={_value}
              onChange={(event) => {
                const inputValue = event.currentTarget.value;
                setValue(inputValue);
                if (isColorValid(inputValue)) {
                  onChangeEnd?.(convertHsvaTo(format, parseColor(inputValue)));
                }
              }}
              icon={
                icon ||
                (withPreview ? (
                  <ColorSwatch
                    color={isColorValid(_value) ? _value : '#fff'}
                    size={theme.fn.size({ size: inputProps.size, sizes: SWATCH_SIZES })}
                  />
                ) : null)
              }
              readOnly={disallowInput || readOnly}
              sx={{ cursor: disallowInput ? 'pointer' : undefined }}
              unstyled={unstyled}
              classNames={classNames}
              styles={styles}
              rightSection={
                rightSection ||
                (withEyeDropper && !disabled && !readOnly && eyeDropperSupported
                  ? eyeDropper
                  : null)
              }
              rightSectionWidth={
                rightSectionWidth ??
                theme.fn.size({ size: inputProps.size, sizes: RIGHT_SECTION_WIDTH })
              }
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
            onColorSwatchClick={() => closeOnColorSwatchClick && setDropdownOpened(false)}
          />
        </Popover.Dropdown>
      </Popover>
    </Input.Wrapper>
  );
});

ColorInput.displayName = '@mantine/core/ColorInput';
