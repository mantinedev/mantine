import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Checkbox,
  Group,
  Radio,
  ScrollArea,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { REFERENCE_ENTRIES, REFERENCE_MODELS } from '../../data';
import type { ReferenceEntry, ReferenceFieldSchema, ReferenceModel } from '../../types';
import classes from './ReferencePicker.module.css';

const ALL_MODELS = 'all';

const MODEL_FILTER_OPTIONS = [{ value: ALL_MODELS, label: 'All models' }, ...REFERENCE_MODELS];

const modelLabel = (model: ReferenceModel) =>
  REFERENCE_MODELS.find((option) => option.value === model)?.label ?? model;

const matchesSearch = (entry: ReferenceEntry, search: string) => {
  const query = search.trim().toLowerCase();
  return (
    query === '' ||
    entry.key.toLowerCase().includes(query) ||
    entry.title.toLowerCase().includes(query)
  );
};

interface ReferencePickerProps {
  field: ReferenceFieldSchema;
  initialSelection: string[];
  onConfirm: (keys: string[]) => void;
  onCancel: () => void;
}

export function ReferencePicker({
  field,
  initialSelection,
  onConfirm,
  onCancel,
}: ReferencePickerProps) {
  const [search, setSearch] = useState('');
  const [modelFilter, setModelFilter] = useState<string>(ALL_MODELS);
  const [selection, setSelection] = useState(initialSelection);

  const model = field.targetModel ?? (modelFilter === ALL_MODELS ? null : modelFilter);
  const entries = REFERENCE_ENTRIES.filter(
    (entry) => (model === null || entry.model === model) && matchesSearch(entry, search)
  );

  const rows = entries.map((entry) => {
    const Card = field.multiple ? Checkbox.Card : Radio.Card;
    const Indicator = field.multiple ? Checkbox.Indicator : Radio.Indicator;
    return (
      <Card
        key={entry.key}
        value={entry.key}
        className={classes.card}
        aria-label={`${entry.key} (${entry.title})`}
      >
        <Group wrap="nowrap" gap="sm">
          <Indicator />
          <div className={classes.texts}>
            <Text size="sm" className={classes.key}>
              {entry.key}
            </Text>
            <Text size="xs">{entry.title}</Text>
          </div>
          <Badge variant="default" size="sm">
            {modelLabel(entry.model)}
          </Badge>
        </Group>
      </Card>
    );
  });

  const list =
    rows.length === 0 ? (
      <Text size="sm">No entries match your search</Text>
    ) : (
      <Stack gap="xs">{rows}</Stack>
    );

  return (
    <Stack>
      <TextInput
        data-autofocus
        aria-label="Search entries"
        placeholder="Search by key or title"
        leftSection={<IconSearch size={16} />}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
      {field.targetModel === null && (
        <Select
          label="Model"
          data={MODEL_FILTER_OPTIONS}
          value={modelFilter}
          onChange={(value) => setModelFilter(value ?? ALL_MODELS)}
          allowDeselect={false}
        />
      )}
      <ScrollArea.Autosize mah={320}>
        {field.multiple ? (
          <Checkbox.Group value={selection} onChange={setSelection} aria-label="Entries">
            {list}
          </Checkbox.Group>
        ) : (
          <Radio.Group
            value={selection[0] ?? null}
            onChange={(value) => setSelection([value])}
            aria-label="Entries"
          >
            {list}
          </Radio.Group>
        )}
      </ScrollArea.Autosize>
      <Group justify="flex-end">
        <Button variant="default" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onConfirm(selection)}>Select</Button>
      </Group>
    </Stack>
  );
}
