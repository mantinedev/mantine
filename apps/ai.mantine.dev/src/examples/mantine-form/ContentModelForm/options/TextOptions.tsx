import { Input, NumberInput, SegmentedControl, Stack, Textarea, TextInput } from '@mantine/core';
import type { FieldFormType } from '../types';

const DISPLAY_OPTIONS = [
  { value: 'input', label: 'Input' },
  { value: 'textarea', label: 'Textarea' },
];

export function TextOptions({ form }: { form: FieldFormType }) {
  const display = form.useWatchValue('textDisplay');
  const maxLength = form.useWatchValue('maxLength');
  const defaultProps = {
    label: 'Default value',
    placeholder: 'Default value',
    maxLength: typeof maxLength === 'number' && maxLength > 0 ? maxLength : undefined,
    ...form.getInputProps('textDefault'),
  };

  return (
    <Stack>
      <Input.Wrapper label="Display" withBlockChildren>
        <SegmentedControl
          data={DISPLAY_OPTIONS}
          aria-label="Display"
          {...form.getInputProps('textDisplay', { withError: false })}
        />
      </Input.Wrapper>

      <NumberInput
        label="Max characters"
        placeholder="No limit"
        min={1}
        max={100000}
        allowNegative={false}
        allowDecimal={false}
        {...form.getInputProps('maxLength')}
      />

      {display === 'textarea' ? (
        <Textarea autosize minRows={3} maxRows={8} {...defaultProps} />
      ) : (
        <TextInput {...defaultProps} />
      )}
    </Stack>
  );
}
