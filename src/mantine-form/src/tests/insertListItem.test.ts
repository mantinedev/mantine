import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/insertListItem', () => {
  it('appends list item to the end of the array if index is not specified', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: [{ b: 1 }, { b: 2 }] } }));
    act(() => hook.result.current.insertListItem('a', { b: 3 }));
    expect(hook.result.current.values).toStrictEqual({ a: [{ b: 1 }, { b: 2 }, { b: 3 }] });
  });

  it('inserts list item at given position when index is specified', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: [{ b: 1 }, { b: 2 }] } }));
    act(() => hook.result.current.insertListItem('a', { b: 3 }, 1));
    expect(hook.result.current.values).toStrictEqual({ a: [{ b: 1 }, { b: 3 }, { b: 2 }] });
  });

  it('inserts item into nested list', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { a: [{ b: [{ c: 1 }, { c: 2 }] }, { b: [{ c: 1 }, { c: 2 }] }] } })
    );

    act(() => hook.result.current.insertListItem('a.1.b', { c: 3 }, 1));
    expect(hook.result.current.values).toStrictEqual({
      a: [{ b: [{ c: 1 }, { c: 2 }] }, { b: [{ c: 1 }, { c: 3 }, { c: 2 }] }],
    });
  });

  it('allows to insert multiple values with consecutive insetListItem calls', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: [{ b: 1 }, { b: 2 }] } }));
    act(() => {
      hook.result.current.insertListItem('a', { b: 3 });
      hook.result.current.insertListItem('a', { b: 4 });
      hook.result.current.insertListItem('a', { b: 5 });
    });

    expect(hook.result.current.values).toStrictEqual({
      a: [{ b: 1 }, { b: 2 }, { b: 3 }, { b: 4 }, { b: 5 }],
    });
  });

  it('updates errors of associated fields when list item is inserted', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          name: '',
          a: [{ b: 1 }, { b: 2 }, { b: 3 }],
        },
        initialErrors: {
          name: 'name-error',
          'a.0.b': 'error-1',
          'a.1.b': 'error-2',
          'a.2.b': 'error-3',
        },
      })
    );

    expect(hook.result.current.errors).toStrictEqual({
      name: 'name-error',
      'a.0.b': 'error-1',
      'a.1.b': 'error-2',
      'a.2.b': 'error-3',
    });

    act(() => hook.result.current.insertListItem('a', { b: 3 }, 1));
    expect(hook.result.current.errors).toStrictEqual({
      name: 'name-error',
      'a.0.b': 'error-1',
      'a.2.b': 'error-2',
      'a.3.b': 'error-3',
    });
  });
});
