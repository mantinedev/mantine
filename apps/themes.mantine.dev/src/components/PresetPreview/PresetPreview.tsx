'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@mantine/core';
import {
  type EditorMessage,
  isPreviewMessage,
  type PresetThemeInfo,
  type PreviewColorScheme,
  type ThemeOverrides,
} from '@/preview';
import classes from './PresetPreview.module.css';

interface PresetPreviewProps {
  presetId: string;
  overrides: ThemeOverrides;
  colorScheme: PreviewColorScheme;
  onReady: (info: PresetThemeInfo) => void;
  onColorSchemeChange: (colorScheme: PreviewColorScheme) => void;
}

export function PresetPreview({
  presetId,
  overrides,
  colorScheme,
  onReady,
  onColorSchemeChange,
}: PresetPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [frame, setFrame] = useState({ presetId, colorScheme });
  const [applied, setApplied] = useState(false);

  if (frame.presetId !== presetId) {
    setFrame({ presetId, colorScheme });
    setApplied(false);
  }

  useEffect(() => {
    const postState = () => {
      const message: EditorMessage = { type: 'theme-editor:state', overrides, colorScheme };
      iframeRef.current?.contentWindow?.postMessage(message, window.location.origin);
    };

    const handleMessage = (event: MessageEvent) => {
      if (
        event.source !== iframeRef.current?.contentWindow ||
        event.origin !== window.location.origin ||
        !isPreviewMessage(event.data)
      ) {
        return;
      }

      if (event.data.type === 'theme-editor:ready') {
        onReady(event.data.info);
        postState();
      } else if (event.data.type === 'theme-editor:applied') {
        setApplied(true);
      } else {
        onColorSchemeChange(event.data.colorScheme);
      }
    };

    postState();
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [overrides, colorScheme, onReady, onColorSchemeChange]);

  return (
    <div className={classes.root}>
      <iframe
        key={frame.presetId}
        ref={iframeRef}
        title="Theme preview"
        src={`/${frame.presetId}/?embed&scheme=${frame.colorScheme}`}
        className={classes.iframe}
        data-applied={applied || undefined}
      />
      {!applied && <Loader className={classes.loader} aria-label="Loading preview" />}
    </div>
  );
}
