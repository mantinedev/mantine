import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('reorders items at given list', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues: { a: [{ b: 1 }, { b: 2 }, { b: 3 }] } })
    );

    act(() => hook.result.current.reorderListItem('a', { from: 2, to: 0 }));
    expect(hook.result.current.getValues()).toStrictEqual({ a: [{ b: 3 }, { b: 1 }, { b: 2 }] });
  });

  it('reorders items at given nested list', () => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: {
          a: [
            { b: [{ c: 1 }, { c: 2 }, { c: 3 }] },
            { b: [{ c: 4 }, { c: 5 }, { c: 6 }] },
            { b: [{ c: 7 }, { c: 8 }, { c: 9 }] },
          ],
        },
      })
    );

    act(() => hook.result.current.reorderListItem('a.1.b', { from: 1, to: 0 }));
    expect(hook.result.current.getValues()).toStrictEqual({
      a: [
        { b: [{ c: 1 }, { c: 2 }, { c: 3 }] },
        { b: [{ c: 5 }, { c: 4 }, { c: 6 }] },
        { b: [{ c: 7 }, { c: 8 }, { c: 9 }] },
      ],
    });
  });

  it.each([
    { from: 0, to: 2, order: ['B', 'C', 'A', 'D'] },
    { from: 2, to: 0, order: ['C', 'A', 'B', 'D'] },
    { from: 0, to: 1, order: ['B', 'A', 'C', 'D'] },
    { from: 1, to: 1, order: ['A', 'B', 'C', 'D'] },
  ])('keeps row errors with values when moving $from to $to', ({ from, to, order }) => {
    const records = ['A', 'B', 'C', 'D'].map((id) => ({ id, name: id, nested: { value: id } }));
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { items: records },
        initialErrors: {
          'items.0': 'A row',
          'items.0.name': 'A name',
          'items.0.nested.value': 'A nested',
          'items.1': 'B row',
          'items.1.name': 'B name',
          'items.1.nested.value': 'B nested',
          'items.2': 'C row',
          'items.2.name': 'C name',
          'items.2.nested.value': 'C nested',
          'items.3': 'D row',
          'items.3.name': 'D name',
          'items.3.nested.value': 'D nested',
          unrelated: 'Other error',
        },
      })
    );

    act(() => hook.result.current.reorderListItem('items', { from, to }));

    expect(hook.result.current.getValues().items.map((item) => item.id)).toStrictEqual(order);
    order.forEach((id, index) => {
      expect(hook.result.current.getInputProps(`items.${index}`).error).toBe(`${id} row`);
      expect(hook.result.current.getInputProps(`items.${index}.name`).error).toBe(`${id} name`);
      expect(hook.result.current.getInputProps(`items.${index}.nested.value`).error).toBe(
        `${id} nested`
      );
    });
    expect(hook.result.current.errors.unrelated).toBe('Other error');
  });

  it.each([
    { from: 0, to: 2, order: ['B', 'C', 'A'], errors: ['B error', undefined, undefined] },
    { from: 2, to: 0, order: ['C', 'A', 'B'], errors: [undefined, undefined, 'B error'] },
  ])('moves sparse nested errors from $from to $to', ({ from, to, order, errors }) => {
    const hook = renderHook(() =>
      useForm({
        mode,
        initialValues: { group: { items: [{ name: 'A' }, { name: 'B' }, { name: 'C' }] } },
        initialErrors: { 'group.items.1.name': 'B error', 'group.other.1.name': 'Other error' },
      })
    );

    act(() => hook.result.current.reorderListItem('group.items', { from, to }));

    expect(hook.result.current.getValues().group.items.map((item) => item.name)).toStrictEqual(
      order
    );
    expect(
      order.map((_, index) => hook.result.current.getInputProps(`group.items.${index}.name`).error)
    ).toStrictEqual(errors);
    expect(hook.result.current.getInputProps('group.other.1.name').error).toBe('Other error');
  });

  it('calls onValuesChange when reorderListItem is called', () => {
    const spy = jest.fn();
    const hook = renderHook(() =>
      useForm({
        mode,
        onValuesChange: spy,
        initialValues: {
          a: [
            { b: [{ c: 1 }, { c: 2 }, { c: 3 }] },
            { b: [{ c: 4 }, { c: 5 }, { c: 6 }] },
            { b: [{ c: 7 }, { c: 8 }, { c: 9 }] },
          ],
        },
      })
    );

    act(() => hook.result.current.reorderListItem('a.1.b', { from: 1, to: 0 }));
    expect(spy).toHaveBeenCalledWith(
      {
        a: [
          { b: [{ c: 1 }, { c: 2 }, { c: 3 }] },
          { b: [{ c: 5 }, { c: 4 }, { c: 6 }] },
          { b: [{ c: 7 }, { c: 8 }, { c: 9 }] },
        ],
      },
      {
        a: [
          { b: [{ c: 1 }, { c: 2 }, { c: 3 }] },
          { b: [{ c: 4 }, { c: 5 }, { c: 6 }] },
          { b: [{ c: 7 }, { c: 8 }, { c: 9 }] },
        ],
      }
    );
  });
}

describe('@mantine/form/reorderListItem-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/reorderListItem-uncontrolled', () => {
  tests('uncontrolled');
});
