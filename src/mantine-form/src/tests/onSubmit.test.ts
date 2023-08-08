import { act, renderHook, waitFor } from '@testing-library/react';
import { useForm } from '../use-form';

const getFormEvent = () => ({ preventDefault: jest.fn() } as any);

describe('@mantine/form/onSubmit', () => {
  it('calls handleSubmit with values and event when all values are valid', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { banana: 'test banana', apple: 'test apple' } })
    );

    const event = getFormEvent();
    const handleSubmit = jest.fn();
    const handleValidationFailure = jest.fn();

    act(() => hook.result.current.onSubmit(handleSubmit, handleValidationFailure)(event));

    expect(event.preventDefault).toHaveBeenCalled();

    expect(handleValidationFailure).not.toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledWith(
      { banana: 'test banana', apple: 'test apple' },
      event
    );
  });

  it('calls handleValidationFailure when values are not valid', () => {
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
    const handleValidationFailure = jest.fn();

    act(() => hook.result.current.onSubmit(handleSubmit, handleValidationFailure)(event));
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(handleValidationFailure).toHaveBeenCalledWith(
      {
        banana: 'invalid banana',
        orange: 'invalid orange',
      },
      {
        banana: '',
        orange: '',
      },
      event
    );
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

  it('allows to call onSubmit without event', () => {
    const hook = renderHook(() => useForm({ initialValues: { a: 1 } }));
    const handleSubmit = jest.fn();
    act(() => hook.result.current.onSubmit(handleSubmit)());
    expect(handleSubmit).toHaveBeenCalledWith({ a: 1 }, undefined);
  });

  it('sets submitting, if onSubmit is async, until promise is settled', () => {
    const hook = renderHook(() => useForm({ initialValues: {} }));
    const handleSubmit = jest.fn(() => Promise.resolve());

    expect(hook.result.current.submitting).toBe(false);
    act(() => hook.result.current.onSubmit(handleSubmit)());
    expect(hook.result.current.submitting).toBe(true);
    expect(handleSubmit).toHaveBeenCalled();
    waitFor(() => expect(hook.result.current.submitting).toBe(false));
  });

  it("sets submitError if onSubmit's promise is rejected", async () => {
    const hook = renderHook(() => useForm({ initialValues: {} }));
    const handleSubmit = jest.fn(() => Promise.reject(new Error('test')));

    expect(hook.result.current.submitError).toBe(null);
    await act(async () => hook.result.current.onSubmit(handleSubmit)());
    expect(handleSubmit).toHaveBeenCalled();
    waitFor(() => expect(hook.result.current.submitting).toBe(false));
    expect(hook.result.current.submitError).toBeInstanceOf(Error);
    expect(hook.result.current.submitError?.message).toBe('test');
  });

  it("doesn't submit if form is already submitting", () => {
    const hook = renderHook(() => useForm({ initialValues: {} }));
    const handleSubmit = jest.fn(() => Promise.resolve());

    act(() => hook.result.current.onSubmit(handleSubmit)());
    act(() => hook.result.current.onSubmit(handleSubmit)());
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
