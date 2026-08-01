import { useEffect, useRef, useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export interface UseClipboardInput {
  /** Time in ms after which the copied state will reset, `2000` by default */
  timeout?: number;
}

/** Value types accepted by the `copy` function returned from `useClipboard` */
export type UseClipboardCopyValue =
  | string
  | number
  | boolean
  | Blob
  | ClipboardItem
  | ClipboardItem[];

export interface UseClipboardReturnValue {
  /**
   * Copies value to the clipboard. Strings and other primitives are copied with
   * `navigator.clipboard.writeText`, `Blob`, `ClipboardItem` and `ClipboardItem[]`
   * values (for example images) are copied with `navigator.clipboard.write`.
   */
  copy: (value: UseClipboardCopyValue) => void;

  /** Function to reset copied state and error */
  reset: () => void;

  /** Error if copying failed */
  error: Error | null;

  /** Boolean indicating if the value was copied successfully */
  copied: boolean;

  /** `true` if the `navigator.clipboard.write` API (blobs and images) is available */
  supported: boolean;
}

function isClipboardItem(value: unknown): value is ClipboardItem {
  return typeof ClipboardItem !== 'undefined' && value instanceof ClipboardItem;
}

function createClipboardItems(value: Blob | ClipboardItem | ClipboardItem[]): ClipboardItem[] {
  if (Array.isArray(value)) {
    return value;
  }

  if (isClipboardItem(value)) {
    return [value];
  }

  return [new ClipboardItem({ [value.type]: value })];
}

export function useClipboard(options: UseClipboardInput = {}): UseClipboardReturnValue {
  const timeout = options.timeout ?? 2000;
  const [error, setError] = useState<Error | null>(null);
  const [copied, setCopied] = useState(false);
  const [supported, setSupported] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useIsomorphicEffect(() => {
    setSupported(
      typeof navigator !== 'undefined' &&
        !!navigator.clipboard &&
        typeof navigator.clipboard.write === 'function' &&
        typeof window !== 'undefined' &&
        'ClipboardItem' in window
    );
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(timeoutRef.current!);
    },
    []
  );

  const handleCopyResult = (value: boolean) => {
    window.clearTimeout(timeoutRef.current!);
    timeoutRef.current = window.setTimeout(() => setCopied(false), timeout);
    setCopied(value);
  };

  const copy = (value: UseClipboardCopyValue) => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      setError(new Error('useClipboard: navigator.clipboard is not supported'));
      return;
    }

    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      navigator.clipboard
        .writeText(String(value))
        .then(() => {
          setError(null);
          handleCopyResult(true);
        })
        .catch((err) => setError(err));
      return;
    }

    if (typeof navigator.clipboard.write !== 'function' || typeof ClipboardItem === 'undefined') {
      setError(new Error('useClipboard: navigator.clipboard.write is not supported'));
      return;
    }

    try {
      const items = createClipboardItems(value);
      navigator.clipboard
        .write(items)
        .then(() => {
          setError(null);
          handleCopyResult(true);
        })
        .catch((err) => setError(err));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('useClipboard: failed to copy value'));
    }
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    window.clearTimeout(timeoutRef.current!);
  };

  return { copy, reset, error, copied, supported };
}

export namespace useClipboard {
  export type Input = UseClipboardInput;
  export type ReturnValue = UseClipboardReturnValue;
  export type CopyValue = UseClipboardCopyValue;
}
