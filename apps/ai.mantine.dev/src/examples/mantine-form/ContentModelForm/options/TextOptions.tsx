import { Group, NumberInput, Radio, Stack, Textarea, TextInput } from '@mantine/core';
import type { OptionsProps } from './options';

export function TextOptions({ form }: OptionsProps) {
  const display = form.useWatchValue('text.display');
  const defaultValueProps = {
    label: 'Default value',
    placeholder: 'Default value',
    ...form.getInputProps('text.defaultValue'),
  };

  return (
    <Stack>
      <Radio.Group label="Display" {...form.getInputProps('text.display')}>
        <Group mt="xs">
          <Radio value="input" label="Input" />
          <Radio value="textarea" label="Textarea" />
        </Group>
      </Radio.Group>
      <NumberInput
        label="Max characters"
        placeholder="No limit"
        allowNegative={false}
        allowDecimal={false}
        thousandSeparator=","
        hideControls
        maw={240}
        {...form.getInputProps('text.maxLength')}
      />
      {display === 'textarea' ? (
        <Textarea autosize minRows={3} maxRows={8} {...defaultValueProps} />
      ) : (
        <TextInput {...defaultValueProps} />
      )}
    </Stack>
  );
}
