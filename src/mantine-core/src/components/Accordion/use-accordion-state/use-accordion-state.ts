import { useUncontrolled } from '@mantine/hooks';

export type AccordionState = Record<string, boolean>;

interface UseAccordionState {
  multiple: boolean;
  initialState: AccordionState;
  state: AccordionState;
  items: unknown[];
  initialItem: number;
  onChange(state: Record<string, boolean>): void;
}

export function useAccordionState({
  initialState,
  items,
  initialItem,
  state,
  onChange,
  multiple,
}: UseAccordionState) {
  const _initialState =
    initialState ||
    (items.reduce((acc, _item, index) => {
      acc[index] = index === initialItem;
      return acc;
    }, {}) as AccordionState);

  const [value, setValue] = useUncontrolled({
    value: state,
    defaultValue: _initialState,
    finalValue: {} as Record<string, boolean>,
    onChange,
    rule: (val) => val !== null && typeof val === 'object',
  });

  const handleItemToggle = (index: number) => {
    if (multiple) {
      setValue({ ...value, [index]: !value[index] });
    } else {
      const newValues = items.reduce((acc, item, itemIndex) => {
        acc[itemIndex] = false;
        return acc;
      }, {}) as Record<string, boolean>;
      newValues[index] = !value[index];
      setValue(newValues);
    }
  };

  return [value, handleItemToggle] as const;
}
