import React, { useCallback } from 'react';
import { assignRef } from '../utils';

type Ref<T> = React.Dispatch<React.SetStateAction<T>> | React.ForwardedRef<T>;

export function useMergedRef<T = any>(...refs: Ref<T>[]) {
  return useCallback((node: T | null) => {
    refs.forEach((ref) => assignRef(ref, node));
  }, refs);
}
