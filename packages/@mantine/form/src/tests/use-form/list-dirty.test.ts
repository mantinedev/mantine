import { act, renderHook } from '@testing-library/react';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function tests(mode: FormMode) {
  const initialValues = { rows: [1, 2], name: 'x' };
  const getHook = () => {
    const hook = renderHook(() => useForm({ mode, initialValues }));
    // records a `name: false` dirty entry
    act(() => hook.result.current.setFieldValue('name', 'x'));
    return hook;
  };

  it.each([
    ['insertListItem', (form: any) => form.insertListItem('rows', 3)],
    ['removeListItem', (form: any) => form.removeListItem('rows', 0)],
    ['reorderListItem', (form: any) => form.reorderListItem('rows', { from: 0, to: 1 })],
    ['replaceListItem', (form: any) => form.replaceListItem('rows', 0, 5)],
  ])('reports form as dirty after %s when other dirty entries exist', (_, change) => {
    const hook = getHook();
    expect(hook.result.current.isDirty()).toBe(false);

    act(() => change(hook.result.current));
    expect(hook.result.current.isDirty()).toBe(true);
    expect(hook.result.current.isDirty('rows')).toBe(true);
  });

  it('reports form as not dirty after list is restored', () => {
    const hook = getHook();
    act(() => hook.result.current.insertListItem('rows', 3));
    act(() => hook.result.current.removeListItem('rows', 2));
    expect(hook.result.current.isDirty()).toBe(false);
    expect(hook.result.current.isDirty('rows')).toBe(false);
  });
}

describe('@mantine/form/list-dirty-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/list-dirty-uncontrolled', () => {
  tests('uncontrolled');
});
