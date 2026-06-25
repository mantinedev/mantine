import { act, renderHook } from '@testing-library/react';
import { useField } from '../../use-field';

/*
 * React Compiler compatibility guard for useField (mirrors the useForm guard).
 *
 * useField's getters (`getValue`, `isTouched`, `isDirty`) read mutable refs and are wrapped in
 * `useCallback` keyed on the ref's current value. The field reassigns `valueRef`/`touchedRef`
 * on every change, so the getter identity changes exactly when its data changes. This is the
 * invariant React Compiler relies on to avoid caching a stale call result; a `[]` dependency
 * array would reintroduce the staleness. We assert it here without running the compiler.
 */

describe('@mantine/form/use-field compiler stability', () => {
  it('changes getter identity after a value change', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));

    const before = {
      getValue: hook.result.current.getValue,
      isDirty: hook.result.current.isDirty,
    };

    act(() => hook.result.current.getInputProps().onChange('new value'));

    expect(hook.result.current.getValue).not.toBe(before.getValue);
    expect(hook.result.current.isDirty).not.toBe(before.isDirty);
  });

  it('keeps a stable getter identity across a re-render with no data change', () => {
    const hook = renderHook(() => useField({ initialValue: 'test' }));

    const before = {
      getValue: hook.result.current.getValue,
      isTouched: hook.result.current.isTouched,
      isDirty: hook.result.current.isDirty,
    };

    act(() => hook.rerender());

    expect(hook.result.current.getValue).toBe(before.getValue);
    expect(hook.result.current.isTouched).toBe(before.isTouched);
    expect(hook.result.current.isDirty).toBe(before.isDirty);
  });
});
