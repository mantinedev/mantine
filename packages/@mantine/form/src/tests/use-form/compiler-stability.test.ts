import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

/*
 * React Compiler compatibility guard.
 *
 * The form getters that read mutable refs are wrapped in `useCallback` keyed on the ref's
 * current value (e.g. `[refValues.current]`). The form reassigns those refs to fresh objects
 * on every change, so each getter's identity changes exactly when its underlying data changes
 * and stays stable otherwise.
 *
 * React Compiler memoizes a call expression by its callee identity, so this identity change is
 * what forces it to re-invoke the getter rather than serve a stale cached value. We cannot run
 * the compiler in jest, but we can assert the invariant it relies on:
 *
 *   1. after a value change, the getter is a NEW reference (so the compiler re-invokes), and
 *   2. across an inert re-render with no data change, the getter keeps a STABLE reference (so
 *      consumer dependency arrays do not fire spuriously).
 *
 * Both are asserted in controlled AND uncontrolled mode. A regression to `useCallback(fn, [])`
 * breaks (1) in both modes; a regression to a state-mirror dep like `[stateValues]` breaks (1)
 * in uncontrolled mode, where the state mirror does not update on change.
 */

function tests(mode: FormMode) {
  it('changes getter identity after a value change', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));

    const before = {
      isDirty: hook.result.current.isDirty,
      getValues: hook.result.current.getValues,
      getInitialValues: hook.result.current.getInitialValues,
    };

    act(() => hook.result.current.setFieldValue('a', 5));

    expect(hook.result.current.isDirty).not.toBe(before.isDirty);
    expect(hook.result.current.getValues).not.toBe(before.getValues);
  });

  it('changes isTouched identity after a field is touched', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));
    const before = hook.result.current.isTouched;
    act(() => hook.result.current.setFieldValue('a', 5));
    expect(hook.result.current.isTouched).not.toBe(before);
  });

  it('keeps a stable getter identity across a re-render with no data change', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));

    const before = {
      isDirty: hook.result.current.isDirty,
      isTouched: hook.result.current.isTouched,
      getValues: hook.result.current.getValues,
      getInitialValues: hook.result.current.getInitialValues,
    };

    act(() => hook.rerender());

    expect(hook.result.current.isDirty).toBe(before.isDirty);
    expect(hook.result.current.isTouched).toBe(before.isTouched);
    expect(hook.result.current.getValues).toBe(before.getValues);
    expect(hook.result.current.getInitialValues).toBe(before.getInitialValues);
  });
}

describe('@mantine/form/use-form compiler stability (controlled)', () => {
  tests('controlled');
});

describe('@mantine/form/use-form compiler stability (uncontrolled)', () => {
  tests('uncontrolled');
});
