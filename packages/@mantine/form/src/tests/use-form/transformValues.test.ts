import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

const getFormEvent = () => ({ preventDefault: jest.fn() }) as any;

function tests(mode: FormMode) {
  it('does not transform values if transformValues function is not provided', async () => {
    const spy = jest.fn();
    const event = getFormEvent();
    const hook = renderHook(() => useForm({ mode, initialValues: { a: '1', b: 1 } }));
    await act(async () => hook.result.current.onSubmit(spy)(event));
    expect(spy).toHaveBeenCalledWith({ a: '1', b: 1 }, event);
  });

  it('transforms values with given transformValues function', async () => {
    const spy = jest.fn();
    const event = getFormEvent();
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: '1', b: 1 },
        transformValues: (values) => ({ a: Number(values.a), b: values.b.toString() }),
      })
    );
    await act(async () => hook.result.current.onSubmit(spy)(event));
    expect(spy).toHaveBeenCalledWith({ a: 1, b: '1' }, event);
  });
}

describe('@mantine/form/transformValues-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/transformValues-uncontrolled', () => {
  tests('uncontrolled');
});
