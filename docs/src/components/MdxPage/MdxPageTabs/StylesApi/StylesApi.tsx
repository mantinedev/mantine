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

  const singleNode = components[1] === 'single-node';

  const items = components.map((component) => (
    <StylesApiItem key={component} component={component} />
  ));

  return (
    <>
      <StylesApiHeader component={components[0]} singleNode={singleNode} />
      {singleNode ? null : items}
    </>
  );
}
