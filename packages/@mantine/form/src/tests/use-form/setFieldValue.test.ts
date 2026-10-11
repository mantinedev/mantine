import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('sets given value with root path', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1, b: 2 } }));

    act(() => hook.result.current.setFieldValue('a', 10));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 10, b: 2 });

    act(() => hook.result.current.setFieldValue('b', 20));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 10, b: 20 });
  });

  it('sets given value at composite path', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: { d: 2, b: { c: 1 } } } }));

    act(() => hook.result.current.setFieldValue('a.b.c', 10));
    expect(hook.result.current.getValues()).toStrictEqual({ a: { d: 2, b: { c: 10 } } });

    act(() => hook.result.current.setFieldValue('a.d', 20));
    expect(hook.result.current.getValues()).toStrictEqual({ a: { d: 20, b: { c: 10 } } });
  });

  it('sets given value at array path', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: [{ b: 1 }, { b: 2 }] } }));

    act(() => hook.result.current.setFieldValue('a.1.b', 20));
    expect(hook.result.current.getValues()).toStrictEqual({ a: [{ b: 1 }, { b: 20 }] });

    act(() => hook.result.current.setFieldValue('a.0.b', 10));
    expect(hook.result.current.getValues()).toStrictEqual({ a: [{ b: 10 }, { b: 20 }] });
  });

  it('sets given value at mixed nested path', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues: { a: [{ b: { c: 1 } }, { b: { c: 2 } }] } })
    );

    act(() => hook.result.current.setFieldValue('a.1.b.c', 20));
    expect(hook.result.current.getValues()).toStrictEqual({
      a: [{ b: { c: 1 } }, { b: { c: 20 } }],
    });

    act(() => hook.result.current.setFieldValue('a.0.b.c', 10));
    expect(hook.result.current.getValues()).toStrictEqual({
      a: [{ b: { c: 10 } }, { b: { c: 20 } }],
    });
  });

  it('sets value at path based on previous value', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: { d: 2, b: { c: 1 } } } }));

    act(() => hook.result.current.setFieldValue('a.b.c', (prev) => prev + 1));
    expect(hook.result.current.getValues()).toStrictEqual({ a: { d: 2, b: { c: 2 } } });
  });

  it('clears errors of the field and its nested fields', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { user: { name: '', email: '' }, other: '' },
        initialErrors: { user: 'root', 'user.name': 'name', 'user.email': 'email', other: 'other' },
      })
    );

    act(() => hook.result.current.setFieldValue('user', { name: 'John', email: '' }));
    expect(hook.result.current.errors).toStrictEqual({ other: 'other' });
  });

  it('does not clear errors of fields with a matching prefix', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { items: ['', '', ''] },
        initialErrors: { 'items.1': 'one', 'items.10': 'ten' },
      })
    );

    act(() => hook.result.current.setFieldValue('items.1', 'value'));
    expect(hook.result.current.errors).toStrictEqual({ 'items.10': 'ten' });
  });

  it('does not pollute Object.prototype with __proto__ path', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { name: '' } }));

    act(() => hook.result.current.setFieldValue('__proto__.polluted' as any, 'YES'));
    expect(({} as any).polluted).toBeUndefined();
    expect(hook.result.current.getValues()).toStrictEqual({ name: '' });
  });

  it('does not pollute Object.prototype with constructor.prototype path', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { name: '' } }));

    act(() => hook.result.current.setFieldValue('constructor.prototype.polluted' as any, 'YES'));
    expect(({} as any).polluted).toBeUndefined();
    expect(hook.result.current.getValues()).toStrictEqual({ name: '' });
  });
}

describe('@mantine/form/setFieldValue-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/setFieldValue-uncontrolled', () => {
  tests('uncontrolled');
});
