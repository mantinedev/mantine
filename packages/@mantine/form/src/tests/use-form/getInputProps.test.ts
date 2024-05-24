import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function getInputProps(mode: FormMode, input: Record<string, any>) {
  const { value, error, ...others } = input;
  const result = {
    ...others,
    [mode === 'controlled' ? 'value' : 'defaultValue']: value,
    error,
    onBlur: expect.any(Function),
    onChange: expect.any(Function),
    onFocus: expect.any(Function),
    'data-path': expect.any(String),
  };

  return result;
}

function tests(mode: FormMode) {
  it('returns correct input props (root property)', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { fruit: 'banana' },
        initialErrors: { fruit: 'invalid fruit' },
      })
    );

    expect(hook.result.current.getInputProps('fruit')).toStrictEqual(
      getInputProps(mode, { value: 'banana', error: 'invalid fruit' })
    );
  });

  it('returns correct input props (nested object property)', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { fruit: { name: 'banana' } },
        initialErrors: { 'fruit.name': 'invalid fruit' },
      })
    );

    expect(hook.result.current.getInputProps('fruit.name')).toStrictEqual(
      getInputProps(mode, { value: 'banana', error: 'invalid fruit' })
    );
  });

  it('returns correct input props (nested array property)', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: [{ b: 1 }, { b: 2 }, { b: 3 }] },
        initialErrors: { 'a.1.b': 'error-b' },
      })
    );

    expect(hook.result.current.getInputProps('a.1.b')).toStrictEqual(
      getInputProps(mode, { value: 2, error: 'error-b' })
    );
  });

  it('returns correct checked prop instead of value', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues: { fruit: false }, initialErrors: { fruit: 'invalid fruit' } })
    );

    const result = hook.result.current.getInputProps('fruit', {
      type: 'checkbox',
      withError: true,
    }) as any;

    expect(result[mode === 'controlled' ? 'checked' : 'defaultChecked']).toBe(false);
    expect(result[mode === 'controlled' ? 'value' : 'defaultValue']).toBe(undefined);
  });

  it('does not return an error if withError is set to false', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues: { fruit: true }, initialErrors: { fruit: 'invalid fruit' } })
    );

    const result = hook.result.current.getInputProps('fruit', {
      type: 'checkbox',
      withError: false,
    }) as any;
    expect(result[mode === 'controlled' ? 'checked' : 'defaultChecked']).toBe(true);
    expect('error' in result).toBe(false);
  });

  it('updates form value with returned onChange handler (root property)', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues: { fruit: true, vegetable: 'potato' } })
    );

    act(() => hook.result.current.getInputProps('fruit', { type: 'checkbox' }).onChange(false));
    expect(hook.result.current.getValues()).toStrictEqual({ fruit: false, vegetable: 'potato' });

    act(() => hook.result.current.getInputProps('vegetable').onChange('carrot'));
    expect(hook.result.current.getValues()).toStrictEqual({ fruit: false, vegetable: 'carrot' });
  });

  it('updates form value with returned onChange handler (nested object)', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues: { nested: { fruit: true, vegetable: 'potato' } } })
    );

    act(() =>
      hook.result.current.getInputProps('nested.fruit', { type: 'checkbox' }).onChange(false)
    );
    expect(hook.result.current.getValues()).toStrictEqual({
      nested: { fruit: false, vegetable: 'potato' },
    });

    act(() => hook.result.current.getInputProps('nested.vegetable').onChange('carrot'));
    expect(hook.result.current.getValues()).toStrictEqual({
      nested: { fruit: false, vegetable: 'carrot' },
    });
  });

  it('updates form value with returned onChange handler (nested array)', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: {
          nested: [
            { fruit: true, vegetable: 'potato' },
            { fruit: true, vegetable: 'potato' },
          ],
        },
      })
    );

    act(() =>
      hook.result.current.getInputProps('nested.1.fruit', { type: 'checkbox' }).onChange(false)
    );
    expect(hook.result.current.getValues()).toStrictEqual({
      nested: [
        { fruit: true, vegetable: 'potato' },
        { fruit: false, vegetable: 'potato' },
      ],
    });

    act(() => hook.result.current.getInputProps('nested.0.vegetable').onChange('carrot'));
    expect(hook.result.current.getValues()).toStrictEqual({
      nested: [
        { fruit: true, vegetable: 'carrot' },
        { fruit: false, vegetable: 'potato' },
      ],
    });
  });

  it('returns onFocus if withFocus is true', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1 } }));
    expect(typeof hook.result.current.getInputProps('a').onFocus).toBe('function');
    expect(typeof hook.result.current.getInputProps('a', { withFocus: false }).onFocus).toBe(
      'undefined'
    );
  });
}

describe('@mantine/form/get-input-props-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/get-input-props-uncontrolled', () => {
  tests('uncontrolled');
});
