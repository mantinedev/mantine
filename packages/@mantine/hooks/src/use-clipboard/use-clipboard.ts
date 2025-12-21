import { useState } from 'react';

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

export function useClipboard(
  options: UseClipboardInput = { timeout: 2000 }
): UseClipboardReturnValue {
  const [error, setError] = useState<Error | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState<number | null>(null);

  const handleCopyResult = (value: boolean) => {
    window.clearTimeout(copyTimeout!);
    setCopyTimeout(window.setTimeout(() => setCopied(false), options.timeout));
    setCopied(value);
  };

  const copy = (value: any) => {
    if ('clipboard' in navigator) {
      navigator.clipboard
        .writeText(value)
        .then(() => handleCopyResult(true))
        .catch((err) => setError(err));
    } else {
      setError(new Error('useClipboard: navigator.clipboard is not supported'));
    }
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    window.clearTimeout(copyTimeout!);
  };

  return { copy, reset, error, copied };
}

export namespace useClipboard {
  export type Input = UseClipboardInput;
  export type ReturnValue = UseClipboardReturnValue;
}
