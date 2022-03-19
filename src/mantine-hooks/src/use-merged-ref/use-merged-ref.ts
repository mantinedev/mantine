import React, { useCallback } from 'react';
import { assignRef } from '../utils';

type Ref<T> = React.Dispatch<React.SetStateAction<T>> | React.ForwardedRef<T>;

export type UseMergedRef<T> = (node: T | null) => void;

export function useMergedRef<T = any>(...refs: Ref<T>[]): UseMergedRef<T> {
  return useCallback((node: T | null) => {
    refs.forEach((ref) => assignRef(ref, node));
  }, refs);
}

export function mergeRefs<T = any>(...refs: Ref<T>[]) {
  return (node: T | null) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
