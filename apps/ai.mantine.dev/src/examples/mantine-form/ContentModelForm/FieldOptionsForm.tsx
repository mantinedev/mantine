import {
  Checkbox,
  Divider,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
} from '@mantine/core';
import { getFieldType } from './fieldTypes';
import { BooleanOptions } from './options/BooleanOptions';
import { JsonOptions } from './options/JsonOptions';
import { ReferenceOptions } from './options/ReferenceOptions';
import { SelectOptions } from './options/SelectOptions';
import { TextOptions } from './options/TextOptions';
import type { FieldFormType } from './types';
import classes from './ContentModelForm.module.css';

interface FieldOptionsFormProps {
  form: FieldFormType;
  addOptionRef: React.Ref<HTMLButtonElement>;
}

export function FieldOptionsForm({ form, addOptionRef }: FieldOptionsFormProps) {
  const type = getFieldType(form.useWatchValue('type'));

  const typeOptions = {
    text: <TextOptions form={form} />,
    boolean: <BooleanOptions form={form} />,
    json: <JsonOptions form={form} />,
    select: <SelectOptions form={form} addOptionRef={addOptionRef} />,
    reference: <ReferenceOptions form={form} />,
    richText: null,
    image: null,
    file: null,
  }[type.value];

  return (
    <>
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
        <TextInput
          label="Key"
          placeholder="title"
          withAsterisk
          classNames={{ input: classes.monospace }}
          {...form.getInputProps('key')}
        />
      </SimpleGrid>
      <Textarea
        label="Description"
        placeholder="Help text shown to editors"
        autosize
        minRows={2}
        maxRows={4}
        {...form.getInputProps('description')}
      />
      <Checkbox label="Required" {...form.getInputProps('required', { type: 'checkbox' })} />

      {typeOptions && (
        <>
          <Divider label={`${type.label} options`} labelPosition="left" />
          {typeOptions}
        </>
      )}
    </>
  );
}
