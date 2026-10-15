const ALLOWED_DOWNLOAD_PROTOCOLS = ['http:', 'https:', 'blob:', 'data:'];

function parseDownloadUrl(src: string): URL | null {
  try {
    const url = new URL(src, window.location.href);
    return ALLOWED_DOWNLOAD_PROTOCOLS.includes(url.protocol) ? url : null;
  } catch {
    return null;
  }
}

const downloadsInProgress = new Set<string>();

function getDownloadFileName(parsed: URL) {
  if (parsed.protocol === 'data:') {
    return 'download';
  }

  const lastSegment = parsed.pathname.split('/').pop() || '';

  try {
    return decodeURIComponent(lastSegment) || 'download';
  } catch {
    return lastSegment || 'download';
  }
}

function openInNewTab(src: string) {
  const link = document.createElement('a');
  link.href = src;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function downloadFile(src: string) {
  const parsed = parseDownloadUrl(src);

  if (!parsed || downloadsInProgress.has(src)) {
    return;
  }

  const isCrossOrigin =
    (parsed.protocol === 'http:' || parsed.protocol === 'https:') &&
    parsed.origin !== window.location.origin;

  if (isCrossOrigin) {
    openInNewTab(src);
    return;
  }

  downloadsInProgress.add(src);

  fetch(src)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to download ${src}: ${res.status}`);
      }

      return res.blob();
    })
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = getDownloadFileName(parsed);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    })
    .catch(() => {
      openInNewTab(src);
    })
    .finally(() => {
      downloadsInProgress.delete(src);
    });
}
