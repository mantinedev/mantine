import { renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('transforms given values object', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: 1, b: '2' },
        transformValues: (values) => ({
          a: values.a.toString(),
          b: Number(values.b),
        }),
      })
    );

    expect(hook.result.current.getTransformedValues({ a: 2, b: '3' })).toStrictEqual({
      a: '2',
      b: 3,
    });
  });

  it('transforms state values if input object is not provided', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { a: 1, b: '2' },
        transformValues: (values) => ({
          a: values.a.toString(),
          b: Number(values.b),
        }),
      })
    );

    expect(hook.result.current.getTransformedValues()).toStrictEqual({
      a: '1',
      b: 2,
    });
  });

  it('returns provided values or form values if transformValues function is not set', () => {
    const hook = renderHook(() => useForm({ mode, initialValues: { a: 1, b: '2' } }));
    expect(hook.result.current.getTransformedValues({ a: 2, b: '3' })).toStrictEqual({
      a: 2,
      b: '3',
    });
    expect(hook.result.current.getTransformedValues()).toStrictEqual({
      a: 1,
      b: '2',
    });
  });
}

describe('@mantine/form/getTransformedValues-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/getTransformedValues-uncontrolled', () => {
  tests('uncontrolled');
});
