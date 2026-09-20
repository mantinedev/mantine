import { renderHook } from '@testing-library/react';
import { useController } from './use-controller';

interface TestOptions {
  initial?: string;
}

interface TestController {
  id: string;
  options: TestOptions | undefined;
}

describe('@mantine/core/useController', () => {
  it('creates a controller from the options when the controller prop is not set', () => {
    const useTestController = jest.fn((options?: TestOptions): TestController => ({
      id: 'self',
      options,
    }));

    const hook = renderHook(() => useController(useTestController, undefined, { initial: 'a' }));

    expect(hook.result.current.id).toBe('self');
    expect(hook.result.current.options).toStrictEqual({ initial: 'a' });
  });

  it('returns the controller prop when it is set', () => {
    const useTestController = jest.fn((options?: TestOptions): TestController => ({
      id: 'self',
      options,
    }));
    const external: TestController = { id: 'external', options: undefined };

    const hook = renderHook(() => useController(useTestController, external, { initial: 'a' }));

    expect(hook.result.current).toBe(external);
  });

  it('does not pass the options to the hook when the controller prop is set', () => {
    const useTestController = jest.fn((options?: TestOptions): TestController => ({
      id: 'self',
      options,
    }));
    const external: TestController = { id: 'external', options: undefined };

    renderHook(() => useController(useTestController, external, { initial: 'a' }));

    expect(useTestController).toHaveBeenCalledWith(undefined);
  });

  it('calls the controller hook on every render, with and without the controller prop', () => {
    const useTestController = jest.fn((options?: TestOptions): TestController => ({
      id: 'self',
      options,
    }));
    const external: TestController = { id: 'external', options: undefined };

    const hook = renderHook(
      ({ controller }: { controller?: TestController }) =>
        useController(useTestController, controller, { initial: 'a' }),
      { initialProps: {} as { controller?: TestController } }
    );

    expect(useTestController).toHaveBeenCalledTimes(1);

    hook.rerender({ controller: external });
    expect(useTestController).toHaveBeenCalledTimes(2);
    expect(hook.result.current).toBe(external);

    hook.rerender({ controller: undefined });
    expect(useTestController).toHaveBeenCalledTimes(3);
    expect(hook.result.current.id).toBe('self');
  });
});
