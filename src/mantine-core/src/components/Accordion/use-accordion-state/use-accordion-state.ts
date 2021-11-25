import { useUncontrolled, useDidUpdate } from '@mantine/hooks';

export function createAccordionState(length: number, initialItem = -1) {
  return Array.from({ length }).reduce((acc, _item, index) => {
    acc[index] = index === initialItem;
    return acc;
  }, {}) as AccordionState;
}

export type AccordionState = Record<string, boolean>;

interface UseAccordionState {
  multiple?: boolean;
  initialState?: AccordionState;
  state?: AccordionState;
  total: number;
  initialItem?: number;
  onChange?(state: Record<string, boolean>): void;
}

export function useAccordionState({
  initialState,
  total,
  initialItem = -1,
  state,
  onChange,
  multiple = false,
}: UseAccordionState) {
  const [value, setState] = useUncontrolled({
    value: state,
    defaultValue: initialState || createAccordionState(total, initialItem),
    finalValue: {} as Record<string, boolean>,
    onChange,
    rule: (val) => val !== null && typeof val === 'object',
  });

  const toggle = (index: number) => {
    if (multiple) {
      setState({ ...value, [index]: !value[index] });
    } else {
      const newValues = Array(total)
        .fill(0)
        .reduce((acc, _, itemIndex) => {
          acc[itemIndex] = false;
          return acc;
        }, {}) as Record<string, boolean>;
      newValues[index] = !value[index];
      setState(newValues);
    }
  };

  useDidUpdate(() => {
    if (!multiple) {
      setState(createAccordionState(total));
    }
  }, [multiple]);

  return [value, { toggle, setState }] as const;
}
