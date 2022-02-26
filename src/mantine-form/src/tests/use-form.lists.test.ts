import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../use-form';

describe('@mantine/form/use-form lists', () => {
  it('sets list values with setListItem handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: ['banana', 'orange'], other: true } })
    );

    act(() => hook.result.current.setListItem('fruits', 0, 'apple'));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['apple', 'orange'], other: true });

    act(() => hook.result.current.setListItem('fruits', 1, 'apple'));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['apple', 'apple'], other: true });
  });

  it('does not set list values that are not in current list', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: ['banana', 'orange'], other: true } })
    );

    act(() => hook.result.current.setListItem('fruits', 2, 'apple'));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['banana', 'orange'], other: true });

    act(() => hook.result.current.setListItem('fruits', -1, 'apple'));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['banana', 'orange'], other: true });
  });

  it('removes single item from the list with removeListItem handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: ['banana', 'orange', 'apple'], other: true } })
    );

    act(() => hook.result.current.removeListItem('fruits', 2));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['banana', 'orange'], other: true });

    act(() => hook.result.current.removeListItem('fruits', 0));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['orange'], other: true });
  });

  it('removes multiple items from the list with removeListItem handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: ['banana', 'orange', 'apple'], other: true } })
    );

    act(() => hook.result.current.removeListItem('fruits', [0, 2]));
    expect(hook.result.current.values).toStrictEqual({ fruits: ['orange'], other: true });

    act(() => hook.result.current.removeListItem('fruits', [0]));
    expect(hook.result.current.values).toStrictEqual({ fruits: [], other: true });
  });

  it('ignores indices that are not in the list with removeListItem handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: ['banana', 'orange', 'apple'], other: true } })
    );

    act(() => hook.result.current.removeListItem('fruits', [3, -1]));
    expect(hook.result.current.values).toStrictEqual({
      fruits: ['banana', 'orange', 'apple'],
      other: true,
    });

    act(() => hook.result.current.removeListItem('fruits', 50));
    expect(hook.result.current.values).toStrictEqual({
      fruits: ['banana', 'orange', 'apple'],
      other: true,
    });
  });

  it('adds single item to the end of the list with addListItem handler', () => {
    const hook = renderHook(() => useForm({ initialValues: { fruits: ['banana'], other: true } }));

    act(() => hook.result.current.addListItem('fruits', 'orange'));
    expect(hook.result.current.values).toStrictEqual({
      fruits: ['banana', 'orange'],
      other: true,
    });

    act(() => hook.result.current.addListItem('fruits', 'apple'));
    expect(hook.result.current.values).toStrictEqual({
      fruits: ['banana', 'orange', 'apple'],
      other: true,
    });
  });
});
