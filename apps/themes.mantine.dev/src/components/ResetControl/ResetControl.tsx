'use client';

import { IconRestore } from '@tabler/icons-react';
import { HeaderControl } from '@mantinex/mantine-header';
import { hasPresetValues } from '@/hooks/preset-storage';
import { useEditorParams } from '@/hooks/use-editor-params';
import classes from './ResetControl.module.css';

export function ResetControl() {
  const { overrides, resetPreset } = useEditorParams();
  const changed = hasPresetValues(overrides);

  return (
    <HeaderControl
      tooltip="Reset theme"
      onClick={resetPreset}
      disabled={!changed}
      className={classes.control}
    >
      <IconRestore size={22} stroke={1.5} />
    </HeaderControl>
  );
}
