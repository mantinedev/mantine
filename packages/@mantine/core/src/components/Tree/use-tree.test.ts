import { createElement, useState } from 'react';
import { act, renderHook } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { render, tests } from '@mantine-tests/core';
import { filterTreeData } from './filter-tree-data/filter-tree-data';
import { mergeAsyncChildren } from './merge-async-children/merge-async-children';
import { Tree, TreeNodeData } from './Tree';
import { getTreeExpandedState, TreeExpandedState, useTree, UseTreeReturnType } from './use-tree';

const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
          { label: 'Input.tsx', value: 'src/components/Input.tsx' },
        ],
      },
      {
        label: 'hooks',
        value: 'src/hooks',
        children: [{ label: 'use-state.ts', value: 'src/hooks/use-state.ts' }],
      },
    ],
  },
  {
    label: 'package.json',
    value: 'package.json',
  },
];

describe('getTreeExpandedState', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useTree({ multiple: true }),
    actions: [
      'initialize',
      'toggleExpanded',
      'collapse',
      'expand',
      'expandAllNodes',
      'collapseAllNodes',
      'setExpandedState',
      'checkNode',
      'uncheckNode',
      'checkAllNodes',
      'uncheckAllNodes',
      'setCheckedState',
      'toggleSelected',
      'select',
      'deselect',
      'clearSelected',
      'setSelectedState',
      'getCheckedNodes',
      'isNodeChecked',
      'isNodeIndeterminate',
      'isNodeLoading',
      'getNodeLoadError',
      'loadNode',
      'invalidateNode',
      'getExpandedState',
      'getSelectedState',
      'getCheckedState',
      'getAnchorNode',
      'getNodePath',
      'expandParents',
      'scrollTo',
    ],
    setup: (controller) => controller.initialize(data),
    changeState: (controller) => controller.select('src'),
  });

  it('returns current state from getters', () => {
    const hook = renderHook(() => useTree({ multiple: true }));
    act(() => hook.result.current.initialize(data));
    expect(hook.result.current.getSelectedState()).toEqual([]);
    expect(hook.result.current.getAnchorNode()).toBe(null);

    act(() => hook.result.current.expand('src'));
    act(() => hook.result.current.select('package.json'));
    act(() => hook.result.current.checkNode('package.json'));
    expect(hook.result.current.getExpandedState().src).toBe(true);
    expect(hook.result.current.getSelectedState()).toEqual(['package.json']);
    expect(hook.result.current.getCheckedState()).toEqual(['package.json']);
  });

  it('returns a new controller when the node data changes', () => {
    const hook = renderHook(() => useTree());
    const initial = hook.result.current;

    act(() => hook.result.current.initialize(data));
    expect(hook.result.current).not.toBe(initial);
  });

  it('returns all nodes collapsed when given an empty array', () => {
    const state = getTreeExpandedState(data, []);
    expect(Object.values(state).every((v) => v === false)).toBe(true);
  });

  it('expands all nodes when given "*"', () => {
    const state = getTreeExpandedState(data, '*');
    expect(Object.values(state).every((v) => v === true)).toBe(true);
  });

  it('expands only specified nodes', () => {
    const state = getTreeExpandedState(data, ['src', 'src/components']);
    expect(state.src).toBe(true);
    expect(state['src/components']).toBe(true);
    expect(state['src/hooks']).toBe(false);
    expect(state['package.json']).toBe(false);
  });
});

describe('@mantine/core/Tree/use-tree', () => {
  describe('default state', () => {
    it('returns correct default values', () => {
      const { result } = renderHook(() => useTree());
      expect(result.current.expandedState).toEqual({});
      expect(result.current.selectedState).toEqual([]);
      expect(result.current.checkedState).toEqual([]);
      expect(result.current.multiple).toBe(false);
      expect(result.current.anchorNode).toBe(null);
    });
  });

  describe('initialize', () => {
    it('populates expanded state from tree data', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));

      expect('src' in result.current.expandedState).toBe(true);
      expect('src/components' in result.current.expandedState).toBe(true);
      expect('package.json' in result.current.expandedState).toBe(true);
    });

    it('preserves initialExpandedState values during initialize', () => {
      const { result } = renderHook(() => useTree({ initialExpandedState: { src: true } }));

      act(() => result.current.initialize(data));

      expect(result.current.expandedState.src).toBe(true);
    });
  });

  describe('expanded state', () => {
    it('toggleExpanded toggles a node between expanded and collapsed', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));

      const initialValue = result.current.expandedState.src;

      act(() => result.current.toggleExpanded('src'));
      expect(result.current.expandedState.src).toBe(!initialValue);

      act(() => result.current.toggleExpanded('src'));
      expect(result.current.expandedState.src).toBe(initialValue);
    });

    it('expand sets a node to expanded', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.collapse('src'));
      act(() => result.current.expand('src'));

      expect(result.current.expandedState.src).toBe(true);
    });

    it('collapse sets a node to collapsed', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.expand('src'));
      act(() => result.current.collapse('src'));

      expect(result.current.expandedState.src).toBe(false);
    });

    it('expandAllNodes expands every node', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.expandAllNodes());

      expect(Object.values(result.current.expandedState).every((v) => v === true)).toBe(true);
    });

    it('collapseAllNodes collapses every node', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.expandAllNodes());
      act(() => result.current.collapseAllNodes());

      expect(Object.values(result.current.expandedState).every((v) => v === false)).toBe(true);
    });

    it('setExpandedState replaces expanded state', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.setExpandedState({ src: true, 'package.json': false }));

      expect(result.current.expandedState).toEqual({ src: true, 'package.json': false });
    });

    it('calls onNodeExpand when a node is expanded', () => {
      const onNodeExpand = jest.fn();
      const { result } = renderHook(() => useTree({ onNodeExpand }));

      act(() => result.current.initialize(data));
      act(() => result.current.expand('src'));

      expect(onNodeExpand).toHaveBeenCalledWith('src');
    });

    it('calls onNodeCollapse when a node is collapsed', () => {
      const onNodeCollapse = jest.fn();
      const { result } = renderHook(() => useTree({ onNodeCollapse }));

      act(() => result.current.initialize(data));
      act(() => result.current.expand('src'));
      act(() => result.current.collapse('src'));

      expect(onNodeCollapse).toHaveBeenCalledWith('src');
    });

    it('does not call onNodeExpand when expand is called on already expanded node', () => {
      const onNodeExpand = jest.fn();
      const { result } = renderHook(() => useTree({ onNodeExpand }));

      act(() => result.current.initialize(data));
      act(() => result.current.expand('src'));
      onNodeExpand.mockClear();

      act(() => result.current.expand('src'));
      expect(onNodeExpand).not.toHaveBeenCalled();
    });

    it('does not call onNodeCollapse when collapse is called on already collapsed node', () => {
      const onNodeCollapse = jest.fn();
      const { result } = renderHook(() => useTree({ onNodeCollapse }));

      act(() => result.current.initialize(data));
      act(() => result.current.collapse('src'));
      onNodeCollapse.mockClear();

      act(() => result.current.collapse('src'));
      expect(onNodeCollapse).not.toHaveBeenCalled();
    });

    it('toggleExpanded calls onNodeExpand/onNodeCollapse', () => {
      const onNodeExpand = jest.fn();
      const onNodeCollapse = jest.fn();
      const { result } = renderHook(() => useTree({ onNodeExpand, onNodeCollapse }));

      act(() => result.current.initialize(data));
      act(() => result.current.collapse('src'));

      act(() => result.current.toggleExpanded('src'));
      expect(onNodeExpand).toHaveBeenCalledWith('src');

      act(() => result.current.toggleExpanded('src'));
      expect(onNodeCollapse).toHaveBeenCalledWith('src');
    });
  });

  describe('selected state (single mode)', () => {
    it('select sets a single node as selected', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.select('src'));

      expect(result.current.selectedState).toEqual(['src']);
      expect(result.current.anchorNode).toBe('src');
    });

    it('select replaces the previous selection in single mode', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.select('src'));
      act(() => result.current.select('package.json'));

      expect(result.current.selectedState).toEqual(['package.json']);
    });

    it('deselect removes a node from selection', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.select('src'));
      act(() => result.current.deselect('src'));

      expect(result.current.selectedState).toEqual([]);
      expect(result.current.anchorNode).toBe(null);
    });

    it('clearSelected clears all selections', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.select('src'));
      act(() => result.current.clearSelected());

      expect(result.current.selectedState).toEqual([]);
      expect(result.current.anchorNode).toBe(null);
    });

    it('setSelectedState replaces selected state', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.setSelectedState(['src', 'package.json']));

      expect(result.current.selectedState).toEqual(['src', 'package.json']);
    });

    it('toggleSelected selects node in single mode', () => {
      const { result } = renderHook(() => useTree({ initialSelectedState: ['package.json'] }));

      act(() => result.current.toggleSelected('src'));
      expect(result.current.selectedState).toEqual(['src']);
      expect(result.current.anchorNode).toBe('src');
    });

    it('toggleSelected deselects node in single mode', () => {
      const onSelectedStateChange = jest.fn();
      const { result } = renderHook(() =>
        useTree({ initialSelectedState: ['src'], onSelectedStateChange })
      );

      act(() => result.current.toggleSelected('src'));
      expect(result.current.selectedState).toEqual([]);
      expect(result.current.anchorNode).toBe(null);
      expect(onSelectedStateChange).toHaveBeenCalledWith([]);
    });
  });

  describe('selected state (multiple mode)', () => {
    it('select adds to existing selection', () => {
      const { result } = renderHook(() => useTree({ multiple: true }));

      act(() => result.current.select('src'));
      act(() => result.current.select('package.json'));

      expect(result.current.selectedState).toEqual(['src', 'package.json']);
    });

    it('select does not add duplicates', () => {
      const { result } = renderHook(() => useTree({ multiple: true }));

      act(() => result.current.select('src'));
      act(() => result.current.select('src'));

      expect(result.current.selectedState).toEqual(['src']);
    });

    it('toggleSelected adds nodes to selection in multiple mode', () => {
      const { result } = renderHook(() => useTree({ multiple: true }));

      act(() => result.current.toggleSelected('src'));
      act(() => result.current.toggleSelected('package.json'));

      expect(result.current.selectedState).toEqual(['src', 'package.json']);
    });

    it('toggleSelected removes node from selection in multiple mode', () => {
      const { result } = renderHook(() => useTree({ multiple: true }));

      act(() => result.current.toggleSelected('src'));
      act(() => result.current.toggleSelected('package.json'));
      act(() => result.current.toggleSelected('src'));

      expect(result.current.selectedState).toEqual(['package.json']);
      expect(result.current.anchorNode).toBe(null);
    });

    it('deselect removes only the specified node', () => {
      const { result } = renderHook(() => useTree({ multiple: true }));

      act(() => result.current.select('src'));
      act(() => result.current.select('package.json'));
      act(() => result.current.deselect('src'));

      expect(result.current.selectedState).toEqual(['package.json']);
    });
  });

  describe('checked state', () => {
    it('checkNode checks a leaf node', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.checkNode('package.json'));

      expect(result.current.checkedState).toContain('package.json');
    });

    it('checkNode checks all children of a parent node', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.checkNode('src/components'));

      expect(result.current.checkedState).toContain('src/components/Button.tsx');
      expect(result.current.checkedState).toContain('src/components/Input.tsx');
    });

    it('uncheckNode unchecks a node and its children', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.checkNode('src/components'));
      act(() => result.current.uncheckNode('src/components'));

      expect(result.current.checkedState).not.toContain('src/components/Button.tsx');
      expect(result.current.checkedState).not.toContain('src/components/Input.tsx');
    });

    it('checkAllNodes checks every leaf node', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.checkAllNodes());

      expect(result.current.checkedState).toContain('src/components/Button.tsx');
      expect(result.current.checkedState).toContain('src/components/Input.tsx');
      expect(result.current.checkedState).toContain('src/hooks/use-state.ts');
      expect(result.current.checkedState).toContain('package.json');
    });

    it('uncheckAllNodes clears all checked state', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.checkAllNodes());
      act(() => result.current.uncheckAllNodes());

      expect(result.current.checkedState).toEqual([]);
    });

    it('setCheckedState replaces checked state', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.setCheckedState(['package.json']));

      expect(result.current.checkedState).toEqual(['package.json']);
    });

    it('isNodeChecked returns true for a checked leaf node', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.checkNode('package.json'));

      expect(result.current.isNodeChecked('package.json')).toBe(true);
      expect(result.current.isNodeChecked('src')).toBe(false);
    });

    it('isNodeChecked returns true for a parent when all children are checked', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.checkNode('src'));

      expect(result.current.isNodeChecked('src')).toBe(true);
      expect(result.current.isNodeChecked('src/components')).toBe(true);
    });

    it('isNodeIndeterminate returns true when some children are checked', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.checkNode('src/components/Button.tsx'));

      expect(result.current.isNodeIndeterminate('src/components')).toBe(true);
      expect(result.current.isNodeIndeterminate('src')).toBe(true);
    });

    it('isNodeIndeterminate returns false when all children are checked', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.checkNode('src/components'));

      expect(result.current.isNodeIndeterminate('src/components')).toBe(false);
    });

    it('getCheckedNodes returns checked nodes with correct status', () => {
      const { result } = renderHook(() => useTree());

      act(() => result.current.initialize(data));
      act(() => result.current.checkNode('src/components/Button.tsx'));

      const checkedNodes = result.current.getCheckedNodes();
      const buttonNode = checkedNodes.find((n) => n.value === 'src/components/Button.tsx');
      expect(buttonNode).toBeDefined();
      expect(buttonNode!.checked).toBe(true);
      expect(buttonNode!.hasChildren).toBe(false);

      const componentsNode = checkedNodes.find((n) => n.value === 'src/components');
      expect(componentsNode).toBeDefined();
      expect(componentsNode!.indeterminate).toBe(true);
      expect(componentsNode!.hasChildren).toBe(true);
    });
  });

  describe('initial state', () => {
    it('respects initialSelectedState', () => {
      const { result } = renderHook(() => useTree({ initialSelectedState: ['src'] }));
      expect(result.current.selectedState).toEqual(['src']);
    });

    it('respects initialCheckedState and expands to leaf nodes on initialize', () => {
      const { result } = renderHook(() => useTree({ initialCheckedState: ['src/components'] }));

      act(() => result.current.initialize(data));

      expect(result.current.checkedState).toContain('src/components/Button.tsx');
      expect(result.current.checkedState).toContain('src/components/Input.tsx');
    });
  });

  describe('callbacks', () => {
    it('calls onExpandedStateChange when expanded state changes', () => {
      const onExpandedStateChange = jest.fn();
      const { result } = renderHook(() => useTree({ onExpandedStateChange }));

      act(() => result.current.initialize(data));

      expect(onExpandedStateChange).toHaveBeenCalled();
    });

    it('calls onSelectedStateChange when selected state changes', () => {
      const onSelectedStateChange = jest.fn();
      const { result } = renderHook(() => useTree({ onSelectedStateChange }));

      act(() => result.current.select('src'));

      expect(onSelectedStateChange).toHaveBeenCalledWith(['src']);
    });

    it('calls onCheckedStateChange when checked state changes', () => {
      const onCheckedStateChange = jest.fn();
      const { result } = renderHook(() => useTree({ onCheckedStateChange }));

      act(() => result.current.initialize(data));
      act(() => result.current.checkNode('package.json'));

      expect(onCheckedStateChange).toHaveBeenCalledWith(expect.arrayContaining(['package.json']));
    });
  });

  describe('async loading', () => {
    const asyncData: TreeNodeData[] = [
      { label: 'Documents', value: 'documents', hasChildren: true },
      { label: 'Photos', value: 'photos', hasChildren: true },
      { label: 'readme.md', value: 'readme' },
    ];

    it('loadNode calls onLoadChildren and sets loading state', async () => {
      let resolveLoad: () => void;
      const onLoadChildren = jest.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveLoad = resolve;
          })
      );

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      let loadPromise: Promise<void>;
      act(() => {
        loadPromise = result.current.loadNode('documents');
      });

      expect(result.current.isNodeLoading('documents')).toBe(true);
      expect(onLoadChildren).toHaveBeenCalledWith('documents');

      await act(async () => {
        resolveLoad!();
        await loadPromise!;
      });

      expect(result.current.isNodeLoading('documents')).toBe(false);
    });

    it('returns a new controller when the loading state changes', async () => {
      let resolveLoad: () => void;
      const onLoadChildren = jest.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveLoad = resolve;
          })
      );

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      const beforeLoad = result.current;

      let loadPromise: Promise<void>;
      act(() => {
        loadPromise = result.current.loadNode('documents');
      });

      expect(result.current).not.toBe(beforeLoad);

      const whileLoading = result.current;

      await act(async () => {
        resolveLoad!();
        await loadPromise!;
      });

      expect(result.current).not.toBe(whileLoading);
    });

    it('returns a new controller when a node fails to load', async () => {
      const onLoadChildren = jest.fn(() => Promise.reject(new Error('failed')));

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      const beforeLoad = result.current;

      await act(async () => {
        await result.current.loadNode('documents');
      });

      expect(result.current).not.toBe(beforeLoad);
      expect(result.current.getNodeLoadError('documents')?.message).toBe('failed');
    });

    it('loadNode does not call onLoadChildren twice for same node', async () => {
      const onLoadChildren = jest.fn(
        () =>
          new Promise<void>((resolve) => {
            setTimeout(resolve, 10);
          })
      );

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      let p1: Promise<void>;
      let p2: Promise<void>;
      act(() => {
        p1 = result.current.loadNode('documents');
        p2 = result.current.loadNode('documents');
      });

      await act(async () => {
        await p1!;
        await p2!;
      });

      expect(onLoadChildren).toHaveBeenCalledTimes(1);
    });

    it('loadNode does not re-fetch after successful load', async () => {
      const onLoadChildren = jest.fn(() => Promise.resolve());

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      await act(async () => {
        await result.current.loadNode('documents');
      });
      await act(async () => {
        await result.current.loadNode('documents');
      });

      expect(onLoadChildren).toHaveBeenCalledTimes(1);
    });

    it('loadNode sets error state on failure', async () => {
      const testError = new Error('Network error');
      const onLoadChildren = jest.fn(() => Promise.reject(testError));

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      await act(async () => {
        await result.current.loadNode('documents');
      });

      expect(result.current.isNodeLoading('documents')).toBe(false);
      expect(result.current.getNodeLoadError('documents')).toBe(testError);
    });

    it('returns the loading state and load error right after loadNode within one handler', async () => {
      const testError = new Error('Network error');
      let rejectLoad: (error: Error) => void;
      const onLoadChildren = jest.fn(
        () =>
          new Promise<void>((_, reject) => {
            rejectLoad = reject;
          })
      );

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      let loading = false;
      let error: Error | null = null;
      let loadPromise: Promise<void>;

      act(() => {
        loadPromise = result.current.loadNode('documents');
        loading = result.current.isNodeLoading('documents');
      });

      await act(async () => {
        rejectLoad!(testError);
        await loadPromise!;
        error = result.current.getNodeLoadError('documents');
        loading = result.current.isNodeLoading('documents');
      });

      expect(error).toBe(testError);
      expect(loading).toBe(false);
    });

    it('invalidateNode clears loaded cache and error, allowing re-fetch', async () => {
      let callCount = 0;
      const onLoadChildren = jest.fn(() => {
        callCount += 1;
        if (callCount === 1) {
          return Promise.reject(new Error('fail'));
        }
        return Promise.resolve();
      });

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      await act(async () => {
        await result.current.loadNode('documents');
      });
      expect(result.current.getNodeLoadError('documents')).toBeTruthy();

      act(() => result.current.invalidateNode('documents'));
      expect(result.current.getNodeLoadError('documents')).toBe(null);

      await act(async () => {
        await result.current.loadNode('documents');
      });
      expect(onLoadChildren).toHaveBeenCalledTimes(2);
      expect(result.current.getNodeLoadError('documents')).toBe(null);
    });

    it('loadNode does nothing when onLoadChildren is not provided', async () => {
      const { result } = renderHook(() => useTree());
      act(() => result.current.initialize(asyncData));

      await act(async () => {
        await result.current.loadNode('documents');
      });

      expect(result.current.isNodeLoading('documents')).toBe(false);
    });

    it('expand triggers async load for nodes with hasChildren', async () => {
      const onLoadChildren = jest.fn(() => Promise.resolve());

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      await act(async () => {
        result.current.expand('documents');
        await Promise.resolve();
      });

      expect(onLoadChildren).toHaveBeenCalledWith('documents');
    });

    it('toggleExpanded triggers async load when expanding', async () => {
      const onLoadChildren = jest.fn(() => Promise.resolve());

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      await act(async () => {
        result.current.toggleExpanded('documents');
        await Promise.resolve();
      });

      expect(onLoadChildren).toHaveBeenCalledWith('documents');
    });

    it('toggleExpanded does not trigger async load when collapsing', async () => {
      const onLoadChildren = jest.fn(() => Promise.resolve());

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(asyncData));

      await act(async () => {
        result.current.expand('documents');
        await Promise.resolve();
      });
      onLoadChildren.mockClear();

      act(() => result.current.toggleExpanded('documents'));

      expect(onLoadChildren).not.toHaveBeenCalled();
    });

    it('expand does not trigger async load for nodes with children already loaded', async () => {
      const dataWithChildren: TreeNodeData[] = [
        {
          label: 'Documents',
          value: 'documents',
          children: [{ label: 'file.txt', value: 'documents/file.txt' }],
        },
      ];
      const onLoadChildren = jest.fn(() => Promise.resolve());

      const { result } = renderHook(() => useTree({ onLoadChildren }));
      act(() => result.current.initialize(dataWithChildren));

      act(() => result.current.expand('documents'));

      expect(onLoadChildren).not.toHaveBeenCalled();
    });

    it('getNodeLoadError returns null for nodes without errors', () => {
      const { result } = renderHook(() => useTree());
      act(() => result.current.initialize(asyncData));

      expect(result.current.getNodeLoadError('documents')).toBe(null);
      expect(result.current.getNodeLoadError('nonexistent')).toBe(null);
    });

    it('isNodeLoading returns false for nodes not being loaded', () => {
      const { result } = renderHook(() => useTree());
      act(() => result.current.initialize(asyncData));

      expect(result.current.isNodeLoading('documents')).toBe(false);
      expect(result.current.isNodeLoading('nonexistent')).toBe(false);
    });
  });

  describe('node path', () => {
    it('getNodePath returns the path from the root to the node', () => {
      const { result } = renderHook(() => useTree());
      act(() => result.current.initialize(data));

      expect(result.current.getNodePath('src')).toStrictEqual(['src']);
      expect(result.current.getNodePath('src/components')).toStrictEqual(['src', 'src/components']);
      expect(result.current.getNodePath('src/components/Input.tsx')).toStrictEqual([
        'src',
        'src/components',
        'src/components/Input.tsx',
      ]);
      expect(result.current.getNodePath('package.json')).toStrictEqual(['package.json']);
    });

    it('getNodePath returns null for unknown values and before initialization', () => {
      const { result } = renderHook(() => useTree());
      expect(result.current.getNodePath('src')).toBe(null);

      act(() => result.current.initialize(data));
      expect(result.current.getNodePath('unknown')).toBe(null);
    });

    it('getNodePath finds async children merged into the data', () => {
      const { result } = renderHook(() => useTree());
      act(() =>
        result.current.initialize([{ label: 'Folder', value: 'folder', hasChildren: true }])
      );
      expect(result.current.getNodePath('folder/file')).toBe(null);

      act(() =>
        result.current.initialize([
          {
            label: 'Folder',
            value: 'folder',
            hasChildren: true,
            children: [{ label: 'File', value: 'folder/file' }],
          },
        ])
      );
      expect(result.current.getNodePath('folder/file')).toStrictEqual(['folder', 'folder/file']);
    });

    it('expandParents expands every ancestor and keeps the node itself unchanged', () => {
      const onNodeExpand = jest.fn();
      const onExpandedStateChange = jest.fn();
      const { result } = renderHook(() => useTree({ onNodeExpand, onExpandedStateChange }));
      act(() => result.current.initialize(data));
      onExpandedStateChange.mockClear();

      act(() => result.current.expandParents('src/components/Button.tsx'));

      expect(result.current.getExpandedState()).toStrictEqual({
        src: true,
        'src/components': true,
        'src/components/Button.tsx': false,
        'src/components/Input.tsx': false,
        'src/hooks': false,
        'src/hooks/use-state.ts': false,
        'package.json': false,
      });
      expect(onNodeExpand.mock.calls).toStrictEqual([['src'], ['src/components']]);
      expect(onExpandedStateChange).toHaveBeenCalledTimes(1);
    });

    it('expandParents does not call onNodeExpand for ancestors that are already expanded', () => {
      const onNodeExpand = jest.fn();
      const { result } = renderHook(() =>
        useTree({ onNodeExpand, initialExpandedState: { src: true } })
      );
      act(() => result.current.initialize(data));

      act(() => result.current.expandParents('src/components/Button.tsx'));

      expect(onNodeExpand.mock.calls).toStrictEqual([['src/components']]);
    });

    it('expandParents does nothing for root nodes and unknown values', () => {
      const onExpandedStateChange = jest.fn();
      const { result } = renderHook(() => useTree({ onExpandedStateChange }));
      act(() => result.current.initialize(data));
      onExpandedStateChange.mockClear();

      act(() => result.current.expandParents('src'));
      act(() => result.current.expandParents('unknown'));

      expect(onExpandedStateChange).not.toHaveBeenCalled();
    });
  });

  it('actions captured before a state change operate on the current state', () => {
    const hook = renderHook(() => useTree({ multiple: true }));
    act(() => hook.result.current.initialize(data));

    const { select } = hook.result.current;

    act(() => select('src'));
    act(() => select('package.json'));

    expect(hook.result.current.selectedState).toStrictEqual(['src', 'package.json']);
  });

  it('queries captured before a state change read the current state', () => {
    const hook = renderHook(() => useTree({ multiple: true }));
    act(() => hook.result.current.initialize(data));

    const { isNodeChecked } = hook.result.current;
    expect(isNodeChecked('package.json')).toBe(false);

    act(() => hook.result.current.checkNode('package.json'));
    expect(isNodeChecked('package.json')).toBe(true);
  });

  describe('consecutive calls within one batch', () => {
    it('composes expand, collapse and toggleExpanded', () => {
      const { result } = renderHook(() => useTree());
      let read = {};

      act(() => {
        result.current.expand('a');
        result.current.expand('b');
        result.current.toggleExpanded('c');
        result.current.collapse('a');
        read = result.current.getExpandedState();
      });

      expect(read).toStrictEqual({ a: false, b: true, c: true });
      expect(result.current.expandedState).toStrictEqual({ a: false, b: true, c: true });
    });

    it('composes expandAllNodes and collapse after initialize', () => {
      const { result } = renderHook(() => useTree());

      act(() => {
        result.current.initialize(data);
        result.current.expandAllNodes();
        result.current.collapse('src/hooks');
      });

      expect(result.current.expandedState).toStrictEqual({
        src: true,
        'src/components': true,
        'src/components/Button.tsx': true,
        'src/components/Input.tsx': true,
        'src/hooks': false,
        'src/hooks/use-state.ts': true,
        'package.json': true,
      });
    });

    it('composes select, toggleSelected and deselect in multiple mode', () => {
      const { result } = renderHook(() => useTree({ multiple: true }));
      let read: string[] = [];
      let anchor: string | null = null;

      act(() => {
        result.current.select('a');
        result.current.select('b');
        result.current.toggleSelected('c');
        result.current.deselect('a');
        read = result.current.getSelectedState();
        anchor = result.current.getAnchorNode();
      });

      expect(read).toStrictEqual(['b', 'c']);
      expect(anchor).toBe('c');
      expect(result.current.selectedState).toStrictEqual(['b', 'c']);
    });

    it('clears the anchor when deselecting a node selected in the same handler', () => {
      const { result } = renderHook(() => useTree({ multiple: true }));

      act(() => {
        result.current.select('a');
        result.current.deselect('a');
      });

      expect(result.current.anchorNode).toBe(null);
      expect(result.current.selectedState).toStrictEqual([]);
    });

    it('composes checkNode and uncheckNode', () => {
      const { result } = renderHook(() => useTree());
      act(() => result.current.initialize(data));
      let read: string[] = [];
      let checked = false;

      act(() => {
        result.current.checkNode('src/components');
        result.current.checkNode('package.json');
        result.current.uncheckNode('src/components/Input.tsx');
        read = result.current.getCheckedState();
        checked = result.current.isNodeChecked('package.json');
      });

      expect(read).toStrictEqual(['src/components/Button.tsx', 'package.json']);
      expect(checked).toBe(true);
      expect(result.current.checkedState).toStrictEqual([
        'src/components/Button.tsx',
        'package.json',
      ]);
    });

    it('composes setters with actions', () => {
      const { result } = renderHook(() => useTree({ multiple: true }));
      act(() => result.current.initialize(data));

      act(() => {
        result.current.setSelectedState(['src']);
        result.current.select('package.json');
        result.current.setExpandedState({ src: true });
        result.current.expand('src/hooks');
        result.current.uncheckAllNodes();
        result.current.checkNode('package.json');
      });

      expect(result.current.selectedState).toStrictEqual(['src', 'package.json']);
      expect(result.current.expandedState).toStrictEqual({ src: true, 'src/hooks': true });
      expect(result.current.checkedState).toStrictEqual(['package.json']);
    });

    it('composes calls on state the parent controls and keeps the controlled value', async () => {
      const onExpandedStateChange = jest.fn();
      const onSelectedStateChange = jest.fn();
      const onCheckedStateChange = jest.fn();
      const { result } = renderHook(() =>
        useTree({
          multiple: true,
          expandedState: {},
          onExpandedStateChange,
          selectedState: [],
          onSelectedStateChange,
          checkedState: [],
          onCheckedStateChange,
        })
      );
      act(() => result.current.initialize(data));
      onExpandedStateChange.mockClear();
      onCheckedStateChange.mockClear();

      await act(async () => {
        result.current.expand('a');
        result.current.expand('b');
        result.current.select('a');
        result.current.select('b');
        result.current.checkNode('package.json');
        result.current.checkNode('src/hooks');
      });

      expect(onExpandedStateChange).toHaveBeenLastCalledWith(
        expect.objectContaining({ a: true, b: true })
      );
      expect(onSelectedStateChange).toHaveBeenLastCalledWith(['a', 'b']);
      expect(onCheckedStateChange).toHaveBeenLastCalledWith([
        'package.json',
        'src/hooks/use-state.ts',
      ]);
      expect(result.current.getExpandedState()).toStrictEqual({});
      expect(result.current.getSelectedState()).toStrictEqual([]);
      expect(result.current.getCheckedState()).toStrictEqual([]);
    });
  });
});

describe('@mantine/core/Tree/use-tree data changes', () => {
  it('keeps checked values that the filtered data does not contain', () => {
    const { result } = renderHook(() => useTree());
    act(() => result.current.initialize(data));
    act(() => result.current.checkNode('package.json'));

    act(() => result.current.initialize(filterTreeData(data, 'Button')));
    expect(result.current.getCheckedState()).toStrictEqual(['package.json']);

    act(() => result.current.initialize(data));
    expect(result.current.getCheckedState()).toStrictEqual(['package.json']);
    expect(result.current.isNodeChecked('package.json')).toBe(true);
  });

  it('keeps expanded values that the filtered data does not contain', () => {
    const { result } = renderHook(() => useTree());
    act(() => result.current.initialize(data));
    act(() => result.current.expand('src/hooks'));

    act(() => result.current.initialize(filterTreeData(data, 'Button')));
    act(() => result.current.initialize(data));
    expect(result.current.getExpandedState()['src/hooks']).toBe(true);
  });

  it('keeps initialCheckedState when data arrives after mount', () => {
    const { result } = renderHook(() =>
      useTree({ initialCheckedState: ['src/hooks', 'package.json'] })
    );
    act(() => result.current.initialize([]));
    expect(result.current.getCheckedState()).toStrictEqual(['src/hooks', 'package.json']);

    act(() => result.current.initialize(data));
    expect(result.current.getCheckedState()).toStrictEqual([
      'src/hooks/use-state.ts',
      'package.json',
    ]);
  });

  it('does not report controlled checked state when data is empty', () => {
    const onCheckedStateChange = jest.fn();
    const { result } = renderHook(() =>
      useTree({ checkedState: ['package.json'], onCheckedStateChange })
    );
    act(() => result.current.initialize([]));
    act(() => result.current.initialize(data));
    expect(onCheckedStateChange).not.toHaveBeenCalled();
  });

  it('expands a checked async parent to its children once they are loaded', () => {
    const asyncData: TreeNodeData[] = [
      { label: 'Documents', value: 'documents', hasChildren: true },
      { label: 'readme.md', value: 'readme' },
    ];
    const { result } = renderHook(() => useTree({ initialCheckedState: ['documents'] }));
    act(() => result.current.initialize(asyncData));
    expect(result.current.getCheckedState()).toStrictEqual(['documents']);
    expect(result.current.isNodeChecked('documents')).toBe(true);

    act(() =>
      result.current.initialize(
        mergeAsyncChildren(asyncData, 'documents', [
          { label: 'a.txt', value: 'documents/a.txt' },
          { label: 'b.txt', value: 'documents/b.txt' },
        ])
      )
    );
    expect(result.current.getCheckedState()).toStrictEqual(['documents/a.txt', 'documents/b.txt']);
    expect(result.current.isNodeChecked('documents')).toBe(true);
  });

  it('does not update state when initialized with structurally equal data', () => {
    const onExpandedStateChange = jest.fn();
    const onCheckedStateChange = jest.fn();
    const { result } = renderHook(() =>
      useTree({ onExpandedStateChange, onCheckedStateChange, initialCheckedState: ['src'] })
    );
    act(() => result.current.initialize(data));
    const store = result.current;
    onExpandedStateChange.mockClear();
    onCheckedStateChange.mockClear();

    act(() => result.current.initialize(JSON.parse(JSON.stringify(data))));
    expect(result.current).toBe(store);
    expect(onExpandedStateChange).not.toHaveBeenCalled();
    expect(onCheckedStateChange).not.toHaveBeenCalled();
  });

  it('does not loop when an external store is used with inline data', () => {
    function Demo() {
      const store = useTree();
      return createElement(Tree, {
        data: [{ label: 'X', value: 'x', children: [{ label: 'Y', value: 'y' }] }],
        store,
      });
    }

    expect(() => render(createElement(Demo))).not.toThrow();
  });
});

describe('@mantine/core/Tree/use-tree checked state normalisation', () => {
  it('cascades a parent set through setCheckedState', () => {
    const { result } = renderHook(() => useTree());
    act(() => result.current.initialize(data));
    act(() => result.current.setCheckedState(['src/components']));

    expect(result.current.isNodeChecked('src/components/Button.tsx')).toBe(true);
    expect(result.current.isNodeIndeterminate('src')).toBe(true);

    act(() => result.current.uncheckNode('src/components'));
    expect(result.current.getCheckedState()).toStrictEqual([]);
  });

  it('cascades a parent passed as controlled checkedState', () => {
    const onCheckedStateChange = jest.fn();
    const { result } = renderHook(() => useTree({ checkedState: ['src'], onCheckedStateChange }));
    act(() => result.current.initialize(data));

    expect(result.current.isNodeChecked('src/hooks/use-state.ts')).toBe(true);
    expect(result.current.isNodeChecked('src')).toBe(true);

    act(() => result.current.uncheckNode('src/components/Button.tsx'));
    expect(onCheckedStateChange).toHaveBeenLastCalledWith([
      'src/components/Input.tsx',
      'src/hooks/use-state.ts',
    ]);
  });

  it('unchecks a checked value that the current data does not contain', () => {
    const { result } = renderHook(() => useTree({ initialCheckedState: ['package.json'] }));
    act(() => result.current.initialize(filterTreeData(data, 'Button')));
    act(() => result.current.uncheckNode('package.json'));
    expect(result.current.getCheckedState()).toStrictEqual([]);
  });
});

describe('@mantine/core/Tree/use-tree controlled chaining', () => {
  it('composes consecutive calls on controlled state', () => {
    const onExpandedStateChange = jest.fn();
    const { result } = renderHook(() => useTree({ expandedState: {}, onExpandedStateChange }));

    act(() => {
      result.current.expand('a');
      result.current.expand('b');
      expect(result.current.getExpandedState()).toStrictEqual({ a: true, b: true });
    });

    expect(onExpandedStateChange).toHaveBeenLastCalledWith({ a: true, b: true });
  });

  it('returns the controlled value after the parent rejects the change', async () => {
    const { result } = renderHook(() => useTree({ expandedState: {}, checkedState: [] }));
    act(() => result.current.initialize(data));

    await act(async () => {
      result.current.expand('src');
      result.current.checkNode('package.json');
    });

    expect(result.current.getExpandedState()).toStrictEqual({});
    expect(result.current.getCheckedState()).toStrictEqual([]);
  });
});

describe('@mantine/core/Tree/use-tree controlled chaining outside of events', () => {
  const wait = () => new Promise((resolve) => setTimeout(resolve, 20));
  let previousActEnvironment: unknown;

  beforeEach(() => {
    previousActEnvironment = (globalThis as any).IS_REACT_ACT_ENVIRONMENT;
    (globalThis as any).IS_REACT_ACT_ENVIRONMENT = false;
  });

  afterEach(() => {
    (globalThis as any).IS_REACT_ACT_ENVIRONMENT = previousActEnvironment;
  });

  const asyncData: TreeNodeData[] = [
    {
      label: 'src',
      value: 'src',
      children: [{ label: 'c', value: 'src/c', hasChildren: true }],
    },
  ];

  function renderControlled(acceptChanges: boolean) {
    const store: { tree: UseTreeReturnType | null; renders: number } = { tree: null, renders: 0 };

    function Parent() {
      const [expandedState, setExpandedState] = useState<TreeExpandedState>({});
      store.renders += 1;
      store.tree = useTree({
        expandedState,
        onExpandedStateChange: acceptChanges ? setExpandedState : undefined,
        onLoadChildren: () => Promise.resolve(),
      });
      return null;
    }

    const root = createRoot(document.createElement('div'));
    root.render(createElement(Parent));
    return { store, root };
  }

  it('composes calls separated by an await when the parent renders later', async () => {
    const { store, root } = renderControlled(true);
    await wait();
    store.tree!.initialize(asyncData);
    await wait();

    await store.tree!.loadNode('src');
    store.tree!.expand('src');
    await store.tree!.loadNode('src/c');
    store.tree!.expand('src/c');
    expect(store.tree!.getExpandedState()).toStrictEqual({ src: true, 'src/c': true });

    await wait();
    expect(store.tree!.getExpandedState()).toStrictEqual({ src: true, 'src/c': true });
    expect(store.tree!.expandedState).toStrictEqual({ src: true, 'src/c': true });
    root.unmount();
  });

  it('returns the controlled value once a parent that ignores the change has rendered', async () => {
    const { store, root } = renderControlled(false);
    await wait();

    store.tree!.expand('src');
    await Promise.resolve();
    store.tree!.expand('src/c');
    expect(store.tree!.getExpandedState()).toStrictEqual({ src: true, 'src/c': true });

    await wait();
    expect(store.tree!.getExpandedState()).toStrictEqual({});
    root.unmount();
  });
});

describe('@mantine/core/Tree/use-tree invalidateNode', () => {
  const asyncData: TreeNodeData[] = [{ label: 'Documents', value: 'documents', hasChildren: true }];
  const loadedData = mergeAsyncChildren(asyncData, 'documents', [
    { label: 'a.txt', value: 'documents/a.txt' },
  ]);

  it('re-fetches an invalidated node on the next expand', async () => {
    const onLoadChildren = jest.fn(() => Promise.resolve());
    const { result } = renderHook(() => useTree({ onLoadChildren }));
    act(() => result.current.initialize(asyncData));

    await act(async () => {
      result.current.expand('documents');
    });
    act(() => result.current.initialize(loadedData));

    act(() => result.current.invalidateNode('documents'));
    act(() => result.current.collapse('documents'));
    await act(async () => {
      result.current.expand('documents');
    });

    expect(onLoadChildren).toHaveBeenCalledTimes(2);
  });

  it('re-fetches a node invalidated while it was loading', async () => {
    let resolveLoad = () => {};
    const onLoadChildren = jest.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveLoad = resolve;
        })
    );
    const { result } = renderHook(() => useTree({ onLoadChildren }));
    act(() => result.current.initialize(asyncData));

    act(() => result.current.expand('documents'));
    act(() => result.current.invalidateNode('documents'));
    await act(async () => {
      resolveLoad();
    });
    act(() => result.current.initialize(loadedData));

    act(() => result.current.collapse('documents'));
    await act(async () => {
      result.current.expand('documents');
    });

    expect(onLoadChildren).toHaveBeenCalledTimes(2);
  });
});
