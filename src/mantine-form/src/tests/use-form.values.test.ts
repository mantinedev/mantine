import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../use-form';

describe('@mantine/form/use-form values', () => {
  it('sets correct values based on initialValues', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          orange: 'fruit',
          banana: true,
          apple: 20,
          grape: { nested: true },
        },
      })
    );

    expect(hook.result.current.values).toStrictEqual({
      orange: 'fruit',
      banana: true,
      apple: 20,
      grape: { nested: true },
    });
  });

  it('sets field value with setFieldValue handler', () => {
    const hook = renderHook(() => useForm({ initialValues: { orange: 'fruit', banana: true } }));

    act(() => hook.result.current.setFieldValue('banana', false));
    expect(hook.result.current.values).toStrictEqual({ orange: 'fruit', banana: false });

    act(() => hook.result.current.setFieldValue('orange', 'vegetable'));
    expect(hook.result.current.values).toStrictEqual({ orange: 'vegetable', banana: false });
  });

  it('sets fields values with setValues handler', () => {
    const hook = renderHook(() => useForm({ initialValues: { orange: 'fruit', banana: true } }));
    act(() => hook.result.current.setValues({ orange: 'vegetable', banana: false }));
    expect(hook.result.current.values).toStrictEqual({ orange: 'vegetable', banana: false });
  });
});
