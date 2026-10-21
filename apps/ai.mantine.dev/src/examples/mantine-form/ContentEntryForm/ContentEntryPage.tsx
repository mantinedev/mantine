import { useState } from 'react';
import { Container, Input, SegmentedControl, Stack, Title } from '@mantine/core';
import { ContentEntryForm } from './ContentEntryForm';
import { EXAMPLE_MODELS } from './models';
import type { ContentModel, EntryPayload } from './types';

interface ContentEntryPageProps {
  models?: ContentModel[];
  onSubmit?: (entry: EntryPayload) => void;
}

export function ContentEntryPage({ models = EXAMPLE_MODELS, onSubmit }: ContentEntryPageProps) {
  const [modelKey, setModelKey] = useState(models[0].key);
  const model = models.find((item) => item.key === modelKey) ?? models[0];

  return (
    <Container size="sm" py="xl">
      <Stack gap="lg">
        <Title order={2} c="var(--mantine-color-bright)">
          New {model.name.toLowerCase()}
        </Title>
        <Input.Wrapper label="Content model" labelElement="div" withBlockChildren>
          <SegmentedControl
            aria-label="Content model"
            data={models.map((item) => ({ value: item.key, label: item.name }))}
            value={model.key}
            onChange={setModelKey}
          />
        </Input.Wrapper>
        {/* Remounting rebuilds the form with the new model's fields, defaults and rules */}
        <ContentEntryForm key={model.key} model={model} onSubmit={onSubmit} />
      </Stack>
    </Container>
  );
}
