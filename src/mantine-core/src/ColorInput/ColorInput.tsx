import React, { useState, useEffect, forwardRef } from 'react';
import { useUncontrolled, useDidUpdate, useEyeDropper } from '@mantine/hooks';
import {
  DefaultProps,
  getDefaultZIndex,
  MantineShadow,
  useMantineTheme,
  rem,
  getSize,
} from '@mantine/styles';
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
import { PortalProps } from '../Portal';
import { TransitionOverride } from '../Transition';
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

  /** Props added to Transition component that used to animate dropdown presence, use to configure duration and animation type, { duration: 0, transition: 'fade' } by default */
  transitionProps?: TransitionOverride;

  /** Whether to render the dropdown in a Portal */
  withinPortal?: boolean;

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;

  /** Dropdown box-shadow, key of theme.shadows */
  shadow?: MantineShadow;

  /** Determines whether eye dropper button should be displayed in the right section, true by default */
  withEyeDropper?: boolean;

  /** Replaces default eye dropper icon */
  eyeDropperIcon?: React.ReactNode;

  /** Determines whether the dropdown should be closed when color swatch is clicked, false by default */
  closeOnColorSwatchClick?: boolean;

  /** aria-label for eye dropper button */
  eyeDropperLabel?: string;
}

const SWATCH_SIZES = {
  xs: rem(16),
  sm: rem(18),
  md: rem(22),
  lg: rem(28),
  xl: rem(36),
};

const EYE_DROPPER_SIZES = {
  xs: rem(14),
  sm: rem(16),
  md: rem(18),
  lg: rem(20),
  xl: rem(22),
};

const defaultProps: Partial<ColorInputProps> = {
  size: 'sm',
  format: 'hex',
  fixOnBlur: true,
  withPreview: true,
  swatchesPerRow: 10,
  withPicker: true,
  transitionProps: { transition: 'fade', duration: 0 },
  dropdownZIndex: getDefaultZIndex('popover'),
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
    transitionProps,
    dropdownZIndex,
    withinPortal,
    portalProps,
    swatches,
    shadow,
    classNames,
    styles,
    unstyled,
    readOnly,
    withEyeDropper,
    eyeDropperIcon,
    rightSection,
    closeOnColorSwatchClick,
    disabled,
    eyeDropperLabel,
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
      aria-label={eyeDropperLabel}
      onClick={() =>
        openEyeDropper()
          .then(({ sRGBHex }) => {
            const color = convertHsvaTo(format, parseColor(sRGBHex));
            setValue(color);
            onChangeEnd?.(color);
          })
          .catch(noop)
      }
    >
      {eyeDropperIcon || (
        <EyeDropperIcon size={getSize({ size: inputProps.size, sizes: EYE_DROPPER_SIZES })} />
      )}
    </ActionIcon>
  );

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
    setDropdownOpened(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    fixOnBlur && setValue(lastValidValue);
    onBlur?.(event);
    setDropdownOpened(false);
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
        portalProps={portalProps}
        transitionProps={transitionProps}
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
              autoComplete="off"
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
                    size={getSize({ size: inputProps.size, sizes: SWATCH_SIZES })}
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
