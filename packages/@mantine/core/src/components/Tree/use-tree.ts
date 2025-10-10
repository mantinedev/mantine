import { useCallback, useState } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  CheckedNodeStatus,
  getAllCheckedNodes,
} from './get-all-checked-nodes/get-all-checked-nodes';
import {
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

export function getTreeExpandedState(data: TreeNodeData[], expandedNodesValues: string[] | '*') {
  const state = getInitialTreeExpandedState({}, data, []);

  if (expandedNodesValues === '*') {
    return Object.keys(state).reduce((acc, key) => ({ ...acc, [key]: true }), {});
  }

  expandedNodesValues.forEach((node) => {
    state[node] = true;
  });

  return state;
}

function getInitialCheckedState(initialState: string[], data: TreeNodeData[]) {
  const acc: string[] = [];

  initialState.forEach((node) => acc.push(...getChildrenNodesValues(node, data)));

  return Array.from(new Set(acc));
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
}

export interface UseTreeReturnType {
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

  const initialize = useCallback(
    (_data: TreeNodeData[]) => {
      setExpandedState(getInitialTreeExpandedState(_expandedState, _data, _selectedState));
      setCheckedState(getInitialCheckedState(_checkedState, _data));
      setData(_data);
    },
    [_selectedState, _checkedState, _expandedState]
  );

  const toggleExpanded = useCallback(
    (value: string) => {
      const nextState = { ..._expandedState, [value]: !_expandedState[value] };
      nextState[value] ? onNodeExpand?.(value) : onNodeCollapse?.(value);
      setExpandedState(nextState);
    },
    [onNodeCollapse, onNodeExpand, _expandedState]
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

      setExpandedState({ ..._expandedState, [value]: true });
    },
    [onNodeExpand, _expandedState]
  );

  const expandAllNodes = useCallback(() => {
    const nextState = { ..._expandedState };
    Object.keys(nextState).forEach((key) => {
      nextState[key] = true;
    });

    setExpandedState(nextState);
  }, [_expandedState]);

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
      const checkedNodes = getChildrenNodesValues(value, data);
      setCheckedState(Array.from(new Set([..._checkedState, ...checkedNodes])));
    },
    [data, _checkedState]
  );

  const uncheckNode = useCallback(
    (value: string) => {
      const checkedNodes = getChildrenNodesValues(value, data);
      setCheckedState(_checkedState.filter((item) => !checkedNodes.includes(item)));
    },
    [data, _checkedState]
  );

  const checkAllNodes = useCallback(() => {
    setCheckedState(getAllChildrenNodes(data));
  }, [data]);

  const uncheckAllNodes = useCallback(() => {
    setCheckedState([]);
  }, []);

  const getCheckedNodes = () => getAllCheckedNodes(data, _checkedState).result;
  const isNodeChecked = (value: string) => memoizedIsNodeChecked(value, data, _checkedState);
  const isNodeIndeterminate = (value: string) =>
    memoizedIsNodeIndeterminate(value, data, _checkedState);

  return {
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
  };
}

export type TreeController = ReturnType<typeof useTree>;
