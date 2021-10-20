import { useEffect, useRef, useState } from 'react';

import { getLockStyles } from './utils/get-lock-styles';
import { injectStyles } from './utils/inject-style-tag';
import { insertStyleTag } from './utils/insert-style-tag';
import { makeStyleTag } from './utils/make-style-tag';

export function useScrollLock(
  lock?: boolean,
  options = {
    disableBodyPadding: false,
  }
) {
  const [scrollLocked, setScrollLocked] = useState(lock || false);
  const scrollTop = useRef(0);

  const { disableBodyPadding } = options;

  const stylesheet = useRef<CSSStyleSheet | any | null>(null);

  const lockScroll = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    scrollTop.current = window.scrollY;

    const styles = getLockStyles({ disableBodyPadding });

    const sheet = makeStyleTag();
    if (!sheet) return;

    injectStyles(sheet, styles);
    insertStyleTag(sheet);

    stylesheet.current = sheet;
  };

  const unlockScroll = () => {
    if (!stylesheet?.current || typeof window === 'undefined' || typeof document === 'undefined') return;

    stylesheet.current.parentNode.removeChild(stylesheet.current);
    stylesheet.current = null;
  };

  useEffect(() => {
    if (scrollLocked) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return unlockScroll;
  }, [scrollLocked]);

  useEffect(() => {
    if (lock !== undefined) {
      setScrollLocked(lock);
    }
  }, [lock]);

  useEffect(() => {
    if (lock === undefined && typeof window !== 'undefined') {
      window.document.body.style.overflow === 'hidden' && setScrollLocked(true);
    }
  }, [setScrollLocked]);

  return [scrollLocked, setScrollLocked] as const;
}
