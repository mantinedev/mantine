import React from 'react';

/**
 * Detects if provided argument is a React element:
 * fragments, nulls, strings and numbers are not considered to be an element
 * */
export function isElement(value: any): value is React.ReactElement {
  if (Array.isArray(value) || value === null) {
    return false;
  }

  if (typeof value === 'object') {
    return value.type !== React.Fragment;
  }

  return false;
}
