import { Center, Text } from '@mantine/core';
import type { Preset } from '@/presets';
import classes from './PresetPreview.module.css';

interface PresetPreviewProps {
  preset: Preset;
}

export function PresetPreview({ preset }: PresetPreviewProps) {
  return (
    <Center className={classes.root}>
      <Text size="sm">{preset.label} preview</Text>
    </Center>
  );
}
