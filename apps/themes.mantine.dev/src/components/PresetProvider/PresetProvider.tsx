'use client';

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import {
  type CSSVariablesResolver,
  MantineProvider,
  type MantineProviderProps,
  type MantineThemeSurfaceValues,
  useMantineColorScheme,
} from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import {
  applyThemeOverrides,
  getGoogleFontsUrl,
  getOverrideShadows,
  getOverrideSurfaces,
  getPresetThemeInfo,
  type GoogleFont,
  loadGoogleFonts,
  loadThemeParams,
  SYSTEM_FONT,
  type ThemeOverrides,
  useStylesheets,
} from '@/preview';
import {
  embeddedColorSchemeManager,
  getEditorState,
  isEmbedded,
  postToEditor,
  subscribeToEditor,
} from './embedded-bridge';

const EMPTY_FONTS = new Map<string, GoogleFont>();

const SURFACE_VARIABLES = {
  page: '--mantine-color-surface-page',
  panel: '--mantine-color-surface-panel',
  panel2: '--mantine-color-surface-panel-2',
  sunken: '--mantine-color-surface-sunken',
  muted: '--mantine-color-surface-muted',
  input: '--mantine-color-surface-input',
};

const getServerSnapshot = () => null;
const getSearch = () => window.location.search;
const isConnected = () => getEditorState() !== null;

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

function useGoogleFonts(families: (string | null | undefined)[]) {
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

function measure(value: string) {
  const node = document.createElement('div');
  node.style.cssText = 'position:absolute;visibility:hidden;height:0;';
  node.style.width = value;
  document.body.appendChild(node);
  const width = node.getBoundingClientRect().width;
  node.remove();
  return width;
}

function useOverridesResolver(
  resolver: CSSVariablesResolver | undefined,
  overrides: ThemeOverrides | null
) {
  const surfacesKey = JSON.stringify([
    overrides?.surfacesLight ?? null,
    overrides?.surfacesDark ?? null,
  ]);
  const surfaces = useMemo(() => {
    const [surfacesLight, surfacesDark] = JSON.parse(surfacesKey) as [
      ThemeOverrides['surfacesLight'],
      ThemeOverrides['surfacesDark'],
    ];
    return getOverrideSurfaces({ surfacesLight, surfacesDark });
  }, [surfacesKey]);

  const shadows = getOverrideShadows(overrides?.shadows ?? null);

  return useMemo<CSSVariablesResolver | undefined>(() => {
    if (!shadows && !surfaces.light && !surfaces.dark) {
      return resolver;
    }

    const shadowVariables = Object.fromEntries(
      Object.entries(shadows ?? {}).map(([key, value]) => [`--mantine-shadow-${key}`, value])
    );

    return (theme) => {
      const result = resolver?.(theme) ?? { variables: {}, light: {}, dark: {} };
      const toVariables = (values: MantineThemeSurfaceValues | undefined) =>
        Object.fromEntries(
          Object.entries(values ?? {}).map(([key, value]) => [
            SURFACE_VARIABLES[key as keyof typeof SURFACE_VARIABLES],
            value ?? '',
          ])
        );

      return {
        variables: result.variables,
        light: { ...result.light, ...shadowVariables, ...toVariables(surfaces.light) },
        dark: { ...result.dark, ...shadowVariables, ...toVariables(surfaces.dark) },
      };
    };
  }, [resolver, surfaces, shadows]);
}

function PresetHotkeys() {
  const { toggleColorScheme } = useMantineColorScheme();

  useHotkeys([
    [
      'mod+J',
      () =>
        isEmbedded()
          ? postToEditor({ type: 'theme-editor:toggle-color-scheme' })
          : toggleColorScheme(),
    ],
  ]);

  return null;
}

export function PresetProvider({
  theme = {},
  colorSchemeManager,
  cssVariablesResolver,
  children,
  ...others
}: MantineProviderProps) {
  const overrides = useThemeOverrides();
  const fonts = useGoogleFonts([overrides?.font, overrides?.headingsFont, overrides?.monoFont]);
  const [embeddedManager] = useState(() => (isEmbedded() ? embeddedColorSchemeManager() : null));
  const resolver = useOverridesResolver(cssVariablesResolver, overrides);

  const resolvedTheme = useMemo(
    () => (overrides ? applyThemeOverrides(theme, overrides, fonts) : theme),
    [theme, overrides, fonts]
  );

  useStylesheets([getGoogleFontsUrl(Array.from(fonts.values()))]);

  const connected = useSyncExternalStore(subscribeToEditor, isConnected, getServerSnapshot);

  useEffect(() => {
    postToEditor({ type: 'theme-editor:ready', info: getPresetThemeInfo(theme, measure) });
  }, [theme, connected]);

  useEffect(() => {
    if (overrides) {
      postToEditor({ type: 'theme-editor:applied' });
    }
  }, [overrides]);

  return (
    <>
      <MantineProvider
        {...others}
        theme={resolvedTheme}
        cssVariablesResolver={resolver}
        colorSchemeManager={embeddedManager ?? colorSchemeManager}
      >
        <PresetHotkeys />
        {children}
      </MantineProvider>
    </>
  );
}
