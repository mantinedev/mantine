import { Group, Radio } from '@mantine/core';
import type { OptionsProps } from './options';

export function BooleanOptions({ form }: OptionsProps) {
  return (
    <Radio.Group label="Default value" {...form.getInputProps('boolean.defaultValue')}>
      <Group mt="xs">
        <Radio value="true" label="True" />
        <Radio value="false" label="False" />
      </Group>
    </Radio.Group>
  );
}
