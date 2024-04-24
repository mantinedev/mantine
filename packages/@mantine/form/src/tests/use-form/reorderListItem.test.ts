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
