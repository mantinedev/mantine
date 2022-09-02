import { useState } from 'react';
import copy from 'copy-to-clipboard';

export function useClipboard({ timeout = 2000 } = {}) {
  const [error, setError] = useState<Error>(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState(null);

  const handleCopyResult = (value: boolean) => {
    clearTimeout(copyTimeout);
    setCopyTimeout(setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };

  const handleCopy = (valueToCopy: any) => {
    copy(valueToCopy);
    handleCopyResult(true);
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    clearTimeout(copyTimeout);
  };

  return { copy: handleCopy, reset, error, copied };
}
