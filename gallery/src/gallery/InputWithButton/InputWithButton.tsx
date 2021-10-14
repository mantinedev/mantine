import React from 'react';
import { TextInput, TextInputProps, Button } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';

export function InputWithButton(props: TextInputProps) {
  return (
    <TextInput
      icon={<MagnifyingGlassIcon style={{ width: 20, height: 20 }} />}
      radius="xl"
      size="md"
      rightSection={
        <Button radius="xl" styles={{ root: { height: 32 }, label: { lineHeight: '32px' } }}>
          Search
        </Button>
      }
      placeholder="Search questions"
      rightSectionWidth={100}
      {...props}
    />
  );
}
