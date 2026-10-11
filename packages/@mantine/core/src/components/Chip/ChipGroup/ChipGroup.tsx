import { createContext } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import { Factory, genericFactory, Primitive, useProps } from '../../../core';

export interface ChipGroupProps<
  Multiple extends boolean = false,
  Value extends Primitive = string,
> {
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
  signature: <Multiple extends boolean = false, Value extends Primitive = string>(
    props: ChipGroupProps<Multiple, Value>
  ) => React.JSX.Element;
}>;

export const ChipGroup = genericFactory<ChipGroupFactory>((props) => {
  const { value, defaultValue, onChange, multiple, children } = useProps('ChipGroup', null, props);

  const [_value, setValue] = useUncontrolled<Primitive | null | Primitive[]>({
    value,
    defaultValue,
    finalValue: multiple ? ([] as Primitive[]) : null,
    onChange: onChange as any,
  });

  const name = useId();

  const isChipSelected = (val: Primitive) =>
    Array.isArray(_value) ? _value.includes(val) : val === _value;

  const handleChange = (val: Primitive) => {
    if (Array.isArray(_value)) {
      setValue(_value.includes(val) ? _value.filter((v) => v !== val) : [..._value, val]);
    } else {
      setValue(val);
    }
  };

  return (
    <ChipGroupContext value={{ isChipSelected, onChange: handleChange, multiple, name }}>
      {children}
    </ChipGroupContext>
  );
});

ChipGroup.displayName = '@mantine/core/ChipGroup';

export interface ChipGroupContextValue<Value extends Primitive = string> {
  isChipSelected: (value: Value) => boolean;
  onChange: (value: Value) => void;
  multiple: boolean | undefined;
  name: string;
}

export const ChipGroupContext = createContext<ChipGroupContextValue<Primitive> | null>(null);
