import React from 'react';
import { MANTINE_SIZES } from '@mantine/styles';
import { Input } from './Input';

export default { title: 'Input' };

export function Variants() {
  return (
    <div style={{ padding: 40 }}>
      <Input placeholder="default" />
      <Input placeholder="invalid" mt="md" error />
      <Input placeholder="disabled" mt="md" disabled />
      <Input placeholder="with icon" mt="md" icon="$" />
      <Input placeholder="filled" variant="filled" mt="md" />
      <Input placeholder="unstyled" variant="unstyled" mt="md" />
    </div>
  );
}

export function Sizes() {
  const sizes = MANTINE_SIZES.map((size) => (
    <Input
      placeholder={`Input ${size}`}
      size={size}
      key={size}
      icon={size}
      rightSection={size}
      mt="md"
      styles={{ rightSection: { backgroundColor: 'pink' }, icon: { backgroundColor: 'cyan' } }}
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function RightSection() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Input
        placeholder="Input with right section"
        rightSection="$"
        defaultValue="asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb"
      />
    </div>
  );
}
