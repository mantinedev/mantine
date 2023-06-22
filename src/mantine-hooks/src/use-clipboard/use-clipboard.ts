/* eslint-disable */
import { useState } from 'react';

export function useClipboard({ timeout = 2000 } = {}) {
  const [error, setError] = useState<Error>(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState(null);

  const handleCopyResult = (value: boolean) => {
    clearTimeout(copyTimeout);
    setCopyTimeout(setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };

  const copy = async (valueToCopy: any) => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      handleCopyResult(true);
    } catch (errorOne) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = valueToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        handleCopyResult(true);
      } catch (errorTwo) {
        setError(errorTwo);
      }
    }
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    clearTimeout(copyTimeout);
  };

  return { copy, reset, error, copied };
}
