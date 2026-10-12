import { act, render, renderHook, screen } from '@testing-library/react';
import { useUncontrolled } from '../use-uncontrolled/use-uncontrolled';
import { FormField, useFormField } from './use-form-field';

function createField<Value>(initialValue: Value) {
  let value = initialValue;
  const valueListeners = new Set<() => void>();
  const writeListeners = new Set<(value: Value) => void>();

  const field: FormField<Value> = {
    path: 'test.path',
    getSnapshot: () => value,
    subscribe: (listener) => {
      valueListeners.add(listener);
      return () => valueListeners.delete(listener);
    },
    subscribeExternalWrite: (listener) => {
      writeListeners.add(listener);
      return () => writeListeners.delete(listener);
    },
  };

  const onChange: any = jest.fn((next: Value) => {
    value = next;
    valueListeners.forEach((listener) => listener());
  });

  onChange[Symbol.for('mantine-form-field')] = field;

  return {
    onChange,
    valueListeners,
    writeListeners,
    write: (next: Value) => {
      value = next;
      valueListeners.forEach((listener) => listener());
      writeListeners.forEach((listener) => listener(next));
    },
  };
}

describe('@mantine/hooks/use-form-field', () => {
  it('returns unbound state for a handler without a field', () => {
    const hook = renderHook(() => useFormField(() => {}));
    expect(hook.result.current).toStrictEqual({
      bound: false,
      subscribed: false,
      path: null,
      value: undefined,
    });
  });

  it('returns unbound state when the handler is not a function', () => {
    const hook = renderHook(() => useFormField(undefined));
    expect(hook.result.current.bound).toBe(false);
  });

  it('subscribes to the field value', () => {
    const { onChange, write, valueListeners } = createField('initial');
    const hook = renderHook(() => useFormField<string>(onChange));

    expect(hook.result.current).toStrictEqual({
      bound: true,
      subscribed: true,
      path: 'test.path',
      value: 'initial',
    });

    act(() => write('next'));
    expect(hook.result.current.value).toBe('next');

    hook.unmount();
    expect(valueListeners.size).toBe(0);
  });

  it('does not subscribe to the field value when subscribe is false', () => {
    const { onChange, valueListeners } = createField('initial');
    const hook = renderHook(() => useFormField<string>(onChange, { subscribe: false }));

    expect(valueListeners.size).toBe(0);
    expect(hook.result.current).toStrictEqual({
      bound: true,
      subscribed: false,
      path: 'test.path',
      value: undefined,
    });
  });

  it('calls the latest onExternalWrite when the form writes the value', () => {
    const { onChange, write, writeListeners } = createField('initial');
    const first = jest.fn();
    const second = jest.fn();
    const hook = renderHook(
      ({ callback }) => useFormField<string>(onChange, { onExternalWrite: callback }),
      { initialProps: { callback: first } }
    );

    act(() => write('one'));
    expect(first).toHaveBeenCalledWith('one');

    hook.rerender({ callback: second });
    act(() => write('two'));
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith('two');

    hook.unmount();
    expect(writeListeners.size).toBe(0);
  });

  it('calls onExternalWrite with the new field value when the handler is bound to another field', () => {
    const first = createField('first');
    const second = createField('second');
    const onExternalWrite = jest.fn();
    const hook = renderHook(({ onChange }) => useFormField<string>(onChange, { onExternalWrite }), {
      initialProps: { onChange: first.onChange },
    });

    expect(onExternalWrite).not.toHaveBeenCalled();

    hook.rerender({ onChange: first.onChange });
    expect(onExternalWrite).not.toHaveBeenCalled();

    hook.rerender({ onChange: second.onChange });
    expect(onExternalWrite).toHaveBeenCalledTimes(1);
    expect(onExternalWrite).toHaveBeenCalledWith('second');
    expect(first.writeListeners.size).toBe(0);
    expect(second.writeListeners.size).toBe(1);

    hook.rerender({ onChange: second.onChange });
    expect(onExternalWrite).toHaveBeenCalledTimes(1);
  });

  it('calls onExternalWrite when an unbound handler is replaced with a bound one after mount', () => {
    const field = createField('bound');
    const plain = jest.fn();
    const onExternalWrite = jest.fn();
    const hook = renderHook(
      ({ onChange }: { onChange: any }) => useFormField<string>(onChange, { onExternalWrite }),
      { initialProps: { onChange: plain as any } }
    );

    expect(onExternalWrite).not.toHaveBeenCalled();

    hook.rerender({ onChange: field.onChange });
    expect(onExternalWrite).toHaveBeenCalledTimes(1);
    expect(onExternalWrite).toHaveBeenCalledWith('bound');

    hook.rerender({ onChange: plain });
    hook.rerender({ onChange: field.onChange });
    expect(onExternalWrite).toHaveBeenCalledTimes(2);
  });

  it('does not call onExternalWrite for a field bound while onExternalWrite was not set', () => {
    const first = createField('first');
    const second = createField('second');
    const onExternalWrite = jest.fn();
    const hook = renderHook(
      ({ onChange, withCallback }: { onChange: any; withCallback: boolean }) =>
        useFormField<string>(onChange, {
          onExternalWrite: withCallback ? onExternalWrite : undefined,
        }),
      { initialProps: { onChange: first.onChange, withCallback: false } }
    );

    hook.rerender({ onChange: second.onChange, withCallback: false });
    hook.rerender({ onChange: second.onChange, withCallback: true });
    expect(onExternalWrite).not.toHaveBeenCalled();
    expect(second.writeListeners.size).toBe(1);
  });
});

describe('@mantine/hooks/use-uncontrolled with form field', () => {
  function Input({ value, defaultValue, onChange }: any) {
    const [_value, handleChange, controlled] = useUncontrolled<string>({
      value,
      defaultValue,
      finalValue: 'final',
      onChange,
    });

    return (
      <input
        aria-label="input"
        data-controlled={controlled}
        value={_value}
        onChange={(event) => handleChange(event.currentTarget.value)}
      />
    );
  }

  const getInput = () => screen.getByLabelText<HTMLInputElement>('input');

  it('reads the value from the field and ignores the value prop', () => {
    const { onChange, write } = createField('field-value');
    render(<Input value="prop-value" onChange={onChange} />);

    expect(getInput()).toHaveValue('field-value');
    expect(getInput()).toHaveAttribute('data-controlled', 'true');

    act(() => write('written'));
    expect(getInput()).toHaveValue('written');
  });

  it('uses defaultValue while the field value is undefined', () => {
    const { onChange, write } = createField<string | undefined>(undefined);
    render(<Input defaultValue="default" onChange={onChange} />);

    expect(getInput()).toHaveValue('default');
    expect(getInput()).toHaveAttribute('data-controlled', 'true');

    act(() => write('written'));
    expect(getInput()).toHaveValue('written');

    act(() => write(undefined));
    expect(getInput()).toHaveValue('default');
  });

  it('uses finalValue while the field value is undefined and defaultValue is not set', () => {
    const { onChange, write } = createField<string | undefined>(undefined);
    render(<Input onChange={onChange} />);
    expect(getInput()).toHaveValue('final');

    act(() => write('written'));
    act(() => write(undefined));
    expect(getInput()).toHaveValue('final');
  });

  it('does not use fields of handlers that are not passed as onChange', () => {
    render(<Input value="prop-value" onChange={() => {}} />);
    expect(getInput()).toHaveValue('prop-value');
  });
});
