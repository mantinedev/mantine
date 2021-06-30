import React from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineSize, mergeStyles } from '../../theme';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import useStyles from './Autocomplete.styles';

export type AutocompleteStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | keyof ReturnType<typeof useStyles>;

interface AutocompleteProps
  extends DefaultProps<AutocompleteStylesNames>,
    InputBaseProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /** Input size */
  size?: MantineSize;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
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
  wrapperProps,
  elementRef,
  themeOverride,
  classNames,
  styles,
  ...others
}: AutocompleteProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames as any, 'autocomplete');
  const _styles = mergeStyles(classes, styles as any);
  const uuid = useId(id);

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
      <div className={classes.wrapper} style={_styles.wrapper}>
        <Input
          {...others}
          required={required}
          elementRef={elementRef}
          id={uuid}
          type="string"
          invalid={!!error}
          size={size}
          themeOverride={themeOverride}
          classNames={classNames as any}
          styles={styles as any}
          __staticSelector="autocomplete"
        />
      </div>
    </InputWrapper>
  );
}

Autocomplete.displayName = '@mantine/core/Autocomplete';
