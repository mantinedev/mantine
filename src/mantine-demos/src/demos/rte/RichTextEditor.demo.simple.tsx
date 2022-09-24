import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

const code = `
import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function Demo() {
  const [value, onChange] = useState(initialValue);
  return <RichTextEditor value={value} onChange={onChange} id="rte" />;
}
`;

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function Demo() {
  const [value, onChange] = useState(initialValue);
  return <SSRWrapper value={value} onChange={onChange} />;
}

export const simple: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
