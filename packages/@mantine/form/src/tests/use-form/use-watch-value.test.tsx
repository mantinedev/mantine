import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from '../../use-form';

describe('@mantine/form/useWatchValue', () => {
  it('returns the initial value of the given path', () => {
    const formHook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { name: 'test' } })
    );

    const valueHook = renderHook(() => formHook.result.current.useWatchValue('name'));
    expect(valueHook.result.current).toBe('test');
  });

  it('returns updated value when the watched field changes with setFieldValue', () => {
    const formHook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { name: 'test' } })
    );

    const valueHook = renderHook(() => formHook.result.current.useWatchValue('name'));

    act(() => formHook.result.current.setFieldValue('name', 'updated'));
    expect(valueHook.result.current).toBe('updated');
  });

  it('does not rerender the component when another field changes', () => {
    const formHook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { name: 'test', area: 'area' } })
    );

    let renders = 0;
    renderHook(() => {
      renders += 1;
      return formHook.result.current.useWatchValue('name');
    });

    expect(renders).toBe(1);

    act(() => formHook.result.current.setFieldValue('area', 'updated'));
    expect(renders).toBe(1);

    act(() => formHook.result.current.setFieldValue('name', 'updated'));
    expect(renders).toBe(2);
  });

  it('returns updated value in controlled mode', () => {
    const formHook = renderHook(() =>
      useForm({ mode: 'controlled', initialValues: { name: 'test' } })
    );

    const valueHook = renderHook(() => formHook.result.current.useWatchValue('name'));
    expect(valueHook.result.current).toBe('test');

    act(() => formHook.result.current.setFieldValue('name', 'updated'));
    expect(valueHook.result.current).toBe('updated');
  });

  it('returns updated value when setValues is called', () => {
    const formHook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { name: 'test', area: 'area' } })
    );

    const valueHook = renderHook(() => formHook.result.current.useWatchValue('name'));

    act(() => formHook.result.current.setValues({ name: 'updated' }));
    expect(valueHook.result.current).toBe('updated');
  });

  it('returns updated value when initialize is called', () => {
    const formHook = renderHook(() => useForm<{ name: string }>({ mode: 'uncontrolled' }));

    const valueHook = renderHook(() => formHook.result.current.useWatchValue('name'));
    expect(valueHook.result.current).toBeUndefined();

    act(() => formHook.result.current.initialize({ name: 'initialized' }));
    expect(valueHook.result.current).toBe('initialized');
  });

  it('returns updated value when reset is called', () => {
    const formHook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { name: 'test' } })
    );

    const valueHook = renderHook(() => formHook.result.current.useWatchValue('name'));

    act(() => formHook.result.current.setFieldValue('name', 'updated'));
    expect(valueHook.result.current).toBe('updated');

    act(() => formHook.result.current.reset());
    expect(valueHook.result.current).toBe('test');
  });

  it('returns updated value when resetField is called', () => {
    const formHook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { name: 'test' } })
    );

    const valueHook = renderHook(() => formHook.result.current.useWatchValue('name'));

    act(() => formHook.result.current.setFieldValue('name', 'updated'));
    expect(valueHook.result.current).toBe('updated');

    act(() => formHook.result.current.resetField('name'));
    expect(valueHook.result.current).toBe('test');
  });

  it('returns updated value of an array path when list operations are performed', () => {
    const formHook = renderHook(() =>
      useForm({
        mode: 'uncontrolled',
        initialValues: { products: [{ name: 'phone' }] },
      })
    );

    const valueHook = renderHook(() => formHook.result.current.useWatchValue('products'));
    expect(valueHook.result.current).toStrictEqual([{ name: 'phone' }]);

    act(() => formHook.result.current.insertListItem('products', { name: 'tablet' }));
    expect(valueHook.result.current).toStrictEqual([{ name: 'phone' }, { name: 'tablet' }]);

    act(() => formHook.result.current.removeListItem('products', 0));
    expect(valueHook.result.current).toStrictEqual([{ name: 'tablet' }]);
  });

  it('returns updated value of a parent path when a nested field changes', () => {
    const formHook = renderHook(() =>
      useForm({
        mode: 'uncontrolled',
        initialValues: { person: { name: 'john' } },
      })
    );

    const valueHook = renderHook(() => formHook.result.current.useWatchValue('person'));

    act(() => formHook.result.current.setFieldValue('person.name', 'jane'));
    expect(valueHook.result.current).toStrictEqual({ name: 'jane' });
  });

  it('returns updated value of a nested path when the parent changes with cascadeUpdates', () => {
    const formHook = renderHook(() =>
      useForm({
        mode: 'uncontrolled',
        cascadeUpdates: true,
        initialValues: { person: { name: 'john' } },
      })
    );

    const valueHook = renderHook(() => formHook.result.current.useWatchValue('person.name'));

    act(() => formHook.result.current.setFieldValue('person', { name: 'jane' }));
    expect(valueHook.result.current).toBe('jane');
  });

  it('returns the value of the new path when the path argument changes', () => {
    const formHook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { name: 'test', area: 'area' } })
    );

    const valueHook = renderHook(({ path }) => formHook.result.current.useWatchValue(path), {
      initialProps: { path: 'name' },
    });

    expect(valueHook.result.current).toBe('test');

    valueHook.rerender({ path: 'area' });
    expect(valueHook.result.current).toBe('area');

    act(() => formHook.result.current.setFieldValue('area', 'updated'));
    expect(valueHook.result.current).toBe('updated');

    act(() => formHook.result.current.setFieldValue('name', 'ignored'));
    expect(valueHook.result.current).toBe('updated');
  });

  it('infers the return type from the given path', () => {
    const formHook = renderHook(() =>
      useForm({
        mode: 'uncontrolled',
        initialValues: {
          name: 'test',
          age: 21,
          person: { country: 'Poland' },
          products: [{ price: 100 }],
        },
      })
    );

    const valueHook = renderHook(() => ({
      name: formHook.result.current.useWatchValue('name') satisfies string,
      age: formHook.result.current.useWatchValue('age') satisfies number,
      country: formHook.result.current.useWatchValue('person.country') satisfies string,
      person: formHook.result.current.useWatchValue('person') satisfies { country: string },
      price: formHook.result.current.useWatchValue('products.0.price') satisfies number,
    }));

    expect(valueHook.result.current).toStrictEqual({
      name: 'test',
      age: 21,
      country: 'Poland',
      person: { country: 'Poland' },
      price: 100,
    });
  });

  it('rerenders a child component that is not rerendered by the form itself', async () => {
    function Watcher({ form }: { form: ReturnType<typeof useForm<{ name: string }>> }) {
      const name = form.useWatchValue('name');
      return <div data-testid="watched">{name}</div>;
    }

    function TestComponent() {
      const form = useForm({ mode: 'uncontrolled', initialValues: { name: '' } });
      return (
        <>
          <input {...form.getInputProps('name')} aria-label="name" />
          <Watcher form={form} />
        </>
      );
    }

    render(<TestComponent />);
    expect(screen.getByTestId('watched')).toHaveTextContent('');

    await userEvent.type(screen.getByLabelText('name'), 'test');
    expect(screen.getByTestId('watched')).toHaveTextContent('test');
  });
});
