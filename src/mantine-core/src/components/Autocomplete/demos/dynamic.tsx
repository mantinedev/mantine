import React, { useState } from 'react';
import { Autocomplete } from '../Autocomplete';

const code = `
function Demo() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => ({
          value: \`\${value}@\${provider}\`,
        }))
      : [];

  return (
    <Autocomplete
      value={value}
      onChange={setValue}
      label="Email"
      placeholder="Start typing to see options"
      data={data}
    />
  );
}

`;

function Demo() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => ({
          value: `${value}@${provider}`,
        }))
      : [];

  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        value={value}
        onChange={setValue}
        label="Email"
        placeholder="Start typing to see options"
        data={data}
      />
    </div>
  );
}

export const dynamic: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
