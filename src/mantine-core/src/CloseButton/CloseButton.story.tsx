import { MANTINE_SIZES } from '@mantine/styles';
import React from 'react';
import { CloseButton } from './CloseButton';

export default { title: 'CloseButton' };

export function Sizes() {
  const sizes = [...MANTINE_SIZES, 60, 100].map((size) => (
    <CloseButton size={size} key={size} variant="filled" color="blue" mt="md" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function CustomCloseIcon() {
  return <CloseButton>XX</CloseButton>;
}
