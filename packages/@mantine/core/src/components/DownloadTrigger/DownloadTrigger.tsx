import { useRef, useState } from 'react';
import { useProps } from '../../core';

/** Content that `DownloadTrigger` downloads: a string, `Blob`, `File` or a function that returns/resolves to a `Blob` or string */
export type DownloadTriggerData =
  | string
  | Blob
  | File
  | (() => Promise<Blob | string> | Blob | string);

export interface DownloadTriggerPayload {
  /** Function that must be called to trigger the download */
  download: () => void;

  /** `true` while an async `data` function is resolving */
  loading: boolean;
}

export interface DownloadTriggerProps {
  /** Children render function, provides an object with `download` handler and `loading` state */
  children: (payload: DownloadTriggerPayload) => React.ReactNode;

  /** Content to download: a string, `Blob`, `File` or a function that returns/resolves to a `Blob` or string. The function is called when the download is triggered, which is useful for data that must be fetched or generated lazily. */
  data: DownloadTriggerData;

  /** Suggested name of the downloaded file, set as the `download` attribute of the underlying anchor. Defaults to `file.name` when `data` is (or resolves to) a `File` */
  fileName?: string;

  /** MIME type used to create a `Blob` when `data` is a string, for example, `'text/csv'` or `'application/json'` */
  mimeType?: string;

  /** Called when the download is dispatched to the browser, not when the browser finishes saving the file */
  onDownloadComplete?: () => void;

  /** Called when resolving `data` or dispatching the download fails. If not set, the error is rethrown */
  onError?: (error: unknown) => void;
}

function dispatchDownload(content: Blob | string, fileName?: string, mimeType?: string) {
  const blob = typeof content === 'string' ? new Blob([content], { type: mimeType }) : content;
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName ?? (blob instanceof File ? blob.name : '');
  anchor.rel = 'noopener';
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function DownloadTrigger(props: DownloadTriggerProps) {
  const { children, data, fileName, mimeType, onDownloadComplete, onError } = useProps(
    'DownloadTrigger',
    null,
    props
  );

  const [loading, setLoading] = useState(false);
  const isResolving = useRef(false);

  const reportError = (error: unknown) => {
    if (!onError) {
      throw error;
    }

    onError(error);
  };

  const downloadContent = (content: Blob | string) => {
    try {
      dispatchDownload(content, fileName, mimeType);
    } catch (error) {
      reportError(error);
      return;
    }

    onDownloadComplete?.();
  };

  const download = () => {
    if (isResolving.current) {
      return;
    }

    if (typeof data !== 'function') {
      downloadContent(data);
      return;
    }

    isResolving.current = true;
    setLoading(true);
    Promise.resolve()
      .then(() => data())
      .then(downloadContent, reportError)
      .finally(() => {
        isResolving.current = false;
        setLoading(false);
      });
  };

  return <>{children({ download, loading })}</>;
}

DownloadTrigger.displayName = '@mantine/core/DownloadTrigger';

export namespace DownloadTrigger {
  export type Props = DownloadTriggerProps;
}
