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
  /** Initial expanded state of all nodes */
  initialExpandedState?: TreeExpandedState;

  /** Initial selected state of nodes */
  initialSelectedState?: string[];

  /** Determines whether multiple node can be selected at a time */
  multiple?: boolean;
}

export interface UseTreeReturnType {
  /** Determines whether multiple node can be selected at a time */
  multiple: boolean;

  /** A record of `node.value` and boolean values that represent nodes expanded state */
  expandedState: TreeExpandedState;

  /** An array of selected nodes values */
  selectedState: string[];

  /** A value of the node that was last clicked
   * Anchor node is used to determine range of selected nodes for multiple selection
   */
  anchorNode: string | null;

  /** Initializes tree state based on provided data, called automatically by the Tree component */
  initialize: (data: TreeNodeData[]) => void;

  /** Toggles expanded state of the node with provided value */
  toggleExpanded: (value: string) => void;

  /** Collapses node with provided value */
  collapse: (value: string) => void;

  /** Expands node with provided value */
  expand: (value: string) => void;

  /** Expands all nodes */
  expandAllNodes: () => void;

  /** Collapses all nodes */
  collapseAllNodes: () => void;

  /** Sets expanded state */
  setExpandedState: React.Dispatch<React.SetStateAction<TreeExpandedState>>;

  /** Toggles selected state of the node with provided value */
  toggleSelected: (value: string) => void;

  /** Selects node with provided value */
  select: (value: string) => void;

  /** Deselects node with provided value */
  deselect: (value: string) => void;

  /** Clears selected state */
  clearSelected: () => void;

  /** Sets selected state */
  setSelectedState: React.Dispatch<React.SetStateAction<string[]>>;

  /** A value of the node that is currently hovered */
  hoveredNode: string | null;

  /** Sets hovered node */
  setHoveredNode: React.Dispatch<React.SetStateAction<string | null>>;
}

export function useTree({
  initialSelectedState = [],
  initialExpandedState = {},
  multiple = false,
}: UseTreeInput = {}): UseTreeReturnType {
  const [expandedState, setExpandedState] = useState(initialExpandedState);
  const [selectedState, setSelectedState] = useState(initialSelectedState);
  const [anchorNode, setAnchorNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

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
          if (current.includes(value)) {
            setAnchorNode(null);
            return [];
          }

          setAnchorNode(value);
          return [value];
        }

        if (current.includes(value)) {
          setAnchorNode(null);
          return current.filter((item) => item !== value);
        }

        setAnchorNode(value);

        return [...current, value];
      }),
    []
  );

  const select = useCallback((value: string) => {
    setAnchorNode(value);
    setSelectedState((current) =>
      multiple ? (current.includes(value) ? current : [...current, value]) : [value]
    );
  }, []);

  const deselect = useCallback((value: string) => {
    anchorNode === value && setAnchorNode(null);
    setSelectedState((current) => current.filter((item) => item !== value));
  }, []);

  const clearSelected = useCallback(() => {
    setSelectedState([]);
    setAnchorNode(null);
  }, []);

  return {
    multiple,
    expandedState,
    selectedState,
    anchorNode,
    initialize,

    toggleExpanded,
    collapse,
    expand,
    expandAllNodes,
    collapseAllNodes,
    setExpandedState,

    toggleSelected,
    select,
    deselect,
    clearSelected,
    setSelectedState,

    hoveredNode,
    setHoveredNode,
  };
}

export type TreeController = ReturnType<typeof useTree>;
