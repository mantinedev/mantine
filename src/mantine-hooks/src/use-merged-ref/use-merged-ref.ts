import React from 'react';
import { assignRef } from '../utils';

export function useMergedRef<T = any>(...refs: React.ForwardedRef<T>[]) {
  return (node: T) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
