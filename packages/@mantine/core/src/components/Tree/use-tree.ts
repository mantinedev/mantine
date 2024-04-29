import { useCallback, useState } from 'react';
import type { TreeNodeData } from './Tree';

export type TreeExpandedState = Record<string, boolean>;

function getInitialState(
  initialState: TreeExpandedState,
  data: TreeNodeData[],
  value: string | string[] | undefined,
  acc: TreeExpandedState = {}
) {
  data.forEach((node) => {
    acc[node.value] = node.value in initialState ? initialState[node.value] : node.value === value;

    if (Array.isArray(node.children)) {
      getInitialState(initialState, node.children, value, acc);
    }
  });

  return acc;
}

export interface UseTreeInput {
  initialExpandedState?: TreeExpandedState;
  initialSelectedState?: string[];
  multiple?: boolean;
}

export function useTree({
  initialSelectedState = [],
  initialExpandedState = {},
  multiple = false,
}: UseTreeInput = {}) {
  const [expandedState, setExpandedState] = useState(initialExpandedState);
  const [selectedState, setSelectedState] = useState(initialSelectedState);

  const initialize = useCallback(
    (data: TreeNodeData[]) => {
      setExpandedState((current) => getInitialState(current, data, selectedState));
    },
    [selectedState]
  );

  const toggleExpanded = useCallback((value: string) => {
    setExpandedState((current) => ({ ...current, [value]: !current[value] }));
  }, []);

  const collapse = useCallback((value: string) => {
    setExpandedState((current) => ({ ...current, [value]: false }));
  }, []);

  const expand = useCallback((value: string) => {
    setExpandedState((current) => ({ ...current, [value]: true }));
  }, []);

  const expandAllNodes = useCallback(() => {
    setExpandedState((current) => {
      const next = { ...current };
      Object.keys(next).forEach((key) => {
        next[key] = true;
      });

      return next;
    });
  }, []);

  const collapseAllNodes = useCallback(() => {
    setExpandedState((current) => {
      const next = { ...current };
      Object.keys(next).forEach((key) => {
        next[key] = false;
      });

      return next;
    });
  }, []);

  const toggleSelected = useCallback(
    (value: string) =>
      setSelectedState((current) => {
        if (!multiple) {
          return current.includes(value) ? [] : [value];
        }

        if (current.includes(value)) {
          return current.filter((item) => item !== value);
        }

        return [...current, value];
      }),
    []
  );

  const selectNode = useCallback(
    (value: string) =>
      setSelectedState((current) =>
        current.includes(value) ? current : multiple ? [...current, value] : [value]
      ),
    []
  );

  const deselectNode = useCallback(
    (value: string) => setSelectedState((current) => current.filter((item) => item !== value)),
    []
  );

  const clearSelected = useCallback(() => setSelectedState([]), []);

  return {
    multiple,
    expandedState,
    selectedState,
    initialize,

    toggleExpanded,
    collapse,
    expand,
    expandAllNodes,
    collapseAllNodes,
    setExpandedState,

    toggleSelected,
    selectNode,
    deselectNode,
    clearSelected,
    setSelectedState,
  };
}

export type TreeController = ReturnType<typeof useTree>;
