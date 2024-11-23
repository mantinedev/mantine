import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  it('replaces items at given list', () => {
    const hook = renderHook(() =>
      useForm({ mode, initialValues: { a: [{ b: 1 }, { b: 2 }, { b: 3 }] } })
    );

    act(() => hook.result.current.replaceListItem('a', 0, { b: 100 }));
    expect(hook.result.current.getValues()).toStrictEqual({ a: [{ b: 100 }, { b: 2 }, { b: 3 }] });
  });
}

describe('@mantine/form/replaceListItem-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/replaceListItem-uncontrolled', () => {
  tests('uncontrolled');
});
