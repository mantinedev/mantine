import { DatePicker } from '@mantine/dates';
import React from 'react';

const codeTemplate = (props: string) => `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker placeholder="Pick date" label="Event date"${props} />;
}
`;

export const flip: MantineDemo = {
  type: 'configurator',
  component: (props: any) => (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" {...props} withinPortal />
    </div>
  ),
  codeTemplate,
  configuratorProps: { multiline: false },
  configurator: [
    {
      name: 'dropdownPosition',
      type: 'select',
      data: [
        { label: 'flip', value: 'flip' },
        { label: 'bottom-start', value: 'bottom-start' },
        { label: 'top-start', value: 'top-start' },
      ],
      initialValue: 'flip',
      defaultValue: 'flip',
    },
  ],
};
