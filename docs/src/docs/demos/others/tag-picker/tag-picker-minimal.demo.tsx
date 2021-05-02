import React, { useState } from 'react';
import { useMantineTheme } from '@mantine/core';
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
  const theme = useMantineTheme();
  const [value, onChange] = useState<TagPickerTag>(null);

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white}
    >
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
