import React from 'react';
import { Text } from '@mantine/core';
import { DEFAULT_CONTROLS, DEFAULT_LABELS, Toolbar } from '@mantine/rte';

const code = `
<RichTextEditor
  id="rte"
  controls={[
    ['bold', 'italic', 'underline', 'link', 'image'],
    ['unorderedList', 'h1', 'h2', 'h3'],
    ['sup', 'sub'],
    ['alignLeft', 'alignCenter', 'alignRight'],
  ]}
/>
`;

function Demo() {
  return (
    <div>
      <Text style={{ paddingLeft: 15 }}>Default toolbar:</Text>
      <Toolbar
        controls={DEFAULT_CONTROLS}
        labels={DEFAULT_LABELS}
        style={{ borderBottomWidth: 0 }}
      />

      <Text style={{ paddingLeft: 15, marginTop: 15 }}>Custom toolbar:</Text>
      <Toolbar
        controls={[
          ['bold', 'italic', 'underline', 'link', 'image'],
          ['unorderedList', 'h1', 'h2', 'h3'],
          ['sup', 'sub'],
          ['alignLeft', 'alignCenter', 'alignRight'],
        ]}
        labels={DEFAULT_LABELS}
        style={{ borderBottomWidth: 0 }}
      />
    </div>
  );
}

export const toolbar: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
