import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/get-input-props', () => {
  it('returns correct input props (root property)', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruit: 'banana' }, initialErrors: { fruit: 'invalid fruit' } })
    );

    const props = hook.result.current.getInputProps('fruit');
    expect(props.value).toBe('banana');
    expect(props.error).toBe('invalid fruit');
    expect(typeof props.onChange).toBe('function');
  });

  it('returns correct input props (nested object property)', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { fruit: { name: 'banana' } },
        initialErrors: { 'fruit.name': 'invalid fruit' },
      })
    );

    const props = hook.result.current.getInputProps('fruit.name');
    expect(props.value).toBe('banana');
    expect(props.error).toBe('invalid fruit');
    expect(typeof props.onChange).toBe('function');
  });

  it('returns correct input props (nested array property)', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: { a: [{ b: 1 }, { b: 2 }, { b: 3 }] },
        initialErrors: { 'a.1.b': 'error-b' },
      })
    );

    const props = hook.result.current.getInputProps('a.1.b');
    expect(props.value).toBe(2);
    expect(props.error).toBe('error-b');
    expect(typeof props.onChange).toBe('function');
  });

  it('returns correct checkbox props', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruit: false }, initialErrors: { fruit: 'invalid fruit' } })
    );

    const props = hook.result.current.getInputProps('fruit', { type: 'checkbox', withError: true });
    expect(props.checked).toBe(false);
    expect(props.error).toBe('invalid fruit');
    expect(typeof props.onChange).toBe('function');
  });

  it('does not return an error if withError is set to false', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruit: true }, initialErrors: { fruit: 'invalid fruit' } })
    );

    const props = hook.result.current.getInputProps('fruit', {
      type: 'checkbox',
      withError: false,
    });
    expect(props.checked).toBe(true);
    expect('error' in props).toBe(false);
    expect(typeof props.onChange).toBe('function');
  });

  it('updates form value with returned onChange handler (root property)', () => {
    const hook = renderHook(() => useForm({ initialValues: { fruit: true, vegetable: 'potato' } }));

    act(() => hook.result.current.getInputProps('fruit', { type: 'checkbox' }).onChange(false));
    expect(hook.result.current.values).toStrictEqual({ fruit: false, vegetable: 'potato' });

    act(() => hook.result.current.getInputProps('vegetable').onChange('carrot'));
    expect(hook.result.current.values).toStrictEqual({ fruit: false, vegetable: 'carrot' });
  });

  it('updates form value with returned onChange handler (nested object)', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { nested: { fruit: true, vegetable: 'potato' } } })
    );

    act(() =>
      hook.result.current.getInputProps('nested.fruit', { type: 'checkbox' }).onChange(false)
    );
    expect(hook.result.current.values).toStrictEqual({
      nested: { fruit: false, vegetable: 'potato' },
    });

    act(() => hook.result.current.getInputProps('nested.vegetable').onChange('carrot'));
    expect(hook.result.current.values).toStrictEqual({
      nested: { fruit: false, vegetable: 'carrot' },
    });
  });

  it('updates form value with returned onChange handler (nested array)', () => {
    const hook = renderHook(() =>
      useForm({
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
    expect(hook.result.current.values).toStrictEqual({
      nested: [
        { fruit: true, vegetable: 'potato' },
        { fruit: false, vegetable: 'potato' },
      ],
    });

    act(() => hook.result.current.getInputProps('nested.0.vegetable').onChange('carrot'));
    expect(hook.result.current.values).toStrictEqual({
      nested: [
        { fruit: true, vegetable: 'carrot' },
        { fruit: false, vegetable: 'potato' },
      ],
    });
  });

  it('returns onFocus if withFocus is true', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1 } }));
    expect(typeof hook.result.current.getInputProps('a').onFocus).toBe('function');
    expect(typeof hook.result.current.getInputProps('a', { withFocus: false }).onFocus).toBe(
      'undefined'
    );
  });
});
