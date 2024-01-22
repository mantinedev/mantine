import { renderHook } from '@testing-library/react';
import { useLogger } from './use-logger';

describe('@mantine/hooks/use-logger', () => {
  it('logs mount and unmount events', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => {});
    const data = { foo: 'bar' };
    const hook = renderHook(() => useLogger('Test', [data]));
    expect(log).toHaveBeenCalledWith('Test mounted', data);
    hook.unmount();
    expect(log).toHaveBeenLastCalledWith('Test unmounted');
    expect(log).toHaveBeenCalledTimes(2);
    log.mockRestore();
  });

  it('logs mount, unmount and update events', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => {});
    let data = { foo: 'bar' };
    const hook = renderHook(() => useLogger('Test', [data]));
    expect(log).toHaveBeenCalledWith('Test mounted', data);
    data = { foo: 'newBar' };
    hook.rerender();
    expect(log).toHaveBeenCalledWith('Test updated', data);
    hook.unmount();
    expect(log).toHaveBeenLastCalledWith('Test unmounted');
    expect(log).toHaveBeenCalledTimes(3);
    log.mockRestore();
  });

  it('logs mount, unmount and rerenders without update events', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => {});
    const data = { foo: 'bar' };
    const hook = renderHook(() => useLogger('Test', [data]));
    expect(log).toHaveBeenCalledWith('Test mounted', data);
    hook.rerender();
    hook.unmount();
    expect(log).toHaveBeenLastCalledWith('Test unmounted');
    expect(log).toHaveBeenCalledTimes(2);
    log.mockRestore();
  });
});
