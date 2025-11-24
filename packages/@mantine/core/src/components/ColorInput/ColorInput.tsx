import { useEffect, useState } from 'react';
import { useDidUpdate, useEyeDropper, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { ActionIcon } from '../ActionIcon';
import {
  __ColorPickerProps,
  ColorPicker,
  ColorPickerStylesNames,
  convertHsvaTo,
  isColorValid,
  parseColor,
} from '../ColorPicker';
import { ColorSwatch } from '../ColorSwatch';
import { __BaseInputProps, __InputStylesNames, Input, InputVariant, useInputProps } from '../Input';
import { InputBase } from '../InputBase';
import { Popover, PopoverProps } from '../Popover';
import { EyeDropperIcon } from './EyeDropperIcon';
import classes from './ColorInput.module.css';

export type ColorInputStylesNames =
  | 'dropdown'
  | 'eyeDropperButton'
  | 'eyeDropperIcon'
  | 'colorPreview'
  | ColorPickerStylesNames
  | __InputStylesNames;

export type ColorInputCssVariables = {
  eyeDropperIcon: '--ci-eye-dropper-icon-size';
  eyeDropperButton: '--ci-button-size';
  colorPreview: '--ci-preview-size';
};

export interface ColorInputProps
  extends BoxProps,
    __BaseInputProps,
    __ColorPickerProps,
    StylesApiProps<ColorInputFactory>,
    ElementProps<'input', 'size' | 'onChange' | 'value' | 'defaultValue'> {
  /** If input is not allowed, the user can only pick value with color picker and swatches */
  disallowInput?: boolean;

  /** If set, the input value resets to the last known valid value when the input loses focus @default `true` */
  fixOnBlur?: boolean;

  /** Props passed down to the `Popover` component */
  popoverProps?: PopoverProps;

  /** If set, the preview color swatch is displayed in the left section of the input @default `true` */
  withPreview?: boolean;

  /** If set, the eye dropper button is displayed in the right section @default `true` */
  withEyeDropper?: boolean;

  /** An icon to replace the default eye dropper icon */
  eyeDropperIcon?: React.ReactNode;

  /** If set, the dropdown is closed when one of the color swatches is clicked @default `false` */
  closeOnColorSwatchClick?: boolean;

  /** Props passed down to the eye dropper button */
  eyeDropperButtonProps?: Record<string, any>;
}

export type ColorInputFactory = Factory<{
  props: ColorInputProps;
  ref: HTMLInputElement;
  stylesNames: ColorInputStylesNames;
  vars: ColorInputCssVariables;
  variant: InputVariant;
}>;

const defaultProps = {
  format: 'hex',
  fixOnBlur: true,
  withPreview: true,
  swatchesPerRow: 7,
  withPicker: true,
  popoverProps: { transitionProps: { transition: 'fade', duration: 0 } },
  withEyeDropper: true,
  size: 'sm',
} satisfies Partial<ColorInputProps>;

const varsResolver = createVarsResolver<ColorInputFactory>((_, { size }) => ({
  eyeDropperIcon: {
    '--ci-eye-dropper-icon-size': getSize(size, 'ci-eye-dropper-icon-size'),
  },

  eyeDropperButton: {
    '--ci-button-size': getSize(size, 'ci-button-size'),
  },

  colorPreview: {
    '--ci-preview-size': getSize(size, 'ci-preview-size'),
  },
}));

export const ColorInput = factory<ColorInputFactory>((_props, ref) => {
  const props = useProps('ColorInput', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    disallowInput,
    fixOnBlur,
    popoverProps,
    withPreview,
    withEyeDropper,
    eyeDropperIcon,
    closeOnColorSwatchClick,
    eyeDropperButtonProps,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    onClick,
    onFocus,
    onBlur,
    inputProps,
    format = 'hex',
    wrapperProps,
    readOnly,
    withPicker,
    swatches,
    disabled,
    leftSection,
    rightSection,
    swatchesPerRow,
    ...others
  } = useInputProps('ColorInput', defaultProps, _props);

  const getStyles = useStyles<ColorInputFactory>({
    name: 'ColorInput',
    props,
    classes,
    classNames,
    styles,
    unstyled,
    rootSelector: 'wrapper',
    vars: props.vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ColorInputFactory>({
    classNames,
    styles,
    props,
  });

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
      {...eyeDropperButtonProps}
      {...getStyles('eyeDropperButton', {
        className: eyeDropperButtonProps?.className,
        style: eyeDropperButtonProps?.style,
      })}
      variant="subtle"
      color="gray"
      unstyled={unstyled}
      onClick={() =>
        openEyeDropper()
          .then((payload) => {
            if (payload?.sRGBHex) {
              const color = convertHsvaTo(format, parseColor(payload.sRGBHex));
              setValue(color);
              onChangeEnd?.(color);
            }
          })
          .catch(() => {})
      }
    >
      {eyeDropperIcon || <EyeDropperIcon {...getStyles('eyeDropperIcon')} />}
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
    <Input.Wrapper
      {...wrapperProps}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      __staticSelector="ColorInput"
    >
      <Popover
        __staticSelector="ColorInput"
        position="bottom-start"
        offset={5}
        opened={dropdownOpened}
        {...popoverProps}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        withRoles={false}
        disabled={
          readOnly || (withPicker === false && (!Array.isArray(swatches) || swatches.length === 0))
        }
      >
        <Popover.Target>
          <Input<'input'>
            autoComplete="off"
            {...others}
            {...inputProps}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
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
            leftSection={
              leftSection ||
              (withPreview ? (
                <ColorSwatch
                  color={isColorValid(_value) ? _value : '#fff'}
                  size="var(--ci-preview-size)"
                  {...getStyles('colorPreview')}
                />
              ) : null)
            }
            readOnly={disallowInput || readOnly}
            pointer={disallowInput}
            unstyled={unstyled}
            rightSection={
              rightSection ||
              (withEyeDropper && !disabled && !readOnly && eyeDropperSupported ? eyeDropper : null)
            }
          />
        </Popover.Target>

        <Popover.Dropdown
          onMouseDown={(event) => event.preventDefault()}
          className={classes.dropdown}
        >
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
            styles={resolvedStyles}
            classNames={resolvedClassNames}
            onColorSwatchClick={() => closeOnColorSwatchClick && setDropdownOpened(false)}
            attributes={wrapperProps.attributes}
          />
        </Popover.Dropdown>
      </Popover>
    </Input.Wrapper>
  );
});

ColorInput.classes = InputBase.classes;
ColorInput.displayName = '@mantine/core/ColorInput';
