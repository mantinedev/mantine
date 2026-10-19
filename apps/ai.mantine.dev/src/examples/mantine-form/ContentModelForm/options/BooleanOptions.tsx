import { Input, SegmentedControl } from '@mantine/core';
import type { FieldFormType } from '../types';

export function BooleanOptions({ form }: { form: FieldFormType }) {
  return (
    <Input.Wrapper label="Default value">
      <SegmentedControl
        data={[
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ]}
        {...form.getInputProps('booleanDefault', { withError: false })}
      />
    </Input.Wrapper>
  );
}
