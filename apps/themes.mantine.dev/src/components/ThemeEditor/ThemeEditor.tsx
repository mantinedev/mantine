'use client';

import { Suspense, useState } from 'react';
import { DEFAULT_PRESET_INFO, type PresetThemeInfo } from '@/preview';
import { EditorSidebar } from '../EditorSidebar';
import { PresetPreview } from '../PresetPreview';
import { Shell } from '../Shell';
import { PresetMemory } from './PresetMemory';
import { type ThemeDraft, ThemeDraftContext } from './ThemeDraft.context';

export function ThemeEditor() {
  const [info, setInfo] = useState<PresetThemeInfo | null>(null);
  const [draft, setDraft] = useState<ThemeDraft | null>(null);

  return (
    <ThemeDraftContext value={{ draft, setDraft }}>
      <Shell
        sidebar={
          <Suspense>
            <EditorSidebar info={info ?? DEFAULT_PRESET_INFO} loading={info === null} />
          </Suspense>
        }
      >
        <Suspense>
          <PresetMemory />
          <PresetPreview onReady={setInfo} />
        </Suspense>
      </Shell>
    </ThemeDraftContext>
  );
}
