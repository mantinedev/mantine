'use client';

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { MantineProvider, type MantineProviderProps } from '@mantine/core';
import {
  applyThemeOverrides,
  getGoogleFontsUrl,
  getPresetThemeInfo,
  type GoogleFont,
  loadGoogleFonts,
  loadThemeParams,
  SYSTEM_FONT,
} from '@/preview';
import {
  embeddedColorSchemeManager,
  getEditorState,
  isEmbedded,
  postToEditor,
  subscribeToEditor,
} from './embedded-bridge';

const EMPTY_FONTS = new Map<string, GoogleFont>();
const getServerSnapshot = () => null;
const getSearch = () => window.location.search;

function subscribeToLocation(callback: () => void) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}

function useThemeOverrides() {
  const editorState = useSyncExternalStore(subscribeToEditor, getEditorState, getServerSnapshot);
  const search = useSyncExternalStore(subscribeToLocation, getSearch, getServerSnapshot);
  const urlOverrides = useMemo(() => (search === null ? null : loadThemeParams(search)), [search]);
  return editorState?.overrides ?? urlOverrides;
}

function useGoogleFonts(families: (string | null)[]) {
  const [fonts, setFonts] = useState(EMPTY_FONTS);
  const key = families.filter((family) => family && family !== SYSTEM_FONT).join('|');

  useEffect(() => {
    if (!key) {
      return undefined;
    }

    let active = true;
    loadGoogleFonts().then((catalog) => {
      if (active) {
        const names = key.split('|');
        setFonts(
          new Map(
            catalog.filter((font) => names.includes(font.family)).map((font) => [font.family, font])
          )
        );
      }
    });
    return () => {
      active = false;
    };
  }, [key]);

  return key ? fonts : EMPTY_FONTS;
}

export function PresetProvider({
  theme = {},
  colorSchemeManager,
  ...others
}: MantineProviderProps) {
  const overrides = useThemeOverrides();
  const fonts = useGoogleFonts([overrides?.font ?? null, overrides?.headingsFont ?? null]);
  const [embeddedManager] = useState(() => (isEmbedded() ? embeddedColorSchemeManager() : null));

  const resolvedTheme = useMemo(
    () => (overrides ? applyThemeOverrides(theme, overrides, fonts) : theme),
    [theme, overrides, fonts]
  );

  const fontsUrl = getGoogleFontsUrl(Array.from(fonts.values()));

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
