import React from 'react';

/**
 * Detects if provided argument is a React element:
 * fragments, nulls, strings and numbers are not considered to be an element
 * */
export function isElement(value: any) {
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
