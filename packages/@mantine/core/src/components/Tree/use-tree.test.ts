import { act, renderHook } from '@testing-library/react';
import type { TreeNodeData } from './Tree';
import { getTreeExpandedState, useTree } from './use-tree';

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

    it('respects multiple option', () => {
      const { result } = renderHook(() => useTree({ multiple: true }));
      expect(result.current.multiple).toBe(true);
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

    it('toggleSelected returns new selection value in single mode', () => {
      const { result } = renderHook(() => useTree());
      let returnValue: unknown;

      act(() => {
        returnValue = result.current.toggleSelected('src');
      });
      expect(returnValue).toEqual(['src']);
      expect(result.current.anchorNode).toBe('src');
    });

    it('toggleSelected returns empty array when deselecting in single mode', () => {
      const { result } = renderHook(() => useTree({ initialSelectedState: ['src'] }));
      let returnValue: unknown;

      act(() => {
        returnValue = result.current.toggleSelected('src');
      });
      expect(returnValue).toEqual([]);
      expect(result.current.anchorNode).toBe(null);
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

    it('toggleSelected returns filtered array when deselecting in multiple mode', () => {
      const { result } = renderHook(() => useTree({ multiple: true }));
      let returnValue: unknown;

      act(() => result.current.toggleSelected('src'));
      act(() => result.current.toggleSelected('package.json'));

      act(() => {
        returnValue = result.current.toggleSelected('src');
      });

      expect(returnValue).toEqual(['package.json']);
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
});
