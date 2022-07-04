import React from 'react';
import { TagInput } from '@mantine/labs';

const code = `
<TagInput
  label="Technologies that you're interested in"
  placeholder="Enter manually or paste comma separated values"
  pasteSplit={PasteSplit}
/>
`;

const PasteSplit = (data: string): string[] => {
  const separators = [','];
  return data.split(new RegExp(separators.join('|'))).map((d) => d.trim());
};

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Enter manually or paste comma separated values"
        pasteSplit={PasteSplit}
      />
    </div>
  );
}

export const pasteSplit: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
