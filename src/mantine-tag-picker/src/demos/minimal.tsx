import React, { useState } from 'react';
import { TagPicker, TagPickerTag } from '../index';
import mockdata from './mockdata';

const code = `import React, { useState } from 'react';
import { TagPicker } from '@mantine/tag-picker';

function Demo() {
  const [value, onChange] = useState(null);

  return (
    <TagPicker
      data={mockdata}
      value={value}
      noValueLabel="Select category"
      searchPlaceholder="Search categories"
      description="Pick transaction category"
      onChange={onChange}
    />
  );
}`;

function Demo() {
  const [value, onChange] = useState<TagPickerTag>(null);

  return (
    <TagPicker
      data={mockdata}
      value={value}
      noValueLabel="Select category"
      searchPlaceholder="Search categories"
      description="Pick transaction category"
      onChange={onChange}
    />
  );
}

export const minimal: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
