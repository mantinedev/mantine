import { useRef, useState } from 'react';

import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { usePreventScroll } from './use-prevent-scroll';
import { getLockStyles } from './utils/get-lock-styles';
import { injectStyles } from './utils/inject-style-tag';
import { insertStyleTag } from './utils/insert-style-tag';
import { makeStyleTag } from './utils/make-style-tag';

interface useScrollLockOptions {
  disableBodyPadding: boolean;
}

export function useScrollLock(
  lock: boolean = false,
  options: useScrollLockOptions = { disableBodyPadding: false }
) {
  const styleTagRef = useRef<HTMLStyleElement | null>(null);
  const [scrollLocked, setScrollLocked] = useState(lock);

  const { disableBodyPadding } = options;

  const applyLockStyles = () => {
    const styles = getLockStyles({ disableBodyPadding });

    /**
     * By applying styles via style tag we dont care about previous styles due
     * to inheritance when scroll gets unlocked we delete that style tag.
     */
    const styleTag = makeStyleTag();
    styleTagRef.current = styleTag;

    injectStyles(styleTag, styles);
    insertStyleTag(styleTag);
  };

  const removeLockStyles = () => {
    if (!styleTagRef?.current) return;

    styleTagRef.current.parentNode?.removeChild(styleTagRef.current);
    styleTagRef.current = null;
  };

  // Mainly used for backwards compatibility
  useIsomorphicEffect(() => {
    if (scrollLocked) {
      applyLockStyles();
    } else {
      removeLockStyles();
    }

    return removeLockStyles;
  }, [scrollLocked]);

  // The actual scroll prevention code
  usePreventScroll({ isDisabled: !scrollLocked });

  return [scrollLocked, setScrollLocked] as const;
}
