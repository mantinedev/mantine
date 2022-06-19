import { DatePicker } from '@mantine/dates';
import React from 'react';

const codeTemplate = (props: string) => `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return <DatePicker placeholder="Pick date" label="Event date"${props} />;
}
`;

export const flip: MantineDemo = {
  type: 'configurator',
  component: (props: any) => (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" {...props} />
    </div>
  ),
  codeTemplate,
  configuratorProps: { multiline: false },
  configurator: [
    {
      name: 'dropdownPosition',
      type: 'segmented',
      data: [
        { label: 'top', value: 'top' },
        { label: 'bottom', value: 'bottom' },
        { label: 'flip', value: 'flip' },
      ],
      initialValue: 'flip',
      defaultValue: 'flip',
    },
  ],
};
