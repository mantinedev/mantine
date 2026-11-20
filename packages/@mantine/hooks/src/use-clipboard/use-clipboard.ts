import { useEffect, useRef, useState } from 'react';

export interface ClipboardRichValue {
  /** Plain text value, copied as `text/plain` */
  text: string;

  /** HTML value, copied as `text/html` */
  html?: string;
}

export type ClipboardValue = string | ClipboardRichValue;

export interface UseClipboardInput {
  /** Time in ms after which the copied state will reset, `2000` by default */
  timeout?: number;
}

export interface UseClipboardReturnValue {
  /** Function to copy value to clipboard, accepts a string, an object with `html` and `text` properties or a function that returns one of them */
  copy: (value: ClipboardValue | (() => ClipboardValue)) => void;

  /** Function to reset copied state and error */
  reset: () => void;

  /** Error if copying failed */
  error: Error | null;

  /** Boolean indicating if the value was copied successfully */
  copied: boolean;
}

function writeToClipboard(value: ClipboardValue): Promise<void> {
  if (typeof value !== 'object' || value === null) {
    return navigator.clipboard.writeText(value);
  }

  const canWriteRichContent =
    typeof value.html === 'string' &&
    typeof ClipboardItem !== 'undefined' &&
    typeof navigator.clipboard.write === 'function';

  if (!canWriteRichContent) {
    return navigator.clipboard.writeText(value.text);
  }

  return navigator.clipboard.write([
    new ClipboardItem({
      'text/html': new Blob([value.html!], { type: 'text/html' }),
      'text/plain': new Blob([value.text], { type: 'text/plain' }),
    }),
  ]);
}

export function useClipboard(options: UseClipboardInput = {}): UseClipboardReturnValue {
  const timeout = options.timeout ?? 2000;
  const [error, setError] = useState<Error | null>(null);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

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

  const copy = (value: ClipboardValue | (() => ClipboardValue)) => {
    if (!('clipboard' in navigator)) {
      setError(new Error('useClipboard: navigator.clipboard is not supported'));
      return;
    }

    let result: Promise<void>;
    try {
      result = writeToClipboard(typeof value === 'function' ? value() : value);
    } catch (err) {
      setError(err as Error);
      setCopied(false);
      return;
    }

    result
      .then(() => {
        setError(null);
        handleCopyResult(true);
      })
      .catch((err) => {
        setError(err);
        setCopied(false);
      });
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    window.clearTimeout(timeoutRef.current!);
  };

  return { copy, reset, error, copied };
}

export namespace useClipboard {
  export type Input = UseClipboardInput;
  export type ReturnValue = UseClipboardReturnValue;
  export type Value = ClipboardValue;
}
