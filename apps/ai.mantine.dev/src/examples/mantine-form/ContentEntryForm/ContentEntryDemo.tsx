import { useState } from 'react';
import { Input, SegmentedControl, Stack } from '@mantine/core';
import { ContentEntryForm } from './ContentEntryForm';
import { EXAMPLE_MODELS } from './data';

const MODEL_OPTIONS = EXAMPLE_MODELS.map((model) => ({ value: model.key, label: model.name }));

export function ContentEntryDemo() {
  const [modelKey, setModelKey] = useState(EXAMPLE_MODELS[0].key);
  const model = EXAMPLE_MODELS.find((item) => item.key === modelKey) ?? EXAMPLE_MODELS[0];

  return (
    <Stack gap="xl">
      <Input.Wrapper label="Model" labelElement="div">
        <div>
          <SegmentedControl
            aria-label="Model"
            data={MODEL_OPTIONS}
            value={modelKey}
            onChange={setModelKey}
          />
        </div>
      </Input.Wrapper>
      <ContentEntryForm model={model} />
    </Stack>
  );
}
