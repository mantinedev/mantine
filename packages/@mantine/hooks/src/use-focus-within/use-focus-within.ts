import { useCallback, useEffect, useRef, useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { useCallbackRef } from '../utils';

function containsRelatedTarget(event: FocusEvent) {
  if (event.currentTarget instanceof HTMLElement && event.relatedTarget instanceof Node) {
    return event.currentTarget.contains(event.relatedTarget);
  }

  return false;
}

function containsFocus(node: HTMLElement) {
  let root = node.getRootNode() as Document | ShadowRoot;
  while (!root.activeElement && 'host' in root) {
    root = root.host.getRootNode() as Document | ShadowRoot;
  }
  let activeElement = root.activeElement;
  if (activeElement === node.ownerDocument.body && !activeElement.matches(':focus')) {
    return false;
  }

  while (activeElement) {
    if (node.contains(activeElement)) {
      return true;
    }
    activeElement =
      activeElement.assignedSlot ||
      activeElement.parentElement ||
      (activeElement.getRootNode() as ShadowRoot).host ||
      null;
  }

  return false;
}

export interface UseFocusWithinOptions {
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

export interface UseFocusWithinReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  focused: boolean;
}

export function useFocusWithin<T extends HTMLElement = any>({
  onBlur,
  onFocus,
}: UseFocusWithinOptions = {}): UseFocusWithinReturnValue<T> {
  const [focused, setFocused] = useState(false);
  const focusedRef = useRef(false);
  const previousNode = useRef<T | null>(null);
  const detachPending = useRef(false);

  const onFocusRef = useCallbackRef(onFocus);
  const onBlurRef = useCallbackRef(onBlur);

  const _setFocused = useCallback((value: boolean) => {
    setFocused(value);
    focusedRef.current = value;
  }, []);

  const handleFocusIn = useCallback((event: FocusEvent) => {
    if (!focusedRef.current) {
      _setFocused(true);
      onFocusRef(event);
    }
  }, []);

  const handleFocusOut = useCallback((event: FocusEvent) => {
    if (focusedRef.current && !containsRelatedTarget(event)) {
      _setFocused(false);
      onBlurRef(event);
    }
  }, []);

  const cleanup = useCallback(() => {
    if (previousNode.current) {
      previousNode.current.removeEventListener('focusin', handleFocusIn);
      previousNode.current.removeEventListener('focusout', handleFocusOut);
      previousNode.current = null;
    }
  }, [handleFocusIn, handleFocusOut]);

  const finishDetach = useCallback(() => {
    if (detachPending.current && previousNode.current) {
      cleanup();
      _setFocused(false);
    }
  }, [cleanup, _setFocused]);

  const callbackRef: React.RefCallback<T | null> = useCallback(
    (node) => {
      detachPending.current = node === null;
      if (!node) {
        queueMicrotask(finishDetach);
        return;
      }

      if (previousNode.current === node) {
        return;
      }

      if (previousNode.current) {
        cleanup();
      }

      _setFocused(containsFocus(node));

      node.addEventListener('focusin', handleFocusIn);
      node.addEventListener('focusout', handleFocusOut);
      previousNode.current = node;
    },
    [cleanup, finishDetach, handleFocusIn, handleFocusOut]
  );

  useIsomorphicEffect(finishDetach);

  useEffect(() => cleanup, [cleanup]);

  return { ref: callbackRef, focused };
}

export namespace useFocusWithin {
  export type Options = UseFocusWithinOptions;
  export type ReturnValue<T extends HTMLElement> = UseFocusWithinReturnValue<T>;
}
