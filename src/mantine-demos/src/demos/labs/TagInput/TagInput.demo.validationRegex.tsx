import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TagInput } from '@mantine/core';

const code = `
<TagInput
  label="Technologies that you're interested in"
  placeholder="Add react related packages"
  defaultValue={['react', 'react-router']}
  validationRegex={/react.*/}
  onValidationReject={() => {}}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add react related packages"
        defaultValue={['react', 'react-router']}
        validationRegex={/react.*/}
        onValidationReject={() => {}}
      />
    </div>
  );
}

export const validationRegex: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
