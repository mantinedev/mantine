'use client';

import { useCallback, useState } from 'react';
import {
  DEFAULT_OVERRIDES,
  type PresetThemeInfo,
  type PreviewColorScheme,
  type ThemeOverrides,
} from '@/preview';
import { EditorSidebar } from '../EditorSidebar';
import { PresetPreview } from '../PresetPreview';
import { PreviewToolbar } from '../PreviewToolbar';
import { Shell } from '../Shell';
import classes from './ThemeEditor.module.css';

export function ThemeEditor() {
  const [presetId, setPresetId] = useState('riverline');
  const [colorScheme, setColorScheme] = useState<PreviewColorScheme>('light');
  const [overrides, setOverrides] = useState<ThemeOverrides>(DEFAULT_OVERRIDES);
  const [info, setInfo] = useState<PresetThemeInfo | null>(null);

  const handleReady = useCallback((presetInfo: PresetThemeInfo) => {
    setInfo(presetInfo);
    setOverrides((current) =>
      current.primaryColor &&
      !presetInfo.swatches.some((swatch) => swatch.name === current.primaryColor)
        ? { ...current, primaryColor: null }
        : current
    );
  }, []);

  const handleOverridesChange = (values: Partial<ThemeOverrides>) =>
    setOverrides((current) => ({ ...current, ...values }));

  return (
    <Shell
      sidebar={
        <EditorSidebar
          info={info}
          overrides={overrides}
          onChange={handleOverridesChange}
          onReset={() => setOverrides(DEFAULT_OVERRIDES)}
        />
      }
    >
      <div className={classes.content}>
        <PreviewToolbar
          presetId={presetId}
          onPresetChange={setPresetId}
          colorScheme={colorScheme}
          onColorSchemeChange={setColorScheme}
        />
        <PresetPreview
          presetId={presetId}
          overrides={overrides}
          colorScheme={colorScheme}
          onReady={handleReady}
          onColorSchemeChange={setColorScheme}
        />
      </div>
    </Shell>
  );
}
