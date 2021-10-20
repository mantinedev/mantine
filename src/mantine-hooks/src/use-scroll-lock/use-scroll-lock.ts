import { useEffect, useRef, useState } from 'react';

import { getLockStyles } from './utils/get-lock-styles';
import { injectStyles } from './utils/inject-style-tag';
import { insertStyleTag } from './utils/insert-style-tag';
import { isIosDevice } from './utils/is-ios';
import { makeStyleTag } from './utils/make-style-tag';

export function useScrollLock<T extends HTMLElement = HTMLDivElement>(
  lock?: boolean,
  options = {
    disableBodyPadding: false,
    disableTouchEvents: true,
  }
) {
  const [scrollLocked, setScrollLocked] = useState(lock || false);
  const scrollTop = useRef(0);
  const rect = useRef<DOMRect>();

  const shouldPrevent = useRef(false);
  const { disableBodyPadding, disableTouchEvents } = options;

  const stylesheet = useRef<CSSStyleSheet | any | null>(null);
  const contentRef = useRef<T>(null);

  const isTouchOnRef = (event: TouchEvent) => {
    if (contentRef.current && event?.touches.length > 0) {
      // first touch x,y coordinates
      const { pageX, pageY } = event?.touches[0];
      const { top, left, width, height } = rect.current;

      /**
       * we check if touch shares position with ref element
       * if not we prevent that event
       */
      const sharedY =
        scrollTop.current + top <= pageY &&
        scrollTop.current + top + height >= pageY;
      const sharedX = left <= pageX && left + width >= pageX;

      if (sharedX && sharedY) {
        shouldPrevent.current = false;
      } else {
        shouldPrevent.current = true;
      }
    } else {
      shouldPrevent.current = true;
    }
  };

  const onTouchStart = (event: TouchEvent) => {
    shouldPrevent.current = true;

    isTouchOnRef(event);
  };

  const onTouchMove = (event: TouchEvent) => {
    if (shouldPrevent.current) {
      event.preventDefault();
    }

    isTouchOnRef(event);
  };

  const lockScroll = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    scrollTop.current = window.scrollY;

    const styles = getLockStyles({ disableBodyPadding });

    /**
     * by applying styles via style tag
     * we dont care about previous styles due to inheritance
     * when scroll gets unlocked we delete that style tag
     */
    const sheet = makeStyleTag();

    injectStyles(sheet, styles);
    insertStyleTag(sheet);

    stylesheet.current = sheet;

    if (contentRef.current) {
      rect.current = contentRef.current.getBoundingClientRect();
    }

    if (disableTouchEvents && isIosDevice()) {
      window.addEventListener('touchstart', onTouchStart, {
        capture: true,
      });

      window.addEventListener('touchmove', onTouchMove, {
        passive: false,
      });
    }
  };

  const unlockScroll = () => {
    if (!stylesheet?.current || typeof window === 'undefined' || typeof document === 'undefined') return;

    stylesheet.current.parentNode.removeChild(stylesheet.current);
    stylesheet.current = null;

    if (disableTouchEvents && isIosDevice()) {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    }
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

  return {
    scrollLocked,
    setScrollLocked,
    contentRef,
  };
}
