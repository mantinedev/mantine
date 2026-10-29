'use client';

import { useEffect, useRef, useState } from 'react';
import {
  getSharedValues,
  hasPresetValues,
  mergeSharedValues,
  readPresetValues,
  readSharedValues,
  writePresetValues,
  writeSharedValues,
} from '@/hooks/preset-storage';
import { useEditorParams } from '@/hooks/use-editor-params';

export function PresetMemory() {
  const { presetId, overrides, setParams } = useEditorParams();
  const restored = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (restored.current) {
      return;
    }

    restored.current = true;
    const shared = mergeSharedValues(getSharedValues(overrides), readSharedValues());
    setParams({
      ...(hasPresetValues(overrides) ? null : readPresetValues(presetId)),
      ...shared,
    });
    setReady(true);
  }, [overrides, presetId, setParams]);

  useEffect(() => {
    if (ready) {
      writePresetValues(presetId, overrides);
      writeSharedValues(overrides);
    }
  }, [ready, presetId, overrides]);

  return null;
}
