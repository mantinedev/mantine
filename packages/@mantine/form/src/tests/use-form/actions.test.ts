import { act, renderHook } from '@testing-library/react';
import { createFormActions } from '../../actions';
import { useForm } from '../../use-form';

describe('@mantine/form/actions', () => {
  it('does not register window listeners when form has no name', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const callsBefore = addEventListenerSpy.mock.calls.length;

    const hook = renderHook(() => useForm({ initialValues: { a: 1 } }));

    const mantineCalls = addEventListenerSpy.mock.calls
      .slice(callsBefore)
      .filter(([event]) => typeof event === 'string' && event.startsWith('mantine-form:'));

    expect(mantineCalls).toHaveLength(0);

    hook.unmount();
    addEventListenerSpy.mockRestore();
  });

  it('registers window listeners when form has a name and responds to actions', () => {
    const actions = createFormActions<{ a: number }>('test-form');
    const hook = renderHook(() =>
      useForm({
        name: 'test-form',
        initialValues: { a: 1 },
      })
    );

    expect(hook.result.current.getValues()).toStrictEqual({ a: 1 });

    act(() => {
      actions.setFieldValue('a', 42);
    });

    expect(hook.result.current.getValues()).toStrictEqual({ a: 42 });

    hook.unmount();
  });
});
