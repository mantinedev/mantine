import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

const code = `
import { useState } from 'react;
import { RichTextEditor } from '@mantine/rte';

const initialValue =
  '<p>Type @ to mention a person,&nbsp;or # to mention a tag. </p>';

  const allPeople = [
    {
      id: 1,
      value: 'Fredrik Sundqvist',
    },
    {
      id: 2,
      value: 'Patrik Sjölin',
    },
  ];

  const allTags = [
    {
      id: 1,
      value: 'User',
    },
    {
      id: 2,
      value: 'Organisation',
    },
  ];

function Demo() {
  const [value, onChange] = useState(initialValue);
  return (
    <RichTextEditor
      value={value}
      onChange={onChange}
      mentionGroups={[
        { denotationChar: '@', items: allPeople, onMention: handlePeopleMention },
        { denotationChar: '#', items: allTags },
      ]}
    />)
}
`;

const initialValue = '<p>Type @ to mention a person,&nbsp;or # to mention a tag. </p>';

const allPeople = [
  {
    id: 1,
    value: 'Fredrik Sundqvist',
  },
  {
    id: 2,
    value: 'Patrik Sjölin',
  },
];

const allTags = [
  {
    id: 1,
    value: 'User',
  },
  {
    id: 2,
    value: 'Organisation',
  },
];

function Demo() {
  const [value, onChange] = useState(initialValue);
  return (
    <SSRWrapper
      value={value}
      onChange={onChange}
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
