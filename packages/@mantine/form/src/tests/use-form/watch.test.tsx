import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { FormFieldSubscriber } from '../../types';
import { useForm } from '../../use-form';

function TestComponent({ watch }: { watch: FormFieldSubscriber<any, any> }) {
  const form = useForm({ initialValues: { name: 'test', area: 'area' } });
  form.watch('name', watch);

  return (
    <>
      <input {...form.getInputProps('name')} aria-label="name" />
      <input {...form.getInputProps('area')} aria-label="area" />
    </>
  );
}

describe('@mantine/form/watch', () => {
  it('allows observing field changes', async () => {
    const spy = jest.fn();
    render(<TestComponent watch={spy} />);
    expect(spy).not.toHaveBeenCalled();

    await userEvent.type(screen.getByLabelText('name'), '1');

    expect(spy).toHaveBeenCalledWith({
      previousValue: 'test',
      value: 'test1',
      touched: true,
      dirty: true,
    });

    await userEvent.type(screen.getByLabelText('name'), '{backspace}');

    expect(spy).toHaveBeenCalledWith({
      previousValue: 'test1',
      value: 'test',
      touched: true,
      dirty: false,
    });
  });

  it('does not call subscriber function when other field changes', async () => {
    const spy = jest.fn();
    render(<TestComponent watch={spy} />);
    expect(spy).not.toHaveBeenCalled();

    await userEvent.type(screen.getByLabelText('area'), '1');

    expect(spy).not.toHaveBeenCalled();
  });

  it('calls subscriber function when field changes due to form initialize', () => {
    const hook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { a: '', b: '' } })
    );
    const spy = jest.fn();

    act(() => renderHook(() => hook.result.current.watch('a', spy)));
    expect(spy).not.toHaveBeenCalled();

    act(() => hook.result.current.initialize({ a: 'c', b: '' }));

    expect(spy).toHaveBeenCalledWith({
      previousValue: '',
      value: 'c',
      touched: false,
      dirty: false,
    });
  });

  it('does not call subscriber function when other field changes due to form initialize', () => {
    const hook = renderHook(() =>
      useForm({ mode: 'uncontrolled', initialValues: { a: '', b: '' } })
    );
    const spy = jest.fn();

    act(() => renderHook(() => hook.result.current.watch('a', spy)));
    expect(spy).not.toHaveBeenCalled();

    act(() => hook.result.current.initialize({ a: '', b: 'd' }));

    expect(spy).not.toHaveBeenCalled();
  });

  it('cascades updates when cascadeUpdate is set to true', () => {
    const hook = renderHook(() =>
      useForm({
        mode: 'uncontrolled',
        cascadeUpdates: true,
        initialValues: { person: { name: '' } },
      })
    );

    const personSpy = jest.fn();

    act(() => renderHook(() => hook.result.current.watch('person', personSpy)));
    act(() => hook.result.current.setFieldValue('person.name', 'jane doe'));
    expect(personSpy).toHaveBeenCalledWith({
      previousValue: { name: '' },
      value: { name: 'jane doe' },
      touched: true,
      dirty: true,
    });

    const nameSpy = jest.fn();
    act(() => renderHook(() => hook.result.current.watch('person.name', nameSpy)));
    act(() => hook.result.current.setFieldValue('person', { name: 'john doe' }));
    expect(nameSpy).toHaveBeenCalledWith({
      previousValue: 'jane doe',
      value: 'john doe',
      touched: true,
      dirty: true,
    });
  });
});
