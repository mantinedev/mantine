import { useMemo } from 'react';
import { parseAsStringLiteral, throttle, useQueryStates } from 'nuqs';
import { presets } from '@/presets';
import { themeParsers, themeUrlKeys, type ThemeOverrides } from '@/preview';

const editorParsers = {
  preset: parseAsStringLiteral(presets.map((preset) => preset.id)).withDefault('riverline'),
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

  return { presetId: preset, overrides, setParams };
}
