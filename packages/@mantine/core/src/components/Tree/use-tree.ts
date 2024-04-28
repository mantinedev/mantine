import { useCallback, useState } from 'react';
import type { TreeNodeData } from './Tree';

export type TreeState = Record<string, boolean>;

function getInitialState(
  initialState: TreeState,
  data: TreeNodeData[],
  value: string | string[] | undefined,
  acc: TreeState = {}
) {
  data.forEach((node) => {
    acc[node.value] = node.value in initialState ? initialState[node.value] : node.value === value;

    if (Array.isArray(node.children)) {
      getInitialState(initialState, node.children, value, acc);
    }
  });

  return acc;
}

export function useTree(initialState: TreeState = {}) {
  const [state, setState] = useState(initialState);

  const initialize = useCallback((data: TreeNodeData[], value: string | string[] | undefined) => {
    setState((current) => getInitialState(current, data, value));
  }, []);

  const toggleNode = useCallback((value: string) => {
    setState((current) => ({ ...current, [value]: !current[value] }));
  }, []);

  const collapseNode = useCallback((value: string) => {
    setState((current) => ({ ...current, [value]: false }));
  }, []);

  const expandNode = useCallback((value: string) => {
    setState((current) => ({ ...current, [value]: true }));
  }, []);

  const expandAllNodes = useCallback(() => {
    setState((current) => {
      const next = { ...current };
      Object.keys(next).forEach((key) => {
        next[key] = true;
      });

      return next;
    });
  }, []);

  const collapseAllNodes = useCallback(() => {
    setState((current) => {
      const next = { ...current };
      Object.keys(next).forEach((key) => {
        next[key] = false;
      });

      return next;
    });
  }, []);

  return {
    state,
    initialize,
    toggleNode,
    collapseNode,
    expandNode,
    expandAllNodes,
    collapseAllNodes,
    setExpandedState: setState,
  };
}

export type TreeController = ReturnType<typeof useTree>;
