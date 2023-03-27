/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { useComponentDefaultProps } from '@mantine/styles';
import { ChipGroupProvider } from '../ChipGroup.context';

export interface ChipGroupProps<T extends boolean = false> {
  /** Allow multiple values to be selected at a time */
  multiple?: T;

  /** Controlled component value */
  value?: T extends true ? string[] : string;

  /** Uncontrolled component initial value */
  defaultValue?: T extends true ? string[] : string;

  /** Called when value changes */
  onChange?(value: T extends true ? string[] : string): void;

  /** <Chip /> components */
  children?: React.ReactNode;
}

const defaultProps: Partial<ChipGroupProps<false>> = {};

export function ChipGroup<T extends boolean>(props: ChipGroupProps<T>) {
  const { value, defaultValue, onChange, multiple, children } = useComponentDefaultProps(
    'ChipGroup',
    defaultProps as any,
    props
  );

  const [_value, setValue] = useUncontrolled<string | string[]>({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange,
  });

  const isChipSelected = (val: string) =>
    Array.isArray(_value) ? _value.includes(val) : val === _value;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    if (Array.isArray(_value)) {
      setValue(_value.includes(val) ? _value.filter((v) => v !== val) : [..._value, val]);
    } else {
      setValue(val);
    }
  };

  return (
    <ChipGroupProvider value={{ isChipSelected, onChange: handleChange, multiple }}>
      {children}
    </ChipGroupProvider>
  );
}

ChipGroup.displayName = '@mantine/core/ChipGroup';
