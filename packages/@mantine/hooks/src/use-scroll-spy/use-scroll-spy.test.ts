import { renderHook } from '@testing-library/react';
import { useScrollSpy } from './use-scroll-spy';

describe('@mantine/hooks/use-scroll-spy', () => {
  it('attaches scroll listener to window by default', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    renderHook(() => useScrollSpy());
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    addSpy.mockRestore();
  });

  it('attaches scroll listener to scrollHost element', () => {
    const host = document.createElement('div');
    const addSpy = jest.spyOn(host, 'addEventListener');
    renderHook(() => useScrollSpy({ scrollHost: host }));
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('resolves scrollHost passed as a ref object', () => {
    const host = document.createElement('div');
    const addSpy = jest.spyOn(host, 'addEventListener');
    const ref = { current: host };
    renderHook(() => useScrollSpy({ scrollHost: ref }));
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('falls back to window when ref host is null', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    const ref = { current: null };
    renderHook(() => useScrollSpy({ scrollHost: ref }));
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    addSpy.mockRestore();
  });
});
