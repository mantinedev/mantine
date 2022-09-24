import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

const code = `
import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

function Demo() {
  const [value, onChange] = useState('<p>Rich text editor content</p>');
  return (
    <RichTextEditor
      id="rte"
      value={value}
      onChange={onChange}
      formats={['bold', 'italic', 'underline']}
      controls={[['italic', 'underline']]}
    />
  );
}
`;

function Demo() {
  const [value, onChange] = useState('<p>Rich text editor content</p>');
  return (
    <SSRWrapper
      value={value}
      onChange={onChange}
      stickyOffset={60}
      formats={['bold', 'italic', 'underline']}
      controls={[['italic', 'underline']]}
    />
  );
}

export const formats: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
