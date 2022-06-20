import React from 'react';
import { storiesOf } from '@storybook/react';
import { Stack, Title, Text, Select, TextInput, NumberInput } from '@mantine/core';
import { useFocusTrap } from './use-focus-trap';

const Usage = () => {
  const focusTrapRef = useFocusTrap();
  return (
    <Stack ref={focusTrapRef}>
      <Title>Title</Title>
      <Text>Select first</Text>
      <Select data={[]} />
      <TextInput />
      <NumberInput />
    </Stack>
  );
};

storiesOf('Hooks/use-focus-trap', module).add('Usage', () => (
  <div style={{ padding: 40 }}>
    <Usage />
  </div>
));
