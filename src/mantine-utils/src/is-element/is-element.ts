import React from 'react';

export function isElement(value: any): value is React.ReactElement {
  if (Array.isArray(value) || value === null) {
    return false;
  }

  if (typeof value === 'object') {
    if (value.type === React.Fragment) {
      return false;
    }

    return true;
  }

  return false;
}
