import { rem } from '@mantine/core';
import React from 'react';

export function InputStylesApiWrapper({ component: Component, ...props }: any) {
  return (
    <Component
      style={{ maxWidth: rem(400) }}
      placeholder="Placeholder"
      label="Label"
      description="Description"
      rightSection="R"
      icon="I"
      error="Error"
      mx="auto"
      mt="xl"
      {...props}
    />
  );
}
