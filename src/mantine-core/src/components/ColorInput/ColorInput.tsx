import React, { useState, useEffect } from 'react';
import { useUncontrolled, useReducedMotion } from '@mantine/hooks';
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
import { ColorPicker, ColorPickerBaseProps } from '../ColorPicker/ColorPicker';
import { isColorValid } from '../ColorPicker/converters';
import useStyles from './ColorInput.styles';

export type ColorInputStylesNames = InputWrapperStylesNames | InputStylesNames;

export interface ColorInputProps
  extends InputWrapperBaseProps,
    InputBaseProps,
    ColorPickerBaseProps,
    DefaultProps<ColorInputStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange' | 'defaultValue' | 'value'> {
  /** Disallow free input */
  disallowInput?: boolean;

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
  transition = 'pop-top-left',
  transitionDuration = 0,
  transitionTimingFunction,
  className,
  style,
  swatches,
  ...others
}: ColorInputProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames as any, 'color-input');
  const _styles = mergeStyles(classes, styles as any);
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
    setValue(lastValidValue);
  };

  useEffect(() => {
    if (isColorValid(_value)) {
      setLastValidValue(_value);
    }
  }, [_value]);

  return (
    <InputWrapper
      label={label}
      description={description}
      error={error}
      required={required}
      classNames={classNames as any}
      styles={styles as any}
      size={size}
      className={className}
      style={style}
      {...wrapperProps}
    >
      <div ref={setReferenceElement}>
        <Input<'input'>
          {...others}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          spellCheck={false}
          size={size}
          value={_value}
          onChange={(event) => setValue(event.currentTarget.value)}
          icon={<ColorSwatch color={_value} size={getSizeValue({ size, sizes: SWATCH_SIZES })} />}
          readOnly={disallowInput}
          classNames={classNames as any}
          styles={{
            ...(styles as any),
            input: { ...(styles as any)?.input, cursor: disallowInput ? 'pointer' : undefined },
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
        zIndex={100}
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
              value={_value}
              onChange={setValue}
              format={format}
              swatches={swatches}
              size={size}
            />
          </Paper>
        </div>
      </Popper>
    </InputWrapper>
  );
}

ColorInput.displayName = '@mantine/core/ColorInput';
