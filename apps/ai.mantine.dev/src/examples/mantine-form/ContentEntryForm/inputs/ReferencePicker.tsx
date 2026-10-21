import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Checkbox,
  Group,
  Radio,
  ScrollArea,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { REFERENCE_ENTRIES } from '../models';
import type { ReferenceEntry, ReferenceModel } from '../types';
import { REFERENCE_MODELS } from '../validation';
import classes from './ReferencePicker.module.css';

interface ReferencePickerProps {
  initialValue: string[];
  targetModel: ReferenceModel | null;
  multiple: boolean;
  onApply: (keys: string[]) => void;
  onCancel: () => void;
}

const MODEL_FILTERS = [{ value: 'all', label: 'All' }, ...REFERENCE_MODELS];

const getModelLabel = (model: ReferenceModel) =>
  REFERENCE_MODELS.find((item) => item.value === model)?.label ?? model;

function filterEntries(search: string, model: ReferenceModel | 'all') {
  const query = search.trim().toLowerCase();
  return REFERENCE_ENTRIES.filter(
    (entry) =>
      (model === 'all' || entry.model === model) &&
      (query === '' || entry.title.toLowerCase().includes(query) || entry.key.includes(query))
  );
}

function EntryRow({ entry, indicator }: { entry: ReferenceEntry; indicator: React.ReactNode }) {
  return (
    <Group wrap="nowrap" gap="sm">
      {indicator}
      <div className={classes.texts}>
        <Text size="sm" className={classes.key}>
          {entry.key}
        </Text>
        <Text size="xs">{entry.title}</Text>
      </div>
      <Badge variant="default" size="sm">
        {getModelLabel(entry.model)}
      </Badge>
    </Group>
  );
}

const entryName = (entry: ReferenceEntry) => `${entry.key} (${entry.title})`;

export function ReferencePicker({
  initialValue,
  targetModel,
  multiple,
  onApply,
  onCancel,
}: ReferencePickerProps) {
  const [search, setSearch] = useState('');
  const [modelFilter, setModelFilter] = useState<ReferenceModel | 'all'>('all');
  const [selected, setSelected] = useState(initialValue);
  const entries = filterEntries(search, targetModel ?? modelFilter);

  const list = multiple ? (
    <Checkbox.Group value={selected} onChange={setSelected} aria-label="Entries">
      <Stack gap="xs">
        {entries.map((entry) => (
          <Checkbox.Card
            key={entry.key}
            value={entry.key}
            className={classes.card}
            aria-label={entryName(entry)}
          >
            <EntryRow entry={entry} indicator={<Checkbox.Indicator />} />
          </Checkbox.Card>
        ))}
      </Stack>
    </Checkbox.Group>
  ) : (
    <Radio.Group
      value={selected[0] ?? null}
      onChange={(key) => setSelected([key])}
      aria-label="Entries"
    >
      <Stack gap="xs">
        {entries.map((entry) => (
          <Radio.Card
            key={entry.key}
            value={entry.key}
            className={classes.card}
            aria-label={entryName(entry)}
          >
            <EntryRow entry={entry} indicator={<Radio.Indicator />} />
          </Radio.Card>
        ))}
      </Stack>
    </Radio.Group>
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
      {targetModel === null && (
        <SegmentedControl
          fullWidth
          aria-label="Model"
          data={MODEL_FILTERS}
          value={modelFilter}
          onChange={(value) => setModelFilter(value as ReferenceModel | 'all')}
        />
      )}
      <ScrollArea.Autosize mah={320}>
        {entries.length > 0 ? list : <Text size="sm">No entries match the search</Text>}
      </ScrollArea.Autosize>
      <Group justify="flex-end">
        <Button variant="default" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onApply(selected)}>
          {multiple ? 'Select entries' : 'Select entry'}
        </Button>
      </Group>
    </Stack>
  );
}
