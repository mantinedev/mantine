import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineSize, mergeStyles } from '../../theme';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { Paper } from '../Paper/Paper';
import { DefaultItem } from './DefaultItem/DefaultItem';
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

  /** Autocomplete data used to renderer items in dropdown */
  data: { value: string; [key: string]: any }[];

  /** Change item renderer */
  itemComponent?: React.FC<any>;

  /** Dropdown shadow from theme or any value to set box-shadow */
  shadow?: string;

  /** Limit amount of items rendered in dropdown */
  limit?: number;
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
  itemComponent: Item = DefaultItem,
  wrapperProps,
  elementRef,
  themeOverride,
  classNames,
  styles,
  ...others
}: AutocompleteProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames as any, 'autocomplete');
  const _styles = mergeStyles(classes, styles as any);
  const uuid = useId(id);

  const items = data
    .slice(0, limit)
    .map((item) => <Item key={item.value} className={cx(classes.item)} {...item} />);

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

        <Paper className={classes.dropdown} shadow={shadow}>
          {items}
        </Paper>
      </div>
    </InputWrapper>
  );
}

Autocomplete.displayName = '@mantine/core/Autocomplete';
