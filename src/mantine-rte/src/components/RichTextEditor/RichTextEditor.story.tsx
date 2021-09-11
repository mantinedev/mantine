import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { RichTextEditor } from './RichTextEditor';

function Wrapper() {
  const [value, onChange] = useState('');
  return <RichTextEditor value={value} onChange={onChange} />;
}

storiesOf('@mantine/rte/RichTextEditor', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Wrapper />
  </div>
));
