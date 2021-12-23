import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

const code = `
import { useState } from 'react;
import { RichTextEditor } from '@mantine/rte';

const allPeople = [
  { id: 1, value: 'Bill Horsefighter' },
  { id: 2, value: 'Amanda Hijacker' },
  { id: 3, value: 'Leo Summerhalter' },
  { id: 4, value: 'Jane Sinkspitter' },
];

const allTags = [
  { id: 1, value: 'JavaScript' },
  { id: 2, value: 'TypeScript' },
  { id: 3, value: 'Ruby' },
  { id: 3, value: 'Python' },
];

function Demo() {
  const [value, onChange] = useState('<p>Type @ or # to see mentions autocomplete</p>');

  return (
    <RichTextEditor
      value={value}
      onChange={onChange}
      mentionGroups={[
        { denotationChar: '@', items: allPeople, onMention: handlePeopleMention },
        { denotationChar: '#', items: allTags },
      ]}
    />
  );
}
`;

const allPeople = [
  { id: 1, value: 'Bill Horsefighter' },
  { id: 2, value: 'Amanda Hijacker' },
  { id: 3, value: 'Leo Summerhalter' },
  { id: 4, value: 'Jane Sinkspitter' },
];

const allTags = [
  { id: 1, value: 'JavaScript' },
  { id: 2, value: 'TypeScript' },
  { id: 3, value: 'Ruby' },
  { id: 3, value: 'Python' },
];

function Demo() {
  const [value, onChange] = useState('<p>Type @ or # to see mentions autocomplete</p>');
  return (
    <SSRWrapper
      value={value}
      onChange={onChange}
      placeholder="Type @ or # to see mentions autocomplete"
      mentionGroups={[
        { denotationChar: '@', items: allPeople },
        { denotationChar: '#', items: allTags },
      ]}
    />
  );
}

export const mentions: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
