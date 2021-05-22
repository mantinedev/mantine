import React, { useState } from 'react';
import { TagPicker, TagPickerTag } from '@mantine/tag-picker';
import mockdata from './mockdata';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

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

export function TagPickerMinimalDemo() {
  const [value, onChange] = useState<TagPickerTag>(null);

  return (
    <CodeDemo code={code} language="tsx">
      <div>
        <TagPicker
          data={mockdata}
          value={value}
          noValueLabel="Select category"
          searchPlaceholder="Search categories"
          description="Pick transaction category"
          onChange={onChange}
        />
      </div>
    </CodeDemo>
  );
}
