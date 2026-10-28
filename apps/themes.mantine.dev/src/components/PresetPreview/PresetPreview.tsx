'use client';

import { useEffect, useRef, useState } from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import {
  ActionIcon,
  Burger,
  Loader,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useEditorParams } from '@/hooks/use-editor-params';
import {
  type EditorMessage,
  getPresetUrl,
  isPreviewMessage,
  type PresetThemeInfo,
  type ThemeOverrides,
} from '@/preview';
import { PresetPicker } from '../PresetPicker';
import { useShell } from '../Shell';
import classes from './PresetPreview.module.css';

function getFrameUrl(presetId: string, overrides: ThemeOverrides) {
  const url = getPresetUrl(presetId, overrides);
  return `${url}${url.includes('?') ? '&' : '?'}embed`;
}

interface PresetPreviewProps {
  onReady: (info: PresetThemeInfo) => void;
}

export function PresetPreview({ onReady }: PresetPreviewProps) {
  const { presetId, overrides, setParams } = useEditorParams();
  const { setColorScheme, toggleColorScheme } = useMantineColorScheme();
  const { navbarOpened, toggleNavbar } = useShell();
  const colorScheme = useComputedColorScheme('light');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [frame, setFrame] = useState(() => ({
    presetId,
    src: getFrameUrl(presetId, overrides),
  }));
  const [applied, setApplied] = useState(false);
  const [height, setHeight] = useState<number | null>(null);

  if (frame.presetId !== presetId) {
    setFrame({ presetId, src: getFrameUrl(presetId, overrides) });
    setApplied(false);
    setHeight(null);
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

      const message = event.data;
      if (message.type === 'theme-editor:ready') {
        onReady(message.info);
        if (
          overrides.primaryColor &&
          !message.info.swatches.some((swatch) => swatch.name === overrides.primaryColor)
        ) {
          setParams({ primaryColor: null });
        }
        postState();
      } else if (message.type === 'theme-editor:applied') {
        setApplied(true);
      } else if (message.type === 'theme-editor:resize') {
        setHeight(message.height);
      } else if (message.type === 'theme-editor:toggle-color-scheme') {
        toggleColorScheme();
      } else {
        setColorScheme(message.colorScheme);
      }
    };

    postState();
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [overrides, colorScheme, onReady, setParams, setColorScheme, toggleColorScheme]);

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Burger
          opened={navbarOpened}
          onClick={toggleNavbar}
          hiddenFrom="md"
          size="sm"
          aria-label="Open theme controls"
        />
        <PresetPicker
          value={presetId}
          onChange={(value) => setParams({ preset: value as typeof presetId })}
        />
        <Tooltip label="Open page in a new tab" floatingStrategy="fixed">
          <ActionIcon
            variant="default"
            size="input-sm"
            component="a"
            href={getPresetUrl(presetId, overrides)}
            target="_blank"
            aria-label="Open page in a new tab"
          >
            <IconExternalLink size={18} />
          </ActionIcon>
        </Tooltip>
      </div>

      <div className={classes.frame}>
        <iframe
          key={frame.presetId}
          ref={iframeRef}
          title="Theme preview"
          src={frame.src}
          className={classes.iframe}
          style={height === null ? undefined : { height }}
          data-applied={applied || undefined}
        />
        {!applied && <Loader className={classes.loader} aria-label="Loading preview" />}
      </div>
    </div>
  );
}
