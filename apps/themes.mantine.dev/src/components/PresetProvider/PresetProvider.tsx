'use client';

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { MantineProvider, type MantineProviderProps } from '@mantine/core';
import { applyThemeOverrides, getFontsUrl, getPresetThemeInfo } from '@/preview';
import {
  embeddedColorSchemeManager,
  getEditorState,
  isEmbedded,
  postToEditor,
  subscribeToEditor,
} from './embedded-bridge';

const getServerState = () => null;

export function PresetProvider({
  theme = {},
  colorSchemeManager,
  ...others
}: MantineProviderProps) {
  const editorState = useSyncExternalStore(subscribeToEditor, getEditorState, getServerState);
  const overrides = editorState?.overrides ?? null;
  const [embeddedManager] = useState(() => (isEmbedded() ? embeddedColorSchemeManager() : null));

  const resolvedTheme = useMemo(
    () => (overrides ? applyThemeOverrides(theme, overrides) : theme),
    [theme, overrides]
  );

  const fontsUrl = overrides
    ? getFontsUrl([overrides.fontFamily, overrides.headingsFontFamily])
    : null;

  useEffect(() => {
    postToEditor({ type: 'theme-editor:ready', info: getPresetThemeInfo(theme) });
  }, [theme]);

  useEffect(() => {
    if (overrides) {
      postToEditor({ type: 'theme-editor:applied' });
    }
  }, [overrides]);

  return (
    <>
      {fontsUrl && <link rel="stylesheet" href={fontsUrl} precedence="default" />}
      <MantineProvider
        {...others}
        theme={resolvedTheme}
        colorSchemeManager={embeddedManager ?? colorSchemeManager}
      />
    </>
  );
}
