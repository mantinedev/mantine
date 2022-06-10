import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

const getFormEvent = () => ({ preventDefault: jest.fn() } as any);

describe('@mantine/form/onSubmit', () => {
  it('calls given function with values and event when all values are valid', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { banana: 'test banana', apple: 'test apple' } })
    );

    const event = getFormEvent();
    const handleSubmit = jest.fn();

    act(() => hook.result.current.onSubmit(handleSubmit)(event));

    expect(event.preventDefault).toHaveBeenCalled();

    expect(handleSubmit).toHaveBeenCalledWith(
      { banana: 'test banana', apple: 'test apple' },
      event
    );
  });

  it('does not call given function if values are not valid', () => {
    const hook = renderHook(() =>
      useForm({
        initialValues: {
          banana: '',
          orange: '',
        },

        validate: {
          banana: (value) => (value !== 'test-banana' ? 'invalid banana' : null),
          orange: (value) => (value !== 'test-orange' ? 'invalid orange' : null),
        },
      })
    );

    const event = getFormEvent();
    const handleSubmit = jest.fn();

    act(() => hook.result.current.onSubmit(handleSubmit)(event));
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(hook.result.current.errors).toStrictEqual({
      banana: 'invalid banana',
      orange: 'invalid orange',
    });

    act(() => hook.result.current.setValues({ banana: 'test-banana', orange: 'test-orange' }));
    act(() => hook.result.current.onSubmit(handleSubmit)(event));
    expect(handleSubmit).toHaveBeenCalledWith(
      { banana: 'test-banana', orange: 'test-orange' },
      event
    );
  });
});
