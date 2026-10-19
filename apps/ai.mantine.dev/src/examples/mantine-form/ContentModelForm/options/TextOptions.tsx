import { Input, NumberInput, SegmentedControl, Textarea, TextInput } from '@mantine/core';
import type { FieldFormType } from '../types';

export function TextOptions({ form }: { form: FieldFormType }) {
  const display = form.useWatchValue('textDisplay');

  return (
    <>
      <Input.Wrapper label="Display">
        <SegmentedControl
          data={[
            { value: 'input', label: 'Input' },
            { value: 'textarea', label: 'Textarea' },
          ]}
          {...form.getInputProps('textDisplay', { withError: false })}
        />
      </Input.Wrapper>
      <NumberInput
        label="Max length"
        placeholder="No limit"
        min={1}
        max={100_000}
        allowNegative={false}
        allowDecimal={false}
        thousandSeparator=","
        hideControls
        {...form.getInputProps('maxLength')}
      />
      {display === 'textarea' ? (
        <Textarea
          label="Default value"
          placeholder="Default value"
          autosize
          minRows={2}
          maxRows={6}
          {...form.getInputProps('textDefault')}
        />
      ) : (
        <TextInput
          label="Default value"
          placeholder="Default value"
          {...form.getInputProps('textDefault')}
        />
      )}
    </>
  );
}
