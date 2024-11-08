import React from 'react';

export function getRefProp(element: any) {
  const version = React.version;

  if (typeof React.version !== 'string') {
    return (element as any)?.ref;
  }

  if (version.startsWith('18.')) {
    return (element as any)?.ref;
  }

  return (element as any)?.props?.ref;
}
