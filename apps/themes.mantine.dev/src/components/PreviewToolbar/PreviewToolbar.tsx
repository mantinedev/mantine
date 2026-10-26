import { IconExternalLink, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Group, SegmentedControl, Select, Tooltip } from '@mantine/core';
import { type PresetCategory, presets } from '@/presets';
import type { PreviewColorScheme } from '@/preview';
import classes from './PreviewToolbar.module.css';

const CATEGORIES: PresetCategory[] = ['Tools', 'Content', 'Marketing', 'Scheduling', 'Chat', 'AI'];

const presetOptions = CATEGORIES.map((category) => ({
  group: category,
  items: presets
    .filter((preset) => preset.category === category)
    .map((preset) => ({ value: preset.id, label: `${preset.label}: ${preset.description}` })),
}));

interface PreviewToolbarProps {
  presetId: string;
  onPresetChange: (presetId: string) => void;
  colorScheme: PreviewColorScheme;
  onColorSchemeChange: (colorScheme: PreviewColorScheme) => void;
}

export function PreviewToolbar({
  presetId,
  onPresetChange,
  colorScheme,
  onColorSchemeChange,
}: PreviewToolbarProps) {
  return (
    <div className={classes.root}>
      <Select
        aria-label="Preview page"
        data={presetOptions}
        value={presetId}
        onChange={(value) => value && onPresetChange(value)}
        allowDeselect={false}
        maxDropdownHeight={420}
        className={classes.select}
      />

      <Group gap="xs" wrap="nowrap">
        <SegmentedControl
          aria-label="Preview color scheme"
          value={colorScheme}
          onChange={(value) => onColorSchemeChange(value as PreviewColorScheme)}
          data={[
            { value: 'light', label: <IconSun size={16} aria-label="Light" /> },
            { value: 'dark', label: <IconMoon size={16} aria-label="Dark" /> },
          ]}
        />
        <Tooltip label="Open page in a new tab">
          <ActionIcon
            variant="default"
            size="input-sm"
            component="a"
            href={`/${presetId}/`}
            target="_blank"
            aria-label="Open page in a new tab"
          >
            <IconExternalLink size={18} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </div>
  );
}
