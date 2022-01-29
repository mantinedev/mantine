import React from 'react';

export function InputStylesApiWrapper({ component: Component, ...props }: any) {
  return (
    <Component
      style={{ maxWidth: 400 }}
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
