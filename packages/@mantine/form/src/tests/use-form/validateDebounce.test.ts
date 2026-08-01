import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../use-form';

describe('@mantine/form/validateDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('correctly debounces validation and clears previous timer on rapid value changes', () => {
    const validateSpy = jest.fn().mockReturnValue(null);

    const hook = renderHook(() =>
      useForm({
        initialValues: { name: '' },
        validateInputOnChange: true,
        validateDebounce: 100,
        validate: {
          name: validateSpy,
        },
      })
    );

    act(() => {
      hook.result.current.setFieldValue('name', 'a');
    });

    // Advance time slightly, but not enough to trigger validation
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(validateSpy).not.toHaveBeenCalled();

    // Type a second character - this should clear the first timer
    act(() => {
      hook.result.current.setFieldValue('name', 'ab');
    });

    // Advance time past the original 100ms mark from the first keystroke (total time: 110ms)
    act(() => {
      jest.advanceTimersByTime(60);
    });
    // If the debounce failed to clear the timer, the validation for 'a' would have fired here.
    expect(validateSpy).not.toHaveBeenCalled();

    // Now advance time fully past the second keystroke's debounce window (total time: 150ms)
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(validateSpy).toHaveBeenCalledTimes(1);
    expect(validateSpy).toHaveBeenLastCalledWith(
      'ab',
      expect.anything(),
      'name',
      expect.anything()
    );
  });
});
