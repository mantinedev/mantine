import { useCallback, useMemo, useRef, useState } from 'react';
import { useCallbackRef, useUncontrolled } from '@mantine/hooks';
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
    const result: Record<string, boolean> = {};
    const keys = Object.keys(state);
    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = true;
    }
    return result;
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

  /** Returns a record of `node.value` and boolean values that represent nodes expanded state */
  getExpandedState: () => TreeExpandedState;

  /** Returns an array of selected nodes values */
  getSelectedState: () => string[];

  /** Returns an array of checked nodes values */
  getCheckedState: () => string[];

  /** Returns the value of the node that was last clicked, `null` if there is none */
  getAnchorNode: () => string | null;

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
  const [_expandedState, setExpandedStateInternal] = useUncontrolled({
    value: expandedState,
    defaultValue: initialExpandedState,
    finalValue: {},
    onChange: onExpandedStateChange,
  });

  const [_selectedState, setSelectedStateInternal] = useUncontrolled({
    value: selectedState,
    defaultValue: initialSelectedState,
    finalValue: [],
    onChange: onSelectedStateChange,
  });

  const [_checkedState, setCheckedStateInternal] = useUncontrolled({
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

  const setExpandedState = useCallbackRef(setExpandedStateInternal);
  const setSelectedState = useCallbackRef(setSelectedStateInternal);
  const setCheckedState = useCallbackRef(setCheckedStateInternal);
  const handleNodeExpand = useCallbackRef(onNodeExpand);
  const handleNodeCollapse = useCallbackRef(onNodeCollapse);

  const latest = useRef<{
    data: TreeNodeData[];
    expandedState: TreeExpandedState;
    selectedState: string[];
    checkedState: string[];
    anchorNode: string | null;
    loadingNodes: string[];
    loadErrors: Record<string, Error>;
    multiple: boolean;
    checkStrictly: boolean;
    onLoadChildren: UseTreeInput['onLoadChildren'];
  }>(null!);

  latest.current = {
    data,
    expandedState: _expandedState,
    selectedState: _selectedState,
    checkedState: _checkedState,
    anchorNode,
    loadingNodes,
    loadErrors,
    multiple,
    checkStrictly,
    onLoadChildren,
  };

  const initialize = useCallback((_data: TreeNodeData[]) => {
    setExpandedState(
      getInitialTreeExpandedState(latest.current.expandedState, _data, latest.current.selectedState)
    );
    setCheckedState(
      getInitialCheckedState(latest.current.checkedState, _data, latest.current.checkStrictly)
    );
    setData(_data);
  }, []);

  const loadNodeImpl = useCallback(async (value: string) => {
    if (!latest.current.onLoadChildren) {
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
      await latest.current.onLoadChildren(value);
      loadedNodesRef.current.add(value);
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setLoadErrors((prev) => ({ ...prev, [value]: err }));
    } finally {
      loadingNodesRef.current.delete(value);
      setLoadingNodes(Array.from(loadingNodesRef.current));
    }
  }, []);

  const tryLoadAsync = useCallback(
    (value: string) => {
      if (!latest.current.onLoadChildren) {
        return;
      }

      const node = findTreeNode(value, latest.current.data);
      if (node && node.hasChildren && !Array.isArray(node.children)) {
        loadNodeImpl(value);
      }
    },
    [loadNodeImpl]
  );

  const toggleExpanded = useCallback(
    (value: string) => {
      const current = latest.current.expandedState;
      const nextState = { ...current, [value]: !current[value] };
      nextState[value] ? handleNodeExpand(value) : handleNodeCollapse(value);
      if (nextState[value]) {
        tryLoadAsync(value);
      }
      setExpandedState(nextState);
    },
    [tryLoadAsync]
  );

  const collapse = useCallback((value: string) => {
    const current = latest.current.expandedState;

    if (current[value] !== false) {
      handleNodeCollapse(value);
    }

    setExpandedState({ ...current, [value]: false });
  }, []);

  const expand = useCallback(
    (value: string) => {
      const current = latest.current.expandedState;

      if (current[value] !== true) {
        handleNodeExpand(value);
      }

      tryLoadAsync(value);
      setExpandedState({ ...current, [value]: true });
    },
    [tryLoadAsync]
  );

  const expandAllNodes = useCallback(() => {
    const nextState = { ...latest.current.expandedState };
    Object.keys(nextState).forEach((key) => {
      nextState[key] = true;
      tryLoadAsync(key);
    });

    setExpandedState(nextState);
  }, [tryLoadAsync]);

  const collapseAllNodes = useCallback(() => {
    const nextState = { ...latest.current.expandedState };
    Object.keys(nextState).forEach((key) => {
      nextState[key] = false;
    });

    setExpandedState(nextState);
  }, []);

  const toggleSelected = useCallback((value: string) => {
    const current = latest.current.selectedState;

    if (!latest.current.multiple) {
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
    setSelectedState([...current, value]);
  }, []);

  const select = useCallback((value: string) => {
    const current = latest.current.selectedState;
    setAnchorNode(value);
    setSelectedState(
      latest.current.multiple ? (current.includes(value) ? current : [...current, value]) : [value]
    );
  }, []);

  const deselect = useCallback((value: string) => {
    latest.current.anchorNode === value && setAnchorNode(null);
    setSelectedState(latest.current.selectedState.filter((item) => item !== value));
  }, []);

  const clearSelected = useCallback(() => {
    setSelectedState([]);
    setAnchorNode(null);
  }, []);

  const checkNode = useCallback((value: string) => {
    const current = latest.current.checkedState;

    if (latest.current.checkStrictly) {
      if (!current.includes(value)) {
        setCheckedState([...current, value]);
      }
    } else {
      const checkedNodes = getChildrenNodesValues(value, latest.current.data);
      setCheckedState(Array.from(new Set([...current, ...checkedNodes])));
    }
  }, []);

  const uncheckNode = useCallback((value: string) => {
    const current = latest.current.checkedState;

    if (latest.current.checkStrictly) {
      setCheckedState(current.filter((item) => item !== value));
    } else {
      const checkedNodes = getChildrenNodesValues(value, latest.current.data);
      setCheckedState(current.filter((item) => !checkedNodes.includes(item)));
    }
  }, []);

  const checkAllNodes = useCallback(() => {
    if (latest.current.checkStrictly) {
      setCheckedState(getAllNodeValues(latest.current.data));
    } else {
      setCheckedState(getAllChildrenNodes(latest.current.data));
    }
  }, []);

  const uncheckAllNodes = useCallback(() => {
    setCheckedState([]);
  }, []);

  const getCheckedNodes = useCallback((): CheckedNodeStatus[] => {
    if (latest.current.checkStrictly) {
      return latest.current.checkedState.map((value) => {
        const node = findTreeNode(value, latest.current.data);
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
    return getAllCheckedNodes(latest.current.data, latest.current.checkedState).result;
  }, []);

  const isNodeChecked = useCallback((value: string) => {
    if (latest.current.checkStrictly) {
      return latest.current.checkedState.includes(value);
    }
    return memoizedIsNodeChecked(value, latest.current.data, latest.current.checkedState);
  }, []);

  const isNodeIndeterminate = useCallback((value: string) => {
    if (latest.current.checkStrictly) {
      return false;
    }
    return memoizedIsNodeIndeterminate(value, latest.current.data, latest.current.checkedState);
  }, []);

  const isNodeLoading = useCallback(
    (value: string) => latest.current.loadingNodes.includes(value),
    []
  );

  const getNodeLoadError = useCallback(
    (value: string) => latest.current.loadErrors[value] || null,
    []
  );

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

  const getExpandedState = useCallback(() => latest.current.expandedState, []);
  const getSelectedState = useCallback(() => latest.current.selectedState, []);
  const getCheckedState = useCallback(() => latest.current.checkedState, []);
  const getAnchorNode = useCallback(() => latest.current.anchorNode, []);

  return useMemo(
    () => ({
      checkStrictly,
      multiple,
      expandedState: _expandedState,
      selectedState: _selectedState,
      checkedState: _checkedState,
      anchorNode,
      initialize,
      getExpandedState,
      getSelectedState,
      getCheckedState,
      getAnchorNode,

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
    }),
    [
      checkStrictly,
      multiple,
      _expandedState,
      _selectedState,
      _checkedState,
      anchorNode,
      data,
      loadingNodes,
      loadErrors,
    ]
  );
}

export type TreeController = ReturnType<typeof useTree>;
