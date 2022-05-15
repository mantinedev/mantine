import { act, renderHook } from '@testing-library/react';
import { useDisclosure } from './use-disclosure';

describe('@mantine/hooks/use-disclosure', () => {
  it('handles close correctly', () => {
    const hook = renderHook(() => useDisclosure(true));
    expect(hook.result.current[0]).toBe(true);

    act(() => hook.result.current[1].close());
    expect(hook.result.current[0]).toBe(false);
  });

  it('handles open correctly', () => {
    const hook = renderHook(() => useDisclosure(false));
    expect(hook.result.current[0]).toBe(false);

    act(() => hook.result.current[1].open());
    expect(hook.result.current[0]).toBe(true);
  });

  it('handles toggle correctly', () => {
    const hook = renderHook(() => useDisclosure(false));
    expect(hook.result.current[0]).toBe(false);

    act(() => hook.result.current[1].toggle());
    expect(hook.result.current[0]).toBe(true);

    act(() => hook.result.current[1].toggle());
    expect(hook.result.current[0]).toBe(false);
  });

  it('calls onClose when close is called', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useDisclosure(true, { onClose: spy }));
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => hook.result.current[1].close());
    expect(spy).toHaveBeenCalledTimes(1);

    act(() => hook.result.current[1].close());
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onOpen when open is called', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useDisclosure(false, { onOpen: spy }));
    expect(spy).toHaveBeenCalledTimes(0);

    act(() => hook.result.current[1].open());
    expect(spy).toHaveBeenCalledTimes(1);

    act(() => hook.result.current[1].open());
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onOpen and onClose correctly when toggle is called', () => {
    const onClose = jest.fn();
    const onOpen = jest.fn();
    const hook = renderHook(() => useDisclosure(false, { onOpen, onClose }));
    expect(onOpen).toHaveBeenCalledTimes(0);
    expect(onClose).toHaveBeenCalledTimes(0);

    act(() => hook.result.current[1].toggle());
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);

    act(() => hook.result.current[1].toggle());
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);

    act(() => hook.result.current[1].toggle());
    expect(onOpen).toHaveBeenCalledTimes(2);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
