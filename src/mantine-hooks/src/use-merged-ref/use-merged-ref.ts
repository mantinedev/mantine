import React from 'react';
import { assignRef } from '../utils';

export function useMergedRef<T = any>(...refs: React.ForwardedRef<T>[]) {
  return (node: T | null) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
