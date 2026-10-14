import { RefObject, useEffect } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], area[href], button, input, select, textarea, iframe, summary, audio[controls], video[controls], [tabindex], [contenteditable]:not([contenteditable="false"])';

export function useDisableCopiesFocus(contentRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const content = contentRef.current;
    if (!content) {
      return undefined;
    }

    const disableCopiesFocus = () => {
      content.querySelectorAll(':scope > [aria-hidden]').forEach((group) => {
        group.querySelectorAll(FOCUSABLE_SELECTOR).forEach((element) => {
          if (element.getAttribute('tabindex') !== '-1') {
            element.setAttribute('tabindex', '-1');
          }
        });
      });
    };

    disableCopiesFocus();

    if (typeof MutationObserver === 'undefined') {
      return undefined;
    }

    const observer = new MutationObserver(disableCopiesFocus);
    observer.observe(content, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['tabindex', 'href', 'contenteditable', 'controls'],
    });

    return () => observer.disconnect();
  }, []);
}
