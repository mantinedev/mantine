import React from 'react';
import { StylesApiItem } from './StylesApiItem/StylesApiItem';

interface StylesApiProps {
  components: string[];
}

export function StylesApi({ components }: StylesApiProps) {
  if (!Array.isArray(components)) {
    return null;
  }

  const singleNode = components[1] === 'single-node';

  const items = components.map((component) => (
    <StylesApiItem key={component} component={component} />
  ));

  return <>{singleNode ? null : items}</>;
}
