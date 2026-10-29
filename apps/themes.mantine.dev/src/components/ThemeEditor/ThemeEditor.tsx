'use client';

import { Suspense, useState } from 'react';
import { IconCode, IconPalette } from '@tabler/icons-react';
import { Tabs } from '@mantine/core';
import { DEFAULT_PRESET_INFO, type PresetThemeInfo } from '@/preview';
import { EditorSidebar } from '../EditorSidebar';
import { PresetPreview } from '../PresetPreview';
import { Shell } from '../Shell';
import { ThemeCode, type ThemeExportState } from '../ThemeCode';
import { PresetMemory } from './PresetMemory';
import { type ThemeDraft, ThemeDraftContext } from './ThemeDraft.context';
import classes from './ThemeEditor.module.css';

export function ThemeEditor() {
  const [info, setInfo] = useState<PresetThemeInfo | null>(null);
  const [exportState, setExportState] = useState<ThemeExportState | null>(null);
  const [draft, setDraft] = useState<ThemeDraft | null>(null);

  return (
    <ThemeDraftContext value={{ draft, setDraft }}>
      <Shell
        sidebar={
          <Tabs
            defaultValue="editor"
            variant="pills"
            radius="md"
            keepMounted={false}
            classNames={{
              root: classes.tabs,
              list: classes.tabsList,
              tab: classes.tab,
              tabSection: classes.tabIcon,
              panel: classes.tabsPanel,
            }}
          >
            <Tabs.List grow>
              <Tabs.Tab value="editor" leftSection={<IconPalette size={20} stroke={1.5} />}>
                Theme editor
              </Tabs.Tab>
              <Tabs.Tab value="code" leftSection={<IconCode size={20} stroke={1.5} />}>
                Code
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="editor">
              <Suspense>
                <EditorSidebar info={info ?? DEFAULT_PRESET_INFO} loading={info === null} />
              </Suspense>
            </Tabs.Panel>
            <Tabs.Panel value="code">
              <Suspense>
                <ThemeCode exportState={exportState} />
              </Suspense>
            </Tabs.Panel>
          </Tabs>
        }
      >
        <Suspense>
          <PresetMemory />
          <PresetPreview onReady={setInfo} onExport={setExportState} />
        </Suspense>
      </Shell>
    </ThemeDraftContext>
  );
}
