import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../use-form';

describe('@mantine/form/use-form lists', () => {
  it('sets list values with setListValue handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: ['banana', 'orange'], other: true } })
    );

    act(() => hook.result.current.setListValue('fruits', 0, 'apple'));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['apple', 'orange'], other: true });

    act(() => hook.result.current.setListValue('fruits', 1, 'apple'));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['apple', 'apple'], other: true });
  });

  it('does not set list values that are not in current list', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: ['banana', 'orange'], other: true } })
    );

    act(() => hook.result.current.setListValue('fruits', 2, 'apple'));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['banana', 'orange'], other: true });

    act(() => hook.result.current.setListValue('fruits', -1, 'apple'));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['banana', 'orange'], other: true });
  });
});
