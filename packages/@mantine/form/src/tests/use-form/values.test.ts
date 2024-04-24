import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../use-form';

describe('@mantine/form/values', () => {
  it('sets given initial values', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 } }));
    expect(hook.result.current.values).toStrictEqual({ a: 1, b: 2 });
  });

  it('allows to initialize form without initial values', () => {
    const hook = renderHook(() => useForm<{ a: 1; b: 2 }>());
    expect(hook.result.current.values).toStrictEqual({});
  });

  it('sets values with setValues handler after initialization with initialValues', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 } }));
    act(() => hook.result.current.setValues({ a: 3, b: 4 }));
    expect(hook.result.current.values).toStrictEqual({ a: 3, b: 4 });
  });

  it('sets values with setValues handler after initialization without initialValues', () => {
    const hook = renderHook(() => useForm<{ a: number; b: number }>());
    act(() => hook.result.current.setValues({ a: 3, b: 4 }));
    expect(hook.result.current.values).toStrictEqual({ a: 3, b: 4 });
  });

  it('calls onValuesChange when setValues is called', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 }, onValuesChange: spy }));
    act(() => hook.result.current.setValues({ a: 3, b: 4 }));
    expect(spy).toHaveBeenCalledWith({ a: 3, b: 4 }, { a: 1, b: 2 });
  });

  it('calls onValuesChange when setValues is called with function', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 }, onValuesChange: spy }));
    act(() => hook.result.current.setValues((current) => ({ ...current, a: 3 })));
    expect(spy).toHaveBeenCalledWith({ a: 3, b: 2 }, { a: 1, b: 2 });
  });

  it('calls onValuesChange when setValues is called with values partial', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 }, onValuesChange: spy }));
    act(() => hook.result.current.setValues({ a: 3 }));
    expect(spy).toHaveBeenCalledWith({ a: 3, b: 2 }, { a: 1, b: 2 });
  });

  it('calls onValuesChange when setFieldValue is called', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useForm({ initialValues: { a: 1, b: 2 }, onValuesChange: spy }));
    act(() => hook.result.current.setFieldValue('a', 3));
    expect(spy).toHaveBeenCalledWith({ a: 3, b: 2 }, { a: 1, b: 2 });
  });
});

describe('@mantine/form/values-uncontrolled', () => {
  it('sets given initial values', () => {
    const hook = renderHook(() => useForm({ mode: 'uncontrolled', initialValues: { a: 1, b: 2 } }));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 1, b: 2 });
  });

  it('allows to initialize form without initial values', () => {
    const hook = renderHook(() => useForm<{ a: 1; b: 2 }>({ mode: 'uncontrolled' }));
    expect(hook.result.current.getValues()).toStrictEqual({});
  });

  it('sets values with setValues handler after initialization with initialValues', () => {
    const hook = renderHook(() => useForm({ mode: 'uncontrolled', initialValues: { a: 1, b: 2 } }));
    act(() => hook.result.current.setValues({ a: 3, b: 4 }));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 3, b: 4 });
  });

  it('sets values with setValues handler after initialization without initialValues', () => {
    const hook = renderHook(() => useForm<{ a: number; b: number }>({ mode: 'uncontrolled' }));
    act(() => hook.result.current.setValues({ a: 3, b: 4 }));
    expect(hook.result.current.getValues()).toStrictEqual({ a: 3, b: 4 });
  });

  it('calls onValuesChange when setValues is called', () => {
    const spy = jest.fn();
    const hook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { a: 1, b: 2 }, onValuesChange: spy })
    );
    act(() => hook.result.current.setValues({ a: 3, b: 4 }));
    expect(spy).toHaveBeenCalledWith({ a: 3, b: 4 }, { a: 1, b: 2 });
  });

  it('calls onValuesChange when setValues is called with function', () => {
    const spy = jest.fn();
    const hook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { a: 1, b: 2 }, onValuesChange: spy })
    );
    act(() => hook.result.current.setValues((current) => ({ ...current, a: 3 })));
    expect(spy).toHaveBeenCalledWith({ a: 3, b: 2 }, { a: 1, b: 2 });
  });

  it('calls onValuesChange when setValues is called with values partial', () => {
    const spy = jest.fn();
    const hook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { a: 1, b: 2 }, onValuesChange: spy })
    );
    act(() => hook.result.current.setValues({ a: 3 }));
    expect(spy).toHaveBeenCalledWith({ a: 3, b: 2 }, { a: 1, b: 2 });
  });

  it('calls onValuesChange when setFieldValue is called', () => {
    const spy = jest.fn();
    const hook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { a: 1, b: 2 }, onValuesChange: spy })
    );
    act(() => hook.result.current.setFieldValue('a', 3));
    expect(spy).toHaveBeenCalledWith({ a: 3, b: 2 }, { a: 1, b: 2 });
  });
});
