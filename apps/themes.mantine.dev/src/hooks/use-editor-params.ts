import { useCallback, useMemo } from 'react';
import { parseAsStringLiteral, throttle, useQueryStates } from 'nuqs';
import { presets } from '@/presets';
import { themeParsers, themeUrlKeys, type ThemeOverrides } from '@/preview';
import { DEFAULT_PRESET_VALUES, readPresetValues } from './preset-storage';

const editorParsers = {
  preset: parseAsStringLiteral(presets.map((preset) => preset.id)).withDefault('generic'),
  ...themeParsers,
};

export function useEditorParams() {
  const [params, setParams] = useQueryStates(editorParsers, {
    urlKeys: themeUrlKeys,
    history: 'replace',
    limitUrlUpdates: throttle(200),
  });

  const { preset, ...rest } = params;
  const key = JSON.stringify(rest);
  const overrides = useMemo(() => JSON.parse(key) as ThemeOverrides, [key]);

  const selectPreset = useCallback(
    (presetId: string) => setParams({ preset: presetId, ...readPresetValues(presetId) }),
    [setParams]
  );

  const resetPreset = useCallback(() => setParams(DEFAULT_PRESET_VALUES), [setParams]);

  return { presetId: preset, overrides, setParams, selectPreset, resetPreset };
}
