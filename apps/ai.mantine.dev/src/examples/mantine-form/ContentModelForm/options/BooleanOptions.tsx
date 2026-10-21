import { Input, SegmentedControl } from '@mantine/core';
import type { FieldFormType } from '../types';

const DEFAULT_OPTIONS = [
  { value: 'false', label: 'False' },
  { value: 'true', label: 'True' },
];

export function BooleanOptions({ form }: { form: FieldFormType }) {
  return (
    <Input.Wrapper label="Default value">
      <div>
        <SegmentedControl
          data={DEFAULT_OPTIONS}
          aria-label="Default value"
          {...form.getInputProps('booleanDefault', { withError: false })}
        />
      </div>
    </Input.Wrapper>
  );
}
