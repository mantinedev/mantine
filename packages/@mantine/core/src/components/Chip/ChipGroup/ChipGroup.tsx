import { createContext } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { Factory, genericFactory, useProps } from '../../../core';

export interface ChipGroupProps<Multiple extends boolean = false, Value extends string = string> {
  /** If set, multiple values can be selected */
  multiple?: Multiple;

  /** Controlled component value */
  value?: Multiple extends true ? Value[] : Value | null;

  /** Uncontrolled component initial value */
  defaultValue?: Multiple extends true ? Value[] : Value | null;

  /** Called when value changes. If `multiple` prop is set, called with an array of selected values. If not, called with a string value of selected chip. */
  onChange?: (value: Multiple extends true ? Value[] : Value) => void;

  /** `Chip` components and any other elements */
  children?: React.ReactNode;
}

export type ChipGroupFactory = Factory<{
  props: ChipGroupProps;
  signature: <Multiple extends boolean = false, Value extends string = string>(
    props: ChipGroupProps<Multiple, Value>
  ) => React.JSX.Element;
}>;

export const ChipGroup = genericFactory<ChipGroupFactory>((props) => {
  const { value, defaultValue, onChange, multiple, children } = useProps('ChipGroup', null, props);

  const [_value, setValue] = useUncontrolled<string | null | string[]>({
    value,
    defaultValue,
    finalValue: multiple ? ([] as string[]) : null,
    onChange: onChange as any,
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
    <ChipGroupContext value={{ isChipSelected, onChange: handleChange, multiple }}>
      {children}
    </ChipGroupContext>
  );
});

ChipGroup.displayName = '@mantine/core/ChipGroup';

export interface ChipGroupContextValue<Value extends string = string> {
  isChipSelected: (value: Value) => boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  multiple: boolean | undefined;
}

export const ChipGroupContext = createContext<ChipGroupContextValue | null>(null);
