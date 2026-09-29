import { useEffect, useMemo, useRef } from 'react';

const FOCUSABLE_SELECTOR =
  'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])';

function isFocusable(element: HTMLElement | null): element is HTMLElement {
  return (
    !!element &&
    element.tabIndex >= 0 &&
    !(element as HTMLButtonElement).disabled &&
    element.getAttribute('type') !== 'hidden'
  );
}

export function hasFocusableAncestor(element: Element | null) {
  return !!element?.closest(FOCUSABLE_SELECTOR);
}

function getFirstFocusable(root: HTMLElement | null) {
  if (!root) {
    return null;
  }

  return (
    Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).find(isFocusable) ?? null
  );
}

interface UseEditableFocusInput {
  editing: boolean;
  selectOnFocus: boolean;
  finalFocusRef: React.RefObject<HTMLElement | null> | undefined;
}

export interface EditableFocus {
  rootRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
  previewRef: React.RefObject<HTMLDivElement | null>;
  markBlurExit: () => void;
  consumeReturningFocus: () => boolean;
}

export function useEditableFocus({
  editing,
  selectOnFocus,
  finalFocusRef,
}: UseEditableFocusInput): EditableFocus {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const returningFocusRef = useRef(false);
  const exitViaBlurRef = useRef(false);
  const previousEditingRef = useRef(false);

  useEffect(() => {
    const wasEditing = previousEditingRef.current;
    previousEditingRef.current = editing;

    if (editing === wasEditing) {
      return;
    }

    if (editing) {
      exitViaBlurRef.current = false;
      const input = inputRef.current;
      if (input) {
        input.focus();
        selectOnFocus && input.select();
      }
      return;
    }

    if (exitViaBlurRef.current) {
      exitViaBlurRef.current = false;
      return;
    }

    const preview = previewRef.current;
    const target =
      finalFocusRef?.current ??
      (isFocusable(preview) ? preview : getFirstFocusable(rootRef.current));

    if (target) {
      returningFocusRef.current = target === preview;
      target.focus();
    }
  }, [editing]);

  return useMemo(
    () => ({
      rootRef,
      inputRef,
      previewRef,
      markBlurExit: () => {
        exitViaBlurRef.current = true;
      },
      consumeReturningFocus: () => {
        const returning = returningFocusRef.current;
        returningFocusRef.current = false;
        return returning;
      },
    }),
    []
  );
}
