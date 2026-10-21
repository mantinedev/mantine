import { Checkbox, Group, SimpleGrid, Stack, Text, TextInput, ThemeIcon } from '@mantine/core';
import { getFieldType } from './fieldTypes';
import { BooleanOptions } from './options/BooleanOptions';
import { JsonOptions } from './options/JsonOptions';
import { ReferenceOptions } from './options/ReferenceOptions';
import { SelectOptions } from './options/SelectOptions';
import { TextOptions } from './options/TextOptions';
import type { FieldFormType, FieldType } from './types';
import { useGeneratedKey } from './useGeneratedKey';

const TYPE_OPTIONS: Partial<Record<FieldType, React.ComponentType<{ form: FieldFormType }>>> = {
  text: TextOptions,
  boolean: BooleanOptions,
  json: JsonOptions,
  select: SelectOptions,
  reference: ReferenceOptions,
};

interface FieldOptionsFormProps {
  form: FieldFormType;
  isEditing: boolean;
}

export function FieldOptionsForm({ form, isEditing }: FieldOptionsFormProps) {
  // The key of a saved field is used by existing entries, so renaming the label does not change it
  const keyProps = useGeneratedKey(form, 'label', 'key', isEditing);
  const type = getFieldType(form.useWatchValue('type'));
  const TypeOptions = TYPE_OPTIONS[type.value];

  return (
    <Stack>
      <Group gap="sm" wrap="nowrap">
        <ThemeIcon variant="default" size="lg" aria-hidden>
          <type.icon size={18} color={`var(--mantine-color-${type.color}-text)`} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {type.label}
          </Text>
          <Text size="xs">{type.description}</Text>
        </div>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Label"
          placeholder="Title"
          withAsterisk
          data-autofocus
          {...form.getInputProps('label')}
        />
        <TextInput label="Key" placeholder="title" withAsterisk {...keyProps} />
      </SimpleGrid>

      <TextInput
        label="Description"
        placeholder="Help text shown to editors"
        {...form.getInputProps('description')}
      />

      <Checkbox label="Required" {...form.getInputProps('required', { type: 'checkbox' })} />

      {TypeOptions && <TypeOptions form={form} />}
    </Stack>
  );
}
