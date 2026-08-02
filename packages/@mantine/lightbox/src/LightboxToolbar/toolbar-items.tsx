import React from 'react';
import type { ToolbarItem } from '../lightbox.types';

function IconEnterFullscreen() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M3 3h6v2H5v4H3V3zm12 0h6v6h-2V5h-4V3zM3 15h2v4h4v2H3v-6zm18 0v6h-6v-2h4v-4h2z" />
    </svg>
  );
}

function IconExitFullscreen() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M9 3v6H3V7h4V3h2zm6 0h2v4h4v2h-6V3zM3 15h6v6H7v-4H3v-2zm12 0h6v2h-4v4h-2v-6z" />
    </svg>
  );
}

function IconThumbnails() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-8 2h16v2H4v-2z" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7a1 1 0 0 0-1.4 1.4L10.6 12l-4.9 4.9a1 1 0 1 0 1.4 1.4L12 13.4l4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 12l4.9-4.9a1 1 0 0 0 0-1.4z" />
    </svg>
  );
}

export function createFullscreenToolbarItem(
  toggle: () => void,
  isFullscreen: boolean
): ToolbarItem {
  return {
    key: 'fullscreen',
    icon: isFullscreen ? <IconExitFullscreen /> : <IconEnterFullscreen />,
    label: isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen',
    onClick: toggle,
    position: 'right',
  };
}

export function createThumbnailsToolbarItem(toggle: () => void, visible: boolean): ToolbarItem {
  return {
    key: 'thumbnails',
    icon: <IconThumbnails />,
    label: visible ? 'Hide thumbnails' : 'Show thumbnails',
    onClick: toggle,
    position: 'left',
  };
}

const ALLOWED_DOWNLOAD_PROTOCOLS = ['http:', 'https:', 'blob:', 'data:'];

function parseDownloadUrl(src: string): URL | null {
  try {
    const url = new URL(src, window.location.href);
    return ALLOWED_DOWNLOAD_PROTOCOLS.includes(url.protocol) ? url : null;
  } catch {
    return null;
  }
}

let downloadInProgress = false;

function downloadFile(src: string) {
  const parsed = parseDownloadUrl(src);

  if (!parsed || downloadInProgress) {
    return;
  }

  downloadInProgress = true;

  fetch(src)
    .then((res) => res.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download =
        (parsed.protocol === 'data:' ? '' : parsed.pathname.split('/').pop()) || 'download';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    })
    .catch(() => {
      window.open(src, '_blank', 'noopener,noreferrer');
    })
    .finally(() => {
      downloadInProgress = false;
    });
}

export function createDownloadToolbarItem(src: string): ToolbarItem {
  return {
    key: 'download',
    icon: <IconDownload />,
    label: 'Download',
    onClick: () => downloadFile(src),
    position: 'right',
  };
}

export function createCloseToolbarItem(onClose: () => void): ToolbarItem {
  return {
    key: 'close',
    icon: <IconClose />,
    label: 'Close',
    onClick: onClose,
    position: 'right',
  };
}
