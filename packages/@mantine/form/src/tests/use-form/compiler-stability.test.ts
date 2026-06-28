import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('changes getter identity after a value change', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));

    const before = {
      isDirty: hook.result.current.isDirty,
      getValues: hook.result.current.getValues,
      getDirty: hook.result.current.getDirty,
      getTouched: hook.result.current.getTouched,
      isValid: hook.result.current.isValid,
    };

    act(() => hook.result.current.setFieldValue('a', 5));

    expect(hook.result.current.isDirty).not.toBe(before.isDirty);
    expect(hook.result.current.getValues).not.toBe(before.getValues);
    expect(hook.result.current.getDirty).not.toBe(before.getDirty);
    expect(hook.result.current.getTouched).not.toBe(before.getTouched);
    expect(hook.result.current.isValid).not.toBe(before.isValid);
  });

  it('changes isTouched identity after a field is touched', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));
    const before = hook.result.current.isTouched;
    act(() => hook.result.current.setFieldValue('a', 5));
    expect(hook.result.current.isTouched).not.toBe(before);
  });

  it('changes getInitialValues identity after the initial values change', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));
    const before = hook.result.current.getInitialValues;
    act(() => hook.result.current.setInitialValues({ a: 5 }));
    act(() => hook.rerender());
    expect(hook.result.current.getInitialValues).not.toBe(before);
  });

  it('changes isValidating identity when validation state changes', async () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues: { a: '' }, validate: { a: async () => 'error' } })
    );
    const before = hook.result.current.isValidating;
    await act(async () => {
      await hook.result.current.validateField('a');
    });
    expect(hook.result.current.isValidating).not.toBe(before);
  });

  it('keeps a stable getter identity across a re-render with no data change', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));

    const before = {
      isDirty: hook.result.current.isDirty,
      isTouched: hook.result.current.isTouched,
      getDirty: hook.result.current.getDirty,
      getTouched: hook.result.current.getTouched,
      getValues: hook.result.current.getValues,
      getInitialValues: hook.result.current.getInitialValues,
      isValid: hook.result.current.isValid,
      isValidating: hook.result.current.isValidating,
    };

    act(() => hook.rerender());

    expect(hook.result.current.isDirty).toBe(before.isDirty);
    expect(hook.result.current.isTouched).toBe(before.isTouched);
    expect(hook.result.current.getDirty).toBe(before.getDirty);
    expect(hook.result.current.getTouched).toBe(before.getTouched);
    expect(hook.result.current.getValues).toBe(before.getValues);
    expect(hook.result.current.getInitialValues).toBe(before.getInitialValues);
    expect(hook.result.current.isValid).toBe(before.isValid);
    expect(hook.result.current.isValidating).toBe(before.isValidating);
  });

  it('gives getInputNode a fresh identity each render (never memoized)', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));
    const before = hook.result.current.getInputNode;
    act(() => hook.rerender());
    expect(hook.result.current.getInputNode).not.toBe(before);
  });

  it('reads current data from getters retained across renders', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: 1 },
        validate: { a: (value) => (value < 2 ? 'error' : null) },
      })
    );

    const retained = {
      getValues: hook.result.current.getValues,
      isDirty: hook.result.current.isDirty,
      getDirty: hook.result.current.getDirty,
      getTouched: hook.result.current.getTouched,
      isValid: hook.result.current.isValid,
    };

    act(() => hook.result.current.setFieldValue('a', 5));

    expect(retained.getValues().a).toBe(5);
    expect(retained.isDirty()).toBe(true);
    expect(retained.getTouched().a).toBe(true);
    expect(retained.getDirty().a).toBe(true);
    expect(retained.isValid()).toBe(true);
  });
}

describe('@mantine/form/use-form compiler stability (controlled)', () => {
  tests('controlled');
});

describe('@mantine/form/use-form compiler stability (uncontrolled)', () => {
  tests('uncontrolled');
});
