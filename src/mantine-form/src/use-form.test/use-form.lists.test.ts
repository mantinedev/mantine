import { act, renderHook } from '@testing-library/react';
import { useForm, formList } from '../index';

type Fruit = Record<'fruit', string>;
type Vegetable = Record<'vegetable', string>;

const banana: Fruit = { fruit: 'banana' };
const orange: Fruit = { fruit: 'orange' };
const apple: Fruit = { fruit: 'apple' };

const carrot: Vegetable = { vegetable: 'carrot' };
const potato: Vegetable = { vegetable: 'potato' };

describe('@mantine/form/use-form lists', () => {
  it('sets list values with setListItem handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([banana, orange]), other: true } })
    );

    act(() => hook.result.current.setListItem('fruits', 0, apple));
    expect(hook.result.current.values).toStrictEqual({ fruits: [apple, orange], other: true });

    act(() => hook.result.current.setListItem('fruits', 1, apple));
    expect(hook.result.current.values).toStrictEqual({ fruits: [apple, apple], other: true });
  });

  it('does not set list values that are not in current list', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([banana, orange]), other: true } })
    );

    act(() => hook.result.current.setListItem('fruits', 2, apple));
    expect(hook.result.current.values).toStrictEqual({ fruits: [banana, orange], other: true });

    act(() => hook.result.current.setListItem('fruits', -1, apple));
    expect(hook.result.current.values).toStrictEqual({ fruits: [banana, orange], other: true });
  });

  it('removes single item from the list with removeListItem handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([banana, orange, apple]), other: true } })
    );

    act(() => hook.result.current.removeListItem('fruits', 2));
    expect(hook.result.current.values).toStrictEqual({ fruits: [banana, orange], other: true });

    act(() => hook.result.current.removeListItem('fruits', 0));
    expect(hook.result.current.values).toStrictEqual({ fruits: [orange], other: true });
  });

  it('removes multiple items from the list with removeListItem handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([banana, orange, apple]), other: true } })
    );

    act(() => hook.result.current.removeListItem('fruits', [0, 2]));
    expect(hook.result.current.values).toStrictEqual({ fruits: [orange], other: true });

    act(() => hook.result.current.removeListItem('fruits', [0]));
    expect(hook.result.current.values).toStrictEqual({ fruits: [], other: true });
  });

  it('ignores indices that are not in the list with removeListItem handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([banana, orange, apple]), other: true } })
    );

    act(() => hook.result.current.removeListItem('fruits', [3, -1]));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [banana, orange, apple],
      other: true,
    });

    act(() => hook.result.current.removeListItem('fruits', 50));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [banana, orange, apple],
      other: true,
    });
  });

  it('adds single item to the end of the list with addListItem handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([banana]), other: true } })
    );

    act(() => hook.result.current.addListItem('fruits', orange));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [banana, orange],
      other: true,
    });

    act(() => hook.result.current.addListItem('fruits', apple));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [banana, orange, apple],
      other: true,
    });
  });

  it('reorders list item at given position with reorderListItem handler', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([banana, orange, apple]), other: true } })
    );

    act(() => hook.result.current.reorderListItem('fruits', { from: 0, to: 2 }));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [orange, apple, banana],
      other: true,
    });

    act(() => hook.result.current.reorderListItem('fruits', { from: 1, to: 0 }));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [apple, orange, banana],
      other: true,
    });
  });

  it('does not reorder item if its index is not in the list', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([banana, orange, apple]), other: true } })
    );

    act(() => hook.result.current.reorderListItem('fruits', { from: 3, to: 2 }));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [banana, orange, apple],
      other: true,
    });

    act(() => hook.result.current.reorderListItem('fruits', { from: -1, to: 2 }));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [banana, orange, apple],
      other: true,
    });
  });

  it('does not reorder item if target index is not in the list', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { fruits: formList([banana, orange, apple]), other: true } })
    );

    act(() => hook.result.current.reorderListItem('fruits', { from: 0, to: -1 }));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [banana, orange, apple],
      other: true,
    });

    act(() => hook.result.current.reorderListItem('fruits', { from: -1, to: 10 }));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [banana, orange, apple],
      other: true,
    });
  });

  it('supports multiple lists manipulations', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          fruits: formList([banana, orange]),
          vegetables: formList([carrot]),
          other: true,
        },
      })
    );

    act(() => hook.result.current.setListItem('fruits', 0, apple));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [apple, orange],
      vegetables: [carrot],
      other: true,
    });

    act(() => hook.result.current.addListItem('vegetables', potato));
    expect(hook.result.current.values).toStrictEqual({
      fruits: [apple, orange],
      vegetables: [carrot, potato],
      other: true,
    });
  });
});
