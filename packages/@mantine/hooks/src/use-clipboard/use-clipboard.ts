import { useEffect, useRef, useState } from 'react';

export interface UseClipboardInput {
  /** Time in ms after which the copied state will reset, `2000` by default */
  timeout?: number;
}

export interface UseClipboardReturnValue {
  /** Function to copy value to clipboard */
  copy: (value: any) => void;

  /** Function to reset copied state and error */
  reset: () => void;

  /** Error if copying failed */
  error: Error | null;

  /** Boolean indicating if the value was copied successfully */
  copied: boolean;
}

export function useClipboard(options: UseClipboardInput = {}): UseClipboardReturnValue {
  const timeout = options.timeout ?? 2000;
  const [error, setError] = useState<Error | null>(null);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const copyId = useRef(0);

  useEffect(
    () => () => {
      copyId.current += 1;
      window.clearTimeout(timeoutRef.current!);
    },
    []
  );

  const handleCopyResult = (value: boolean) => {
    window.clearTimeout(timeoutRef.current!);
    timeoutRef.current = window.setTimeout(() => setCopied(false), timeout);
    setCopied(value);
  };

  const copy = (value: any) => {
    const id = ++copyId.current;
    if ('clipboard' in navigator) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          if (id !== copyId.current) {
            return;
          }
          setError(null);
          handleCopyResult(true);
        })
        .catch((err) => {
          if (id !== copyId.current) {
            return;
          }
          setError(err);
          setCopied(false);
        });
    } else {
      setError(new Error('useClipboard: navigator.clipboard is not supported'));
    }
  };

  const reset = () => {
    copyId.current += 1;
    setCopied(false);
    setError(null);
    window.clearTimeout(timeoutRef.current!);
  };

  return { copy, reset, error, copied };
}

export namespace useClipboard {
  export type Input = UseClipboardInput;
  export type ReturnValue = UseClipboardReturnValue;
}
