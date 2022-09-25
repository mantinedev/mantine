import React, { useState, useMemo } from 'react';
import { SSRWrapper } from './_SSRWrapper';

const code = `
import { useState, useMemo } from 'react';
import { RichTextEditor } from '@mantine/rte';

const people = [
  { id: 1, value: 'Bill Horsefighter' },
  { id: 2, value: 'Amanda Hijacker' },
  { id: 3, value: 'Leo Summerhalter' },
  { id: 4, value: 'Jane Sinkspitter' },
];

const tags = [
  { id: 1, value: 'JavaScript' },
  { id: 2, value: 'TypeScript' },
  { id: 3, value: 'Ruby' },
  { id: 3, value: 'Python' },
];

function Demo() {
  const [value, onChange] = useState('<p>Type @ or # to see mentions autocomplete</p>');
  const mentions = useMemo(
    () => ({
      allowedChars: /^[A-Za-z\\sÅÄÖåäö]*$/,
      mentionDenotationChars: ['@', '#'],
      source: (searchTerm, renderList, mentionChar) => {
        const list = mentionChar === '@' ? people : tags;
        const includesSearchTerm = list.filter((item) =>
          item.value.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderList(includesSearchTerm);
      },
    }),
    []
  );

  return (
    <RichTextEditor
      id="rte"
      value={value}
      onChange={onChange}
      placeholder="Type @ or # to see mentions autocomplete"
      mentions={mentions}
    />
  );
}
`;

const people = [
  { id: 1, value: 'Bill Horsefighter' },
  { id: 2, value: 'Amanda Hijacker' },
  { id: 3, value: 'Leo Summerhalter' },
  { id: 4, value: 'Jane Sinkspitter' },
];

const tags = [
  { id: 1, value: 'JavaScript' },
  { id: 2, value: 'TypeScript' },
  { id: 3, value: 'Ruby' },
  { id: 3, value: 'Python' },
];

function Demo() {
  const [value, onChange] = useState('<p>Type @ or # to see mentions autocomplete</p>');
  const mentions = useMemo(
    () => ({
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ['@', '#'],
      source: (searchTerm, renderList, mentionChar) => {
        const list = mentionChar === '@' ? people : tags;
        const includesSearchTerm = list.filter((item) =>
          item.value.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderList(includesSearchTerm);
      },
    }),
    []
  );

  return (
    <SSRWrapper
      value={value}
      onChange={onChange}
      placeholder="Type @ or # to see mentions autocomplete"
      mentions={mentions}
    />
  );
}

export const mentions: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
