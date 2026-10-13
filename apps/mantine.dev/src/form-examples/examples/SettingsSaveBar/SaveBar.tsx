import { ArrowCounterClockwiseIcon, FloppyDiskIcon } from '@phosphor-icons/react';
import { ActionBar, ActionIcon, Text, Tooltip } from '@mantine/core';

interface SaveBarProps {
  opened: boolean;
  saving: boolean;
  onDiscard: () => void;
}

export function SaveBar({ opened, saving, onDiscard }: SaveBarProps) {
  return (
    <ActionBar
      opened={opened}
      withinPortal={false}
      withBorder
      shadow="md"
      aria-label="Unsaved changes actions"
    >
      <Text size="sm" fw={500} px="xs">
        You have unsaved changes
      </Text>

      <ActionBar.Divider />

      <Tooltip label="Discard changes">
        <ActionIcon
          variant="default"
          size="lg"
          aria-label="Discard changes"
          onClick={onDiscard}
          disabled={saving}
        >
          <ArrowCounterClockwiseIcon size={18} />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Save changes">
        <ActionIcon size="lg" type="submit" aria-label="Save changes" loading={saving}>
          <FloppyDiskIcon size={18} />
        </ActionIcon>
      </Tooltip>
    </ActionBar>
  );
}
