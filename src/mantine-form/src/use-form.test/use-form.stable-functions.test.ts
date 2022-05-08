import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../index';

describe('@mantine/form/use-form stable functions', () => {
  it('keeps returned functions stable', () => {
    const hook = renderHook(() =>
      useForm({ initialValues: { banana: 'initial banana', orange: 20, apple: { nested: true } } })
    );

    const originalFunctions = {
      ...hook.result.current,
    };
    delete originalFunctions.values;
    delete originalFunctions.errors;

    act(() =>
      hook.result.current.setValues({
        banana: 'modified banana',
        orange: 21,
        apple: { nested: false },
      })
    );

    expect(hook.result.current).toMatchObject(originalFunctions);
  });
});
