import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../index';

describe('@mantine/form/use-form get-input-props', () => {
  it('returns correct input props', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruit: 'banana' }, initialErrors: { fruit: 'invalid fruit' } })
    );

    const props = hook.result.current.getInputProps('fruit');
    expect(props.value).toBe('banana');
    expect(props.error).toBe('invalid fruit');
    expect(typeof props.onChange).toBe('function');
  });

  it('returns correct checkbox props', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruit: false }, initialErrors: { fruit: 'invalid fruit' } })
    );

    const props = hook.result.current.getInputProps('fruit', { type: 'checkbox' });
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

  it('updates form value with returned onChange handler', () => {
    const hook = renderHook(() => useForm({ initialValues: { fruit: true, vegetable: 'potato' } }));

    act(() => hook.result.current.getInputProps('fruit', { type: 'checkbox' }).onChange(false));
    expect(hook.result.current.values).toStrictEqual({ fruit: false, vegetable: 'potato' });

    act(() => hook.result.current.getInputProps('vegetable').onChange('carrot'));
    expect(hook.result.current.values).toStrictEqual({ fruit: false, vegetable: 'carrot' });
  });
});
