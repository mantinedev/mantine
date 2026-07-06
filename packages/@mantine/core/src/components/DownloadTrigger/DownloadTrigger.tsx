import { useRef, useState } from 'react';
import { useProps } from '../../core';

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

  /** Suggested name of the downloaded file, set as the `download` attribute of the underlying anchor */
  fileName?: string;

  /** MIME type used to create a `Blob` when `data` is a string, for example, `'text/csv'` or `'application/json'` */
  mimeType?: string;

  /** Called after the download has been dispatched */
  onDownloadComplete?: () => void;

  /** Called when `data` is a function and it throws or rejects */
  onError?: (error: unknown) => void;
}

function dispatchDownload(payload: Blob | string, fileName?: string, mimeType?: string) {
  const blob = typeof payload === 'string' ? new Blob([payload], { type: mimeType }) : payload;
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName ?? '';
  anchor.rel = 'noopener';
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

export function DownloadTrigger(props: DownloadTriggerProps) {
  const { children, data, fileName, mimeType, onDownloadComplete, onError } = useProps(
    'DownloadTrigger',
    null,
    props
  );

  const [loading, setLoading] = useState(false);
  const isResolving = useRef(false);

  const download = () => {
    if (isResolving.current) {
      return;
    }

    if (typeof data === 'function') {
      isResolving.current = true;
      setLoading(true);
      Promise.resolve()
        .then(() => data())
        .then((resolved) => {
          dispatchDownload(resolved, fileName, mimeType);
          onDownloadComplete?.();
        })
        .catch((error) => {
          onError?.(error);
        })
        .finally(() => {
          isResolving.current = false;
          setLoading(false);
        });
    } else {
      try {
        dispatchDownload(data, fileName, mimeType);
        onDownloadComplete?.();
      } catch (error) {
        onError?.(error);
      }
    }
  };

  return <>{children({ download, loading })}</>;
}

DownloadTrigger.displayName = '@mantine/core/DownloadTrigger';

export namespace DownloadTrigger {
  export type Props = DownloadTriggerProps;
}
