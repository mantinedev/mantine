import React, { useState, useEffect } from 'react';
import { useUncontrolled, useReducedMotion, useDidUpdate, useId } from '@mantine/hooks';
import { DefaultProps, getSizeValue, mergeStyles, useMantineTheme } from '../../theme';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { ColorSwatch } from '../ColorSwatch/ColorSwatch';
import { Popper } from '../Popper/Popper';
import { MantineTransition } from '../Transition/Transition';
import { Paper } from '../Paper/Paper';
import {
  ColorPicker,
  ColorPickerBaseProps,
  ColorPickerStylesNames,
} from '../ColorPicker/ColorPicker';
import { convertHsvaTo, isColorValid, parseColor } from '../ColorPicker/converters';
import useStyles from './ColorInput.styles';

export type ColorInputStylesNames =
  | InputWrapperStylesNames
  | InputStylesNames
  | ColorPickerStylesNames
  | keyof ReturnType<typeof useStyles>;

export interface ColorInputProps
  extends InputWrapperBaseProps,
    InputBaseProps,
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
}

const SWATCH_SIZES = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 36,
};

const ARROW_OFFSET = {
  xs: 12,
  sm: 15,
  md: 17,
  lg: 21,
  xl: 25,
};

export function ColorInput({
  label,
  description,
  error,
  required,
  wrapperProps,
  size = 'sm',
  format = 'hex',
  onChange,
  onFocus,
  onBlur,
  value,
  defaultValue,
  classNames,
  styles,
  themeOverride,
  disallowInput = false,
  fixOnBlur = true,
  withPreview = true,
  swatchesPerRow = 10,
  withPicker = true,
  icon,
  transition = 'pop-top-left',
  id,
  dropdownZIndex = 1,
  transitionDuration = 0,
  transitionTimingFunction,
  className,
  style,
  swatches,
  ...others
}: ColorInputProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);
  const uuid = useId(id);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement>(null);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [lastValidValue, setLastValidValue] = useState('');
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    rule: (val) => !!val && val.trim().length > 0,
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
    if (isColorValid(_value)) {
      setLastValidValue(_value);
    }
  }, [_value]);

  useDidUpdate(() => {
    if (isColorValid(_value)) {
      setValue(convertHsvaTo(format, parseColor(_value)));
    }
  }, [format]);

  return (
    <InputWrapper
      label={label}
      description={description}
      error={error}
      required={required}
      classNames={classNames}
      styles={styles}
      size={size}
      id={uuid}
      className={className}
      style={style}
      __staticSelector="color-input"
      {...wrapperProps}
    >
      <div ref={setReferenceElement}>
        <Input<'input'>
          {...others}
          __staticSelector="color-input"
          id={uuid}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          spellCheck={false}
          size={size}
          value={_value}
          onChange={(event) => setValue(event.currentTarget.value)}
          invalid={!!error}
          required={required}
          icon={
            icon ||
            (withPreview ? (
              <ColorSwatch
                color={isColorValid(_value) ? _value : '#fff'}
                size={getSizeValue({ size, sizes: SWATCH_SIZES })}
              />
            ) : null)
          }
          readOnly={disallowInput}
          classNames={classNames}
          styles={{
            ...styles,
            input: { ...styles?.input, cursor: disallowInput ? 'pointer' : undefined },
          }}
        />
      </div>

      <Popper
        referenceElement={referenceElement}
        transitionDuration={useReducedMotion() ? 0 : transitionDuration}
        transitionTimingFunction={transitionTimingFunction}
        transition={transition}
        mounted={dropdownOpened}
        position="bottom"
        placement="start"
        gutter={5}
        withArrow
        arrowSize={3}
        zIndex={dropdownZIndex}
        arrowClassName={classes.arrow}
        arrowStyle={{ ..._styles.arrow, left: getSizeValue({ size, sizes: ARROW_OFFSET }) }}
      >
        <div style={{ pointerEvents: 'all' }}>
          <Paper
            shadow="sm"
            padding={size}
            className={classes.dropdownBody}
            onMouseDown={(event) => event.preventDefault()}
          >
            <ColorPicker
              __staticSelector="color-input"
              value={_value}
              onChange={setValue}
              format={format}
              swatches={swatches}
              swatchesPerRow={swatchesPerRow}
              withPicker={withPicker}
              size={size}
              focusable={false}
            />
          </Paper>
        </div>
      </Popper>
    </InputWrapper>
  );
}

ColorInput.displayName = '@mantine/core/ColorInput';
