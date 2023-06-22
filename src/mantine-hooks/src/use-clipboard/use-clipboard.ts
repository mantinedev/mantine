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
    const fallbackClipboard = () => {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = valueToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        handleCopyResult(true);
      } catch (error) {
        setError(error);
      }
    };

    if ('clipboard' in navigator) {
      try {
        await navigator.clipboard.writeText(valueToCopy);
        handleCopyResult(true);
      } catch {
        fallbackClipboard();
      }
    } else {
      setError(new Error('useClipboard: navigator.clipboard is not supported'));
    }
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    clearTimeout(copyTimeout);
  };

  return { copy, reset, error, copied };
}
