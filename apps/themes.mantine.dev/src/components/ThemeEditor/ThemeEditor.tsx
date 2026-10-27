'use client';

import { Suspense, useState } from 'react';
import type { PresetSurfaces, PresetThemeInfo } from '@/preview';
import { EditorSidebar } from '../EditorSidebar';
import { PresetPreview } from '../PresetPreview';
import { Shell } from '../Shell';

export function ThemeEditor() {
  const [info, setInfo] = useState<PresetThemeInfo | null>(null);
  const [surfaces, setSurfaces] = useState<PresetSurfaces | null>(null);

  return (
    <Shell
      sidebar={
        <Suspense>
          <EditorSidebar info={info} surfaces={surfaces} />
        </Suspense>
      }
    >
      <Suspense>
        <PresetPreview onReady={setInfo} onSurfacesChange={setSurfaces} />
      </Suspense>
    </Shell>
  );
}
