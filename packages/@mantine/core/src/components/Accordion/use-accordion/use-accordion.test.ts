import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { useAccordion } from './use-accordion';

function registerItems(
  hook: { result: { current: ReturnType<typeof useAccordion> } },
  items: string[]
) {
  act(() => {
    items.forEach((item) => hook.result.current.registerItem(item));
  });
}

describe('@mantine/core/Accordion/use-accordion', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useAccordion({ multiple: true }),
    actions: [
      'setValue',
      'toggle',
      'expand',
      'collapse',
      'expandAll',
      'collapseAll',
      'isExpanded',
      'getExpandedItems',
      'getItems',
      'registerItem',
    ],
    changeState: (controller) => controller.expand('item-1'),
  });

  it('returns null as the initial value in single mode', () => {
    const hook = renderHook(() => useAccordion());
    expect(hook.result.current.value).toBeNull();
    expect(hook.result.current.multiple).toBe(false);
  });

  it('returns an empty array as the initial value in multiple mode', () => {
    const hook = renderHook(() => useAccordion({ multiple: true }));
    expect(hook.result.current.value).toStrictEqual([]);
    expect(hook.result.current.multiple).toBe(true);
  });

  it('supports uncontrolled state with defaultValue', () => {
    const hook = renderHook(() => useAccordion({ defaultValue: 'item-2' }));
    expect(hook.result.current.value).toBe('item-2');

    act(() => hook.result.current.toggle('item-1'));
    expect(hook.result.current.value).toBe('item-1');
  });

  it('supports controlled state and calls onChange without changing the value', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useAccordion({ value: 'item-1', onChange }));

    act(() => hook.result.current.toggle('item-2'));
    expect(onChange).toHaveBeenLastCalledWith('item-2');
    expect(hook.result.current.value).toBe('item-1');
  });

  it('toggles items in single mode, collapsing the previous one', () => {
    const hook = renderHook(() => useAccordion());

    act(() => hook.result.current.toggle('item-1'));
    expect(hook.result.current.value).toBe('item-1');

    act(() => hook.result.current.toggle('item-2'));
    expect(hook.result.current.value).toBe('item-2');

    act(() => hook.result.current.toggle('item-2'));
    expect(hook.result.current.value).toBeNull();
  });

  it('toggles items independently in multiple mode', () => {
    const hook = renderHook(() => useAccordion({ multiple: true }));

    act(() => hook.result.current.toggle('item-1'));
    act(() => hook.result.current.toggle('item-2'));
    expect(hook.result.current.value).toStrictEqual(['item-1', 'item-2']);

    act(() => hook.result.current.toggle('item-1'));
    expect(hook.result.current.value).toStrictEqual(['item-2']);
  });

  it('expand and collapse are idempotent', () => {
    const hook = renderHook(() => useAccordion({ multiple: true }));

    act(() => hook.result.current.expand('item-1'));
    act(() => hook.result.current.expand('item-1'));
    expect(hook.result.current.value).toStrictEqual(['item-1']);

    act(() => hook.result.current.collapse('item-1'));
    act(() => hook.result.current.collapse('item-1'));
    expect(hook.result.current.value).toStrictEqual([]);
  });

  it('disableCollapse prevents collapsing the expanded item in single mode', () => {
    const hook = renderHook(() => useAccordion({ defaultValue: 'item-1', disableCollapse: true }));

    act(() => hook.result.current.toggle('item-1'));
    expect(hook.result.current.value).toBe('item-1');

    act(() => hook.result.current.collapse('item-1'));
    expect(hook.result.current.value).toBe('item-1');

    act(() => hook.result.current.toggle('item-2'));
    expect(hook.result.current.value).toBe('item-2');
  });

  it('disableCollapse does not apply in multiple mode', () => {
    const hook = renderHook(() =>
      useAccordion({ multiple: true, defaultValue: ['item-1'], disableCollapse: true })
    );

    act(() => hook.result.current.collapse('item-1'));
    expect(hook.result.current.value).toStrictEqual([]);
  });

  it('expandAll expands every registered item in multiple mode', () => {
    const hook = renderHook(() => useAccordion({ multiple: true }));
    registerItems(hook, ['item-1', 'item-2', 'item-3']);

    act(() => hook.result.current.expandAll());
    expect(hook.result.current.value).toStrictEqual(['item-1', 'item-2', 'item-3']);
  });

  it('expandAll is a no-op in single mode', () => {
    const hook = renderHook(() => useAccordion());
    registerItems(hook, ['item-1', 'item-2']);

    act(() => hook.result.current.expandAll());
    expect(hook.result.current.value).toBeNull();
  });

  it('collapseAll collapses every item', () => {
    const hook = renderHook(() => useAccordion({ multiple: true, defaultValue: ['a', 'b'] }));

    act(() => hook.result.current.collapseAll());
    expect(hook.result.current.value).toStrictEqual([]);
  });

  it('collapseAll is blocked by disableCollapse in single mode', () => {
    const hook = renderHook(() => useAccordion({ defaultValue: 'item-1', disableCollapse: true }));

    act(() => hook.result.current.collapseAll());
    expect(hook.result.current.value).toBe('item-1');
  });

  it('setValue replaces the value', () => {
    const hook = renderHook(() => useAccordion({ multiple: true }));

    act(() => hook.result.current.setValue(['item-2']));
    expect(hook.result.current.value).toStrictEqual(['item-2']);
  });

  it('isExpanded and getExpandedItems read the current state in both modes', () => {
    const single = renderHook(() => useAccordion({ defaultValue: 'item-1' }));
    expect(single.result.current.isExpanded('item-1')).toBe(true);
    expect(single.result.current.isExpanded('item-2')).toBe(false);
    expect(single.result.current.getExpandedItems()).toStrictEqual(['item-1']);

    const multiple = renderHook(() => useAccordion({ multiple: true, defaultValue: ['a', 'b'] }));
    expect(multiple.result.current.isExpanded('b')).toBe(true);
    expect(multiple.result.current.getExpandedItems()).toStrictEqual(['a', 'b']);
  });

  it('getExpandedItems returns an empty array when nothing is expanded in single mode', () => {
    const hook = renderHook(() => useAccordion());
    expect(hook.result.current.getExpandedItems()).toStrictEqual([]);
  });

  it('registerItem deduplicates and returns an unregister handler', () => {
    const hook = renderHook(() => useAccordion({ multiple: true }));

    let unregister: () => void = () => {};
    act(() => {
      hook.result.current.registerItem('item-1');
      unregister = hook.result.current.registerItem('item-1');
      hook.result.current.registerItem('item-2');
    });

    expect(hook.result.current.getItems()).toStrictEqual(['item-1', 'item-2']);

    act(() => unregister());
    expect(hook.result.current.getItems()).toStrictEqual(['item-2']);
  });

  it('keeps action identity stable across state changes', () => {
    const hook = renderHook(() => useAccordion({ multiple: true }));
    const { toggle, expandAll, isExpanded } = hook.result.current;

    act(() => hook.result.current.toggle('item-1'));

    expect(hook.result.current.toggle).toBe(toggle);
    expect(hook.result.current.expandAll).toBe(expandAll);
    expect(hook.result.current.isExpanded).toBe(isExpanded);
  });

  it('composes multiple actions called synchronously in one event', () => {
    const hook = renderHook(() => useAccordion({ multiple: true }));

    act(() => {
      hook.result.current.expand('item-1');
      hook.result.current.expand('item-2');
    });

    expect(hook.result.current.value).toStrictEqual(['item-1', 'item-2']);
  });

  it('cancels a synchronous toggle pair', () => {
    const hook = renderHook(() => useAccordion({ multiple: true }));

    act(() => {
      hook.result.current.toggle('item-1');
      hook.result.current.toggle('item-1');
    });

    expect(hook.result.current.value).toStrictEqual([]);
  });

  it('composes setValue with a following action', () => {
    const hook = renderHook(() => useAccordion({ multiple: true }));

    act(() => {
      hook.result.current.setValue(['item-1']);
      hook.result.current.expand('item-2');
    });

    expect(hook.result.current.value).toStrictEqual(['item-1', 'item-2']);
  });

  it('reports every intermediate value to onChange when actions are composed', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useAccordion({ multiple: true, onChange }));

    act(() => {
      hook.result.current.expand('item-1');
      hook.result.current.expand('item-2');
    });

    expect(onChange).toHaveBeenNthCalledWith(1, ['item-1']);
    expect(onChange).toHaveBeenNthCalledWith(2, ['item-1', 'item-2']);
  });

  it('does not compose synchronous actions in controlled mode, where the value prop is the source of truth', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useAccordion({ multiple: true, value: [], onChange }));

    act(() => {
      hook.result.current.expand('item-1');
      hook.result.current.expand('item-2');
    });

    expect(onChange).toHaveBeenNthCalledWith(1, ['item-1']);
    expect(onChange).toHaveBeenNthCalledWith(2, ['item-2']);
    expect(hook.result.current.value).toStrictEqual([]);
  });
});
