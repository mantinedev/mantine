import React from 'react';
import { MailIcon } from '@primer/octicons-react';
import { TextInput } from '../TextInput';

const code = `
<TextInput icon={<MailIcon />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput label="Your email" placeholder="Your email" icon={<MailIcon />} />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
