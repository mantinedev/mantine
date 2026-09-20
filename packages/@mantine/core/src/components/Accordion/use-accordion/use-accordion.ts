import { useCallback, useMemo, useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import type { AccordionValue } from '../Accordion.types';

export interface UseAccordionOptions<Multiple extends boolean = false> {
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

export interface UseAccordionReturnValue<Multiple extends boolean = false> {
  /** Resolved `multiple` option, also used to infer the controller type on the `controller` prop */
  multiple: Multiple;

  /** Current value */
  value: AccordionValue<Multiple>;

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

  /** Collapses every item, ignored when `disableCollapse` is set */
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
  options: UseAccordionOptions<Multiple> = {}
): UseAccordionReturnValue<Multiple> {
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
  const valueRef = useRef(value);
  const multipleRef = useRef(multiple);
  const disableCollapseRef = useRef(disableCollapse);
  const setValueStateRef = useRef(setValueState);
  const controlledRef = useRef(valueProp !== undefined);

  valueRef.current = value;
  multipleRef.current = multiple;
  disableCollapseRef.current = disableCollapse;
  setValueStateRef.current = setValueState;
  controlledRef.current = valueProp !== undefined;

  const writeValue = useCallback((next: AccordionValue<Multiple>) => {
    if (!controlledRef.current) {
      valueRef.current = next;
    }

    setValueStateRef.current(next);
  }, []);

  const commit = useCallback(
    (items: string[]) => {
      writeValue(
        (multipleRef.current
          ? items
          : (items[items.length - 1] ?? null)) as AccordionValue<Multiple>
      );
    },
    [writeValue]
  );

  const setValue = useCallback(
    (next: AccordionValue<Multiple>) => {
      writeValue(next);
    },
    [writeValue]
  );

  const expand = useCallback(
    (item: string) => {
      const current = toArray(valueRef.current);

      if (current.includes(item)) {
        return;
      }

      commit(multipleRef.current ? [...current, item] : [item]);
    },
    [commit]
  );

  const collapse = useCallback(
    (item: string) => {
      const current = toArray(valueRef.current);

      if (!current.includes(item)) {
        return;
      }

      if (!multipleRef.current && disableCollapseRef.current) {
        return;
      }

      commit(current.filter((selected) => selected !== item));
    },
    [commit]
  );

  const toggle = useCallback(
    (item: string) => {
      if (toArray(valueRef.current).includes(item)) {
        collapse(item);
      } else {
        expand(item);
      }
    },
    [collapse, expand]
  );

  const expandAll = useCallback(() => {
    if (!multipleRef.current) {
      return;
    }

    commit([...itemsRef.current]);
  }, [commit]);

  const collapseAll = useCallback(() => {
    if (!multipleRef.current && disableCollapseRef.current) {
      return;
    }

    commit([]);
  }, [commit]);

  const isExpanded = useCallback((item: string) => toArray(valueRef.current).includes(item), []);

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
      value,
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
    [
      multiple,
      value,
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
    ]
  );
}

export namespace useAccordion {
  export type Options<Multiple extends boolean = false> = UseAccordionOptions<Multiple>;
  export type ReturnValue<Multiple extends boolean = false> = UseAccordionReturnValue<Multiple>;
}
