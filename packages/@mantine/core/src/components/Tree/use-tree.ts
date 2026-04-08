import { useCallback, useRef, useState } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  CheckedNodeStatus,
  getAllCheckedNodes,
} from './get-all-checked-nodes/get-all-checked-nodes';
import {
  findTreeNode,
  getAllChildrenNodes,
  getChildrenNodesValues,
} from './get-children-nodes-values/get-children-nodes-values';
import { memoizedIsNodeChecked } from './is-node-checked/is-node-checked';
import { memoizedIsNodeIndeterminate } from './is-node-indeterminate/is-node-indeterminate';
import type { TreeNodeData } from './Tree';

export type TreeExpandedState = Record<string, boolean>;

function getInitialTreeExpandedState(
  initialState: TreeExpandedState,
  data: TreeNodeData[],
  value: string | string[] | undefined,
  acc: TreeExpandedState = {}
) {
  data.forEach((node) => {
    acc[node.value] = node.value in initialState ? initialState[node.value] : node.value === value;

    if (Array.isArray(node.children)) {
      getInitialTreeExpandedState(initialState, node.children, value, acc);
    }
  });

  return acc;
}

export function getTreeExpandedState(
  data: TreeNodeData[],
  expandedNodesValues: string[] | '*'
): Record<string, boolean> {
  const state = getInitialTreeExpandedState({}, data, []);

  if (expandedNodesValues === '*') {
    return Object.keys(state).reduce((acc, key) => ({ ...acc, [key]: true }), {});
  }

  expandedNodesValues.forEach((node) => {
    state[node] = true;
  });

  return state;
}

function getInitialCheckedState(
  initialState: string[],
  data: TreeNodeData[],
  checkStrictly: boolean
) {
  if (checkStrictly) {
    return initialState;
  }

  const acc: string[] = [];

  initialState.forEach((node) => acc.push(...getChildrenNodesValues(node, data)));

  return Array.from(new Set(acc));
}

function getAllNodeValues(data: TreeNodeData[]): string[] {
  const acc: string[] = [];
  for (const node of data) {
    acc.push(node.value);
    if (Array.isArray(node.children) && node.children.length > 0) {
      acc.push(...getAllNodeValues(node.children));
    }
  }
  return acc;
}

export interface UseTreeInput {
  /** Initial expanded state of all nodes, uncontrolled state */
  initialExpandedState?: TreeExpandedState;

  /** Expanded state of all nodes, controlled state */
  expandedState?: TreeExpandedState;

  /** Called when the tree expanded state changes */
  onExpandedStateChange?: (expandedState: TreeExpandedState) => void;

  /** Initial selected state of nodes */
  initialSelectedState?: string[];

  /** Selected state of all nodes, controlled state */
  selectedState?: string[];

  /** Called when the tree selected state changes */
  onSelectedStateChange?: (selectedState: string[]) => void;

  /** Initial checked state of nodes */
  initialCheckedState?: string[];

  /** Checked state of all nodes, controlled state */
  checkedState?: string[];

  /** Called when the tree checked state changes */
  onCheckedStateChange?: (checkedState: string[]) => void;

  /** Determines whether multiple node can be selected at a time */
  multiple?: boolean;

  /** Called with the node value when it is expanded */
  onNodeExpand?: (value: string) => void;

  /** Called with the node value when it is collapsed */
  onNodeCollapse?: (value: string) => void;

  /** Called when a node with `hasChildren: true` is expanded for the first time.
   * The callback should update the tree data with loaded children.
   */
  onLoadChildren?: (nodeValue: string) => Promise<void>;

  /** When `true`, checking a parent does not affect children and vice versa.
   * Each node's checked state is fully independent. @default false
   */
  checkStrictly?: boolean;
}

export interface UseTreeReturnType {
  /** When `true`, each node's checked state is independent (no parent-child cascading) */
  checkStrictly: boolean;

  /** Determines whether multiple node can be selected at a time */
  multiple: boolean;

  /** A record of `node.value` and boolean values that represent nodes expanded state */
  expandedState: TreeExpandedState;

  /** An array of selected nodes values */
  selectedState: string[];

  /** An array of checked nodes values */
  checkedState: string[];

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
  setExpandedState: (value: TreeExpandedState) => void;

  /** Toggles selected state of the node with provided value */
  toggleSelected: (value: string) => void;

  /** Selects node with provided value */
  select: (value: string) => void;

  /** Deselects node with provided value */
  deselect: (value: string) => void;

  /** Clears selected state */
  clearSelected: () => void;

  /** Sets selected state */
  setSelectedState: (value: string[]) => void;

  /** Checks node with provided value */
  checkNode: (value: string) => void;

  /** Unchecks node with provided value */
  uncheckNode: (value: string) => void;

  /** Checks all nodes */
  checkAllNodes: () => void;

  /** Unchecks all nodes */
  uncheckAllNodes: () => void;

  /** Sets checked state */
  setCheckedState: (value: string[]) => void;

  /** Returns all checked nodes with status */
  getCheckedNodes: () => CheckedNodeStatus[];

  /** Returns `true` if node with provided value is checked */
  isNodeChecked: (value: string) => boolean;

  /** Returns `true` if node with provided value is indeterminate */
  isNodeIndeterminate: (value: string) => boolean;

  /** Returns `true` if the node's children are currently being loaded */
  isNodeLoading: (value: string) => boolean;

  /** Returns the error from the last failed load attempt for the given node, or `null` */
  getNodeLoadError: (value: string) => Error | null;

  /** Programmatically triggers loading of a node's children */
  loadNode: (value: string) => Promise<void>;

  /** Clears the loaded cache for a node, causing it to re-fetch on next expand */
  invalidateNode: (value: string) => void;
}

export function useTree({
  initialSelectedState = [],
  expandedState,
  initialCheckedState = [],
  checkedState,
  initialExpandedState = {},
  selectedState,
  multiple = false,
  onNodeCollapse,
  onNodeExpand,
  onCheckedStateChange,
  onSelectedStateChange,
  onExpandedStateChange,
  onLoadChildren,
  checkStrictly = false,
}: UseTreeInput = {}): UseTreeReturnType {
  const [data, setData] = useState<TreeNodeData[]>([]);
  const [_expandedState, setExpandedState] = useUncontrolled({
    value: expandedState,
    defaultValue: initialExpandedState,
    finalValue: {},
    onChange: onExpandedStateChange,
  });

  const [_selectedState, setSelectedState] = useUncontrolled({
    value: selectedState,
    defaultValue: initialSelectedState,
    finalValue: [],
    onChange: onSelectedStateChange,
  });

  const [_checkedState, setCheckedState] = useUncontrolled({
    value: checkedState,
    defaultValue: initialCheckedState,
    finalValue: [],
    onChange: onCheckedStateChange,
  });

  const [anchorNode, setAnchorNode] = useState<string | null>(null);

  const loadingNodesRef = useRef(new Set<string>());
  const loadedNodesRef = useRef(new Set<string>());
  const [loadingNodes, setLoadingNodes] = useState<string[]>([]);
  const [loadErrors, setLoadErrors] = useState<Record<string, Error>>({});

  const initialize = useCallback(
    (_data: TreeNodeData[]) => {
      setExpandedState(getInitialTreeExpandedState(_expandedState, _data, _selectedState));
      setCheckedState(getInitialCheckedState(_checkedState, _data, checkStrictly));
      setData(_data);
    },
    [_selectedState, _checkedState, _expandedState, checkStrictly]
  );

  const loadNodeImpl = useCallback(
    async (value: string) => {
      if (!onLoadChildren) {
        return;
      }

      if (loadingNodesRef.current.has(value) || loadedNodesRef.current.has(value)) {
        return;
      }

      loadingNodesRef.current.add(value);
      setLoadingNodes(Array.from(loadingNodesRef.current));
      setLoadErrors((prev) => {
        if (!(value in prev)) {
          return prev;
        }

        const next = { ...prev };
        delete next[value];
        return next;
      });

      try {
        await onLoadChildren(value);
        loadedNodesRef.current.add(value);
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        setLoadErrors((prev) => ({ ...prev, [value]: err }));
      } finally {
        loadingNodesRef.current.delete(value);
        setLoadingNodes(Array.from(loadingNodesRef.current));
      }
    },
    [onLoadChildren]
  );

  const tryLoadAsync = useCallback(
    (value: string) => {
      if (!onLoadChildren) {
        return;
      }

      const node = findTreeNode(value, data);
      if (node && node.hasChildren && !Array.isArray(node.children)) {
        loadNodeImpl(value);
      }
    },
    [onLoadChildren, data, loadNodeImpl]
  );

  const toggleExpanded = useCallback(
    (value: string) => {
      const nextState = { ..._expandedState, [value]: !_expandedState[value] };
      nextState[value] ? onNodeExpand?.(value) : onNodeCollapse?.(value);
      if (nextState[value]) {
        tryLoadAsync(value);
      }
      setExpandedState(nextState);
    },
    [onNodeCollapse, onNodeExpand, _expandedState, tryLoadAsync]
  );

  const collapse = useCallback(
    (value: string) => {
      if (_expandedState[value] !== false) {
        onNodeCollapse?.(value);
      }

      setExpandedState({ ..._expandedState, [value]: false });
    },
    [onNodeCollapse, _expandedState]
  );

  const expand = useCallback(
    (value: string) => {
      if (_expandedState[value] !== true) {
        onNodeExpand?.(value);
      }

      tryLoadAsync(value);
      setExpandedState({ ..._expandedState, [value]: true });
    },
    [onNodeExpand, _expandedState, tryLoadAsync]
  );

  const expandAllNodes = useCallback(() => {
    const nextState = { ..._expandedState };
    Object.keys(nextState).forEach((key) => {
      nextState[key] = true;
      tryLoadAsync(key);
    });

    setExpandedState(nextState);
  }, [_expandedState, tryLoadAsync]);

  const collapseAllNodes = useCallback(() => {
    const nextState = { ..._expandedState };
    Object.keys(nextState).forEach((key) => {
      nextState[key] = false;
    });

    setExpandedState(nextState);
  }, [_expandedState]);

  const toggleSelected = useCallback(
    (value: string) => {
      if (!multiple) {
        if (_selectedState.includes(value)) {
          setAnchorNode(null);
          return [];
        }

        setAnchorNode(value);
        return [value];
      }

      if (_selectedState.includes(value)) {
        setAnchorNode(null);
        return _selectedState.filter((item) => item !== value);
      }

      setAnchorNode(value);
      setSelectedState([..._selectedState, value]);
    },
    [_selectedState]
  );

  const select = useCallback(
    (value: string) => {
      setAnchorNode(value);
      setSelectedState(
        multiple
          ? _selectedState.includes(value)
            ? _selectedState
            : [..._selectedState, value]
          : [value]
      );
    },
    [_selectedState]
  );

  const deselect = useCallback(
    (value: string) => {
      anchorNode === value && setAnchorNode(null);
      setSelectedState(_selectedState.filter((item) => item !== value));
    },
    [_selectedState]
  );

  const clearSelected = useCallback(() => {
    setSelectedState([]);
    setAnchorNode(null);
  }, []);

  const checkNode = useCallback(
    (value: string) => {
      if (checkStrictly) {
        if (!_checkedState.includes(value)) {
          setCheckedState([..._checkedState, value]);
        }
      } else {
        const checkedNodes = getChildrenNodesValues(value, data);
        setCheckedState(Array.from(new Set([..._checkedState, ...checkedNodes])));
      }
    },
    [data, _checkedState, checkStrictly]
  );

  const uncheckNode = useCallback(
    (value: string) => {
      if (checkStrictly) {
        setCheckedState(_checkedState.filter((item) => item !== value));
      } else {
        const checkedNodes = getChildrenNodesValues(value, data);
        setCheckedState(_checkedState.filter((item) => !checkedNodes.includes(item)));
      }
    },
    [data, _checkedState, checkStrictly]
  );

  const checkAllNodes = useCallback(() => {
    if (checkStrictly) {
      setCheckedState(getAllNodeValues(data));
    } else {
      setCheckedState(getAllChildrenNodes(data));
    }
  }, [data, checkStrictly]);

  const uncheckAllNodes = useCallback(() => {
    setCheckedState([]);
  }, []);

  const getCheckedNodes = (): CheckedNodeStatus[] => {
    if (checkStrictly) {
      return _checkedState.map((value) => {
        const node = findTreeNode(value, data);
        return {
          checked: true,
          indeterminate: false,
          value,
          hasChildren: node
            ? (Array.isArray(node.children) && node.children.length > 0) || !!node.hasChildren
            : false,
        };
      });
    }
    return getAllCheckedNodes(data, _checkedState).result;
  };

  const isNodeChecked = (value: string) => {
    if (checkStrictly) {
      return _checkedState.includes(value);
    }
    return memoizedIsNodeChecked(value, data, _checkedState);
  };

  const isNodeIndeterminate = (value: string) => {
    if (checkStrictly) {
      return false;
    }
    return memoizedIsNodeIndeterminate(value, data, _checkedState);
  };

  const isNodeLoading = (value: string) => loadingNodes.includes(value);
  const getNodeLoadError = (value: string) => loadErrors[value] || null;

  const invalidateNode = useCallback((value: string) => {
    loadedNodesRef.current.delete(value);
    setLoadErrors((prev) => {
      if (!(value in prev)) {
        return prev;
      }

      const next = { ...prev };
      delete next[value];
      return next;
    });
  }, []);

  return {
    checkStrictly,
    multiple,
    expandedState: _expandedState,
    selectedState: _selectedState,
    checkedState: _checkedState,
    anchorNode,
    initialize,

    toggleExpanded,
    collapse,
    expand,
    expandAllNodes,
    collapseAllNodes,
    setExpandedState,

    checkNode,
    uncheckNode,
    checkAllNodes,
    uncheckAllNodes,
    setCheckedState,

    toggleSelected,
    select,
    deselect,
    clearSelected,
    setSelectedState,

    getCheckedNodes,
    isNodeChecked,
    isNodeIndeterminate,

    isNodeLoading,
    getNodeLoadError,
    loadNode: loadNodeImpl,
    invalidateNode,
  };
}

export type TreeController = ReturnType<typeof useTree>;
