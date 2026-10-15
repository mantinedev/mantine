import { useCallback, useMemo, useRef, useState } from 'react';
import { useCallbackRef, useLatestRef, useUncontrolled } from '@mantine/hooks';
import {
  CheckedNodeStatus,
  getAllCheckedNodes,
  getNormalizedCheckedState,
  isNodeChecked as getIsNodeChecked,
  isNodeIndeterminate as getIsNodeIndeterminate,
  normalizeCheckedState,
} from './checked-state/checked-state';
import type { TreeNodeData } from './Tree';
import {
  findTreeNode,
  getAllLeafValues,
  getAllNodeValues,
  getLeafValues,
  nodeHasChildren,
} from './tree-walk/tree-walk';

export type TreeExpandedState = Record<string, boolean>;

function getInitialTreeExpandedState(
  current: TreeExpandedState,
  data: TreeNodeData[]
): TreeExpandedState {
  let next: TreeExpandedState | null = null;

  const visit = (nodes: TreeNodeData[]) => {
    for (const node of nodes) {
      if (!(node.value in current)) {
        next = next || { ...current };
        next[node.value] = false;
      }

      if (Array.isArray(node.children)) {
        visit(node.children);
      }
    }
  };

  visit(data);
  return next || current;
}

function isSameTreeShape(a: TreeNodeData[], b: TreeNodeData[]): boolean {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    const left = a[i];
    const right = b[i];

    if (left.value !== right.value || !!left.hasChildren !== !!right.hasChildren) {
      return false;
    }

    const leftChildren = Array.isArray(left.children);
    if (leftChildren !== Array.isArray(right.children)) {
      return false;
    }

    if (leftChildren && !isSameTreeShape(left.children!, right.children!)) {
      return false;
    }
  }

  return true;
}

function isSameArray(a: string[], b: string[]) {
  return a.length === b.length && a.every((item, index) => item === b[index]);
}

export function getTreeExpandedState(
  data: TreeNodeData[],
  expandedNodesValues: string[] | '*'
): TreeExpandedState {
  const state = { ...getInitialTreeExpandedState({}, data) };

  if (expandedNodesValues === '*') {
    const result: TreeExpandedState = {};
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
  /** Value of the `checkStrictly` option. Tree parts do not read it, the store's check actions and queries read the option directly. Exposed for `renderNode` implementations. */
  checkStrictly: boolean;

  /** Value of the `multiple` option. Read by `Tree` for `aria-multiselectable` and by tree nodes to allow `Shift` range selection. */
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

  /** Initializes tree state based on provided data, called automatically by the Tree component.
   * When nodes are rendered with `FlatTreeNode`, call it with the tree data in an effect.
   */
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

  /** Clears the loaded cache and load error of a node, so the next expand loads its children again */
  invalidateNode: (value: string) => void;
}

export function useTree({
  initialSelectedState = [],
  expandedState: expandedStateProp,
  initialCheckedState = [],
  checkedState: checkedStateProp,
  initialExpandedState = {},
  selectedState: selectedStateProp,
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
    value: expandedStateProp,
    defaultValue: initialExpandedState,
    finalValue: {},
    onChange: onExpandedStateChange,
  });

  const [_selectedState, setSelectedStateInternal] = useUncontrolled({
    value: selectedStateProp,
    defaultValue: initialSelectedState,
    finalValue: [],
    onChange: onSelectedStateChange,
  });

  const [_checkedState, setCheckedStateInternal] = useUncontrolled({
    value: checkedStateProp,
    defaultValue: initialCheckedState,
    finalValue: [],
    onChange: onCheckedStateChange,
  });

  const [anchorNode, setAnchorNodeInternal] = useState<string | null>(null);

  const loadingNodesRef = useRef(new Set<string>());
  const loadedNodesRef = useRef(new Set<string>());
  const invalidatedNodesRef = useRef(new Set<string>());
  const [loadingNodes, setLoadingNodes] = useState<string[]>([]);
  const [loadErrors, setLoadErrors] = useState<Record<string, Error>>({});

  const handleNodeExpand = useCallbackRef(onNodeExpand);
  const handleNodeCollapse = useCallbackRef(onNodeCollapse);

  const latest = useLatestRef({
    data,
    expandedState: _expandedState,
    selectedState: _selectedState,
    checkedState: _checkedState,
    anchorNode,
    loadErrors,
    multiple,
    checkStrictly,
    onLoadChildren,
  });

  const [, setRenderCount] = useState(0);
  const requestRender = () => setRenderCount((count) => count + 1);

  const setExpandedState = useCallbackRef((next: TreeExpandedState) => {
    latest.current.expandedState = next;
    setExpandedStateInternal(next);
    requestRender();
  });

  const setSelectedState = useCallbackRef((next: string[]) => {
    latest.current.selectedState = next;
    setSelectedStateInternal(next);
    requestRender();
  });

  const writeCheckedState = useCallbackRef((next: string[]) => {
    latest.current.checkedState = next;
    setCheckedStateInternal(next);
    requestRender();
  });

  const setCheckedState = useCallbackRef((next: string[]) => {
    writeCheckedState(
      latest.current.checkStrictly ? next : normalizeCheckedState(next, latest.current.data)
    );
  });

  const getNormalizedChecked = useCallback(
    () => getNormalizedCheckedState(latest.current.checkedState, latest.current.data),
    []
  );

  const setAnchorNode = useCallback((next: string | null) => {
    latest.current.anchorNode = next;
    setAnchorNodeInternal(next);
  }, []);

  const syncLoadingNodes = useCallback(() => {
    setLoadingNodes(Array.from(loadingNodesRef.current));
  }, []);

  const setLoadError = useCallback((value: string, error: Error | null) => {
    const current = latest.current.loadErrors;

    if (!error && !(value in current)) {
      return;
    }

    const next = { ...current };

    if (error) {
      next[value] = error;
    } else {
      delete next[value];
    }

    latest.current.loadErrors = next;
    setLoadErrors(next);
  }, []);

  const initialize = useCallback((_data: TreeNodeData[]) => {
    if (!isSameTreeShape(latest.current.data, _data)) {
      latest.current.data = _data;
      setData(_data);
    }

    const currentExpandedState = latest.current.expandedState;
    const nextExpandedState = getInitialTreeExpandedState(currentExpandedState, _data);
    if (nextExpandedState !== currentExpandedState) {
      setExpandedState(nextExpandedState);
    }

    if (!latest.current.checkStrictly) {
      const currentCheckedState = latest.current.checkedState;
      const nextCheckedState = normalizeCheckedState(currentCheckedState, _data);
      if (!isSameArray(nextCheckedState, currentCheckedState)) {
        writeCheckedState(nextCheckedState);
      }
    }
  }, []);

  const loadNode = useCallback(async (value: string) => {
    if (!latest.current.onLoadChildren) {
      return;
    }

    if (loadingNodesRef.current.has(value) || loadedNodesRef.current.has(value)) {
      return;
    }

    loadingNodesRef.current.add(value);
    invalidatedNodesRef.current.delete(value);
    syncLoadingNodes();
    setLoadError(value, null);

    try {
      await latest.current.onLoadChildren(value);
      if (!invalidatedNodesRef.current.has(value)) {
        loadedNodesRef.current.add(value);
      }
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setLoadError(value, err);
    } finally {
      loadingNodesRef.current.delete(value);
      syncLoadingNodes();
    }
  }, []);

  const tryLoadAsync = useCallback(
    (value: string) => {
      if (!latest.current.onLoadChildren) {
        return;
      }

      const node = findTreeNode(value, latest.current.data);
      if (
        node &&
        (invalidatedNodesRef.current.has(value) ||
          (node.hasChildren && !Array.isArray(node.children)))
      ) {
        loadNode(value);
      }
    },
    [loadNode]
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
        setSelectedState([]);
        return;
      }

      setAnchorNode(value);
      setSelectedState([value]);
      return;
    }

    if (current.includes(value)) {
      setAnchorNode(null);
      setSelectedState(current.filter((item) => item !== value));
      return;
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
    if (latest.current.anchorNode === value) {
      setAnchorNode(null);
    }
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
        writeCheckedState([...current, value]);
      }
    } else {
      const checkedNodes = getLeafValues(value, latest.current.data);
      writeCheckedState(Array.from(new Set([...getNormalizedChecked(), ...checkedNodes])));
    }
  }, []);

  const uncheckNode = useCallback((value: string) => {
    const current = latest.current.checkedState;

    if (latest.current.checkStrictly) {
      writeCheckedState(current.filter((item) => item !== value));
    } else {
      const uncheckedNodes = new Set([value, ...getLeafValues(value, latest.current.data)]);
      writeCheckedState(getNormalizedChecked().filter((item) => !uncheckedNodes.has(item)));
    }
  }, []);

  const checkAllNodes = useCallback(() => {
    if (latest.current.checkStrictly) {
      writeCheckedState(getAllNodeValues(latest.current.data));
    } else {
      writeCheckedState(getAllLeafValues(latest.current.data));
    }
  }, []);

  const uncheckAllNodes = useCallback(() => {
    writeCheckedState([]);
  }, []);

  const getCheckedNodes = useCallback((): CheckedNodeStatus[] => {
    if (latest.current.checkStrictly) {
      return latest.current.checkedState.map((value) => {
        const node = findTreeNode(value, latest.current.data);
        return {
          checked: true,
          indeterminate: false,
          value,
          hasChildren: node ? nodeHasChildren(node) : false,
        };
      });
    }
    return getAllCheckedNodes(latest.current.data, getNormalizedChecked());
  }, []);

  const isNodeChecked = useCallback((value: string) => {
    if (latest.current.checkStrictly) {
      return latest.current.checkedState.includes(value);
    }
    return getIsNodeChecked(value, latest.current.data, getNormalizedChecked());
  }, []);

  const isNodeIndeterminate = useCallback((value: string) => {
    if (latest.current.checkStrictly) {
      return false;
    }
    return getIsNodeIndeterminate(value, latest.current.data, getNormalizedChecked());
  }, []);

  const isNodeLoading = useCallback((value: string) => loadingNodesRef.current.has(value), []);

  const getNodeLoadError = useCallback(
    (value: string) => latest.current.loadErrors[value] || null,
    []
  );

  const invalidateNode = useCallback((value: string) => {
    loadedNodesRef.current.delete(value);
    invalidatedNodesRef.current.add(value);
    setLoadError(value, null);
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
      loadNode,
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

export type TreeStore = UseTreeReturnType;
