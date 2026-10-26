'use client';

import { useEffect, useRef, useState } from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import {
  ActionIcon,
  Loader,
  Select,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useEditorParams } from '@/hooks/use-editor-params';
import { type PresetCategory, presets } from '@/presets';
import {
  type EditorMessage,
  getPresetUrl,
  isPreviewMessage,
  type PresetThemeInfo,
  type ThemeOverrides,
} from '@/preview';
import classes from './PresetPreview.module.css';

const CATEGORIES: PresetCategory[] = ['Tools', 'Content', 'Marketing', 'Scheduling', 'Chat', 'AI'];

const presetOptions = CATEGORIES.map((category) => ({
  group: category,
  items: presets
    .filter((preset) => preset.category === category)
    .map((preset) => ({ value: preset.id, label: `${preset.label}: ${preset.description}` })),
}));

function getFrameUrl(presetId: string, overrides: ThemeOverrides) {
  const url = getPresetUrl(presetId, overrides);
  return `${url}${url.includes('?') ? '&' : '?'}embed`;
}

interface PresetPreviewProps {
  onReady: (info: PresetThemeInfo) => void;
}

export function PresetPreview({ onReady }: PresetPreviewProps) {
  const { presetId, overrides, setParams } = useEditorParams();
  const { setColorScheme } = useMantineColorScheme();
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
      } else {
        setColorScheme(message.colorScheme);
      }
    };

    postState();
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [overrides, colorScheme, onReady, setParams, setColorScheme]);

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Select
          aria-label="Preview page"
          data={presetOptions}
          value={presetId}
          onChange={(value) => value && setParams({ preset: value as typeof presetId })}
          allowDeselect={false}
          maxDropdownHeight={420}
          comboboxProps={{ floatingStrategy: 'fixed' }}
          className={classes.select}
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
