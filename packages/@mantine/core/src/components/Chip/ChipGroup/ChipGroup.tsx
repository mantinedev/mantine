import { useUncontrolled } from '@mantine/hooks';
import { useProps } from '../../../core';
import { ChipGroupProvider } from '../ChipGroup.context';

export interface ChipGroupProps<T extends boolean = false> {
  /** If set, multiple values can be selected */
  multiple?: T;

  /** Controlled component value */
  value?: T extends true ? string[] : string | null;

  /** Uncontrolled component initial value */
  defaultValue?: T extends true ? string[] : string | null;

  /** Called when value changes. If `multiple` prop is set, called with an array of selected values. If not, called with a string value of selected chip. */
  onChange?: (value: T extends true ? string[] : string) => void;

  /** `Chip` components and any other elements */
  children?: React.ReactNode;
}

export function ChipGroup<T extends boolean>(props: ChipGroupProps<T>) {
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
    <ChipGroupProvider value={{ isChipSelected, onChange: handleChange, multiple }}>
      {children}
    </ChipGroupProvider>
  );
}

ChipGroup.displayName = '@mantine/core/ChipGroup';
