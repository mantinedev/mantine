import { renderHook, act } from '@testing-library/react-hooks';
import { useCookie } from './use-cookie';

describe('@mantine/hooks/use-cookie', () => {
  it('returns correct initial state', () => {
    const hook = renderHook(() => useCookie('cookie'));
    expect(hook.result.current[0].current).toBe('');
  });

  it('allows to set value', () => {
    const hook = renderHook(() => useCookie('cookie1'));

    act(() => hook.result.current[1]('cookie-value'));
    expect(hook.result.current[0].current).toBe('cookie-value');

    act(() => hook.result.current[1]('cookie-changed'));
    expect(hook.result.current[0].current).toBe('cookie-changed');
  });

  it('allows to set value with callback function, if the returned value has cookie name in it', () => {
    const hook = renderHook(() => useCookie('cookie2'));

    act(() =>
      hook.result.current[1](() => 'cookie2=changed it; expires=Wed; 05 Aug 2021 23:00:00 UTC')
    );

    expect(hook.result.current[0].current).toBe(
      'changed it; expires=Wed; 05 Aug 2021 23:00:00 UTC'
    );
  });

  it('allows to set value with callback function, if the returned value does not have cookie name in it and erase it', () => {
    const hook = renderHook(() => useCookie('cookie3'));

    act(() => hook.result.current[1](() => 'no name; expires=Wed; 05 Aug 2021 23:00:00 UTC'));
    expect(hook.result.current[0].current).toBe('no name; expires=Wed; 05 Aug 2021 23:00:00 UTC');

    act(() => hook.result.current[1](''));
    expect(hook.result.current[0].current).toBe('');
  });

  it('erase a cookie with callback function and set it again', () => {
    const hook = renderHook(() => useCookie('cookie3'));

    act(() => hook.result.current[1](() => 'cookie3-value'));
    expect(hook.result.current[0].current).toBe('cookie3-value');

    act(() => hook.result.current[1](''));
    expect(hook.result.current[0].current).toBe('');

    act(() => hook.result.current[1](() => 'cookie3-value'));
    expect(hook.result.current[0].current).toBe('cookie3-value');
  });
});
