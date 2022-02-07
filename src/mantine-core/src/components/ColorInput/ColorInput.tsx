import React, { useState, useEffect, forwardRef } from 'react';
import { useUncontrolled, useDidUpdate, useUuid } from '@mantine/hooks';
import { DefaultProps, ClassNames, extractMargins, getDefaultZIndex } from '@mantine/styles';
import { InputWrapper, InputWrapperBaseProps, InputWrapperStylesNames } from '../InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input';
import { ColorSwatch } from '../ColorSwatch';
import { Popper } from '../Popper';
import { MantineTransition } from '../Transition';
import { Paper } from '../Paper';
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
  | ClassNames<typeof useStyles>;

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

  /** Whether to render the dropdown in a Portal */
  withinPortal?: boolean;
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

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  (
    {
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
      disallowInput = false,
      fixOnBlur = true,
      withPreview = true,
      swatchesPerRow = 10,
      withPicker = true,
      icon,
      transition = 'pop-top-left',
      id,
      dropdownZIndex = getDefaultZIndex('popover'),
      transitionDuration = 0,
      transitionTimingFunction,
      withinPortal = true,
      className,
      style,
      swatches,
      sx,
      ...others
    }: ColorInputProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles(
      { disallowInput },
      { classNames, styles, name: 'ColorInput' }
    );
    const { margins, rest } = extractMargins(others);
    const uuid = useUuid(id);
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
        __staticSelector="ColorInput"
        sx={sx}
        {...margins}
        {...wrapperProps}
      >
        <div ref={setReferenceElement}>
          <Input<'input'>
            {...rest}
            ref={ref}
            __staticSelector="ColorInput"
            id={uuid}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            spellCheck={false}
            size={size}
            value={_value}
            onChange={(event) => setValue(event.currentTarget.value)}
            invalid={!!error}
            required={required}
            autoComplete="nope"
            icon={
              icon ||
              (withPreview ? (
                <ColorSwatch
                  color={isColorValid(_value) ? _value : '#fff'}
                  size={theme.fn.size({ size, sizes: SWATCH_SIZES })}
                />
              ) : null)
            }
            readOnly={disallowInput}
            classNames={{ ...classNames, input: cx(classes.input, classNames?.input) }}
            styles={styles}
          />
        </div>

        <Popper
          referenceElement={referenceElement}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          transition={transition}
          mounted={dropdownOpened}
          position="bottom"
          placement="start"
          gutter={5}
          arrowSize={3}
          zIndex={dropdownZIndex}
          arrowStyle={{ left: theme.fn.size({ size, sizes: ARROW_OFFSET }) }}
          withinPortal={withinPortal}
        >
          <div style={{ pointerEvents: 'all' }}>
            <Paper<'div'>
              shadow="sm"
              padding={size}
              className={classes.dropdownBody}
              onMouseDown={(event) => event.preventDefault()}
            >
              <ColorPicker
                __staticSelector="ColorInput"
                value={_value}
                onChange={setValue}
                format={format}
                swatches={swatches}
                swatchesPerRow={swatchesPerRow}
                withPicker={withPicker}
                size={size}
                focusable={false}
                styles={styles}
                classNames={classNames}
              />
            </Paper>
          </div>
        </Popper>
      </InputWrapper>
    );
  }
);

ColorInput.displayName = '@mantine/core/ColorInput';
