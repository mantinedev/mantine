import { useCallback, useMemo, useRef } from 'react';
import { useCallbackRef, useLatestRef, useUncontrolled } from '@mantine/hooks';
import type { AccordionValue } from '../Accordion.types';

export interface AccordionControllerOptions<Multiple extends boolean = false> {
  /** If set, multiple items can be expanded at the same time, `false` by default */
  multiple?: Multiple;

  /** Controlled component value */
  value?: AccordionValue<Multiple>;

  /** Uncontrolled component default value */
  defaultValue?: AccordionValue<Multiple>;

  /** Called when value changes, payload type depends on `multiple` option */
  onChange?: (value: AccordionValue<Multiple>) => void;

  /** If set, the expanded item cannot be collapsed by toggling it again. Only applies when `multiple` is `false`, `false` by default */
  disableCollapse?: boolean;
}

export interface AccordionController<Multiple extends boolean = false> {
  /** Resolved `multiple` option, also used to infer the controller type on the `controller` prop */
  multiple: Multiple;

  /** Resolved `disableCollapse` option */
  disableCollapse: boolean;

  /** Current value */
  value: AccordionValue<Multiple>;

  /** Returns current value, `string[]` when `multiple` is set, `string | null` otherwise */
  getValue: () => AccordionValue<Multiple>;

  /** Sets the value directly, payload type depends on `multiple` option */
  setValue: (value: AccordionValue<Multiple>) => void;

  /** Toggles the given item, respects `disableCollapse` */
  toggle: (item: string) => void;

  /** Expands the given item */
  expand: (item: string) => void;

  /** Collapses the given item, ignored for the last expanded item when `disableCollapse` is set */
  collapse: (item: string) => void;

  /** Expands every mounted item, no-op when `multiple` is `false` */
  expandAll: () => void;

  /** Collapses every item, ignored when `disableCollapse` is set and `multiple` is not set */
  collapseAll: () => void;

  /** Returns `true` if the given item is expanded */
  isExpanded: (item: string) => boolean;

  /** Returns values of all expanded items in both single and multiple modes */
  getExpandedItems: () => string[];

  /** Returns values of all mounted `Accordion.Item` components in mount order */
  getItems: () => string[];

  /** Registers an item on the controller, used internally by `Accordion.Item` */
  registerItem: (item: string) => () => void;
}

function toArray(value: string | string[] | null): string[] {
  if (Array.isArray(value)) {
    return value;
  }

  return value === null ? [] : [value];
}

export function useAccordion<Multiple extends boolean = false>(
  options: AccordionControllerOptions<Multiple> = {}
): AccordionController<Multiple> {
  const {
    multiple = false as Multiple,
    value: valueProp,
    defaultValue,
    onChange,
    disableCollapse = false,
  } = options;

  const [value, setValueState] = useUncontrolled<AccordionValue<Multiple>>({
    value: valueProp,
    defaultValue,
    finalValue: (multiple ? [] : null) as AccordionValue<Multiple>,
    onChange,
  });

  const itemsRef = useRef<string[]>([]);
  const valueRef = useLatestRef(value);

  const writeValue = useCallbackRef((next: AccordionValue<Multiple>) => {
    if (valueProp === undefined) {
      valueRef.current = next;
    }

    setValueState(next);
  });

  const commit = useCallbackRef((items: string[]) => {
    writeValue((multiple ? items : (items[items.length - 1] ?? null)) as AccordionValue<Multiple>);
  });

  const setValue = useCallbackRef((next: AccordionValue<Multiple>) => {
    writeValue(next);
  });

  const expand = useCallbackRef((item: string) => {
    const current = toArray(valueRef.current);

    if (current.includes(item)) {
      return;
    }

    commit(multiple ? [...current, item] : [item]);
  });

  const collapse = useCallbackRef((item: string) => {
    const current = toArray(valueRef.current);

    if (!current.includes(item)) {
      return;
    }

    if (!multiple && disableCollapse) {
      return;
    }

    commit(current.filter((selected) => selected !== item));
  });

  const toggle = useCallbackRef((item: string) => {
    if (toArray(valueRef.current).includes(item)) {
      collapse(item);
    } else {
      expand(item);
    }
  });

  const expandAll = useCallbackRef(() => {
    if (!multiple) {
      return;
    }

    commit([...itemsRef.current]);
  });

  const collapseAll = useCallbackRef(() => {
    if (!multiple && disableCollapse) {
      return;
    }

    commit([]);
  });

  const isExpanded = useCallback((item: string) => toArray(valueRef.current).includes(item), []);

  const getValue = useCallback(() => valueRef.current, []);

  const getExpandedItems = useCallback(() => toArray(valueRef.current), []);

  const getItems = useCallback(() => [...itemsRef.current], []);

  const registerItem = useCallback((item: string) => {
    if (!itemsRef.current.includes(item)) {
      itemsRef.current.push(item);
    }

    return () => {
      itemsRef.current = itemsRef.current.filter((registered) => registered !== item);
    };
  }, []);

  return useMemo(
    () => ({
      multiple,
      disableCollapse,
      value,
      getValue,
      setValue,
      toggle,
      expand,
      collapse,
      expandAll,
      collapseAll,
      isExpanded,
      getExpandedItems,
      getItems,
      registerItem,
    }),
    [multiple, disableCollapse, value]
  );
}
