import { TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, List, Text } from '@mantine/core';

export function formatSize(bytes: number) {
  return bytes < 1024 ** 2
    ? `${(bytes / 1024).toFixed(1)} KB`
    : `${(bytes / 1024 ** 2).toFixed(1)} MB`;
}

interface FilesListProps {
  files: File[];
  disabled: boolean;
  onRemove: (index: number) => void;
}

export function FilesList({ files, disabled, onRemove }: FilesListProps) {
  if (files.length === 0) {
    return null;
  }

  const items = files.map((file, index) => (
    <List.Item key={`${index}-${file.name}`}>
      <Group gap="xs">
        <Text size="sm">
          {file.name} ({formatSize(file.size)})
        </Text>

        <ActionIcon
          variant="default"
          size="sm"
          aria-label="Remove file"
          disabled={disabled}
          onClick={() => onRemove(index)}
        >
          <TrashIcon size={18} color="var(--mantine-color-red-6)" />
        </ActionIcon>
      </Group>
    </List.Item>
  ));

  return <List spacing={4}>{items}</List>;
}
