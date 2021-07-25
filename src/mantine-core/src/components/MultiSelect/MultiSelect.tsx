import React, { useState } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import { DefaultProps, MantineSize, mergeStyles, useMantineTheme } from '../../theme';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
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
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
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
  ...others
}: MultiSelectProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames as any, 'multi-select');
  const _styles = mergeStyles(classes, styles as any);

  const uuid = useId(id);
  const [dropdownOpened] = useState(false);
  const [, setHovered] = useState(-1);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    rule: (val) => Array.isArray(val),
    onChange,
  });

  const handleValueRemove = (_val: string) => setValue(_value.filter((val) => val !== _val));

  const selectedItems = _value
    .map((val) => data.find((item) => item.value === val))
    .map((item) => (
      <Value
        className={classes.value}
        onRemove={() => handleValueRemove(item.value)}
        {...item}
        key={item.value}
      />
    ));

  return (
    <InputWrapper
      required={required}
      labelElement="div"
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
        <Input className={classes.input} component="div" {...others}>
          <div className={classes.values}>{selectedItems}</div>
        </Input>
      </div>
    </InputWrapper>
  );
}

MultiSelect.displayName = '@mantine/core/MultiSelect';
