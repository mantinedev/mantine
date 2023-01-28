import { useRef, useSyncExternalStore, useEffect } from 'react';
import { isFixed } from './utils/is-fixed/is-fixed';
import { isPinned } from './utils/is-pinned/is-pinned';
import { isReleased } from './utils/is-released/is-released';

const subscribe = (notify: () => void) => {
  window.addEventListener('scroll', notify);
  return () => window.removeEventListener('scroll', notify);
};

interface Params {
  fixAt?: number;
  onPin?(): void;
  onFix?(): void;
  onRelease?(): void;
}

export function useHeadroom(params?: Params) {
  const { fixAt = 0, onPin, onFix, onRelease } = params || {};

  const scrollRef = useRef(0);
  const scroll = useSyncExternalStore(subscribe, () => window.scrollY) as number;

  useEffect(() => {
    if (isPinned(scroll, scrollRef.current)) onPin?.();
  }, [scroll, onPin]);

  useEffect(() => {
    if (isFixed(scroll, fixAt)) onFix?.();
  }, [scroll, fixAt, onFix]);

  useEffect(() => {
    if (isReleased(scroll, scrollRef.current, fixAt)) onRelease?.();
  }, [scroll, onRelease]);

  useEffect(() => {
    scrollRef.current = window.scrollY;
  }, [scroll]);

  if (isPinned(scroll, scrollRef.current)) return true;
  if (isFixed(scroll, fixAt)) return true;

  return false;
}
