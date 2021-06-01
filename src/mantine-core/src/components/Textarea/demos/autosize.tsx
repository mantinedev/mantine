import React from 'react';
import { Textarea } from '../Textarea';
import { useMantineTheme } from '../../../index';

const code = `
<Textarea
  placeholder="Autosize with no rows limit"
  label="Autosize with no rows limit"
  autosize
  minRows={2}
/>

<Textarea
  label="Autosize with 4 rows max"
  placeholder="Autosize with 4 rows max"
  autosize
  minRows={2}
  maxRows={4}
/>
`;

function Demo() {
  const theme = useMantineTheme();
  const inputVariant = theme.colorScheme === 'dark' ? 'filled' : 'default';

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
        variant={inputVariant}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
        style={{ marginTop: 15 }}
        variant={inputVariant}
      />
    </div>
  );
}

export const autosize: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
