'use client';

import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';
import { presets, type PresetId } from '@/presets';
import { EditorSidebar } from '../EditorSidebar';
import { PresetPreview } from '../PresetPreview';
import { Shell } from '../Shell';
import classes from './ThemeEditor.module.css';

export function ThemeEditor() {
  const [presetId, setPresetId] = useState<PresetId>('dashboard');
  const preset = presets.find((item) => item.id === presetId)!;

  return (
    <Shell sidebar={<EditorSidebar />}>
      <div className={classes.content}>
        <SegmentedControl
          value={presetId}
          onChange={(value) => setPresetId(value as PresetId)}
          data={presets.map((item) => ({ value: item.id, label: item.label }))}
        />
        <PresetPreview preset={preset} />
      </div>
    </Shell>
  );
}
