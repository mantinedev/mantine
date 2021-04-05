import { renderHook } from '@testing-library/react-hooks';
import { useScrollLock } from './use-scroll-lock';

describe('@mantine/hooks/use-scroll-lock', () => {
  // Clean up dom as jest does not do this automatically
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
  });

  it('locks scroll on body element', () => {
    document.body.style.overflow = 'visible';
    renderHook(() => useScrollLock(true));
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('does not change overflow if called with false', () => {
    document.body.style.overflow = 'visible';
    renderHook(() => useScrollLock(false));
    expect(document.body.style.overflow).toBe('visible');
  });
});
