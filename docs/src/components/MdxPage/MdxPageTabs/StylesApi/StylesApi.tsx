import React from 'react';
import { StylesApiHeader } from './StylesApiHeader/StylesApiHeader';
import { StylesApiItem } from './StylesApiItem/StylesApiItem';

interface StylesApiProps {
  components: string[];
}

export function StylesApi({ components }: StylesApiProps) {
  if (!Array.isArray(components)) {
    return null;
  }

  const items = components.map((component) => (
    <StylesApiItem key={component} component={component} />
  ));

  return (
    <>
      <StylesApiHeader />
      {items}
    </>
  );
}
