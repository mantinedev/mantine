import React from 'react';
import cx from 'clsx';
import {
  DefaultProps,
  useMantineTheme,
  mergeStyles,
  Input,
  InputWrapper,
  Text,
  InputBaseProps,
  InputWrapperBaseProps,
} from '@mantine/core';
import { useUncontrolled, useId } from '@mantine/hooks';
import dayjs from 'dayjs';
import useStyles from './DatePicker.styles';

interface DatePickerProps
  extends DefaultProps<typeof useStyles>,
    InputBaseProps,
    InputWrapperBaseProps,
    Omit<
      React.ComponentPropsWithoutRef<'div'>,
      'value' | 'defaultValue' | 'onChange' | 'placeholder'
    > {
  value?: Date;
  onChange?(value: Date): void;
  defaultValue?: Date;
  wrapperProps?: Record<string, any>;
  placeholder?: React.ReactNode;
}

export function DatePicker({
  value,
  onChange,
  defaultValue,
  themeOverride,
  classNames,
  className,
  style,
  styles,
  wrapperProps,
  required,
  label,
  error,
  id,
  description,
  placeholder,
  ...others
}: DatePickerProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'date-picker');
  const _styles = mergeStyles(classes, styles);
  const uuid = useId(id);

  const [_value] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => val instanceof Date,
  });

  return (
    <InputWrapper
      required={required}
      id={uuid}
      label={label}
      error={error}
      description={description}
      className={className}
      style={style}
      themeOverride={themeOverride}
      classNames={classNames as any}
      styles={styles as any}
      {...wrapperProps}
    >
      <div className={cx(classes.wrapper, className)} style={{ ...style, ..._styles.wrapper }}>
        <Input
          themeOverride={themeOverride}
          component="button"
          classNames={classNames as any}
          styles={styles as any}
          {...others}
        >
          {_value instanceof Date ? (
            dayjs(_value).format('DD/MM/YYYY')
          ) : (
            <Text className={classes.placeholder}>{placeholder}</Text>
          )}
        </Input>
      </div>
    </InputWrapper>
  );
}

DatePicker.displayName = '@mantine/dates/DatePicker';
