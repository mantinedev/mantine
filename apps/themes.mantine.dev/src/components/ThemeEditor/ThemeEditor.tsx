'use client';

import { Suspense, useState } from 'react';
import type { PresetThemeInfo } from '@/preview';
import { EditorSidebar } from '../EditorSidebar';
import { PresetPreview } from '../PresetPreview';
import { Shell } from '../Shell';

export function ThemeEditor() {
  const [info, setInfo] = useState<PresetThemeInfo | null>(null);

  return (
    <Shell
      sidebar={
        <Suspense>
          <EditorSidebar info={info} />
        </Suspense>
      }
    >
      <Suspense>
        <PresetPreview onReady={setInfo} />
      </Suspense>
    </Shell>
  );
}
