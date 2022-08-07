import { renderHook, act } from '@testing-library/react';
import { useForm } from '../use-form';

describe('@mantine/form/reorderListItem', () => {
  it('reorders items at given list', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { a: [{ b: 1 }, { b: 2 }, { b: 3 }] } })
    );

    act(() => hook.result.current.reorderListItem('a', { from: 2, to: 0 }));
    expect(hook.result.current.values).toStrictEqual({ a: [{ b: 3 }, { b: 1 }, { b: 2 }] });
  });

  it('reorders items at given nested list', () => {
    const hook = renderHook(() =>
      useForm({
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
    expect(hook.result.current.values).toStrictEqual({
      a: [
        { b: [{ c: 1 }, { c: 2 }, { c: 3 }] },
        { b: [{ c: 5 }, { c: 4 }, { c: 6 }] },
        { b: [{ c: 7 }, { c: 8 }, { c: 9 }] },
      ],
    });
  });
});
